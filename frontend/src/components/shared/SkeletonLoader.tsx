export const SkeletonLoader = () => {
  return (
    <div className="border p-4 mt-4 bg-gray-50 space-y-4 animate-pulse">
      <div className="h-6 w-1/3 bg-gray-300 rounded"></div>
      
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="h-4 w-full bg-gray-200 rounded"></div>
      ))}
    </div>
  );
};
