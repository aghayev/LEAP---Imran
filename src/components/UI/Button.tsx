import React from "react";

type ButtonProps = {
onButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
className?: string;
  submit?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ onButtonClick, className, submit = false, disabled = false, children }) => {
  return (
    <button onClick={onButtonClick} className={className}  type={submit ? "submit" : undefined} disabled={disabled ? disabled: undefined}>
      {children}
    </button>
  );
};

export default Button;
