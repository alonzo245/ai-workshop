import Image from "next/image";

const instructors = [
  {
    name: "",
    role: "",
    bio: "",
    image: "",
  },
];

export function InstructorsSection() {
  return (
    <section id="instructors" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            מדריך הסנדה
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Learn from the Best in the Field
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {instructors.map((instructor) => (
            <div
              key={instructor.name}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/15 text-2xl font-bold text-primary">
                {instructor.image}
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">
                {instructor.name}
              </h3>
              <p className="text-sm font-medium text-primary">
                {instructor.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {instructor.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
