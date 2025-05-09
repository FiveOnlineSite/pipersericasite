// MetaTagComponent.js
import React, { useEffect } from "react";
import axios from "axios";

const MetaTagComponent = () => {
  useEffect(() => {
    const fetchMetaTag = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;

        // Get the current page path from the URL
        const pathSegments = window.location.pathname.split("/");
        const page = pathSegments[pathSegments.length - 1]; // Extract last part of the URL (e.g., "about", "contact")

        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: `meta-tag/by-page/${page}`,
        });

        const metaTag = response.data;

        // Set document title
        document.title = metaTag.metaTitle || "Default Title";

        // Update or create meta description
        let metaDescription = document.querySelector(
          'meta[name="description"]'
        );
        if (metaDescription) {
          metaDescription.setAttribute(
            "content",
            metaTag.metaDescription || "Default description"
          );
        } else {
          metaDescription = document.createElement("meta");
          metaDescription.name = "description";
          metaDescription.content =
            metaTag.metaDescription || "Default description";
          document.head.appendChild(metaDescription);
        }

        // Optional: set meta title (not commonly used)
        let metaTitle = document.querySelector('meta[name="title"]');
        if (metaTitle) {
          metaTitle.setAttribute(
            "content",
            metaTag.metaTitle || "Default Title"
          );
        } else {
          metaTitle = document.createElement("meta");
          metaTitle.name = "title";
          metaTitle.content = metaTag.metaTitle || "Default Title";
          document.head.appendChild(metaTitle);
        }

        // Add the canonical tag dynamically
        const canonicalUrl = `${window.location.origin}${window.location.pathname}`;
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (linkCanonical) {
          linkCanonical.setAttribute("href", canonicalUrl);
        } else {
          linkCanonical = document.createElement("link");
          linkCanonical.rel = "canonical";
          linkCanonical.href = canonicalUrl;
          document.head.appendChild(linkCanonical);
        }
      } catch (error) {
        console.error("Error fetching meta tag:", error);
      }
    };

    fetchMetaTag();
  }, []);

  return null; // This component doesn't need to render anything
};

export default MetaTagComponent;
