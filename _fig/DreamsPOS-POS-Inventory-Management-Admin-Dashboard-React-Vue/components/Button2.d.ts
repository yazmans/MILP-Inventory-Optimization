import * as React from 'react';
export interface Button2Props {
  className?: string;
  style?: React.CSSProperties;
  size?: "Large" | "Medium" | "Small" | "xs" | "XL";
  colour?: "Light" | "Primary" | "Dark" | "White" | "Secondary" | "Success" | "Warning" | "Danger" | "Info" | "Pink" | "Purple" | "Orange" | "Indigo" | "Cyan" | "Teal";
  state?: "Fill" | "Outline";
  icon?: "Right" | "Left" | "Default";
}
export declare const Button2: React.FC<Button2Props>;
export default Button2;
