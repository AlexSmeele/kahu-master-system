// Core types used across Kahu UI. Figma Make and Lovable should design against these.

export type Dog = {
  id: string;
  name: string;
  breed?: string;
  ageYears?: number;
  avatarUrl?: string;
};

export type VetClinic = {
  id: string;
  name: string;
  address: string;
  phone?: string;
  website?: string;
  isDefault?: boolean;
};

export type Walker = {
  id: string;
  name: string;
  serviceArea?: string;
  rating?: number;
  isFavourite?: boolean;
};

export type Groomer = {
  id: string;
  name: string;
  serviceArea?: string;
  rating?: number;
  isFavourite?: boolean;
};
