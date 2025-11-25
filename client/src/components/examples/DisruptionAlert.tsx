import DisruptionAlert from "../DisruptionAlert";

export default function DisruptionAlertExample() {
  return (
    <div className="space-y-3 p-4">
      <DisruptionAlert
        severity="info"
        message="Good service on all lines"
      />
      <DisruptionAlert
        severity="warning"
        message="Minor delays due to an earlier signal failure"
      />
      <DisruptionAlert
        severity="severe"
        message="Severe delays between Camden Town and Moorgate"
      />
    </div>
  );
}
