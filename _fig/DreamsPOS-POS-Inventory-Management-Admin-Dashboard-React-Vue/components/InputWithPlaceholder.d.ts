import * as React from 'react';
export interface InputWithPlaceholderProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "Input lg" | "Input Default" | "Input sm" | "Input xs";
}
export declare const InputWithPlaceholder: React.FC<InputWithPlaceholderProps>;
export default InputWithPlaceholder;
