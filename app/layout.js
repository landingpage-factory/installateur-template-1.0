// app/layout.js
import "./globals.css";
import AOSProvider from "./components/AosProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

// app/layout.js oder app/page.js
export const metadata = {
  title: "Installateur-Template v1.0 | Professionelle Website für Handwerksbetriebe",
  description: "Ein modernes und responsives Next.js-Template speziell für Installations- und Handwerksbetriebe. Perfekt für Unternehmen, die eine professionelle Online-Präsenz suchen.",
  keywords: [
    "Installateur-Template",
    "Handwerker-Website",
    "Next.js-Template",
    "Responsive Design",
    "SEO-optimiert",
    "Landingpage-Factory",
    "Professionelle Website",
    "Installationsbetrieb",
    "Sanitär-Website",
    "Heizungsbau-Website"
  ],
  author: "Landingpage-Factory 🚀",
  openGraph: {
    title: "Installateur-Template v1.0 | Professionelle Website für Handwerksbetriebe",
    description: "Ein modernes und responsives Next.js-Template speziell für Installations- und Handwerksbetriebe. Perfekt für Unternehmen, die eine professionelle Online-Präsenz suchen.",
    url: "https://installateur-template-2-0.vercel.app/",
    siteName: "Installateur-Template",
    images: [
      {
        url: "/images/og-image.jpg", // Pfad zu deinem OpenGraph-Bild
        width: 1200,
        height: 630,
        alt: "Installateur-Template v1.0",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Installateur-Template v1.0 | Professionelle Website für Handwerksbetriebe",
    description: "Ein modernes und responsives Next.js-Template speziell für Installations- und Handwerksbetriebe. Perfekt für Unternehmen, die eine professionelle Online-Präsenz suchen.",
    images: ["/images/og-image.jpg"], // Pfad zu deinem Twitter-Bild
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body  suppressHydrationWarning>
      <AOSProvider>
        <Header/>
        {children}
        </AOSProvider>
        <Footer/>
      </body>
    </html>
  );
}
