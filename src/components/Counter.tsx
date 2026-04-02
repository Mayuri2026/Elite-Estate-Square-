import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
}

const Counter = ({ from, to, duration = 2, suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = from;
    const end = to;
    const totalSteps = duration * 60;
    const stepValue = (end - start) / totalSteps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      start += stepValue;
      setCount(Math.floor(start));

      if (currentStep >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [from, to, duration, isInView]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

export default Counter;
