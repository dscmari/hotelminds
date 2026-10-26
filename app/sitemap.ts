import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date();

  return [
    {
      url: "https://www.hotelminds.io/en/",
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: "https://www.hotelminds.io/en/",
          de: "https://www.hotelminds.io/de/",
        },
      },
    },
    {
      url: "https://www.hotelminds.io/de/",
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: "https://www.hotelminds.io/en/",
          de: "https://www.hotelminds.io/de/",
        },
      },
    },
    {
      url: "https://www.hotelminds.io/de/bestehende-hotels/",
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: "https://www.hotelminds.io/de/bestehende-hotels/",
          en: "https://www.hotelminds.io/en/existing-hotel-performance/",
        },
      },
    },
    {
      url: "https://www.hotelminds.io/en/existing-hotel-performance/",
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: "https://www.hotelminds.io/de/bestehende-hotels/",
          en: "https://www.hotelminds.io/en/existing-hotel-performance/",
        },
      },
    },
    {
      url: "https://www.hotelminds.io/de/pre-opening/",
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: "https://www.hotelminds.io/de/pre-opening/",
          en: "https://www.hotelminds.io/en/pre-opening/",
        },
      },
    },
    {
      url: "https://www.hotelminds.io/en/pre-opening/",
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: "https://www.hotelminds.io/de/pre-opening/",
          en: "https://www.hotelminds.io/en/pre-opening/",
        },
      },
    },
    {
      url: "https://www.hotelminds.io/de/about/",
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: "https://www.hotelminds.io/de/about/",
          en: "https://www.hotelminds.io/en/about/",
        },
      },
    },
    {
      url: "https://www.hotelminds.io/en/about/",
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: "https://www.hotelminds.io/de/about/",
          en: "https://www.hotelminds.io/en/about/",
        },
      },
    },
    {
      url: "https://www.hotelminds.io/de/team/",
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: "https://www.hotelminds.io/de/team/",
          en: "https://www.hotelminds.io/en/team/",
        },
      },
    },
    {
      url: "https://www.hotelminds.io/en/team/",
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: "https://www.hotelminds.io/de/team/",
          en: "https://www.hotelminds.io/en/team/",
        },
      },
    },
    {
      url: "https://www.hotelminds.io/de/impressum/",
      lastModified: lastMod,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          de: "https://www.hotelminds.io/de/impressum/",
          en: "https://www.hotelminds.io/en/imprint/",
        },
      },
    },
    {
      url: "https://www.hotelminds.io/en/imprint/",
      lastModified: lastMod,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          de: "https://www.hotelminds.io/de/impressum/",
          en: "https://www.hotelminds.io/en/imprint/",
        },
      },
    },
    {
      url: "https://www.hotelminds.io/de/datenschutz/",
      lastModified: lastMod,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          de: "https://www.hotelminds.io/de/datenschutz/",
          en: "https://www.hotelminds.io/en/privacy/",
        },
      },
    },
    {
      url: "https://www.hotelminds.io/en/privacy/",
      lastModified: lastMod,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          de: "https://www.hotelminds.io/de/datenschutz/",
          en: "https://www.hotelminds.io/en/privacy/",
        },
      },
    },
    {
      url: "https://www.hotelminds.io/de/agb/",
      lastModified: lastMod,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          de: "https://www.hotelminds.io/de/agb/",
          en: "https://www.hotelminds.io/en/terms/",
        },
      },
    },
    {
      url: "https://www.hotelminds.io/en/terms/",
      lastModified: lastMod,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          de: "https://www.hotelminds.io/de/agb/",
          en: "https://www.hotelminds.io/en/terms/",
        },
      },
    },
  ];
}
