import type { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
};

function Card({ title, children }: CardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">
        {title}
      </h3>

      {children}
    </div>
  );
}

export default Card;