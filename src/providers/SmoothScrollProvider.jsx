import React, { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";

export function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    function update(time) {
      // Safely access the internal lenis instance and advance the frame
      lenisRef.current?.lenis?.raf(time);
      animationFrameId = requestAnimationFrame(update);
    }

    // Start the continuous render loop
    animationFrameId = requestAnimationFrame(update);

    // Clean up frame listener on unmount
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      autoRaf={false} // Prevents double RAF loops since requestAnimationFrame is running manually
      options={{
        lerp: 0.1, // Smoothness intensity (lower = smoother)
        duration: 1.2, // Scroll duration
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrollProvider;