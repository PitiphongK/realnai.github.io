import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const Animation = ({ containerRef }) => {
  const svgAnimRef = useRef(null);

  useEffect(() => {
    const loadAnimation = async () => {
      lottie.loadAnimation({
        container: svgAnimRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/myWeb/bg-anim.json',
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
