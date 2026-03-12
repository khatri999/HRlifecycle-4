import { type ExitStatus } from "@/data/mockData";

const statusConfig: Record<ExitStatus, { label: string; className: string }> = {
  "in-progress": {
    label: "In Progress",
    className: "bg-status-in-progress-bg text-status-in-progress-text",
  },
  completed: {
    label: "Completed",
    className: "bg-status-completed-bg text-status-completed-text",
  },
  "at-risk": {
    label: "At Risk",
    className: "bg-status-at-risk-bg text-status-at-risk-text",
  },
  overdue: {
    label: "Overdue",
    className: "bg-status-overdue-bg text-status-overdue-text",
  },
};

export function StatusBadge({ status }: { status: ExitStatus }) {
  const config = statusConfig[status];
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.className}`}>
      {config.label}
    </span>
  );
}
