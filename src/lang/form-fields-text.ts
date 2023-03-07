export type LanguageCode = "pt-br" | "en" | "ja" | "de" | "es";

// Main Language Types and Object

export type FieldContent = {
  value: string;
  placeholder: string;
  description: string | undefined;
};

export type LanguageFields = {
  title: FieldContent;
  description: FieldContent;
  challenges: FieldContent;
  links: FieldContent;
  developedWith: FieldContent;
  whatILearned: FieldContent;
};

type formLanguageTextsType = {
  [K in LanguageCode]: LanguageFields;
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
    challenges: {
      value: "Desafios",
      placeholder:
        "Escreva aqui os desafios a serem superados ou que apareçam no projeto. Separe-os pressionando Enter.",
      description: undefined,
    },
    links: {
      value: "Links",
      placeholder:
        "- URL para o site - [Cloudfare](https://fm--nft-preview-card.pages.dev/)",
      description: "escreva em markdown",
    },
    developedWith: {
      value: "Desenvolvido com...",
      placeholder:
        "Escreva as tecnologias usadas para completar o desafio. Separe-os pressionando Enter",
      description: undefined,
    },
    whatILearned: {
      value: "O que aprendi",
      placeholder:
        "Com este projeto simples, eu aprendi várias possibilidades com Sass! Sass tem se demonstrado cada vez mais e mais incrível, não somente como uma tecnologia muito útil, mas esplêndida para escrever CSS de uma forma muito mais rápida, melhor e prática!",
      description: undefined,
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
    challenges: {
      value: "Challenges",
      placeholder:
        "Write here the challenges to be surpassed or that showed up in the project. Separate it pressing Return",
      description: undefined,
    },
  },
  // ja: {},
  // de: {},
  // ja: {},

};

// Exception fields type and object

export type ExtendedLanguageFields = {
  screenCaptures: {
    value: string;
    subtitles: {
      desktop: FieldContent;
      tablet: FieldContent;
      mobile: FieldContent;
    };
  };
  usefulResources: {
    value: string;
    subtitles: {
      solution: FieldContent;
      link: FieldContent;
      description: FieldContent;
    };
  };
  references: {
    value: string;
    subtitles: {
      platform: FieldContent;
      link: FieldContent;
    };
  };
};

type ExtendedFieldLanguageType = {
  [K in LanguageCode]: ExtendedLanguageFields;
};

const extendedFieldsLanguageTexts: ExtendedFieldLanguageType = {
  "pt-br": {
    screenCaptures: {
      value: "Capturas de tela",
      subtitles: {
        desktop: {
          value: "Desktop",
          placeholder: "Jogue sua imagem aqui",
          description: undefined
        },
        tablet: {
          value: "Tablet",
          placeholder: "Jogue sua imagem aqui",
          description: undefined
        },
        mobile: {
          value: "Mobile",
          placeholder: "Jogue sua imagem aqui",
          description: undefined
        },
      },
    },
    usefulResources: {
      value: "Recursos úteis",
      subtitles: {
        solution: {
          value: "Solução",
          placeholder: "Breve descrição do recurso",
          description: "solução/desafio enfrentado",
        },
        link: {
          value: "Link",
          placeholder: "Link para o recurso",
          description: undefined,

        },
        description: {
          value: "Descrição",
          placeholder: "Longa descrição sobre como este recurso te ajudou a solucionar ou superar seu problema mais facilmente",
          description: undefined
        }
      },
    },
    references: {
      value: "Referências",
      subtitles: {
        platform: {
          value: "Plataforma",
          placeholder: "Nome da plataforma",
          description: undefined
        },
        link: {
          value: "Link",
          placeholder: "Link para a plataforma",
          description: undefined
        }
      }
    }
  },
  en: {},
  // ja: {},
  // de: {},
  // ja: {},
};
