/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://innovativedigitaltechnologies.software", // your preferred domain
  generateRobotsTxt: true,
  transform: async (config, url) => {
    return {
      loc: url, // The URL
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    const apps = await fetch(
      "https://innovativedigitaltechnologies.software/api/v1/apps"
    ) // fetch all app IDs
      .then((res) => res.json());

    return apps.map((app) => ({
      loc: `/apps/${app.path}`,
      changefreq: "daily",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
};
