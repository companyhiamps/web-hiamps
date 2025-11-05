import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hiamps Batteries & Inverters | Sunrise Industries - Reliable Power Solutions",
  description:
    "Hiamps by Sunrise Industries offers long-lasting tubular batteries, inverters, lithium batteries, and power backup solutions across South India. Trusted performance and quality beyond your need.",
  keywords: [
    "Hiamps Batteries",
    "Sunrise Industries",
    "Tubular Battery",
    "Solar Battery",
    "Inverter and UPS",
    "Lithium Battery",
    "Power Backup Solutions",
    "Battery Trolley Cabinets",
    "Bangalore Battery Manufacturer",
    "Best Inverter Batteries South India",
  ],
  authors: [{ name: "Sunrise Industries", url: "https://hiamps.co" }],
  openGraph: {
    title: "Hiamps | Reliable Batteries & Power Solutions by Sunrise Industries",
    description:
      "Discover Hiamps Tubular, Lithium, and Solar Batteries — built for performance and longevity. Trusted by homes, businesses, and industries across South India.",
    url: "https://hiamps.co",
    siteName: "Hiamps Batteries",
    images: [
      {
        url: "/images/pages/banner/hiamps-all-products.webp", // place your image in public/images/
        width: 1200,
        height: 630,
        alt: "Hiamps Batteries by Sunrise Industries",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiamps Batteries & Inverters | Reliable Power Solutions",
    description:
      "Power your home or business with Hiamps Batteries from Sunrise Industries. Long life, strong performance, and solar-ready energy solutions.",
    images: ["/images/pages/banner/hiamps-all-products.webp"],
    creator: "@hiamps",
  },
  alternates: {
    canonical: "https://hiamps.co",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "Power Solutions",
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
