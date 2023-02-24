export type FieldContent = {
  value: string;
  placeholder: string;
  description: string | undefined;
};

export type LanguageOption = {
  title: FieldContent;
  description: FieldContent;
};

type formLanguageTextsType = {
  [langcode: string]: LanguageOption;
};

export const formLanguageTexts: formLanguageTextsType = {
  "pt-br": {
    title: {
      value: "Título",
      placeholder: "Frontend Mentor - NFT preview card component",
      description: undefined,
    },
    description: {
      value: "Descrição",
      placeholder:
        "Esta é uma resolução ao desafio NFT Preview Card Component por Frontend Mentor.",
      description: "uma curta descrição do objetivo do projeto",
    },
  },
  en: {
    title: {
      value: "Title",
      placeholder: "Frontend Mentor - NFT preview card component",
      description: undefined,
    },
    description: {
      value: "Description",
      placeholder: "Frontend Mentor - NFT preview card component",
      description: "a short description of the project's objective",
    },
  },
};
