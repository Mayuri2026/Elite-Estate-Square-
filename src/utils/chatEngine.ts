import type { Property } from '../data/properties';
import { properties } from '../data/properties';

// =====================================================
// ELITE ESTATE SQUAD — INTELLIGENT CHAT ENGINE
// =====================================================
// This engine processes natural language customer queries
// and responds with real property data from the inventory.
// It covers 15+ intent categories based on real estate
// market research for pre-purchase customer behavior.
// =====================================================

// --- Helpers ---

/** Extract a numeric dollar value from a price string like "$15,000,000" */
function parsePriceToNumber(priceStr: string): number {
  return parseInt(priceStr.replace(/[$,]/g, ''), 10);
}

/** Extract sq ft number from area string like "12,000 sq ft" */
function parseAreaToNumber(areaStr: string): number {
  return parseInt(areaStr.replace(/[, sq ft]/g, ''), 10);
}

/** Format a number as a price string */
function formatPrice(num: number): string {
  return '$' + num.toLocaleString();
}

/** Format a single property into a readable chat card */
function formatPropertyCard(p: Property): string {
  return `🏠 **${p.title}**\n📍 ${p.location}\n🏷️ Type: ${p.type}\n💰 Price: ${p.price}\n🛏️ ${p.beds} Beds | 🚿 ${p.baths} Baths | 📐 ${p.area}\n⭐ Amenities: ${p.amenities.slice(0, 3).join(', ')}\n👤 Agent: ${p.agent.name} (${p.agent.role})`;
}

/** Format a short summary of a property */
function formatPropertyShort(p: Property): string {
  return `• ${p.title} — ${p.price} — ${p.location} (${p.beds} beds, ${p.area})`;
}

// --- Intent Detection ---

interface Intent {
  type: string;
  confidence: number;
  params: Record<string, string | number>;
}

function detectIntent(input: string): Intent {
  const lower = input.toLowerCase().trim();

  // --- Greeting ---
  if (/^(hi|hey|hello|howdy|greetings|good\s*(morning|afternoon|evening)|sup|yo|hola)\b/.test(lower)) {
    return { type: 'greeting', confidence: 1, params: {} };
  }

  // --- Thank you ---
  if (/\b(thank|thanks|thx|ty|tysm|appreciate)\b/.test(lower)) {
    return { type: 'thanks', confidence: 1, params: {} };
  }

  // --- Goodbye ---
  if (/\b(bye|goodbye|see\s*ya|later|cya|farewell)\b/.test(lower)) {
    return { type: 'goodbye', confidence: 1, params: {} };
  }

  // --- "How to buy" / buying process ---
  if (/\b(how\s*(to|do\s*i|can\s*i)\s*buy|buying\s*process|purchase\s*process|steps\s*to\s*buy|procedure)\b/.test(lower)) {
    return { type: 'buying_process', confidence: 0.95, params: {} };
  }

  // --- Schedule / Visit ---
  if (/\b(schedule|book|visit|tour|viewing|appointment|walkthrough|show\s*me\s*around)\b/.test(lower)) {
    return { type: 'schedule_visit', confidence: 0.9, params: {} };
  }

  // --- Contact / Talk to agent ---
  if (/\b(contact|reach|call|phone|email|talk\s*to|speak\s*to|connect|agent|broker|liaison)\b/.test(lower)) {
    return { type: 'contact_info', confidence: 0.9, params: {} };
  }

  // --- Services ---
  if (/\b(service|what\s*do\s*you\s*(do|offer)|concierge|relocation|investment\s*consult|architectural)\b/.test(lower)) {
    return { type: 'services', confidence: 0.85, params: {} };
  }

  // --- Specific property by name ---
  for (const p of properties) {
    if (lower.includes(p.title.toLowerCase())) {
      return { type: 'specific_property', confidence: 1, params: { title: p.title } };
    }
  }

  // --- Agent info ---
  for (const p of properties) {
    if (lower.includes(p.agent.name.toLowerCase())) {
      return { type: 'agent_info', confidence: 0.95, params: { agentName: p.agent.name } };
    }
  }

  // --- Cheapest / Most affordable ---
  if (/\b(cheap|affordable|lowest\s*price|least\s*expensive|budget|most\s*affordable|minimum\s*price|lowest\s*cost)\b/.test(lower)) {
    return { type: 'cheapest', confidence: 0.95, params: {} };
  }

  // --- Most expensive / Premium ---
  if (/\b(expensive|premium|highest\s*price|most\s*costly|luxury|top\s*tier|costliest|priciest)\b/.test(lower)) {
    return { type: 'most_expensive', confidence: 0.95, params: {} };
  }

  // --- Largest / Biggest ---
  if (/\b(largest|biggest|most\s*space|maximum\s*area|spacious|huge|massive)\b/.test(lower)) {
    return { type: 'largest', confidence: 0.95, params: {} };
  }

  // --- Smallest ---
  if (/\b(smallest|compact|cozy|tiny|minimum\s*area|least\s*space)\b/.test(lower)) {
    return { type: 'smallest', confidence: 0.95, params: {} };
  }

  // --- Budget/Price Range ---
  // patterns: "under 10m", "below $15 million", "between 5m and 20m", "under 10000000"
  const underMatch = lower.match(/\b(under|below|less\s*than|within|max|upto|up\s*to|budget\s*(of|is)?)\s*\$?\s*(\d+(?:\.\d+)?)\s*(m|million|mil|mn|k|thousand|b|billion)?/);
  if (underMatch) {
    let amount = parseFloat(underMatch[3]);
    const unit = underMatch[4];
    if (unit === 'm' || unit === 'million' || unit === 'mil' || unit === 'mn') amount *= 1_000_000;
    else if (unit === 'k' || unit === 'thousand') amount *= 1_000;
    else if (unit === 'b' || unit === 'billion') amount *= 1_000_000_000;
    else if (amount < 1000) amount *= 1_000_000; // assume millions if small number
    return { type: 'budget_under', confidence: 0.95, params: { maxPrice: amount } };
  }

  const aboveMatch = lower.match(/\b(above|over|more\s*than|at\s*least|minimum|starting\s*from|from)\s*\$?\s*(\d+(?:\.\d+)?)\s*(m|million|mil|mn|k|thousand|b|billion)?/);
  if (aboveMatch) {
    let amount = parseFloat(aboveMatch[2]);
    const unit = aboveMatch[3];
    if (unit === 'm' || unit === 'million' || unit === 'mil' || unit === 'mn') amount *= 1_000_000;
    else if (unit === 'k' || unit === 'thousand') amount *= 1_000;
    else if (unit === 'b' || unit === 'billion') amount *= 1_000_000_000;
    else if (amount < 1000) amount *= 1_000_000;
    return { type: 'budget_above', confidence: 0.95, params: { minPrice: amount } };
  }

  // --- Price range query (general) ---
  if (/\b(price|cost|how\s*much|pricing|rate|value|worth)\b/.test(lower) && !/\b(range|list)\b/.test(lower)) {
    return { type: 'price_range', confidence: 0.8, params: {} };
  }
  if (/\b(price\s*range|cost\s*range|price\s*list)\b/.test(lower)) {
    return { type: 'price_range', confidence: 0.9, params: {} };
  }

  // --- Bedroom count ---
  const bedMatch = lower.match(/(\d+)\s*(?:\+?\s*)?(?:bed|bedroom|room|bhk|br)\s*/);
  if (bedMatch) {
    const beds = parseInt(bedMatch[1], 10);
    const isMinimum = /\b(at\s*least|minimum|more\s*than|above|over|\+)\b/.test(lower);
    return { type: isMinimum ? 'min_beds' : 'exact_beds', confidence: 0.9, params: { beds } };
  }
  if (/\b(bed|bedroom|room|bhk)\b/.test(lower)) {
    return { type: 'bedroom_query', confidence: 0.7, params: {} };
  }

  // --- Property type ---
  if (/\b(sky\s*villa|skyvilla)s?\b/.test(lower)) {
    return { type: 'property_type', confidence: 0.95, params: { propertyType: 'Sky Villa' } };
  }
  if (/\b(penthouse|pent\s*house)s?\b/.test(lower)) {
    return { type: 'property_type', confidence: 0.95, params: { propertyType: 'Penthouse' } };
  }
  if (/\b(orbital\s*estate|orbital)s?\b/.test(lower)) {
    return { type: 'property_type', confidence: 0.95, params: { propertyType: 'Orbital Estate' } };
  }

  // --- Location ---
  const locations = [
    { keywords: ['neo tokyo', 'tokyo', 'sector 4'], name: 'Neo Tokyo' },
    { keywords: ['lunar', 'moon', 'tranquility', 'sector 9'], name: 'Sea of Tranquility' },
    { keywords: ['new york', 'nyc', 'ny', 'skyline', 'sector 7'], name: 'New York' },
    { keywords: ['mars', 'red basin', 'mars alpha', 'mars colony'], name: 'Mars' },
    { keywords: ['london', 'sky district', 'upper tier'], name: 'London' },
    { keywords: ['asteroid', 'ceres', 'belt', 'sector prime'], name: 'Asteroid Belt' },
  ];

  for (const loc of locations) {
    for (const kw of loc.keywords) {
      if (lower.includes(kw)) {
        return { type: 'location', confidence: 0.95, params: { location: loc.name } };
      }
    }
  }

  // --- Amenity query ---
  const amenityKeywords = ['pool', 'gym', 'security', 'garden', 'telescope', 'shuttle', 'butler', 'landing pad', 'gravity', 'greenhouse', 'terrace', 'elevator', 'lift', 'solar', 'rover', 'shield', 'observation', 'medical', 'holographic', 'smart glass', 'ai'];
  for (const ak of amenityKeywords) {
    if (lower.includes(ak)) {
      return { type: 'amenity', confidence: 0.9, params: { amenity: ak } };
    }
  }

  // --- Area/Size queries ---
  const areaMatch = lower.match(/(\d[\d,]*)\s*(?:sq\s*ft|sqft|square\s*feet|square\s*foot|sf)/);
  if (areaMatch) {
    const area = parseInt(areaMatch[1].replace(/,/g, ''), 10);
    return { type: 'area_filter', confidence: 0.9, params: { area } };
  }
  if (/\b(area|size|sq\s*ft|square\s*feet|floor\s*area|space)\b/.test(lower) && !/\b(largest|smallest)\b/.test(lower)) {
    return { type: 'area_query', confidence: 0.7, params: {} };
  }

  // --- Featured ---
  if (/\b(featured|popular|trending|recommended|hot|best|top)\b/.test(lower)) {
    return { type: 'featured', confidence: 0.85, params: {} };
  }

  // --- List all / Show all ---
  if (/\b(all|list\s*all|show\s*all|every|complete\s*list|full\s*list|total|inventory|available|listings|catalog|catalogue)\b/.test(lower)) {
    return { type: 'list_all', confidence: 0.85, params: {} };
  }

  // --- Compare ---
  if (/\b(compare|difference|vs|versus|comparison)\b/.test(lower)) {
    return { type: 'compare', confidence: 0.8, params: {} };
  }

  // --- Financing / Payment ---
  if (/\b(financ|loan|mortgage|emi|payment\s*plan|installment|down\s*payment)\b/.test(lower)) {
    return { type: 'financing', confidence: 0.9, params: {} };
  }

  // --- Safety / Security ---
  if (/\b(safe|security|secure|protection|biometric|encryption)\b/.test(lower)) {
    return { type: 'safety', confidence: 0.85, params: {} };
  }

  // --- Fallback ---
  return { type: 'unknown', confidence: 0, params: {} };
}

// --- Response Generator ---

export function generateResponse(userInput: string): string {
  const intent = detectIntent(userInput);

  switch (intent.type) {

    case 'greeting':
      return `Welcome to Elite Estate Squad! 🚀 I'm your AI Liaison, here to help you find the perfect property.\n\nYou can ask me about:\n• Property prices & budgets\n• Locations & sectors\n• Number of bedrooms\n• Property types (Sky Villa, Penthouse, Orbital Estate)\n• Amenities (pool, gym, security, etc.)\n• Specific property details\n• Schedule a visit\n\nWhat are you looking for today?`;

    case 'thanks':
      return `You're welcome! 🌟 It's my pleasure to assist you. If you have any more questions about our properties, don't hesitate to ask. Your dream space is just one conversation away!`;

    case 'goodbye':
      return `Farewell, traveler! 🚀 Thank you for exploring with Elite Estate Squad. Remember, we're available 24/7 across all orbital time zones. We hope to welcome you home soon!`;

    case 'buying_process':
      return `Here's how the Elite Estate acquisition process works:\n\n1️⃣ **Explore** — Browse our listings or ask me for recommendations\n2️⃣ **Connect** — Get matched with a specialist Liaison Officer\n3️⃣ **Tour** — Schedule an immersive 3D walkthrough or in-person visit\n4️⃣ **Negotiate** — Our elite brokers handle all terms with quantum-encrypted security\n5️⃣ **Acquire** — Complete the transaction with full legal and logistics support\n6️⃣ **Relocate** — Our concierge team handles your seamless transition\n\nWould you like to start with step 1? Tell me your preferences!`;

    case 'schedule_visit':
      return `I'd love to help you schedule a visit! 📅\n\nTo arrange an immersive tour:\n• 📧 Email: concierge@eliteestatesquad.com\n• 📞 Direct Line: +88 000 111 9999\n• 🌐 Or visit our Contact page\n\nOur Liaison Officers are available 24/7 across all orbital time zones. Would you also like to know more about a specific property before your visit?`;

    case 'contact_info':
      return `Here's how to reach the Elite Estate Squad:\n\n📍 **HQ:** Level 99, Apex Spire, Neo Tokyo, NT 100-0099\n📧 **Email:** concierge@eliteestatesquad.com\n📞 **Phone:** +88 000 111 9999 (24/7 Orbital Time)\n\n**Our Liaison Officers:**\n• Elena Vance — Elite Broker\n• Dr. Julius Aris — Lunar Specialist\n• Sophia Lin — Skyline Expert\n• Marcus Sterling — Mars Ambassador\n\nWho would you like to connect with?`;

    case 'services':
      return `Elite Estate Squad offers these premium services:\n\n🏠 **Elite Buying** — Access to exclusive unlisted properties\n💰 **Premium Selling** — AI-driven valuations & holographic staging\n📈 **Investment Consulting** — Off-world portfolio management\n🏗️ **Architectural Overhauls** — Custom energy fields & zero-G areas\n🚀 **Interstellar Relocation** — Seamless moving logistics\n✨ **Concierge Services** — Post-purchase lifestyle management\n\nWhich service interests you?`;

    case 'specific_property': {
      const prop = properties.find(p => p.title.toLowerCase() === (intent.params.title as string).toLowerCase());
      if (prop) {
        return `Here are the full details:\n\n${formatPropertyCard(prop)}\n\n📝 "${prop.description}"\n\nWould you like to schedule a tour of ${prop.title} or compare it with other properties?`;
      }
      return `I couldn't find that specific property. Let me show you our available listings instead.`;
    }

    case 'agent_info': {
      const agentName = intent.params.agentName as string;
      const agentProps = properties.filter(p => p.agent.name.toLowerCase() === agentName.toLowerCase());
      if (agentProps.length > 0) {
        const agent = agentProps[0].agent;
        const propList = agentProps.map(p => `• ${p.title} (${p.price})`).join('\n');
        return `👤 **${agent.name}** — ${agent.role}\n\nProperties handled:\n${propList}\n\nWould you like to connect with ${agent.name}? Contact us at concierge@eliteestatesquad.com or call +88 000 111 9999.`;
      }
      return `I couldn't find that agent. Our team includes Elena Vance, Dr. Julius Aris, Sophia Lin, and Marcus Sterling. Who would you like to know about?`;
    }

    case 'cheapest': {
      const sorted = [...properties].sort((a, b) => parsePriceToNumber(a.price) - parsePriceToNumber(b.price));
      const cheapest = sorted[0];
      return `Our most affordable property is:\n\n${formatPropertyCard(cheapest)}\n\nHere's the full price ranking (low to high):\n${sorted.map(p => `• ${p.title} — ${p.price}`).join('\n')}\n\nWould you like more details on any of these?`;
    }

    case 'most_expensive': {
      const sorted = [...properties].sort((a, b) => parsePriceToNumber(b.price) - parsePriceToNumber(a.price));
      const topProp = sorted[0];
      return `Our most premium property is:\n\n${formatPropertyCard(topProp)}\n\nHere's the full price ranking (high to low):\n${sorted.map(p => `• ${p.title} — ${p.price}`).join('\n')}\n\nInterested in any of these elite spaces?`;
    }

    case 'largest': {
      const sorted = [...properties].sort((a, b) => parseAreaToNumber(b.area) - parseAreaToNumber(a.area));
      const largest = sorted[0];
      return `Our largest property is:\n\n${formatPropertyCard(largest)}\n\nAll properties by size (largest first):\n${sorted.map(p => `• ${p.title} — ${p.area}`).join('\n')}\n\nWould you like details on the largest one?`;
    }

    case 'smallest': {
      const sorted = [...properties].sort((a, b) => parseAreaToNumber(a.area) - parseAreaToNumber(b.area));
      const smallest = sorted[0];
      return `Our most compact property is:\n\n${formatPropertyCard(smallest)}\n\nAll properties by size (smallest first):\n${sorted.map(p => `• ${p.title} — ${p.area}`).join('\n')}`;
    }

    case 'budget_under': {
      const maxPrice = intent.params.maxPrice as number;
      const matches = properties.filter(p => parsePriceToNumber(p.price) <= maxPrice);
      if (matches.length === 0) {
        return `Unfortunately, we don't have properties under ${formatPrice(maxPrice)}. Our most affordable option is:\n\n${formatPropertyShort([...properties].sort((a, b) => parsePriceToNumber(a.price) - parsePriceToNumber(b.price))[0])}\n\nWould you like to explore a different price range?`;
      }
      return `Found ${matches.length} propert${matches.length === 1 ? 'y' : 'ies'} under ${formatPrice(maxPrice)}:\n\n${matches.map(formatPropertyShort).join('\n')}\n\nWant details on any of these?`;
    }

    case 'budget_above': {
      const minPrice = intent.params.minPrice as number;
      const matches = properties.filter(p => parsePriceToNumber(p.price) >= minPrice);
      if (matches.length === 0) {
        return `We don't currently have properties above ${formatPrice(minPrice)}. Our most premium listing is:\n\n${formatPropertyShort([...properties].sort((a, b) => parsePriceToNumber(b.price) - parsePriceToNumber(a.price))[0])}\n\nWould you like to see that one?`;
      }
      return `Found ${matches.length} propert${matches.length === 1 ? 'y' : 'ies'} above ${formatPrice(minPrice)}:\n\n${matches.map(formatPropertyShort).join('\n')}\n\nWant the full details on any?`;
    }

    case 'price_range': {
      const sorted = [...properties].sort((a, b) => parsePriceToNumber(a.price) - parsePriceToNumber(b.price));
      const lowest = parsePriceToNumber(sorted[0].price);
      const highest = parsePriceToNumber(sorted[sorted.length - 1].price);
      return `Our properties range from ${formatPrice(lowest)} to ${formatPrice(highest)}.\n\nFull price list:\n${sorted.map(p => `• ${p.title} — ${p.price} (${p.type})`).join('\n')}\n\nTell me your budget and I'll find the best match for you!`;
    }

    case 'exact_beds': {
      const beds = intent.params.beds as number;
      const matches = properties.filter(p => p.beds === beds);
      if (matches.length === 0) {
        return `We don't have a property with exactly ${beds} bedrooms. Here's what we have:\n${properties.map(p => `• ${p.title} — ${p.beds} beds`).join('\n')}\n\nWould you like to adjust your requirement?`;
      }
      return `Found ${matches.length} propert${matches.length === 1 ? 'y' : 'ies'} with ${beds} bedrooms:\n\n${matches.map(formatPropertyShort).join('\n')}\n\nWant more details?`;
    }

    case 'min_beds': {
      const beds = intent.params.beds as number;
      const matches = properties.filter(p => p.beds >= beds);
      if (matches.length === 0) {
        const max = Math.max(...properties.map(p => p.beds));
        return `Our largest property has ${max} bedrooms. We don't have properties with ${beds}+ beds.\n\nWould you like to see our ${max}-bedroom option?`;
      }
      return `Found ${matches.length} propert${matches.length === 1 ? 'y' : 'ies'} with ${beds}+ bedrooms:\n\n${matches.map(formatPropertyShort).join('\n')}\n\nAsk me about any of these for full details!`;
    }

    case 'bedroom_query':
      return `Here's a breakdown of all our properties by bedrooms:\n\n${properties.map(p => `• ${p.title} — ${p.beds} bedrooms, ${p.baths} bathrooms`).join('\n')}\n\nHow many bedrooms are you looking for?`;

    case 'property_type': {
      const propType = intent.params.propertyType as string;
      const matches = properties.filter(p => p.type === propType);
      if (matches.length === 0) {
        return `We don't currently have any ${propType} properties. Our available types are: Sky Villa, Penthouse, and Orbital Estate.`;
      }
      return `We have ${matches.length} ${propType} propert${matches.length === 1 ? 'y' : 'ies'}:\n\n${matches.map(formatPropertyShort).join('\n')}\n\nWant me to show you the details of any?`;
    }

    case 'location': {
      const loc = intent.params.location as string;
      const matches = properties.filter(p => p.location.toLowerCase().includes(loc.toLowerCase()));
      if (matches.length === 0) {
        return `We don't currently have listings in ${loc}. Our available locations are:\n${[...new Set(properties.map(p => '• 📍 ' + p.location))].join('\n')}\n\nWhich sector interests you?`;
      }
      return `Found ${matches.length} propert${matches.length === 1 ? 'y' : 'ies'} in ${loc}:\n\n${matches.map(formatPropertyShort).join('\n')}\n\nWant the full breakdown of any?`;
    }

    case 'amenity': {
      const amenity = intent.params.amenity as string;
      const matches = properties.filter(p =>
        p.amenities.some(a => a.toLowerCase().includes(amenity.toLowerCase()))
      );
      if (matches.length === 0) {
        return `None of our current listings specifically mention "${amenity}" as an amenity. Here are some popular amenities across our portfolio:\n\n${[...new Set(properties.flatMap(p => p.amenities))].slice(0, 12).map(a => `• ${a}`).join('\n')}\n\nAsk me about any of these!`;
      }
      return `Found ${matches.length} propert${matches.length === 1 ? 'y' : 'ies'} with "${amenity}":\n\n${matches.map(p => `• ${p.title} — ${p.price} — Has: ${p.amenities.filter(a => a.toLowerCase().includes(amenity)).join(', ')}`).join('\n')}\n\nWant details on any?`;
    }

    case 'area_filter': {
      const area = intent.params.area as number;
      const matches = properties.filter(p => parseAreaToNumber(p.area) >= area);
      if (matches.length === 0) {
        return `No properties found with ${area.toLocaleString()}+ sq ft. Our largest is:\n\n${formatPropertyShort([...properties].sort((a, b) => parseAreaToNumber(b.area) - parseAreaToNumber(a.area))[0])}\n\nWant details?`;
      }
      return `Found ${matches.length} propert${matches.length === 1 ? 'y' : 'ies'} with ${area.toLocaleString()}+ sq ft:\n\n${matches.map(formatPropertyShort).join('\n')}`;
    }

    case 'area_query':
      return `Here's our portfolio by size:\n\n${[...properties].sort((a, b) => parseAreaToNumber(b.area) - parseAreaToNumber(a.area)).map(p => `• ${p.title} — ${p.area}`).join('\n')}\n\nWhat size are you looking for?`;

    case 'featured': {
      const featured = properties.filter(p => p.featured);
      return `🌟 Our featured/recommended properties:\n\n${featured.map(formatPropertyShort).join('\n')}\n\nThese are our hottest listings right now! Want details on any?`;
    }

    case 'list_all':
      return `Here's our complete inventory of ${properties.length} properties:\n\n${properties.map(formatPropertyShort).join('\n')}\n\nAsk about any specific property for full details, or filter by budget, location, type, or bedrooms!`;

    case 'compare':
      return `Here's a quick comparison of all properties:\n\n${properties.map(p => `🏠 ${p.title}\n   💰 ${p.price} | 🛏️ ${p.beds} beds | 📐 ${p.area} | 📍 ${p.location}`).join('\n\n')}\n\nWant me to compare any two specific properties?`;

    case 'financing':
      return `We offer flexible acquisition options:\n\n💳 **Standard Purchase** — Full payment with quantum-encrypted security\n🏦 **Structured Financing** — Custom payment plans available through our partner institutions\n📊 **Investment Package** — Portfolio-grade acquisition with ROI optimization\n\nFor personalized financing details, please contact our team:\n📧 concierge@eliteestatesquad.com\n📞 +88 000 111 9999\n\nWould you like to know the price of a specific property?`;

    case 'safety':
      return `Security is paramount at Elite Estate Squad. Every property includes:\n\n🔐 **Quantum-encrypted** biometric entry protocols\n🛡️ **Orbital drone** surveillance grids\n👁️ **24/7 monitoring** across all time zones\n🏗️ **Structural integrity** verified by tri-redundant systems\n\nSpecific property security features:\n${properties.map(p => {
        const securityAmenities = p.amenities.filter(a => /security|shield|vault|secure|encrypt|biometric|protection/i.test(a));
        return securityAmenities.length > 0 ? `• ${p.title}: ${securityAmenities.join(', ')}` : null;
      }).filter(Boolean).join('\n')}\n\nFeel safe? Want to explore a specific property?`;

    case 'unknown':
    default:
      return `I appreciate your question! While I'm not sure I fully understood, here's what I can help with:\n\n🔍 **Search** — "Show me properties under $20M"\n📍 **Location** — "Properties in London"\n🛏️ **Rooms** — "I need 4+ bedrooms"\n🏠 **Type** — "Show me all penthouses"\n⭐ **Amenities** — "Which properties have a pool?"\n💰 **Budget** — "What's the cheapest property?"\n📋 **Details** — "Tell me about Skyborne Villa"\n📅 **Visit** — "Schedule a tour"\n\nTry rephrasing your question, or pick one of the options above!`;
  }
}
