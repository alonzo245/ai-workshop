import { Gift, Lightbulb, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Lightbulb,
    title: "מסגרת עבודה מוכחת",
    description:
      "תקבל מסגרת ברורה צעד-אחר-צעד שתוכל ליישם על כל אפליקציה או פרויקט, פשוטים ומורכבים כאחד.",
  },
  {
    icon: Gift,
    title: "דוגמאות קוד אמיתיות",
    description:
      "כל רעיון מלווה בקוד עובד שמופעל בזמן אמת. בלי תאוריה מיותרת, בלי מצגות, רק קוד אמיתי שאתה יכול וליישם.",
  },
  {
    icon: Rocket,
    title: "יתרון תחרותי",
    description:
      "מי שיודע להשתמש ב-AI נכון לבניית אפליקציות, בונה מהר יותר, חכם יותר, ומקדים את רוב המתחרים. בסדנה הזו תקבל את הכלים שמציבים אותך מעל 95% מהשוק.",
  },
];

export function BenefitsSection() {
  return (
    <section className="relative py-20">
      {/* Gradient banner */}
      <div className="bg-primary/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              למה חשוב לי?
            </span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
              עם מה אני יוצא מהסדנה?
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary/40"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
