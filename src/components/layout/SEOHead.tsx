import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "P2M Solutions - Innovating Software, Empowering Businesses",
  description = "P2M Solutions provides cutting-edge software development, AI/ML integration, cloud solutions, and workflow automation. Transform your business with our innovative technology solutions.",
  keywords = "software development, AI integration, cloud solutions, automation, web development, mobile apps, machine learning, DevOps, custom software",
  image = "/og-image.png",
  url = "https://p2msolutions.com"
}) => {
  const fullTitle = title.includes('P2M Solutions') ? title : `${title} | P2M Solutions`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'P2M Solutions');

    // Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', 'P2M Solutions', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Additional SEO tags
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('theme-color', '#00d4ff');

    // Add JSON-LD structured data
    const existingJsonLd = document.querySelector('script[type="application/ld+json"]');
    if (existingJsonLd) {
      existingJsonLd.remove();
    }

    const jsonLdScript = document.createElement('script');
    jsonLdScript.type = 'application/ld+json';
    jsonLdScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "P2M Solutions",
      "description": description,
      "url": url,
      "logo": `${url}/logo.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "customer service",
        "email": "contact@p2msolutions.com"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Innovation Drive",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94105",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://linkedin.com/company/p2m-solutions",
        "https://github.com/p2m-solutions",
        "https://twitter.com/p2msolutions"
      ]
    });
    document.head.appendChild(jsonLdScript);

    return () => {
      // Cleanup is handled by React's re-renders
    };
  }, [fullTitle, description, keywords, image, url]);

  return null;
};

export default SEOHead;
