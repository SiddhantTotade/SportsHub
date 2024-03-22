import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CardData({ children }: Props) {
  return <div>{children}</div>;
}
