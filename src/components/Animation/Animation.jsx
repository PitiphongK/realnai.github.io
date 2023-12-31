import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import bg_anim from "./bg-anim.json";

const Animation = ({ containerRef }) => {
  const svgAnimRef = useRef(null);

  useEffect(() => {
    const loadAnimation = async () => {
      lottie.loadAnimation({
        container: svgAnimRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './src/components/Animation/bg-anim.json',
      });
    };

    loadAnimation();

    return () => {
      if (svgAnimRef.current) {
        lottie.destroy(svgAnimRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={svgAnimRef}
      style={{
        position: 'absolute',
        width: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
};

export default Animation;
