import { ArrowRight, Train, User } from "lucide-react";
import LineBadge from "./LineBadge";

interface JourneyLegProps {
  mode: "tube" | "walking";
  lineName?: string;
  direction?: string;
  from: string;
  to: string;
  duration: number;
  stops?: number;
  distance?: number;
}

export default function JourneyLeg({
  mode,
  lineName,
  direction,
  from,
  to,
  duration,
  stops,
  distance,
}: JourneyLegProps) {
  return (
    <div className="flex gap-3" data-testid={`leg-${mode}`}>
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
        {mode === "tube" ? (
          <Train className="w-4 h-4 text-foreground" />
        ) : (
          <User className="w-4 h-4 text-muted-foreground" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        {mode === "tube" && lineName && (
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <LineBadge lineName={lineName} />
            {direction && (
              <span className="text-sm text-muted-foreground">
                towards {direction}
              </span>
            )}
          </div>
        )}
        <div className="flex items-center gap-2 text-sm flex-wrap">
          <span className="font-medium">{from}</span>
          <ArrowRight className="w-3 h-3 flex-shrink-0" />
          <span className="font-medium">{to}</span>
        </div>
        <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground flex-wrap">
          <span>{duration} min</span>
          {stops !== undefined && <span>{stops} stops</span>}
          {distance !== undefined && <span>{distance}m</span>}
        </div>
      </div>
    </div>
  );
}
