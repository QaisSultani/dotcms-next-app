export const HERO_BANNER_QUERY = `
  query ContentAPI {
    BannerCollection(query: "", limit: 5, offset: 0, sortBy: "score") {
      title
      caption
      image {
        fileAsset {
          versionPath
        }
      }
    }
  }
`;

export const ACTIVITIES_QUERY = `
  query ContentAPI {
    ProductCollection(query: "+title:snow", limit: 20, offset: 0, sortBy: "score") {
      title
      urlMap
      category {
        name
        inode
      }
      retailPrice
      image {
        versionPath
      }
    }
  }
`;

export const EVENTS_QUERY = `
  query ContentAPI {
    calendarEventCollection(query: "", limit: 20, offset: 0, sortBy: "score") {
      title
      description
      image {
        fileAsset {
          versionPath
        }
      }
    }
  }
`;

export const BLOGS_QUERY = `
  query ContentAPI {
    BlogCollection(query: "+tags:(snowboarding OR surfing)", limit: 20, offset: 0, sortBy: "score") {
      title
      urlMap
      teaser
      image {
        fileAsset {
          versionPath
        }
      }
    }
  }
`;
