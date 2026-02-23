import { Calendar, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_PHONE = "972523033009"; // Replace with your number (country code + number, no + or 0)
const WHATSAPP_MESSAGE = encodeURIComponent(
  "שלום, אני מעוניין/ת להירשם לסדנת AI. אשמח לקבל פרטים על המועדים וההרשמה.",
);

export function RegisterSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_MESSAGE}`;

  return (
    <section
      id="register"
      className="relative py-8 mx-auto max-w-6xl px-6 flex flex-row gap-10 max-md:flex-col items-stretch justify-center"
    >
      {/* Date/Time banner */}
      <div className="flex flex-1 flex-col items-center justify-centerrounded-2xl border border-primary/30 bg-primary/10 p-8 text-center max-md:mb-0">
        <div className="flex flex-1 flex-col items-center justify-center">
          <span className="text-lg font-semibold uppercase tracking-widest text-primary">
            תחילת סדנה הבאה
          </span>
          <div className="mt-4 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <div className="flex items-center gap-3 flex-col">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold text-foreground">
                תחילת מרץ 2026
              </span>
            </div>
            <div className="hidden h-6 w-px bg-border sm:block" />
            <div className="flex items-center gap-3 flex-col">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold text-foreground">
                לימודי בוקר / ערב
              </span>
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            ניתן ליצור קשר לקבלת פרטים נוספים
          </p>
        </div>
      </div>

      {/* WhatsApp CTA */}

      <div className="flex flex-1 flex-col rounded-2xl border border-border bg-card p-8 md:p-10">
        <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl  mb-8">
          יצירת קשר{" "}
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground mb-6">
          אני רוצה ללמוד איך לבנות אפליקציה בלי ידע בתכנות, בלי תואר, בלי
          ניסיון.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366]  py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
        >
          <FaWhatsapp className="h-10 w-10" />
          אני רוצה לקבל פרטים נוספים
        </a>
      </div>
    </section>
  );
}
