import type { ChangeEvent } from "react";

export interface InputProps {
  name: string;
  type?: "text" | "email" | "tel" | "number" | "password" | "checkbox";
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  // checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
