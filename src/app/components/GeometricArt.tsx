interface GeometricArtProps {
  variant?: 'sidebar' | 'bottom';
}

// Quarter circle cell component to maintain aspect ratio
function QuarterCircleCell({ 
  color, 
  position 
}: { 
  color: string; 
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}) {
  const positionClasses = {
    'top-left': 'top-0 left-0 rounded-br-full',
    'top-right': 'top-0 right-0 rounded-bl-full',
    'bottom-left': 'bottom-0 left-0 rounded-tr-full',
    'bottom-right': 'bottom-0 right-0 rounded-tl-full',
  };

  return (
    <div className="relative bg-gray-50 overflow-hidden aspect-square">
      <div className={`absolute ${positionClasses[position]} w-full h-full ${color}`}></div>
    </div>
  );
}

export default function GeometricArt({ variant = 'sidebar' }: GeometricArtProps) {
  // Base pattern optimized for 1440px (3 cols x 4 rows = 12 cells)
  const basePattern = [
    { color: 'bg-gray-900', position: 'top-left' as const },
    { color: 'bg-red-600', position: 'top-right' as const },
    { color: 'bg-blue-700', position: 'top-right' as const },
    { color: 'bg-red-600', position: 'bottom-left' as const },
    { color: 'bg-yellow-500', position: 'top-left' as const },
    { color: 'bg-gray-900', position: 'bottom-right' as const },
    { color: 'bg-blue-700', position: 'top-right' as const },
    { color: 'bg-blue-700', position: 'bottom-left' as const },
    { color: 'bg-yellow-500', position: 'top-right' as const },
    { color: 'bg-red-600', position: 'top-left' as const },
    { color: 'bg-gray-900', position: 'bottom-left' as const },
    { color: 'bg-yellow-500', position: 'top-right' as const },
  ];

  // Extended pattern for larger screens (4K) - repeat pattern with variation
  const extendedPattern = [
    ...basePattern,
    { color: 'bg-blue-700', position: 'bottom-right' as const },
    { color: 'bg-yellow-500', position: 'top-left' as const },
    { color: 'bg-red-600', position: 'bottom-left' as const },
    { color: 'bg-gray-900', position: 'top-right' as const },
    { color: 'bg-yellow-500', position: 'bottom-left' as const },
    { color: 'bg-blue-700', position: 'top-left' as const },
  ];

  // Reduced pattern for smaller screens
  const reducedPattern = basePattern.slice(0, 6);

  return (
    <div className="w-full">
      {/* Mobile: 2 cols x 3 rows */}
      <div className="grid grid-cols-2 grid-rows-3 gap-0 sm:hidden">
        {reducedPattern.map((item, index) => (
          <QuarterCircleCell key={index} color={item.color} position={item.position} />
        ))}
      </div>

      {/* Tablet: 3 cols x 3 rows */}
      <div className="hidden sm:grid md:hidden grid-cols-3 grid-rows-3 gap-0">
        {basePattern.slice(0, 9).map((item, index) => (
          <QuarterCircleCell key={index} color={item.color} position={item.position} />
        ))}
      </div>

      {/* Desktop (up to 1440px): 3 cols x 4 rows - perfect size */}
      <div className="hidden md:grid grid-cols-3 grid-rows-4 gap-0">
        {basePattern.map((item, index) => (
          <QuarterCircleCell key={index} color={item.color} position={item.position} />
        ))}
      </div>
    </div>
  );
} 