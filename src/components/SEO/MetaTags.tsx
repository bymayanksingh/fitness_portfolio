import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
}

export default function MetaTags({ 
  title, 
  description, 
  image = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
  type = 'website'
}: MetaTagsProps) {
  const siteUrl = window.location.origin;
  const currentUrl = window.location.href;

  return (
    <Helmet>
      <title>{title} | Apex Fitness</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}