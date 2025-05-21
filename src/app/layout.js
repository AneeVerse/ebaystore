'use client';

import "./globals.css";
import Navbar from '@/components/layout/Navbar';
import NewFooter from '@/components/layout/NewFooter';
import NextTopLoader from 'nextjs-toploader';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith('/studio');
  const isAuth = pathname === '/register' || pathname === '/login';

  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
        
        {/* GTM script */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TKVM4FRW');
          `}
        </Script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TKVM4FRW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* Top Loader */}
        <NextTopLoader
          color="#0e2f50"
          initialPosition={0.08}
          height={3}
          showSpinner={false}
          easing="ease"
          speed={500}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />

        {/* Navbar for all non-studio, non-auth pages */}
        {!isStudio && !isAuth && <Navbar />}

        {/* Page content */}
        {children}

        {/* Footer for all non-studio, non-auth pages */}
        {!isStudio && !isAuth && <NewFooter />}
      </body>
    </html>
  );
}