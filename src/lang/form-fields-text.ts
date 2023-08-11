export type LanguageCode = "pt-br" | "en" | "ja" | "de" | "es";

// Main Language fields types and object

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

type LanguageFieldsTextType = {
  [K in LanguageCode]: LanguageFields;
};

export const LanguageFieldsText: LanguageFieldsTextType = {
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
        "Escreva as techs usadas para completar o desafio. Separe-os com Enter.",
      description: undefined,
    },
    whatILearned: {
      value: "O que aprendi",
      placeholder:
        "Escreva um pouco sobre o que você aprendeu, dificuldades e como as superou.",
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
      placeholder: "This is a resolution for the Frontend Mentor's NFT Preview Card Component challenge.",
      description: "a short description of the project's objective",
    },
    challenges: {
      value: "Challenges",
      placeholder:
        "Write here the challenges to be surpassed or that showed up in the project. Separate it pressing Return",
      description: undefined,
    },
    links: {
      value: "Links",
      placeholder:
        "- URL for the website - [Cloudfare](https://fm--nft-preview-card.pages.dev/)",
      description: "write in markdown",
    },
    developedWith: {
      value: "Developed with...",
      placeholder:
        "Write the stack used for completing the challenge. Separate them by pressing enter",
      description: undefined,
    },
    whatILearned: {
      value: "What I learned",
      placeholder:
        "With this simple project, I learned many possibilities with Sass! Sass has proven to be more and more incredible, not only as a very useful technology, but also splendid for wariting CSS in a very fast, better and practical way!",
      description: undefined,
    },
  },
  // ja: {},
  // de: {},
  // ja: {},

};

// Extended language fields types and objects

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
  socials: {
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

export const extendedLanguageFieldsText: ExtendedFieldLanguageType = {
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
    socials: {
      value: "Sites e Mídias sociais",
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
  en: {
    screenCaptures: {
      value: "Screen captures",
      subtitles: {
        desktop: {
          value: "Desktop",
          placeholder: "Drop your image here",
          description: undefined
        },
        tablet: {
          value: "Tablet",
          placeholder: "Drop your image here",
          description: undefined
        },
        mobile: {
          value: "Mobile",
          placeholder: "Drop your image here",
          description: undefined
        },
      },
    },
    usefulResources: {
      value: "Useful resources",
      subtitles: {
        solution: {
          value: "Solution",
          placeholder: "Short description of the resource",
          description: "Faced challenge/solution",
        },
        link: {
          value: "Link",
          placeholder: "Resource's link",
          description: undefined,

        },
        description: {
          value: "Description",
          placeholder: "Long description about how this resource has helped you solving or overcome your problem more easily.",
          description: undefined
        }
      },
    },
    socials: {
      value: "Website and Socials",
      subtitles: {
        platform: {
          value: "Platform",
          placeholder: "Website's name",
          description: undefined
        },
        link: {
          value: "Link",
          placeholder: "Link for the website",
          description: undefined
        }
      }
    }
  },
  // ja: {},
  // de: {},
  // ja: {},
};
