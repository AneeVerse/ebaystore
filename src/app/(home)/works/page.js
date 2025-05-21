'use client';

import React, { useEffect, useState } from 'react';
import SlidingLogos from '@/components/home/SlidingLogos'
import AIDesignSection from '@/components/pricing/AIDesignSection'
import CreativeStatsOurWorks from '@/components/works/CreativeStatsOurWorks'
import OurWorkSection from '@/components/works/OurWorkSection'
import { client } from '@/sanity/lib/client';
import { getPortfolioWorksQuery } from '@/sanity/lib/queries';

// Note: Metadata has been moved to metadata.js file to fix 
// the "cannot export metadata from a client component" error
// Note: Revalidation should be configured in a server component, not a client component

const WorksPage = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function fetchPortfolioItems() {
      try {
        const data = await client.fetch(getPortfolioWorksQuery);
        setPortfolioItems(data);
        console.log("Fetched portfolio items:", data);
      } catch (error) {
        console.error('Error fetching portfolio items:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchPortfolioItems();
  }, []);

  return (
    <div>
      <CreativeStatsOurWorks/>
      <SlidingLogos/>
      <OurWorkSection portfolioItems={portfolioItems} isLoading={isLoading} />
      <AIDesignSection/>
    </div>
  )
}

export default WorksPage