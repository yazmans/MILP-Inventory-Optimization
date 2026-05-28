import * as React from 'react';
export interface InputVariantProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "With Link" | "With Generate Button" | "With New Button";
}
export declare const InputVariant: React.FC<InputVariantProps>;
export default InputVariant;
