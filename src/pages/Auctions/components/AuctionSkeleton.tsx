import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export const CardSkeleton = () => {
  return (
    <Card className="h-[130px] w-full flex bg-slate-50 mb-2">
      <div className="block h-[128px] w-full max-w-[217px]">
        <Skeleton className="h-full w-full rounded-tl-lg rounded-bl-lg" />
      </div>
      <div className="flex-grow p-3">
        <h1 className="text-primary font-medium text-2xl">
          <Skeleton className="w-3/4 h-6" />
        </h1>
        <div className="text-sm flex justify-between gap-12 mt-2">
          <div className="flex flex-col">
            <div className="space-y-2">
              <div className="flex gap-2">
                <span>
                  <Skeleton className="w-20 h-4" />
                </span>
                <Skeleton className="w-16 h-4" />
              </div>
              <div>
                <Skeleton className="w-28 h-4" />
              </div>
              <div>
                <Skeleton className="w-24 h-4" />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="space-y-2">
              <Skeleton className="w-32 h-4" />
              <Skeleton className="w-16 h-8" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
