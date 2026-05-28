import * as React from 'react';
export interface InputWithTimeProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "Input Select lg" | "Input Select Default" | "Input Select sm" | "Input Select xs";
}
export declare const InputWithTime: React.FC<InputWithTimeProps>;
export default InputWithTime;
