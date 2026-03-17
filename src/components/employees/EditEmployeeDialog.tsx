import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useUpdateEmployee, type EmployeeRow } from "@/hooks/useEmployees";

const departments = ["Engineering", "Design", "Marketing", "HR", "Finance", "Admin", "IT", "Operations", "Sales"];
const employmentTypes = ["full-time", "part-time", "contract", "intern"];
const statuses = ["active", "onboarding", "notice-period", "exited"];

interface Props {
  employee: EmployeeRow | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EditEmployeeDialog({ employee, open, onOpenChange }: Props) {
  const updateEmployee = useUpdateEmployee();
  const [form, setForm] = useState({
    name: "", employee_id: "", department: "", designation: "", manager: "",
    joining_date: "", date_of_birth: "", email: "", phone: "",
    employment_type: "full-time", location: "", status: "active",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (employee) {
      setForm({
        name: employee.name,
        employee_id: employee.employee_id,
        department: employee.department,
        designation: employee.designation,
        manager: employee.manager || "",
        joining_date: employee.joining_date,
        date_of_birth: employee.date_of_birth || "",
        email: employee.email || "",
        phone: employee.phone || "",
        employment_type: employee.employment_type || "full-time",
        location: employee.location || "",
        status: employee.status,
      });
      setErrors({});
    }
  }, [employee]);

  const update = (field: string, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    setErrors((p) => ({ ...p, [field]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.employee_id.trim()) e.employee_id = "Required";
    if (!form.department) e.department = "Required";
    if (!form.designation.trim()) e.designation = "Required";
    if (!form.joining_date) e.joining_date = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate() || !employee) return;
    await updateEmployee.mutateAsync({
      id: employee.id,
      name: form.name,
      employee_id: form.employee_id,
      department: form.department,
      designation: form.designation,
      manager: form.manager || null,
      joining_date: form.joining_date,
      date_of_birth: form.date_of_birth || null,
      email: form.email || null,
      phone: form.phone || null,
      employment_type: form.employment_type,
      location: form.location || null,
      status: form.status,
      avatar: form.name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2),
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Employee</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Employee Name *" error={errors.name}>
            <Input value={form.name} onChange={(e) => update("name", e.target.value)} />
          </Field>
          <Field label="Employee ID *" error={errors.employee_id}>
            <Input value={form.employee_id} onChange={(e) => update("employee_id", e.target.value)} />
          </Field>
          <Field label="Department *" error={errors.department}>
            <Select value={form.department} onValueChange={(v) => update("department", v)}>
              <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
              <SelectContent>{departments.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}</SelectContent>
            </Select>
          </Field>
          <Field label="Designation *" error={errors.designation}>
            <Input value={form.designation} onChange={(e) => update("designation", e.target.value)} />
          </Field>
          <Field label="Manager">
            <Input value={form.manager} onChange={(e) => update("manager", e.target.value)} />
          </Field>
          <Field label="Joining Date *" error={errors.joining_date}>
            <Input type="date" value={form.joining_date} onChange={(e) => update("joining_date", e.target.value)} />
          </Field>
          <Field label="Date of Birth">
            <Input type="date" value={form.date_of_birth} onChange={(e) => update("date_of_birth", e.target.value)} />
          </Field>
          <Field label="Work Email">
            <Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
          </Field>
          <Field label="Phone">
            <Input value={form.phone} onChange={(e) => update("phone", e.target.value)} />
          </Field>
          <Field label="Employment Type">
            <Select value={form.employment_type} onValueChange={(v) => update("employment_type", v)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>{employmentTypes.map((t) => <SelectItem key={t} value={t}>{t.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}</SelectItem>)}</SelectContent>
            </Select>
          </Field>
          <Field label="Status">
            <Select value={form.status} onValueChange={(v) => update("status", v)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>{statuses.map((s) => <SelectItem key={s} value={s}>{s.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}</SelectItem>)}</SelectContent>
            </Select>
          </Field>
          <Field label="Location">
            <Input value={form.location} onChange={(e) => update("location", e.target.value)} />
          </Field>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={handleSubmit} disabled={updateEmployee.isPending}>
            {updateEmployee.isPending ? "Saving..." : "Save Changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
