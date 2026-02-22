import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">
              סדנת פיתוח אפליקציות עם
            </span>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">
                AI
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            {/* Add links as needed */}
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          {/* <p>support@codeshiftai.com</p>
          <p className="mt-2">
            Still have questions? Reach us on WhatsApp or email.
          </p> */}
        </div>
      </div>
    </footer>
  );
}
