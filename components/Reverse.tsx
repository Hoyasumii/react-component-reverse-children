import { Children } from "react";

type Props = {
  children: React.ReactNode;
};

export function Reverse({ children }: Props) {
  return Children.toArray(children).reverse().map((item) => item);
}
