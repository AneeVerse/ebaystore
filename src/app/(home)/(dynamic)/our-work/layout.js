export const metadata = {
  title: "Our Work | Aneeverse",
  description: "Explore our portfolio of digital marketing, web design and development projects that deliver measurable results.",
  openGraph: {
    title: "Our Work | Aneeverse",
    description: "Explore our portfolio of digital marketing, web design and development projects that deliver measurable results.",
    url: `https://aneeverse.com/our-work`,
    images: [
      {
        url: "/images/meta/phone.avif",
        width: 1200,
        height: 630,
        alt: "Our Work | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | Aneeverse",
    description: "Explore our portfolio of digital marketing, web design and development projects that deliver measurable results.",
    image: "/images/meta/phone.avif",
  },
};

// Set revalidation time (in seconds)
export const revalidate = 3600; // 1 hour

export default function OurWorkLayout({ children }) {
  return <>{children}</>;
} 