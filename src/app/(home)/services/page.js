import Link from "next/link";

const ebayServices = [
  { name: "eBay Store Setup", slug: "ebay-store-setup" },
  { name: "Custom Store Design", slug: "custom-store-design" },
  { name: "Product Listing Optimization", slug: "product-listing-optimization" },
  { name: "Product Photography", slug: "product-photography" },
  { name: "Inventory Management", slug: "inventory-management" },
  { name: "Promotions & Offers Management", slug: "promotions-offers-management" },
  { name: "Seasonal Campaign Planning", slug: "seasonal-campaign-planning" },
  { name: "Email Marketing for eBay Customers", slug: "email-marketing-ebay-customers" },
  { name: "Performance Analytics & Reporting", slug: "performance-analytics-reporting" },
  { name: "Competitor Analysis", slug: "competitor-analysis" },
  { name: "eBay Policy Compliance Assistance", slug: "ebay-policy-compliance-assistance" },
  { name: "Cross-Border Selling Support", slug: "cross-border-selling-support" },
  { name: "Account Suspension Recovery", slug: "account-suspension-recovery" },
  { name: "Order Management & Fulfillment", slug: "order-management-fulfillment" },
  { name: "Customer Support Management", slug: "customer-support-management" },
  { name: "Return & Refund Management", slug: "return-refund-management" },
  { name: "Feedback Management", slug: "feedback-management" },
  { name: "eBay Ads Campaign Management", slug: "ebay-ads-campaign-management" },
  { name: "eBay Dropshipping Assistance", slug: "ebay-dropshipping-assistance" },
  { name: "eCommerce Website Design", slug: "ecommerce-website-design" },
  { name: "Creative Assets for eBay", slug: "creative-assets-ebay" },
];

export default function ServicesPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">eBay Services</h1>
      <ul className="space-y-3">
        {ebayServices.map(service => (
          <li key={service.slug}>
            <Link href={`/services/${service.slug}`} className="text-blue-600 hover:underline text-lg">
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 