'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Zdog: any;
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

    let illo = new window.Zdog.Illustration({
      element: '.zdog-canvas',
      zoom: 3,
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
    let eye = new window.Zdog.Ellipse({
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
    var monocle = new window.Zdog.Group({
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
    var topHat = new window.Zdog.Group({
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white mb-4 font-serif italic tracking-wide">
          take him seriously.
        </h1>
      </div>
      
      <div className="p-8">
        <canvas 
          className="zdog-canvas cursor-grab active:cursor-grabbing" 
          width="400" 
          height="400"
        />
      </div>
      

    </div>
  );
} 