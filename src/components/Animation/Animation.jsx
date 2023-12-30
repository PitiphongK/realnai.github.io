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
        path: '/assets/bg-anim.json',
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
      className='anim'
      style={{
        position: 'absolute',
        top: 'auto',
        bottom: 0,
        width: '108vh',
        height: '120vh',
        pointerEvents: 'none',
      }}
    />
  );
};

export default Animation;
