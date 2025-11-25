import JourneyHeader from "../JourneyHeader";

export default function JourneyHeaderExample() {
  return (
    <JourneyHeader
      from="High Barnet"
      to="Chancery Lane"
      lastUpdated={new Date()}
      onRefresh={() => console.log("Refresh triggered")}
      isRefreshing={false}
    />
  );
}
