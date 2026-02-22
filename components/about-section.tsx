import { Zap, Brain, Code, Workflow } from "lucide-react";

const painPoints = [
  "אפליקציה עובדת שבנית בעצמך.",
  "הבנה איך לבנות אפליקציות נוספות.",
  "יכולת ליצור כלים לעצמך או לעסק שלך.",
  "יתרון משמעותי בעולם שהופך ליותר ויותר טכנולוגי.",
  "ביטחון ליצור, לבנות, ולשלוט בטכנולוגיה.",
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Pain points */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance  mb-0.5">
            העולם השתנה מי שלא בונה, נשאר מאחור.
          </h2>
          <div className="text-lg leading-relaxed text-muted-foreground text-pretty">
            היום אפליקציות מנהלות עסקים, מוכרות שירותים, ומייצרות הכנסה, בסוף
            התהליך:
          </div>
          <div className="mt-10 flex flex-col gap-4">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 text-left"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                  {i + 1}
                </span>
                <p className="text-base leading-relaxed text-muted-foreground text-right">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution statement */}
        <div className="mt-20 rounded-2xl border border-primary/30 bg-primary/5 p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl text-balance">
              הפתרון: שיטה לבניית אפליקציות, בלי לדעת לתכנת
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              התוכנית הזו נותנת לך מסגרת עבודה ברורה שהופכת רעיון לאפליקציה
              אמיתית, משלב הרעיון ועד אפליקציה עובדת, בלי ידע קודם, בלי תלות
              במפתחים.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Brain,
                title: "מחקר",
                desc: "הגדר את הרעיון שלך בצורה נכונה לפני שבונים משהו. תלמד איך לחשוב כמו בונה מוצרים, לא כמו משתמש.",
              },
              {
                icon: Workflow,
                title: "תכנון",
                desc: "פרק את האפליקציה שלך לשלבים פשוטים וברורים. תבין בדיוק מה צריך לבנות, באיזה סדר, ואיך לעשות את זה נכון.",
              },
              {
                icon: Code,
                title: "בנייה",
                desc: "השתמש בכלים מודרניים ו-AI כדי לבנות אפליקציה אמיתית, גם בלי ניסיון קודם. תיצור ממשק, לוגיקה, וחוויית משתמש מלאה.",
              },
              {
                icon: Zap,
                title: "ייצור",
                desc: "העלה את האפליקציה שלך לאוויר והתחל להשתמש בה בפועל. הפוך רעיון למוצר עובד, כזה שאתה שולט בו.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center rounded-xl bg-background p-6 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="mt-4 text-base font-semibold text-foreground">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
