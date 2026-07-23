import { OWNER_NAME } from "@/lib/content";

/** Renders an author string with the site owner's name bolded. */
export default function Authors({ authors }: { authors: string }) {
  const parts = authors.split(OWNER_NAME);

  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <span className="font-semibold text-slate-800">{OWNER_NAME}</span>
          )}
        </span>
      ))}
    </>
  );
}
