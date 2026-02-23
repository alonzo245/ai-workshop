import { Briefcase, TrendingUp, Sparkles, Mic2, Lightbulb } from "lucide-react";

const intro = {
  headline: "התוכנית מיועדת למי שרוצה לבנות בפועל לא ללמוד תאוריה.",
  sub: "לא למי שחולם על מדעי המחשב באוניברסיטה. למי שרוצה תוצאה, אתר חי, אפליקציה עובדת.",
};

const cards = [
  {
    icon: Briefcase,
    number: "1",
    title: "יזמים ובעלי עסקים",
    description:
      "מי שרוצה לבנות דפי נחיתה בעצמו, להפסיק לשלם אלפים על כל שינוי קטן, ולהעלות רעיון לאוויר מהר. אם יש לך רעיונות אבל אין שליטה טכנית.",
  },
  {
    icon: TrendingUp,
    number: "2",
    title: "עובדים שרוצים יתרון תחרותי",
    description:
      "מנהלי שיווק, מוצר, משאבי אנוש, מכירות ותפעול. כל מי שמבין טכנולוגיה ברמה בסיסית ויכול לבנות בעצמאות, מתקדם מקצועית.",
  },
  {
    icon: Sparkles,
    number: "3",
    title: "מחפשי כניסה רכה לעולם הטק",
    description:
      'מי שפוחד מהמילה "קוד", מי שלא עשה מתמטיקה ברמה גבוהה, מי בלי תואר. זו דרך להתחיל לחשוב כמו מפתחים.',
  },
  {
    icon: Mic2,
    number: "4",
    title: "יוצרים ואנשי תוכן",
    description:
      "מרצים, מאמנים, סטנדאפיסטים, יוצרי קורסים. כל מי שרוצה שליטה מלאה בנוכחות הדיגיטלית ולא להיות תלוי באחרים.",
  },
  {
    icon: Lightbulb,
    number: "5",
    title: "אנשים עם רעיון למוצר קטן",
    description:
      "רוצה לבדוק רעיון? לבנות MVP פשוט? ליצור כלי פנימי? זה בדיוק רמת המיומנות הנדרשת.",
  },
];

export function WhoIsItForSection() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-balance text-primary">
            למי התוכנית מתאימה
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            {intro.headline}
          </p>
          <p className="mt-2 text-base text-muted-foreground text-pretty">
            {intro.sub}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.number}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 text-right transition-all duration-300 hover:border-primary/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                  <card.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                  {card.number}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-foreground">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
