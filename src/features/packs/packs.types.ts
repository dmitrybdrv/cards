export type PacksParamsType = {
  packName?: string;
  min?: number;
  max?: number;
  sortPacks?: { sortWay: number; sortParam: string };
  page?: number;
  pageCount?: number;
  user_id?: string;
  block?: boolean;
} | void;

export type CardPacksType = {
  cardPacks: PackType[];
  cardPacksTotalCount: number;
  maxCardsCount: number;
  minCardsCount: number;
  page: number;
  pageCount: number;
  token: string;
  tokenDeathTime: Date;
};

export type PackType = {
  _id: string;
  user_id: string;
  user_name: string;
  private: boolean;
  name: string;
  path: string;
  grade: number;
  shots: number;
  deckCover: string;
  cardsCount: number;
  type: string;
  rating: number;
  created: Date;
  updated: string;
  more_id: string;
  __v: number;
};

export type TabsType = 'My' | 'All'
