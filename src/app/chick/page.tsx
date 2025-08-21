'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Zdog: {
      Illustration: new (options: Record<string, unknown>) => {
        rotate: { y: number };
        updateRenderGraph: () => void;
      };
      Shape: new (options: Record<string, unknown>) => unknown;
      Cone: new (options: Record<string, unknown>) => unknown;
      Ellipse: new (options: Record<string, unknown>) => {
        copy: (options: Record<string, unknown>) => unknown;
      };
      Group: new (options: Record<string, unknown>) => unknown;
      Cylinder: new (options: Record<string, unknown>) => unknown;
    };
  }
}

export default function ChickPage() {
  useEffect(() => {
    // Load Zdog library
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/zdog@1/dist/zdog.dist.min.js';
    script.onload = () => {
      if (typeof window !== 'undefined' && window.Zdog) {
        initializeAnimation();
      }
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.head.removeChild(script);
    };
  }, []);

  const initializeAnimation = () => {
    const PI = Math.PI;

    // Responsive canvas size
    const isMobile = window.innerWidth < 640;
    const canvasSize = isMobile ? 280 : 400;
    const zoomLevel = isMobile ? 2 : 3;

    const illo = new window.Zdog.Illustration({
      element: '.zdog-canvas',
      zoom: zoomLevel,
      dragRotate: true,
    });

    // circle
    new window.Zdog.Shape({
      addTo: illo,
      stroke: 60,
      translate: { z: -20 },
      fill: true,
      color: '#C9C232',
    });

    // cone
    new window.Zdog.Cone({
      addTo: illo,
      diameter: 20,
      length: 30,
      stroke: false,
      color: '#E69112',
      backface: '#000000',
    });

    // left eye
    const eye = new window.Zdog.Ellipse({
      addTo: illo,
      diameter: 5,
      quarters: 2,
      stroke: 2,
      color: '#000000',
      translate: { x: 15, y: -10 },
      rotate: { x: PI / 6, y: -PI / 7, z: PI / 2 },
    });

    // right eye
    eye.copy({
      rotate: { x: PI / 6, y: PI / 7, z: PI / 2 },
      translate: { x: -15, y: -10 },
    });

    // monocle
    const monocle = new window.Zdog.Group({
      addTo: illo,
      translate: { x: 15, y: -10, z: 5 },
    });

    // monocle frame
    new window.Zdog.Ellipse({
      addTo: monocle,
      diameter: 15,
      color: '#093F96',
    });

    // monocle string
    new window.Zdog.Shape({
      addTo: monocle,
      path: [
        { x: 7.5, y: 0 },
        {
          bezier: [
            { x: 20, y: 0 },
            { x: 20, y: 60 },
            { x: 14, y: 15, z: -20 },
          ],
        },
      ],
      closed: false,
      color: '#404040',
    });

    // hat
    const topHat = new window.Zdog.Group({
      addTo: illo,
      rotate: { x: PI / 2 },
      translate: { y: -50, z: -20 },
    });

    // hat flap
    new window.Zdog.Cylinder({
      addTo: topHat,
      diameter: 60,
      translate: { z: -17.5 },
      color: '#1f1f1f',
      backface: '#020202',
    });

    // hat body
    new window.Zdog.Cylinder({
      addTo: topHat,
      diameter: 40,
      length: 35,
      stroke: false,
      color: '#1F1F1F',
      backface: '#020202',
    });

    // hat stripe
    new window.Zdog.Cylinder({
      addTo: topHat,
      diameter: 40,
      length: 7,
      translate: { z: -13 },
      stroke: false,
      color: '#B82C2C',
      backface: '#1F1F1F',
    });

    function animate() {
      illo.rotate.y += 0.03;
      illo.updateRenderGraph();
      requestAnimationFrame(animate);
    }

    animate();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-8">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-serif italic tracking-wide">
          take him seriously.
        </h1>
      </div>
      
      <div className="p-4 sm:p-8">
        <canvas 
          className="zdog-canvas cursor-grab active:cursor-grabbing" 
          width="280" 
          height="280"
          style={{
            width: 'min(280px, calc(100vw - 2rem))',
            height: 'min(280px, calc(100vw - 2rem))',
          }}
        />
      </div>
      
      <style jsx>{`
        @media (min-width: 640px) {
          .zdog-canvas {
            width: 400px !important;
            height: 400px !important;
          }
        }
      `}</style>

    </div>
  );
} 