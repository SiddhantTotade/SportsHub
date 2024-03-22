import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className: string;
  style?: any;
}

export default function PageCard({ className, children, style }: Props) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
