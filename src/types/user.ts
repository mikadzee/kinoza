export interface User {
  id: number;

  username: string;
  email: string;

  avatar: string | null;

  isPremium: boolean;
  tariff: string | null;

  friendsCount: number;
  favoritesCount: number;

  createdAt: string;
}
