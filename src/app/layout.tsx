import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "માધવ ઓનલાઇન સેન્ટર | Madhav Online Center",
  description:
    "માધવ ઓનલાઇન સેન્ટર - તમારા તમામ પ્રિન્ટિંગ, ઝેરોક્સ અને ઓનલાઈન સેવાઓ માટે એક વિશ્વસનીય સ્થળ. ડુંગર, પોલીસ સ્ટેશન નજીક, 365555",
  keywords: [
    "માધવ ઓનલાઇન સેન્ટર",
    "ઝેરોક્સ",
    "પ્રિન્ટિંગ",
    "ઓનલાઈન સેવા",
    "ડુંગર",
    "Madhav Online Center",
  ],
  icons: {
    icon: "/madhav-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="gu" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
