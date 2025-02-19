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

export type District = {
  id: number;
  cityId: number;
  code: number;
  slug: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Subdistrict = {
  id: number;
  districtId: number;
  code: number;
  slug: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};
