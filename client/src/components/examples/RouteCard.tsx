import RouteCard from "../RouteCard";

export default function RouteCardExample() {
  const mockRoute = {
    duration: 35,
    departureTime: "14:30",
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
        message: "Good service on all lines",
      },
    ],
    isFastest: true,
  };

  return (
    <div className="p-4">
      <RouteCard {...mockRoute} />
    </div>
  );
}
