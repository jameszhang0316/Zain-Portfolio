import React from "react";
import { Helmet } from "react-helmet";
import { greeting, seo } from "../../portfolio.js";

function SeoHeader() {
  const data = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: greeting.title,
    url: seo?.og?.url || undefined,
  };
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo?.og?.title} />
      <meta property="og:type" content={seo?.og?.type} />
      <meta property="og:url" content={seo?.og?.url} />
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export default SeoHeader;
