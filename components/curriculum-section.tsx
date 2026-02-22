import { CheckCircle2 } from "lucide-react";

const modules = [
  {
    number: "01",
    title: "הבנת המורכבות",
    description:
      "למה רוב האנשים נתקעים כשמנסים לבנות אפליקציה, ואיך שוברים את המחסום הזה גם בלי רקע טכני.",
    topics: [
      "למה רעיונות נתקעים בשלב הביצוע",
      "איך להפוך רעיון גדול לשלבים פשוטים",
      "מודל עבודה ברור: הבנה, תכנון, בנייה",
    ],
  },
  {
    number: "02",
    title: "עבודה נכונה עם AI",
    description:
      "AI יכול לבנות בשבילך, אם יודעים להנחות אותו נכון. זה המנוף הכי חזק שיש היום למי שלא מתכנת.",
    topics: [
      "איך לנסח בקשות שמייצרות תוצאה מדויקת",
      "איך לנהל פרויקט אפליקטיבי בעזרת AI",
      "איך לעבוד עם כמה חלקים במקביל בלי ללכת לאיבוד",
    ],
  },
  {
    number: "03",
    title: "בניית אפליקציה אמיתית",
    description: "כאן מפסיקים לדבר, ומתחילים לבנות.",
    topics: [
      "יצירת מסכים וחוויית משתמש",
      "חיבור לוגיקה ובסיס נתונים",
      "טיפול בטעויות ושיפור המערכת",
      "עבודה נכונה כשמשהו לא עובד",
    ],
  },
  {
    number: "04",
    title: "אבטיפוס למוצר עובד",
    description: "לא מספיק לבנות. צריך גם לדעת להעלות לאוויר ולהשתמש בזה באמת.",
    topics: [
      "איך לבדוק שהאפליקציה יציבה",
      "איך לפרסם אותה לשימוש אמיתי",
      "איך לשפר ולפתח גרסאות מתקדמות",
      "איך להפוך כלי אישי למוצר שמייצר ערך",
    ],
  },
];

export function CurriculumSection() {
  return (
    <section id="curriculum" className="relative py-24">
      {/* Teal banner divider */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-primary" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            תוכנית הלימוד
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            מה תלמדו בסדנה החיה{" "}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            סדנה פרקטית וממוקדת שבה בונים אפליקציה אמיתית שלב-אחר-שלב. בלי
            תאוריה מיותרת. עם תרגול, הדגמות חיות וכלים שאפשר ליישם מיד.{" "}
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {modules.map((mod) => (
            <div
              key={mod.number}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50"
            >
              <div className="absolute -right-6 -top-6 text-8xl font-black text-primary/5 transition-colors group-hover:text-primary/10">
                {mod.number}
              </div>
              <div className="relative">
                <div className="mb-1 text-xs font-bold uppercase tracking-widest text-primary">
                  מודול {mod.number}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {mod.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {mod.description}
                </p>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {mod.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-2.5 text-sm text-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
