export type TUserPhotos = {
  photos: {
    pages: TUserPhotoPage[];
    userPhoto?: string;
  };
};

export type TUserPhotoPage = {
  id: string;
  source: string;
};
