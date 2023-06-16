export interface Foods {
  label: string;
  count: number;
  image: string;
}

export type CaraouselProps = {
  foods: Foods[];
};

export interface Trending {
  image: string;
  title: string;
  label: string;
  raiting: number;
  backgroundColor: string;
}
