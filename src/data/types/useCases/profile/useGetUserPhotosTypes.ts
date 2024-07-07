export type TUserPhotos = {
    photos: {
      pages: TUserPhotoPage[];
    };
};

export type TUserPhotoPage = {
    id: string;
    source: string;
}