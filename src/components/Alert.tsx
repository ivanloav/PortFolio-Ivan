import React from "react";
type AlertProps = {
  type?: "success" | "error" | "info";
  children: React.ReactNode;
};
export default function Alert({ type = "info", children }: AlertProps) {
  const base = "p-4 rounded font-medium";
  const colors = {
    success: "bg-green-100 text-green-700",
    error: "bg-red-100 text-red-700",
    info: "bg-blue-100 text-blue-700",
  };
  return <div className={`${base} ${colors[type]}`}>{children}</div>;
}
