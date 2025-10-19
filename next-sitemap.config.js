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
    // Fetch all apps
    const apps = await fetch(
      "https://innovativedigitaltechnologies.software/api/v1/apps"
    ).then((res) => res.json());

    const appPaths = apps.map((app) => ({
      loc: `/apps/${app.path}`,
      changefreq: "daily",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));

    const blogs = await fetch(
      "https://innovativedigitaltechnologies.software/api/v1/blog"
    ).then((res) => res.json());

    const blogPaths = blogs.map((blog) => ({
      loc: `/blog/${blog.id}`,
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date(blog.updatedAt || Date.now()).toISOString(),
    }));

    return [...appPaths, ...blogPaths];
  },
};
