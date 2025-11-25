import { ArrowRight, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface JourneyHeaderProps {
  from: string;
  to: string;
  lastUpdated?: Date;
  onRefresh?: () => void;
  isRefreshing?: boolean;
}

export default function JourneyHeader({
  from,
  to,
  lastUpdated,
  onRefresh,
  isRefreshing = false,
}: JourneyHeaderProps) {
  return (
    <header className="border-b bg-card">
      <div className="max-w-2xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-destructive" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-base font-semibold flex items-center gap-2 flex-wrap">
                <span className="truncate">{from}</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{to}</span>
              </h1>
              {lastUpdated && (
                <p className="text-xs text-muted-foreground mt-0.5">
                  Updated {lastUpdated.toLocaleTimeString()}
                </p>
              )}
            </div>
          </div>
          <Button
            size="icon"
            variant="ghost"
            onClick={onRefresh}
            disabled={isRefreshing}
            data-testid="button-refresh"
            className="flex-shrink-0"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
          </Button>
        </div>
      </div>
    </header>
  );
}
