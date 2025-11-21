import { ButtonStyle } from "./style"
import type { ButtonProps } from "./types";

// interface ButtonProps {
//   type: "button" | "submit" | "reset";
//   name: string;
//   onClick: () => void;
//   disabled: boolean;
// }

function Button({
  type = "button",
  name,
  onClick,
  disabled = false,
  primary,
}: ButtonProps) {
  return (
    <ButtonStyle primary
     disabled={disabled}
      type={type}
       onClick={onClick}
      >
      {name}
    </ButtonStyle>
  );
}

export default Button;
