import { ReactNode } from "react";

type Props = {
  id?: string;
  children?: ReactNode;
  className?: string;
  type: "tight" | "wide";
};

function Section(props: Props) {
  return (
    <section
      id={props.id}
      className={`max-w-screen-xl md:max-w-screen-xl mx-auto flex items-center ${
        props.type === "tight" ? "px-6 md:px-8 lg:px-24" : "px-4"
      } ${props.className || ""}`}
    >
      {props.children}
    </section>
  );
}

export default Section;
