import CaseStudyContent from "@/components/CaseStudy/CaseStudyContent/CaseStudyContent";
import CaseStudyLayout from "@/components/CaseStudy/CaseStudyLayout/CaseStudyLayout";
import { BASE_URL } from "@/constants/metadata";
import Script from "next/script";

const CASE_STUDY_URL = `${BASE_URL}/projects/cj-stats`;

export function generateMetadata() {
  return {
    title: "CJ Statistics Case Study | Moamal Alaa",
    description:
      "A frontend case study about building CJ Statistics, a data-heavy Call of Duty jumping statistics application with Next.js, Redux Toolkit, MessagePack, and accessible UI architecture.",
    alternates: { canonical: CASE_STUDY_URL },
    openGraph: {
      title: "CJ Statistics Case Study | Moamal Alaa",
      description:
        "How I built and evolved the frontend of a data-heavy Call of Duty statistics application.",
      url: CASE_STUDY_URL,
      type: "article",
      siteName: "Moamal Alaa Portfolio",
      locale: "en_US",
      publishedTime: "2026-09-13",
      authors: ["Moamal Alaa"],
      images: [
        {
          url: `${BASE_URL}/images/call-of-duty-2-stats-project.webp`,
          alt: "CJ Statistics case study",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "CJ Statistics Case Study | Moamal Alaa",
      description:
        "How I built and evolved the frontend of a data-heavy Call of Duty statistics application.",
      images: [`${BASE_URL}/images/call-of-duty-2-stats-project.webp`],
    },
  };
}

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "CJ Statistics: Building a data-heavy frontend",
  description:
    "A frontend case study about building CJ Statistics, a Call of Duty jumping statistics application.",
  author: { "@type": "Person", name: "Moamal Alaa", url: BASE_URL },
  publisher: { "@type": "Person", name: "Moamal Alaa" },
  url: CASE_STUDY_URL,
  image: `${BASE_URL}/images/call-of-duty-2-stats-project.webp`,
  datePublished: "2026-09-13",
  mainEntityOfPage: CASE_STUDY_URL,
  keywords: [
    "Next.js",
    "Redux Toolkit",
    "MessagePack",
    "web accessibility",
    "frontend architecture",
  ],
};

export default function CJStatsCaseStudy() {
  return (
    <>
      <main id="main-content">
        <CaseStudyLayout>
          <CaseStudyContent />
        </CaseStudyLayout>
      </main>

      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }}
      />
    </>
  );
}
