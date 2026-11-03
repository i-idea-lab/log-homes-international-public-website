import Container from "./Container";
import StatCounter from "./StatCounter";
import Reveal from "./Reveal";

// NOTE: "Homes Built" is a placeholder — replace with the real figure (the
// parent company's overall count, since no Oman project has been actioned
// yet as of this build) before this ships. "13+ Years" is real, inherited
// from Log Homes India (est. 2012).
const STATS = [
  { value: 13, suffix: "+", label: "Years of Craftsmanship" },
  { value: 2, suffix: "", label: "Countries — India & Oman" },
  { value: 0, suffix: "+", label: "Homes Built — [PLACEHOLDER: confirm real count]" },
];

export default function StatsStrip() {
  return (
    <section className="bg-paper py-20 border-y border-putty">
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {STATS.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
