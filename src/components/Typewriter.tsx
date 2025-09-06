import React, { useState, useEffect } from "react";

interface TypewriterProps {
  delay?: number;
  className?: string;
  children: string;
  onComplete?: () => void;
}

const Typewriter: React.FC<TypewriterProps> = ({ children, delay = 100, className, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < children.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + children[index]);
        setIndex(index + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [index, children, delay, onComplete]);

  return <h1 className={className}>{displayedText}</h1>;
};

export default Typewriter;
