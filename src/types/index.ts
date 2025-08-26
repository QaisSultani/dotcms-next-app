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
    }[];
    retailPrice: number;
    image: {
      versionPath: string;
    };
  }[];
};

export type EventsData = {
  calendarEventCollection: {
    title: string;
    description: string;
    image: {
      fileAsset: { versionPath: string };
    };
  }[];
};

export type BlogsData = {
  BlogCollection: {
    title: string;
    urlMap: string;
    teaser: string;
    image: {
      fileAsset: { versionPath: string };
    };
  }[];
};
