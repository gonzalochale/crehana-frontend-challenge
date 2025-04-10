export type Language = {
  name: string;
};

export type Continent = {
  name: string;
};

export type Currency = {
  name: string;
};

export type Country = {
  code: string;
  name: string;
  currency: string;
  emoji: string;
  continent: Continent;
  languages: Language[];
  capital: string;
};
