import { Children } from "react";

type Props = {
  children: React.ReactNode;
  defaultMode?: boolean;
};

export function Reverse({ children, defaultMode = true }: Props) {
  if (defaultMode) {
    return Array.from(children as React.ReactElement[])
      .reverse()
      .map((item) => item);
  }

  return Children.toArray(children)
    .reverse()
    .map((item) => item);
}
