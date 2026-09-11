"use client";

import { useEffect } from "react";
import BrandHeader from "@/components/BrandHeader";
import LinkList from "@/components/LinkList";
import Footer from "@/components/Footer";
import { trackPageView } from "@/components/analytics";

export default function HomePage() {
  useEffect(() => {
    trackPageView();
  }, []);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-page flex-col items-center justify-start px-5 py-12 sm:py-16">
      <BrandHeader />
      <div className="mt-8 w-full">
        <LinkList />
      </div>
      <Footer />
    </main>
  );
}
