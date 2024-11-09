export type TPost = {
  id: number;
  source: string;
  likes: number;
  comments: number;
  postWhenInHours: number;
};

export type TFeed = {
  userName: string;
  userProfile: string;
  posts: TPost;
};

export type TPosts = {
  feed: TFeed[];
};
