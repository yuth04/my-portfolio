import { useState, useEffect, useRef } from "react";

export function useTypewriter(words = [], typeSpeed = 80, deleteSpeed = 40, delay = 2000) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Keep a stable ref to words to prevent effect teardowns on every re-render
  const wordsRef = useRef(words);

  useEffect(() => {
    wordsRef.current = words;
  }, [words]);

  // Handle language/words array changes smoothly
  useEffect(() => {
    setIndex(0);
    setDisplayedText("");
    setIsDeleting(false);
  }, [words.join(",")]);

  useEffect(() => {
    const currentWords = wordsRef.current;
    if (!currentWords || currentWords.length === 0) return;

    const safeIndex = index % currentWords.length;
    const currentWord = currentWords[safeIndex] || "";

    let timeout;

    if (!isDeleting && displayedText === currentWord) {
      // Pause at full word completion before deleting
      timeout = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && displayedText === "") {
      // Move to next word when deleted completely
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % currentWords.length);
    } else {
      // Smooth character step using Array.from to handle multi-byte characters cleanly
      const targetLength = Array.from(displayedText).length + (isDeleting ? -1 : 1);
      
      timeout = setTimeout(() => {
        setDisplayedText(Array.from(currentWord).slice(0, targetLength).join(""));
      }, isDeleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, index, isDeleting, typeSpeed, deleteSpeed, delay]);

  return displayedText;
}