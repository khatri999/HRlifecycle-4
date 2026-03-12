export type ExitStatus = "in-progress" | "completed" | "at-risk" | "overdue";

export interface Task {
  id: string;
  name: string;
  assignee: string;
  dueDate: string;
  completed: boolean;
  phase: string;
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  lastDay: string;
  status: ExitStatus;
  manager: string;
  startDate: string;
  tasksCompleted: number;
  tasksTotal: number;
  tasks: Task[];
}

export const employees: Employee[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Senior Software Engineer",
    department: "Engineering",
    lastDay: "2026-03-28",
    status: "in-progress",
    manager: "David Park",
    startDate: "2021-06-15",
    tasksCompleted: 8,
    tasksTotal: 18,
    tasks: [
      { id: "1a", name: "Revoke access to production systems", assignee: "IT Security", dueDate: "2026-03-28", completed: false, phase: "Access & Security" },
      { id: "1b", name: "Disable VPN credentials", assignee: "IT Security", dueDate: "2026-03-28", completed: false, phase: "Access & Security" },
      { id: "1c", name: "Remove from GitHub organization", assignee: "David Park", dueDate: "2026-03-26", completed: true, phase: "Access & Security" },
      { id: "1d", name: "Remove from Slack channels", assignee: "IT Admin", dueDate: "2026-03-28", completed: false, phase: "Access & Security" },
      { id: "1e", name: "Document ongoing projects", assignee: "Sarah Chen", dueDate: "2026-03-20", completed: true, phase: "Knowledge Transfer" },
      { id: "1f", name: "Handover codebase ownership", assignee: "Sarah Chen", dueDate: "2026-03-22", completed: true, phase: "Knowledge Transfer" },
      { id: "1g", name: "Record architecture walkthrough", assignee: "Sarah Chen", dueDate: "2026-03-24", completed: true, phase: "Knowledge Transfer" },
      { id: "1h", name: "Transfer password vault entries", assignee: "Sarah Chen", dueDate: "2026-03-25", completed: false, phase: "Knowledge Transfer" },
      { id: "1i", name: "Return laptop", assignee: "Sarah Chen", dueDate: "2026-03-28", completed: false, phase: "Asset Recovery" },
      { id: "1j", name: "Return security badge", assignee: "Sarah Chen", dueDate: "2026-03-28", completed: false, phase: "Asset Recovery" },
      { id: "1k", name: "Return company phone", assignee: "Sarah Chen", dueDate: "2026-03-28", completed: false, phase: "Asset Recovery" },
      { id: "1l", name: "Conduct exit interview", assignee: "HR Team", dueDate: "2026-03-26", completed: true, phase: "HR & Compliance" },
      { id: "1m", name: "Process final payroll", assignee: "Payroll", dueDate: "2026-03-28", completed: false, phase: "HR & Compliance" },
      { id: "1n", name: "Send benefits continuation info (COBRA)", assignee: "HR Team", dueDate: "2026-03-25", completed: true, phase: "HR & Compliance" },
      { id: "1o", name: "Collect signed NDA acknowledgment", assignee: "Legal", dueDate: "2026-03-26", completed: true, phase: "HR & Compliance" },
      { id: "1p", name: "Update org chart", assignee: "HR Team", dueDate: "2026-03-28", completed: false, phase: "HR & Compliance" },
      { id: "1q", name: "Notify stakeholders of departure", assignee: "David Park", dueDate: "2026-03-14", completed: true, phase: "Communication" },
      { id: "1r", name: "Send farewell announcement", assignee: "David Park", dueDate: "2026-03-26", completed: false, phase: "Communication" },
    ],
  },
  {
    id: "2",
    name: "Michael Torres",
    role: "Product Manager",
    department: "Product",
    lastDay: "2026-03-21",
    status: "at-risk",
    manager: "Lisa Nguyen",
    startDate: "2019-03-01",
    tasksCompleted: 5,
    tasksTotal: 16,
    tasks: [
      { id: "2a", name: "Revoke access to analytics platforms", assignee: "IT Security", dueDate: "2026-03-21", completed: false, phase: "Access & Security" },
      { id: "2b", name: "Remove from Jira and Confluence", assignee: "IT Admin", dueDate: "2026-03-21", completed: false, phase: "Access & Security" },
      { id: "2c", name: "Disable SSO access", assignee: "IT Security", dueDate: "2026-03-21", completed: false, phase: "Access & Security" },
      { id: "2d", name: "Hand over product roadmap", assignee: "Michael Torres", dueDate: "2026-03-15", completed: true, phase: "Knowledge Transfer" },
      { id: "2e", name: "Document stakeholder relationships", assignee: "Michael Torres", dueDate: "2026-03-17", completed: true, phase: "Knowledge Transfer" },
      { id: "2f", name: "Transfer customer meeting notes", assignee: "Michael Torres", dueDate: "2026-03-18", completed: false, phase: "Knowledge Transfer" },
      { id: "2g", name: "Briefing session with successor", assignee: "Michael Torres", dueDate: "2026-03-19", completed: false, phase: "Knowledge Transfer" },
      { id: "2h", name: "Return laptop", assignee: "Michael Torres", dueDate: "2026-03-21", completed: false, phase: "Asset Recovery" },
      { id: "2i", name: "Return corporate credit card", assignee: "Michael Torres", dueDate: "2026-03-21", completed: false, phase: "Asset Recovery" },
      { id: "2j", name: "Conduct exit interview", assignee: "HR Team", dueDate: "2026-03-19", completed: true, phase: "HR & Compliance" },
      { id: "2k", name: "Process final payroll", assignee: "Payroll", dueDate: "2026-03-21", completed: false, phase: "HR & Compliance" },
      { id: "2l", name: "Settle expense reports", assignee: "Finance", dueDate: "2026-03-18", completed: false, phase: "HR & Compliance" },
      { id: "2m", name: "Collect signed NDA acknowledgment", assignee: "Legal", dueDate: "2026-03-19", completed: true, phase: "HR & Compliance" },
      { id: "2n", name: "Send benefits info", assignee: "HR Team", dueDate: "2026-03-18", completed: true, phase: "HR & Compliance" },
      { id: "2o", name: "Notify cross-functional partners", assignee: "Lisa Nguyen", dueDate: "2026-03-14", completed: false, phase: "Communication" },
      { id: "2p", name: "Send farewell announcement", assignee: "Lisa Nguyen", dueDate: "2026-03-20", completed: false, phase: "Communication" },
    ],
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    role: "UX Designer",
    department: "Design",
    lastDay: "2026-04-11",
    status: "in-progress",
    manager: "James Wilson",
    startDate: "2022-01-10",
    tasksCompleted: 3,
    tasksTotal: 14,
    tasks: [
      { id: "3a", name: "Revoke Figma admin access", assignee: "IT Admin", dueDate: "2026-04-11", completed: false, phase: "Access & Security" },
      { id: "3b", name: "Remove from design system repo", assignee: "James Wilson", dueDate: "2026-04-09", completed: false, phase: "Access & Security" },
      { id: "3c", name: "Transfer design file ownership", assignee: "Emma Rodriguez", dueDate: "2026-04-04", completed: true, phase: "Knowledge Transfer" },
      { id: "3d", name: "Document component library decisions", assignee: "Emma Rodriguez", dueDate: "2026-04-07", completed: true, phase: "Knowledge Transfer" },
      { id: "3e", name: "Handover user research archive", assignee: "Emma Rodriguez", dueDate: "2026-04-08", completed: false, phase: "Knowledge Transfer" },
      { id: "3f", name: "Return laptop", assignee: "Emma Rodriguez", dueDate: "2026-04-11", completed: false, phase: "Asset Recovery" },
      { id: "3g", name: "Return Wacom tablet", assignee: "Emma Rodriguez", dueDate: "2026-04-11", completed: false, phase: "Asset Recovery" },
      { id: "3h", name: "Conduct exit interview", assignee: "HR Team", dueDate: "2026-04-09", completed: false, phase: "HR & Compliance" },
      { id: "3i", name: "Process final payroll", assignee: "Payroll", dueDate: "2026-04-11", completed: false, phase: "HR & Compliance" },
      { id: "3j", name: "Send benefits info", assignee: "HR Team", dueDate: "2026-04-08", completed: true, phase: "HR & Compliance" },
      { id: "3k", name: "Collect signed NDA", assignee: "Legal", dueDate: "2026-04-09", completed: false, phase: "HR & Compliance" },
      { id: "3l", name: "Update org chart", assignee: "HR Team", dueDate: "2026-04-11", completed: false, phase: "HR & Compliance" },
      { id: "3m", name: "Notify design team", assignee: "James Wilson", dueDate: "2026-03-28", completed: false, phase: "Communication" },
      { id: "3n", name: "Send farewell announcement", assignee: "James Wilson", dueDate: "2026-04-09", completed: false, phase: "Communication" },
    ],
  },
  {
    id: "4",
    name: "James Kim",
    role: "Data Analyst",
    department: "Analytics",
    lastDay: "2026-03-07",
    status: "completed",
    manager: "Rachel Adams",
    startDate: "2020-09-21",
    tasksCompleted: 12,
    tasksTotal: 12,
    tasks: [
      { id: "4a", name: "Revoke database access", assignee: "IT Security", dueDate: "2026-03-07", completed: true, phase: "Access & Security" },
      { id: "4b", name: "Remove from BI tools", assignee: "IT Admin", dueDate: "2026-03-07", completed: true, phase: "Access & Security" },
      { id: "4c", name: "Hand over dashboards", assignee: "James Kim", dueDate: "2026-03-03", completed: true, phase: "Knowledge Transfer" },
      { id: "4d", name: "Document data pipelines", assignee: "James Kim", dueDate: "2026-03-04", completed: true, phase: "Knowledge Transfer" },
      { id: "4e", name: "Return laptop", assignee: "James Kim", dueDate: "2026-03-07", completed: true, phase: "Asset Recovery" },
      { id: "4f", name: "Return security badge", assignee: "James Kim", dueDate: "2026-03-07", completed: true, phase: "Asset Recovery" },
      { id: "4g", name: "Conduct exit interview", assignee: "HR Team", dueDate: "2026-03-05", completed: true, phase: "HR & Compliance" },
      { id: "4h", name: "Process final payroll", assignee: "Payroll", dueDate: "2026-03-07", completed: true, phase: "HR & Compliance" },
      { id: "4i", name: "Send benefits info", assignee: "HR Team", dueDate: "2026-03-04", completed: true, phase: "HR & Compliance" },
      { id: "4j", name: "Collect signed NDA", assignee: "Legal", dueDate: "2026-03-05", completed: true, phase: "HR & Compliance" },
      { id: "4k", name: "Notify stakeholders", assignee: "Rachel Adams", dueDate: "2026-02-28", completed: true, phase: "Communication" },
      { id: "4l", name: "Send farewell announcement", assignee: "Rachel Adams", dueDate: "2026-03-05", completed: true, phase: "Communication" },
    ],
  },
  {
    id: "5",
    name: "Priya Sharma",
    role: "Marketing Coordinator",
    department: "Marketing",
    lastDay: "2026-03-10",
    status: "overdue",
    manager: "Tom Bradley",
    startDate: "2023-05-08",
    tasksCompleted: 7,
    tasksTotal: 14,
    tasks: [
      { id: "5a", name: "Revoke social media access", assignee: "IT Security", dueDate: "2026-03-10", completed: true, phase: "Access & Security" },
      { id: "5b", name: "Remove from CMS", assignee: "IT Admin", dueDate: "2026-03-10", completed: false, phase: "Access & Security" },
      { id: "5c", name: "Transfer campaign ownership", assignee: "Priya Sharma", dueDate: "2026-03-06", completed: true, phase: "Knowledge Transfer" },
      { id: "5d", name: "Document vendor contacts", assignee: "Priya Sharma", dueDate: "2026-03-07", completed: true, phase: "Knowledge Transfer" },
      { id: "5e", name: "Hand over brand assets", assignee: "Priya Sharma", dueDate: "2026-03-08", completed: true, phase: "Knowledge Transfer" },
      { id: "5f", name: "Return laptop", assignee: "Priya Sharma", dueDate: "2026-03-10", completed: false, phase: "Asset Recovery" },
      { id: "5g", name: "Return company phone", assignee: "Priya Sharma", dueDate: "2026-03-10", completed: false, phase: "Asset Recovery" },
      { id: "5h", name: "Conduct exit interview", assignee: "HR Team", dueDate: "2026-03-08", completed: true, phase: "HR & Compliance" },
      { id: "5i", name: "Process final payroll", assignee: "Payroll", dueDate: "2026-03-10", completed: false, phase: "HR & Compliance" },
      { id: "5j", name: "Send benefits info", assignee: "HR Team", dueDate: "2026-03-07", completed: true, phase: "HR & Compliance" },
      { id: "5k", name: "Collect signed NDA", assignee: "Legal", dueDate: "2026-03-08", completed: false, phase: "HR & Compliance" },
      { id: "5l", name: "Update org chart", assignee: "HR Team", dueDate: "2026-03-10", completed: false, phase: "HR & Compliance" },
      { id: "5m", name: "Notify marketing team", assignee: "Tom Bradley", dueDate: "2026-03-03", completed: true, phase: "Communication" },
      { id: "5n", name: "Send farewell announcement", assignee: "Tom Bradley", dueDate: "2026-03-08", completed: false, phase: "Communication" },
    ],
  },
];
