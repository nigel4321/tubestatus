import { AlertCircle, AlertTriangle, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface DisruptionAlertProps {
  severity: "info" | "warning" | "severe";
  message: string;
}

export default function DisruptionAlert({
  severity,
  message,
}: DisruptionAlertProps) {
  const config = {
    info: {
      icon: Info,
      className: "border-primary/20 bg-primary/5 text-primary",
    },
    warning: {
      icon: AlertTriangle,
      className: "border-yellow-600/20 bg-yellow-600/5 text-yellow-800 dark:text-yellow-500",
    },
    severe: {
      icon: AlertCircle,
      className: "border-destructive/20 bg-destructive/5 text-destructive",
    },
  };

  const { icon: Icon, className } = config[severity];

  return (
    <Alert className={className} data-testid={`alert-${severity}`}>
      <Icon className="h-4 w-4" />
      <AlertDescription className="text-sm">{message}</AlertDescription>
    </Alert>
  );
}
