import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Explore with AK | Akshaykumar Gunari",
  description:
    "Explore with AK — Personal portfolio and knowledge base of Akshaykumar Gunari. Linux Kernel Development, AI/ML, Computer Vision, and Mathematics.",
  keywords: [
    "Akshaykumar Gunari",
    "Explore with AK",
    "Linux Kernel",
    "Device Drivers",
    "AI/ML",
    "Computer Vision",
    "Mathematics",
    "Portfolio",
  ],
  authors: [{ name: "Akshaykumar Gunari" }],
  openGraph: {
    title: "Explore with AK | Akshaykumar Gunari",
    description:
      "Linux Kernel Development, AI/ML, Computer Vision, and Mathematics — all in one place.",
    type: "website",
    url: "https://akshaykumar-gunari.github.io/Portfolio/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
