import React from "react";
import { EyeIcon } from "lucide-react";
import { useFormContext } from "react-hook-form";

const defaultLabelClassName = "block text-sm font-medium text-gray-700";
const defaultInputClassName =
  "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500";

export interface InputProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  labelClassName?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value?: string;
  defaultValue?: string;
  children?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  className,
  labelClassName,
  error,
  required = false,
  disabled = false,
  onChange,
  onBlur,
  value,
  defaultValue,
  children,
}) => {
  const { register } = useFormContext();
  const inputClassName =
    type !== "checkbox" ? defaultInputClassName : "mr-2 accent-slate-500";
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={name} className={labelClassName || defaultLabelClassName}>
        {label}
        {required && <span className="text-red-500">*</span>}
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          {...register(name)}
          className={`${inputClassName} ${
            error ? "border-red-500" : ""
          } ${disabled ? "bg-gray-200" : ""}`}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
        />
        {children}
        {type === "password" && (
          <EyeIcon
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            size={20}
            onClick={() => {
              // Handle password visibility toggle
            }}
          />
        )}
      </label>

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};
