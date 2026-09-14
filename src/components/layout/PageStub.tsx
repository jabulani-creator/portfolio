import { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  children?: ReactNode;
};

export default function PageStub({ title, description, children }: Props) {
  return (
    <div className="mx-auto w-11/12 max-w-3xl py-16">
      <h1 className="text-3xl font-semibold text-cd-txt">{title}</h1>
      <p className="mt-4 leading-relaxed text-cd-shade">{description}</p>
      {children}
    </div>
  );
}
