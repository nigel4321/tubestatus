import { useState, useEffect } from "react";
import JourneyHeader from "@/components/JourneyHeader";
import RouteCard from "@/components/RouteCard";
import LoadingSkeleton from "@/components/LoadingSkeleton";

// TODO: remove mock functionality - this will be replaced with real TfL API data
const MOCK_ROUTES = [
  {
    duration: 35,
    departureTime: "Now",
    arrivalTime: "15:05",
    legs: [
      {
        mode: "tube" as const,
        lineName: "Northern",
        direction: "Edgware",
        from: "High Barnet",
        to: "Tottenham Court Road",
        duration: 28,
        stops: 14,
      },
      {
        mode: "walking" as const,
        from: "Tottenham Court Road",
        to: "Tottenham Court Road (Central)",
        duration: 4,
        distance: 200,
      },
      {
        mode: "tube" as const,
        lineName: "Central",
        direction: "Ealing Broadway",
        from: "Tottenham Court Road",
        to: "Chancery Lane",
        duration: 3,
        stops: 1,
      },
    ],
    disruptions: [
      {
        severity: "info" as const,
        message: "Good service on Northern and Central lines",
      },
    ],
    isFastest: true,
  },
  {
    duration: 42,
    departureTime: "Now",
    arrivalTime: "15:12",
    legs: [
      {
        mode: "tube" as const,
        lineName: "Northern",
        direction: "Edgware",
        from: "High Barnet",
        to: "King's Cross St. Pancras",
        duration: 24,
        stops: 12,
      },
      {
        mode: "walking" as const,
        from: "King's Cross St. Pancras",
        to: "King's Cross St. Pancras (Piccadilly)",
        duration: 5,
        distance: 250,
      },
      {
        mode: "tube" as const,
        lineName: "Piccadilly",
        direction: "Cockfosters",
        from: "King's Cross St. Pancras",
        to: "Holborn",
        duration: 4,
        stops: 2,
      },
      {
        mode: "walking" as const,
        from: "Holborn",
        to: "Chancery Lane",
        duration: 9,
        distance: 450,
      },
    ],
    disruptions: [],
    isFastest: false,
  },
  {
    duration: 38,
    departureTime: "14:35",
    arrivalTime: "15:13",
    legs: [
      {
        mode: "tube" as const,
        lineName: "Northern",
        direction: "Edgware",
        from: "High Barnet",
        to: "Camden Town",
        duration: 15,
        stops: 8,
      },
      {
        mode: "walking" as const,
        from: "Camden Town",
        to: "Camden Town (Northern Bank)",
        duration: 3,
        distance: 100,
      },
      {
        mode: "tube" as const,
        lineName: "Northern",
        direction: "Morden",
        from: "Camden Town",
        to: "Tottenham Court Road",
        duration: 13,
        stops: 6,
      },
      {
        mode: "walking" as const,
        from: "Tottenham Court Road",
        to: "Tottenham Court Road (Central)",
        duration: 4,
        distance: 200,
      },
      {
        mode: "tube" as const,
        lineName: "Central",
        direction: "Ealing Broadway",
        from: "Tottenham Court Road",
        to: "Chancery Lane",
        duration: 3,
        stops: 1,
      },
    ],
    disruptions: [
      {
        severity: "warning" as const,
        message: "Minor delays on Northern line southbound due to earlier signal failure",
      },
    ],
    isFastest: false,
  },
];

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [routes, setRoutes] = useState(MOCK_ROUTES);
  const [from, setFrom] = useState("High Barnet");
  const [to, setTo] = useState("Chancery Lane");
  const [lastRefreshTime, setLastRefreshTime] = useState<number>(Date.now());
  const [canRefresh, setCanRefresh] = useState(true);

  // TODO: remove mock functionality - simulate initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // TODO: remove mock functionality - simulate auto-refresh every 2 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      if (canRefresh) {
        handleRefresh();
      }
    }, 120000);
    return () => clearInterval(interval);
  }, [canRefresh]);

  // Rate limiting - re-enable refresh button after 30 seconds
  useEffect(() => {
    if (!canRefresh) {
      const timer = setTimeout(() => {
        setCanRefresh(true);
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [canRefresh]);

  // TODO: remove mock functionality - this will call real TfL API
  const handleRefresh = () => {
    const now = Date.now();
    const timeSinceLastRefresh = now - lastRefreshTime;
    
    // Enforce 30 second rate limit
    if (timeSinceLastRefresh < 30000) {
      console.log(`Please wait ${Math.ceil((30000 - timeSinceLastRefresh) / 1000)} seconds before refreshing again`);
      return;
    }

    setIsRefreshing(true);
    setCanRefresh(false);
    setLastRefreshTime(now);
    console.log("Refreshing journey data from TfL API...");
    
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
      // In real implementation, this would update routes with fresh API data
      setRoutes([...MOCK_ROUTES]);
    }, 1000);
  };

  // Helper function to reverse a route's legs
  const reverseRoute = (route: typeof MOCK_ROUTES[0]) => {
    const reversedLegs = [...route.legs].reverse().map(leg => {
      const reversedLeg: any = {
        ...leg,
        from: leg.to,
        to: leg.from,
      };
      
      // Only update direction for tube legs
      if (leg.mode === "tube" && leg.direction) {
        reversedLeg.direction = getOppositeDirection(leg.direction);
      }
      
      return reversedLeg;
    });

    return {
      ...route,
      legs: reversedLegs,
    };
  };

  // Helper to get opposite direction for tube lines
  const getOppositeDirection = (direction: string): string => {
    const opposites: Record<string, string> = {
      "Edgware": "Morden",
      "Morden": "Edgware",
      "Ealing Broadway": "Epping",
      "Epping": "Ealing Broadway",
      "Cockfosters": "Heathrow",
      "Heathrow": "Cockfosters",
      "High Barnet": "Edgware",
    };
    return opposites[direction] || direction;
  };

  const handleSwapDirection = () => {
    console.log(`Swapping direction: ${to} to ${from}`);
    const newFrom = to;
    const newTo = from;
    setFrom(newFrom);
    setTo(newTo);
    
    // Reverse all routes
    setIsLoading(true);
    setTimeout(() => {
      const reversedRoutes = routes.map(reverseRoute);
      setRoutes(reversedRoutes);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background">
      <JourneyHeader
        from={from}
        to={to}
        lastUpdated={lastUpdated}
        onRefresh={handleRefresh}
        onSwap={handleSwapDirection}
        isRefreshing={isRefreshing}
        canRefresh={canRefresh}
      />
      
      <main className="max-w-2xl mx-auto px-4 py-6">
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <div className="space-y-4">
            {routes.map((route, index) => (
              <RouteCard key={index} {...route} />
            ))}
          </div>
        )}
        
        <footer className="mt-8 text-center text-xs text-muted-foreground pb-6">
          Powered by TfL Open Data
        </footer>
      </main>
    </div>
  );
}
