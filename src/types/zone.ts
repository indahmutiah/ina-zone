export type Province = {
  id: number;
  code: number;
  slug: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type City = {
  id: number;
  provinceId: number;
  code: number;
  slug: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};
