import * as React from 'react';
export interface InputWithDateProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "Input Select lg" | "Input Select Default" | "Input Select sm" | "Input Select xs";
}
export declare const InputWithDate: React.FC<InputWithDateProps>;
export default InputWithDate;
