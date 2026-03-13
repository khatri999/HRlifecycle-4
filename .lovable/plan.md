

# Phase 1: Employee Database + CRUD + Import/Export

## Overview
Migrate from mock data to a Supabase `employees` table, then build Add Employee form, CSV/Excel import with preview, and export functionality.

## Database Changes

### New `employees` table
```sql
CREATE TABLE public.employees (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  employee_id text UNIQUE NOT NULL,
  name text NOT NULL,
  email text,
  department text NOT NULL,
  designation text NOT NULL,
  manager text,
  joining_date date NOT NULL,
  date_of_birth date,
  phone text,
  status text NOT NULL DEFAULT 'active',        -- active, onboarding, notice-period, exited
  onboarding_status text DEFAULT 'not-started',
  onboarding_progress integer DEFAULT 0,
  exit_status text DEFAULT 'none',
  exit_progress integer DEFAULT 0,
  last_working_day date,
  avatar text,
  location text,
  employment_type text DEFAULT 'full-time',
  exit_date date,
  exit_interview_notes text,
  fnf_status text,                              -- full & final settlement status
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE public.employees ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all on employees" ON public.employees FOR ALL USING (true) WITH CHECK (true);

-- Auto-update updated_at
CREATE TRIGGER update_employees_updated_at
  BEFORE UPDATE ON public.employees
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
```

RLS is open for now (no auth yet). Will be locked down in Phase 2.

## Frontend Changes

### 1. Employee Directory page (`src/pages/Employees.tsx`)
- Fetch employees from Supabase instead of mock data
- Add three action buttons in the header: **Add Employee**, **Import Data**, **Export Data**
- Add filters: All, Active, Onboarding, Notice Period, Exited
- Add search by name, employee ID, department, status, manager
- Display computed "Experience" column (years/months from joining date)
- Show exited employees as a filterable status

### 2. Add Employee Dialog
- Modal form with fields: Name, Employee ID, Department, Designation, Manager, Joining Date, Date of Birth, Work Email, Phone, Employment Type, Location
- Validate required fields with zod
- Insert into Supabase on submit
- Toast on success

### 3. Import Data Dialog
- Accept `.csv` and `.xlsx` files (use `xlsx` npm package for Excel parsing)
- Auto-map columns to employee fields
- Show preview table of parsed data
- Highlight rows with validation errors (missing required fields, duplicate IDs)
- Import valid rows into Supabase on confirm
- Show success/error summary

### 4. Export Data
- Dropdown with options: All, Active, Notice Period, Exited
- Export formats: CSV and Excel
- Use `xlsx` package to generate files
- Also add Export button to Reports page

### 5. Dashboard Updates
- Dashboard queries Supabase for employee counts instead of using `dashboardStats` constant
- Metrics auto-update as data changes

### 6. Exited Employees Section
- Add "Exited" filter tab in Employee Directory
- When exit workflow completes, employee status auto-updates to "exited"
- Exited employee rows show: exit date, FnF status

## New Dependencies
- `xlsx` - for Excel import/export and CSV parsing

## Files to Create/Modify
- **Migration**: New `employees` table
- **Create** `src/components/employees/AddEmployeeDialog.tsx`
- **Create** `src/components/employees/ImportDataDialog.tsx`
- **Create** `src/components/employees/ExportDataDropdown.tsx`
- **Create** `src/hooks/useEmployees.ts` - React Query hooks for CRUD
- **Modify** `src/pages/Employees.tsx` - Replace mock data, add action buttons
- **Modify** `src/pages/Dashboard.tsx` - Use live data for metrics
- **Modify** `src/data/mockData.ts` - Keep task/notification mock data, remove employee dependency for dashboard stats

