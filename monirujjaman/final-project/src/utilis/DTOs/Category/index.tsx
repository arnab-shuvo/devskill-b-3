export interface CategoryCreateDto {
  name: string;
  description: string;
}

export interface CategoryReadDto {
  _id: object;
  name: string;
  description: string;
}
