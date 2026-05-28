import * as React from 'react';
export interface InputWithSelectProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "Input Select lg" | "Input Select Default" | "Input Select sm" | "Input Select xs";
}
export declare const InputWithSelect: React.FC<InputWithSelectProps>;
export default InputWithSelect;
