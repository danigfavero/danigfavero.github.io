interface GeometricArtProps {
  variant?: 'sidebar' | 'bottom';
}

export default function GeometricArt({ variant = 'sidebar' }: GeometricArtProps) {
  const heightClass = variant === 'bottom' 
    ? 'h-[40vh] sm:h-[50vh]' 
    : 'h-[60vh] sm:h-[70vh] lg:h-[80vh]';

  return (
    <div className={`w-full ${heightClass} grid grid-cols-3 grid-rows-4 gap-0`}>
      {/* Row 1 */}
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 rounded-br-full"></div>
      </div>
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-red-600 rounded-bl-full"></div>
      </div>
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-blue-700 rounded-bl-full"></div>
      </div>

      {/* Row 2 */}
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-full bg-red-600 rounded-tr-full"></div>
      </div>
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-yellow-500 rounded-br-full"></div>
      </div>
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gray-900 rounded-tl-full"></div>
      </div>

      {/* Row 3 */}
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-blue-700 rounded-bl-full"></div>
      </div>
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-full bg-blue-700 rounded-tr-full"></div>
      </div>
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-yellow-500 rounded-bl-full"></div>
      </div>

      {/* Row 4 */}
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-red-600 rounded-br-full"></div>
      </div>
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gray-900 rounded-tr-full"></div>
      </div>
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-yellow-500 rounded-bl-full"></div>
      </div>
    </div>
  );
} 