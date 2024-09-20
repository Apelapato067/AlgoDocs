import { PropsWithChildren } from "react";

export default function Note({
  children,
  title = "Important",
}: PropsWithChildren & { title?: string }) {
  return (
    <div className="dark:bg-stone-900 bg-stone-100 border rounded-md py-0.5 px-3.5 text-sm">
      <p className="font-semibold -mb-2">{title}:</p> {children}
    </div>
  );
}
