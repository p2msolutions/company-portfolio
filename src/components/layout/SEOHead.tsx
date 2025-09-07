import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service' | 'project';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "P2M Solutions - Innovating Software, Empowering Businesses",
  description = "P2M Solutions provides cutting-edge software development, AI/ML integration, cloud solutions, and workflow automation. Transform your business with our innovative technology solutions.",
  keywords = "software development, AI integration, cloud solutions, automation, web development, mobile apps, machine learning, DevOps, custom software",
  image = "/og-image.png",
  url = "https://p2msolutions.com",
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'P2M Solutions',
  breadcrumbs = []
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
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'P2M Solutions', true);
    updateMetaTag('og:locale', 'en_US', true);
    
    if (publishedTime) {
      updateMetaTag('article:published_time', publishedTime, true);
    }
    if (modifiedTime) {
      updateMetaTag('article:modified_time', modifiedTime, true);
    }
    if (author && type === 'article') {
      updateMetaTag('article:author', author, true);
    }

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
    
    let structuredData: any = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${url}/#organization`,
          "name": "P2M Solutions",
          "description": "Innovative software development company specializing in AI/ML integration, cloud solutions, and custom software development.",
          "url": url,
          "logo": {
            "@type": "ImageObject",
            "url": `${url}/logo.png`,
            "width": 200,
            "height": 200
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-7369900185",
            "contactType": "customer service",
            "email": "info.p2msolutions@gmail.com",
            "availableLanguage": "English"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Noida Sector 63",
            "addressLocality": "New Delhi",
            "addressRegion": "Delhi",
            "postalCode": "110001",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://linkedin.com/company/p2m-solutions",
            "https://github.com/p2m-solutions"
          ],
          "foundingDate": "2021",
          "numberOfEmployees": "3-10",
          "industry": "Software Development",
          "services": [
            "Web Development",
            "Mobile App Development",
            "AI/ML Integration",
            "Cloud Solutions",
            "DevOps",
            "Workflow Automation"
          ]
        },
        {
          "@type": "WebSite",
          "@id": `${url}/#website`,
          "url": url,
          "name": "P2M Solutions",
          "description": description,
          "publisher": {
            "@id": `${url}/#organization`
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${url}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        }
      ]
    };

    // Add page-specific structured data
    if (type === 'service') {
      structuredData['@graph'].push({
        "@type": "Service",
        "name": title,
        "description": description,
        "provider": {
          "@id": `${url}/#organization`
        },
        "url": url,
        "serviceType": "Software Development"
      });
    } else if (type === 'article' || type === 'project') {
      structuredData['@graph'].push({
        "@type": "Article",
        "headline": title,
        "description": description,
        "author": {
          "@type": "Organization",
          "@id": `${url}/#organization`
        },
        "publisher": {
          "@id": `${url}/#organization`
        },
        "url": url,
        "datePublished": publishedTime || new Date().toISOString(),
        "dateModified": modifiedTime || new Date().toISOString(),
        "image": {
          "@type": "ImageObject",
          "url": image,
          "width": 1200,
          "height": 630
        }
      });
    }

    // Add breadcrumb structured data
    if (breadcrumbs.length > 0) {
      structuredData['@graph'].push({
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      });
    }

    jsonLdScript.textContent = JSON.stringify(structuredData);
    document.head.appendChild(jsonLdScript);

    return () => {
      // Cleanup is handled by React's re-renders
    };
  }, [fullTitle, description, keywords, image, url]);

  return null;
};

export default SEOHead;
