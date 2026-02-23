import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background wave SVG */}
      <div className="pointer-events-none absolute inset-0">
        <svg
          className="absolute bottom-0 left-0 right-0 h-[60%] w-full"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 300C240 180 480 420 720 300C960 180 1200 420 1440 300V600H0V300Z"
            fill="url(#wave-gradient)"
            opacity="0.08"
          />
          <path
            d="M0 350C300 250 600 450 900 350C1200 250 1350 400 1440 350V600H0V350Z"
            fill="url(#wave-gradient-2)"
            opacity="0.05"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="600">
              <stop offset="0%" stopColor="#00C2CB" />
              <stop offset="100%" stopColor="#0B1628" />
            </linearGradient>
            <linearGradient
              id="wave-gradient-2"
              x1="0"
              y1="0"
              x2="1440"
              y2="600"
            >
              <stop offset="0%" stopColor="#0B1628" />
              <stop offset="100%" stopColor="#00C2CB" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Top glow accent */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-32 pb-20 lg:pt-40">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
          <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          <span className="text-xs font-medium text-primary">
            סדנה הבאה - תחילת מרץ 2026
          </span>
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl text-center text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
          לבנות אפליקציה בלי לדעת{" "}
          <span className="text-primary">
            לתכנת, בלי תואר, בלי ניסיון קודם.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground text-pretty">
          סדנת פיתוח אפליקציות עם AI <br /> למדו איך להפוך חזון עסקי למוצר עובד,
          שלב אחרי שלב.
          <br />
          גם אם מעולם לא כתבת שורת קוד, אתה יכול לבנות אפליקציה אמיתית, לפרסם
          אותה, ולהשתמש בה לעסק שלך, ללימודים, או לרעיון שתמיד רצית להגשים.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex items-center gap-4 w-full justify-center">
          <Button asChild size="lg" className="gap-2 px-8 text-base">
            <Link href="#register">
              <ArrowRight className="h-4 w-4 rotate-180" />
              שמירת מושב
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 border-border px-8 text-base text-foreground hover:bg-secondary"
          >
            <Link href="#curriculum">
              <Play className="h-4 w-4 rotate-180" />
              תוכנית הלימודים
            </Link>
          </Button>
        </div>

        {/* Info chips */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            ארגונים / נוער
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            קבוצות מוסדות / עסקים
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            עצמאים / פרילנסרים
          </div>
        </div>

        {/* Hero Image - picture for WebP when available, decoding async for LCP */}
        <div className="relative mt-16 w-full max-w-4xl">
          <div className="absolute -inset-1 rounded-2xl bg-primary/20 blur-xl" />
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <picture>
              <source
                type="image/webp"
                srcSet={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/classroom.webp`}
              />
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/classroom.webp`}
                alt="Live coding workshop with instructor teaching AI development to a group of developers"
                width={1200}
                height={675}
                className="w-full object-cover"
                decoding="async"
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <div className="rounded-lg bg-background/80 px-4 py-2 backdrop-blur-sm">
                <p className="text-xs font-medium text-primary">סדנאות</p>
                <p className="text-sm text-foreground">אונליין / בכיתות</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
