import React from 'react';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import SlidingLogos from '@/components/home/SlidingLogos';
import { client } from '@/sanity/lib/client';
import { getPortfolioWorksQuery } from '@/sanity/lib/queries';

// Set revalidation time directly in the server component
export const revalidate = 3600; // 1 hour

// Fetch portfolio items from Sanity
async function getPortfolioItems() {
  return await client.fetch(getPortfolioWorksQuery);
}

export default async function OurWorkPage() {
  const portfolioItems = await getPortfolioItems();
  
  return (
    <div>
      <div className='mt-[40px]'>
        <PortfolioHero />
        <SlidingLogos />
        <PortfolioGrid portfolioItems={portfolioItems} />
      </div>
    </div>
  );
} 