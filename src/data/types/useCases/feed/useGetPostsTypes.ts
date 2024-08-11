export type TPost = {
  feed: {
    userName: string;
    userProfile: string;
    posts: {
      id: number;
      source: string;
      likes: number;
      comments: number;
    }[];
  };
};
