export const HERO_BANNER_QUERY = `
  query ContentAPI {
    BannerCollection(query: "", limit: 20, offset: 0, sortBy: "score") {
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

export const PRODUCTS_QUERY = `
  query ContentAPI {
    ProductCollection(query: "", limit: 20, offset: 0, sortBy: "score") {
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
    BlogCollection(query: "", limit: 20, offset: 0, sortBy: "score") {
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
