import { LayoutDashboard, UserMinus, BarChart3, Settings } from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: false },
  { icon: UserMinus, label: "Offboarding", active: true },
  { icon: BarChart3, label: "Reports", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export function AppSidebar() {
  return (
    <aside className="w-[180px] shrink-0 border-r border-border bg-card flex flex-col h-screen">
      <div className="px-4 py-4 border-b border-border">
        <h1 className="text-base font-semibold tracking-tight text-foreground">ExitFlow</h1>
      </div>
      <nav className="flex-1 py-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150 ${
              item.active
                ? "bg-accent text-foreground font-medium"
                : "text-muted-foreground hover:bg-accent hover:text-foreground"
            }`}
          >
            <item.icon className="w-4 h-4" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="px-4 py-3 border-t border-border">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-medium">
            HR
          </div>
          <div className="text-xs">
            <div className="font-medium text-foreground">Alex Morgan</div>
            <div className="text-muted-foreground">HR Manager</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
