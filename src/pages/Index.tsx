import { useState, useCallback } from "react";
import { employees as initialEmployees } from "@/data/mockData";
import { AppSidebar } from "@/components/AppSidebar";
import { EmployeeList } from "@/components/EmployeeList";
import { EmployeeDetail } from "@/components/EmployeeDetail";

const Index = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [selectedId, setSelectedId] = useState<string | null>(initialEmployees[0]?.id ?? null);

  const selectedEmployee = employees.find((e) => e.id === selectedId) ?? null;

  const handleToggleTask = useCallback((employeeId: string, taskId: string) => {
    setEmployees((prev) =>
      prev.map((emp) => {
        if (emp.id !== employeeId) return emp;
        const tasks = emp.tasks.map((t) =>
          t.id === taskId ? { ...t, completed: !t.completed } : t
        );
        const tasksCompleted = tasks.filter((t) => t.completed).length;
        return { ...emp, tasks, tasksCompleted };
      })
    );
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <AppSidebar />
      <EmployeeList employees={employees} selectedId={selectedId} onSelect={setSelectedId} />
      <EmployeeDetail employee={selectedEmployee} onToggleTask={handleToggleTask} />
    </div>
  );
};

export default Index;
