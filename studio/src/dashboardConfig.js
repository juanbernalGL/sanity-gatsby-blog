export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60aea299c4876e00d57d84fc",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-phhm6q4f",
                  apiId: "1ad7b25b-7736-46a0-b35d-c9fefb1fb751",
                },
                {
                  buildHookId: "60aea29990687e0091f38582",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-puq4b4gb",
                  apiId: "b6257992-61a6-4f91-bf26-4802f261998d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/juanbernalGL/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-puq4b4gb.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
