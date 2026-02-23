"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "האם אני צריך להיות מתכנת?",
    answer:
      "ממש לא. הלמידה היא איך להיות המנהל עבודה של ה-AI, האסטרטגיה והכלים מבצעים את הכתיבה.",
  },
  {
    question: "למי מיועדת הסדנה הזו?",
    answer:
      "הסדנה מתאימה למי שיש לו נסיון מועט והבנה בסיסית במחשבים ורוצה להתקדם מביצוע משימות פשוטות לבניית תכונות מורכבות ורציניות בפרויקטים אמיתיים.",
  },
  {
    question: "האם נדרש ניסיון קודם ב-AI או ML?",
    answer: "הסדנה ממוקדת ביישום מעשי, לא בתיאוריה.",
  },
  {
    question: "איזה טכנולוגיה לומדים?",
    answer:
      "הבנה בסיסית של שפות נדרשות וטכנולוגיות שניתן להשתמש בהן בפרויקטים אמיתיים.",
  },
  {
    question: "האם תהיה הקלטה של הסדנה?",
    answer: "לא.",
  },
];

export function FAQSection() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          {/* <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            *
          </span> */}
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            שאלות נפוצות
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card transition-colors"
            >
              <button
                id={`faq-question-${i}`}
                onClick={() => toggle(i)}
                className="flex min-h-[44px] w-full min-w-[44px] items-center justify-between px-6 py-5 text-left"
                aria-expanded={openIndices.has(i)}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-base font-semibold text-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openIndices.has(i) ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>
              {openIndices.has(i) && (
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className="px-6 pb-5"
                >
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
