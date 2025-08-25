export type HeroData = {
  BannerCollection: {
    title: string;
    caption: string;
    image: {
      fileAsset: { versionPath: string };
    };
  }[];
};

export type ActivitiesData = {
  ProductCollection: {
    title: string;
    urlMap: string;
    category: {
      name: string;
      inode: string;
    };
    retailPrice: number;
    image: {
      fileAsset: { versionPath: string };
    };
  }[];
};

export type EventData = {
  calendarEventCollection: {
    title: string;
    description: string;
    image: {
      fileAsset: { versionPath: string };
    };
  }[];
};

export type BlogData = {
  BlogCollection: {
    title: string;
    urlMap: string;
    teaser: string;
    image: {
      fileAsset: { versionPath: string };
    };
  }[];
};
