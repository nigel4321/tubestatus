import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <Card key={i}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Skeleton className="h-8 w-24" />
              </div>
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-16" />
                <Skeleton className="h-4 w-8" />
                <Skeleton className="h-10 w-16" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-8 w-3/4" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
