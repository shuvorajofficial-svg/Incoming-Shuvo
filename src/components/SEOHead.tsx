import { useEffect } from 'react';
import { TravelArticle } from '../types/travel';
import { SITE_METADATA } from '../data/travelData';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  canonicalPath?: string;
  article?: TravelArticle;
  type?: 'website' | 'article';
}

export function SEOHead({
  title,
  description,
  image,
  canonicalPath = '',
  article,
  type = 'website'
}: SEOHeadProps) {
  const fullTitle = title 
    ? `${title} | ${SITE_METADATA.name}`
    : `${SITE_METADATA.name} – ${SITE_METADATA.tagline}`;
  
  const metaDesc = description || (article ? article.seo.metaDescription : "Explore curated travel guides, detailed itineraries, transparent budgets, and documentary photography by Income Shuvo.");
  const shareImage = image || (article ? article.coverImage : "/src/assets/images/hero_sajek_bangladesh_1792879435456.jpg");
  const fullCanonicalUrl = `${SITE_METADATA.canonicalUrl}${canonicalPath}`;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Helper to set or create meta tags
    const setMetaTag = (attr: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard meta
    setMetaTag('name', 'description', metaDesc);
    setMetaTag('name', 'author', article ? article.author : SITE_METADATA.leadAuthor);

    // OpenGraph
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', metaDesc);
    setMetaTag('property', 'og:image', shareImage);
    setMetaTag('property', 'og:url', fullCanonicalUrl);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:site_name', SITE_METADATA.name);

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', metaDesc);
    setMetaTag('name', 'twitter:image', shareImage);

    // Canonical link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', fullCanonicalUrl);

    // 3. Inject JSON-LD Structured Data
    const scriptId = 'structured-data-jsonld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    if (article) {
      // Article / BlogPosting Schema
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": article.title,
        "description": article.excerpt,
        "image": [shareImage],
        "datePublished": article.publishedDate,
        "dateModified": article.updatedDate || article.publishedDate,
        "author": {
          "@type": "Person",
          "name": article.author,
          "url": `${SITE_METADATA.canonicalUrl}/about`
        },
        "publisher": {
          "@type": "Organization",
          "name": SITE_METADATA.name,
          "url": SITE_METADATA.canonicalUrl
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": fullCanonicalUrl
        },
        "keywords": article.seo.keywords.join(", ")
      };
      scriptTag.textContent = JSON.stringify(schemaData);
    } else {
      // General WebSite Schema
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": SITE_METADATA.name,
        "url": SITE_METADATA.canonicalUrl,
        "description": SITE_METADATA.tagline,
        "author": {
          "@type": "Person",
          "name": SITE_METADATA.leadAuthor
        }
      };
      scriptTag.textContent = JSON.stringify(schemaData);
    }
  }, [fullTitle, metaDesc, shareImage, fullCanonicalUrl, article, type]);

  return null;
}
