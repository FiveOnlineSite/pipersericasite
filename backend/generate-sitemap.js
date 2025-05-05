const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");
const fetch = require("node-fetch"); // or any HTTP client

// Define your routes
const routes = [
  "/",
  "/about",
  "/contact",
  "/public-market-funds",
  "/private-market-funds",
  "/public-market/piper-serica-nemero-uno-india-fund",
  "/public-market/piper-serica-leader-portfolio",
  "/private-market/piper-serica-angel-fund",
  "/our-impact",
  "/investor-letters",
  "/news-and-more",
  "/careers",
  "/foreign-investor",
  "/nri-investor",
  "/family-office-and-indian-investor",
  "/startup-founder-entrepreneur",
  "/privacy-policy",
  "/disclosure",
];

// Generate the sitemap
const generateSitemap = async () => {
  const allRoutes = [...routes];

  // Create the stream to write to the sitemap file
  const sitemap = new SitemapStream({
    hostname: "https://piperserica.onrender.com",
  });

  // Loop through the routes and add them to the sitemap
  allRoutes.forEach((route) => {
    sitemap.write({ url: route, changefreq: "daily", priority: 0.7 });
  });

  sitemap.end();

  // Write the sitemap to a file
  const sitemapOutput = await streamToPromise(sitemap).then((data) =>
    data.toString()
  );
  fs.writeFileSync("public/sitemap.xml", sitemapOutput);
  console.log("Sitemap generated successfully!");
};

// Export the generateSitemap function for use in server.js
module.exports = { generateSitemap };
