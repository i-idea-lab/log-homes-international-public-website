export default function Eyebrow({ children }: { children: string }) {
  return (
    <p className="font-body text-xs md:text-sm font-semibold uppercase tracking-eyebrow text-gold mb-4">
      {children}
    </p>
  );
}
