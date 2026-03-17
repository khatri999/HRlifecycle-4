

## Replace sidebar toggle with panel icon

Replace the `ChevronLeft`/`ChevronRight` icons in the sidebar collapse button with Lucide's `PanelLeftClose` (when expanded) and `PanelLeft` (when collapsed) icons. These match the reference image — a rectangle with a vertical divider representing a sidebar panel.

### Changes
- **`src/components/layout/AppSidebar.tsx`**: Import `PanelLeft` and `PanelLeftClose` from `lucide-react`, replace the chevron icons in the toggle button on line 81.

