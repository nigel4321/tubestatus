import JourneyLeg from "../JourneyLeg";

export default function JourneyLegExample() {
  return (
    <div className="space-y-4 p-4">
      <JourneyLeg
        mode="tube"
        lineName="Northern"
        direction="Edgware"
        from="High Barnet"
        to="Camden Town"
        duration={15}
        stops={8}
      />
      <JourneyLeg
        mode="walking"
        from="Camden Town"
        to="Camden Town Underground"
        duration={2}
        distance={150}
      />
      <JourneyLeg
        mode="tube"
        lineName="Central"
        direction="Ealing Broadway"
        from="Tottenham Court Road"
        to="Chancery Lane"
        duration={3}
        stops={1}
      />
    </div>
  );
}
