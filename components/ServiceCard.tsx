import Reveal from "./Reveal";

export default function ServiceCard({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <Reveal>
      <div className="grid grid-cols-[auto,1fr] gap-6 md:gap-10 py-10 border-b border-putty">
        <span className="font-display text-2xl md:text-3xl text-gold">
          {String(index).padStart(2, "0")}
        </span>
        <div>
          <h3 className="font-display text-2xl md:text-3xl text-brand mb-3">
            {title}
          </h3>
          <p className="font-body text-neutral leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
