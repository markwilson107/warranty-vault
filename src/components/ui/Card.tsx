import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className? :string;
};

function Card(props: Props) {
  return (
    <div className={`flex w-full bg-theme4 rounded-3xl ${props.className}`}>{props.children}</div>
  );
}

export default Card;
