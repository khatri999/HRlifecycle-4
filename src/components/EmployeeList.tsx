import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";
import { type Employee } from "@/data/mockData";
import { StatusBadge } from "./StatusBadge";

interface EmployeeListProps {
  employees: Employee[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function EmployeeList({ employees, selectedId, onSelect }: EmployeeListProps) {
  const [search, setSearch] = useState("");

  const filtered = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-[320px] shrink-0 border-r border-border bg-card flex flex-col h-screen">
      <div className="px-3 py-3 border-b border-border">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search employees..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-3 py-2 text-sm bg-background rounded-md shadow-[0_0_0_1px_hsl(var(--border))] focus:shadow-[0_0_0_2px_hsl(var(--ring))] outline-none transition-shadow duration-150 placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="px-3 py-2">
          <span className="text-xs font-normal tracking-[0.06em] uppercase text-muted-foreground">
            {filtered.length} employee{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
        {filtered.map((employee) => (
          <motion.button
            key={employee.id}
            onClick={() => onSelect(employee.id)}
            className={`w-full text-left px-3 py-3 border-b border-border transition-colors duration-150 ${
              selectedId === employee.id ? "bg-accent" : "hover:bg-accent/50"
            }`}
            whileTap={{ scale: 0.99 }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-foreground -tracking-[0.02em]">{employee.name}</span>
              <StatusBadge status={employee.status} />
            </div>
            <div className="text-xs text-muted-foreground">{employee.role} · {employee.department}</div>
            <div className="mt-1.5 flex items-center gap-2">
              <div className="flex-1 h-1 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-300"
                  style={{ width: `${(employee.tasksCompleted / employee.tasksTotal) * 100}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground tabular-nums">
                {employee.tasksCompleted}/{employee.tasksTotal}
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
