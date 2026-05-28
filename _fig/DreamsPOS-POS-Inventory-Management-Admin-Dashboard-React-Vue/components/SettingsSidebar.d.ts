import * as React from 'react';
export interface SettingsSidebarProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "General Settings" | "Website Settings" | "App Settings" | "Syste Settings" | "Financial Settings" | "Other Settings";
}
export declare const SettingsSidebar: React.FC<SettingsSidebarProps>;
export default SettingsSidebar;
