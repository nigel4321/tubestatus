import LineBadge from "../LineBadge";

export default function LineBadgeExample() {
  return (
    <div className="flex flex-wrap gap-2 p-4">
      <LineBadge lineName="Northern" />
      <LineBadge lineName="Central" />
      <LineBadge lineName="Victoria" />
      <LineBadge lineName="Piccadilly" />
    </div>
  );
}
