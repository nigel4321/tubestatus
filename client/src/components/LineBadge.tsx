import { Badge } from "@/components/ui/badge";

interface LineBadgeProps {
  lineName: string;
  lineColor?: string;
}

const LINE_COLORS: Record<string, { bg: string; text: string }> = {
  Northern: { bg: "#000000", text: "#FFFFFF" },
  Central: { bg: "#DC241F", text: "#FFFFFF" },
  Bakerloo: { bg: "#894E24", text: "#FFFFFF" },
  Circle: { bg: "#FFD300", text: "#000000" },
  District: { bg: "#007229", text: "#FFFFFF" },
  "Hammersmith & City": { bg: "#D799AF", text: "#000000" },
  Jubilee: { bg: "#6A7278", text: "#FFFFFF" },
  Metropolitan: { bg: "#751056", text: "#FFFFFF" },
  Piccadilly: { bg: "#0019A8", text: "#FFFFFF" },
  Victoria: { bg: "#00A0E2", text: "#FFFFFF" },
  "Waterloo & City": { bg: "#76D0BD", text: "#000000" },
  Elizabeth: { bg: "#6950a1", text: "#FFFFFF" },
};

export default function LineBadge({ lineName, lineColor }: LineBadgeProps) {
  const colors = LINE_COLORS[lineName] || { bg: "#666666", text: "#FFFFFF" };
  const bgColor = lineColor || colors.bg;

  return (
    <Badge
      variant="secondary"
      className="rounded-full px-3 text-xs font-medium"
      style={{
        backgroundColor: bgColor,
        color: colors.text,
        border: "none",
      }}
      data-testid={`badge-line-${lineName.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {lineName}
    </Badge>
  );
}
