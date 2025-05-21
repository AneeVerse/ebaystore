'use client';

// Components only needed in root layout
import NextTopLoader from 'nextjs-toploader';
import { usePathname } from 'next/navigation';

export default function HomeLayout({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/register' || pathname === '/login';

  return (
    <>
      <NextTopLoader
        color="#0e2f50"
        initialPosition={0.08}
        height={3}
        showSpinner={false}
        easing="ease"
        speed={500}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      />
      {children}
    </>
  );
}