import * as React from 'react';
export interface SidebarProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "open" | "Open with Submenu" | "Close";
}
export declare const Sidebar: React.FC<SidebarProps>;
export default Sidebar;
