import { AnimatePresence, motion } from "framer-motion";
import { Calendar, User, Building2, Briefcase, CheckCircle2, Circle } from "lucide-react";
import { type Employee, type Task } from "@/data/mockData";
import { StatusBadge } from "./StatusBadge";

interface EmployeeDetailProps {
  employee: Employee | null;
  onToggleTask: (employeeId: string, taskId: string) => void;
}

function TaskItem({ task, employeeId, onToggle }: { task: Task; employeeId: string; onToggle: (eid: string, tid: string) => void }) {
  const isOverdue = !task.completed && new Date(task.dueDate) < new Date();

  return (
    <motion.div
      className="flex items-center gap-3 py-3 px-3 hover:bg-accent rounded-md transition-colors duration-150 cursor-pointer group"
      onClick={() => onToggle(employeeId, task.id)}
      whileTap={{ scale: 0.98 }}
    >
      {task.completed ? (
        <CheckCircle2 className="w-4 h-4 text-status-completed-text shrink-0" />
      ) : (
        <Circle className={`w-4 h-4 shrink-0 ${isOverdue ? "text-status-overdue-text" : "text-muted-foreground"}`} />
      )}
      <div className={`flex-1 min-w-0 ${task.completed ? "opacity-50" : ""}`}>
        <span className={`text-sm text-foreground ${task.completed ? "line-through" : ""}`}>
          {task.name}
        </span>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <span className="text-xs text-muted-foreground">{task.assignee}</span>
        <span className={`text-xs tabular-nums ${isOverdue ? "text-status-overdue-text font-medium" : "text-muted-foreground"}`}>
          {formatDate(task.dueDate)}
        </span>
      </div>
    </motion.div>
  );
}

function formatDate(date: string) {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function daysUntil(date: string) {
  const diff = Math.ceil((new Date(date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  if (diff < 0) return `${Math.abs(diff)} days ago`;
  if (diff === 0) return "Today";
  return `In ${diff} days`;
}

export function EmployeeDetail({ employee, onToggleTask }: EmployeeDetailProps) {
  if (!employee) {
    return (
      <div className="flex-1 flex items-center justify-center bg-background">
        <div className="text-center">
          <UserMinusIcon />
          <p className="text-sm text-muted-foreground mt-2">Select an employee to view their offboarding details</p>
        </div>
      </div>
    );
  }

  const phases = Array.from(new Set(employee.tasks.map((t) => t.phase)));

  return (
    <div className="flex-1 overflow-y-auto bg-background">
      <AnimatePresence mode="wait">
        <motion.div
          key={employee.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {/* Header */}
          <div className="border-b border-border bg-card px-6 py-5">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-lg font-medium -tracking-[0.02em] text-foreground">{employee.name}</h2>
                  <StatusBadge status={employee.status} />
                </div>
                <p className="text-sm text-muted-foreground">{employee.role} · {employee.department}</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-foreground tabular-nums">{daysUntil(employee.lastDay)}</div>
                <div className="text-xs text-muted-foreground">Last day: {formatDate(employee.lastDay)}</div>
              </div>
            </div>

            {/* Meta row */}
            <div className="flex items-center gap-6 mt-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                <span>Manager: {employee.manager}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                <span>{employee.department}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Started: {formatDate(employee.startDate)}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                <span className="tabular-nums">{employee.tasksCompleted}/{employee.tasksTotal} tasks complete</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-3 h-1.5 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${(employee.tasksCompleted / employee.tasksTotal) * 100}%` }}
              />
            </div>
          </div>

          {/* Tasks by phase */}
          <div className="px-6 py-4">
            {phases.map((phase) => {
              const phaseTasks = employee.tasks.filter((t) => t.phase === phase);
              const phaseCompleted = phaseTasks.filter((t) => t.completed).length;
              return (
                <div key={phase} className="mb-6">
                  <div className="flex items-center justify-between px-3 py-2 mb-1">
                    <span className="text-xs font-normal tracking-[0.06em] uppercase text-muted-foreground">{phase}</span>
                    <span className="text-xs text-muted-foreground tabular-nums">{phaseCompleted}/{phaseTasks.length}</span>
                  </div>
                  <div className="bg-card rounded-lg shadow-card">
                    {phaseTasks.map((task) => (
                      <TaskItem key={task.id} task={task} employeeId={employee.id} onToggle={onToggleTask} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function UserMinusIcon() {
  return (
    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto">
      <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0M18 12h4" />
      </svg>
    </div>
  );
}
