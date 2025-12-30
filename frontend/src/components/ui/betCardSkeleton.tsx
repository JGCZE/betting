const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-500/50 rounded ${className}`} />
);

const BetCardSkeleton = () => (
  <div className="h-full p-4 flex flex-col gap-4 bg-gray-700 rounded-2xl border-2 border-gray-600">

    <Skeleton className="h-7 w-3/4 mb-2" />

    <div className="mt-auto flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-24" />
      </div>

      <div className="flex justify-between items-center">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-28" />
      </div>

      <div className="flex justify-between items-center">
        <Skeleton className="h-4 w-14" />
        <Skeleton className="h-4 w-10" />
      </div>

      <div className="flex justify-between items-center">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  </div>
);


export default BetCardSkeleton;
