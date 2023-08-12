import { Image } from "@/components/ImageDropzone/ImageDropzone";
import { Item } from "@/components/ListItem/ListItem";
import { LanguageCode } from "@/lang/form-fields-text";

export type Header = {
  [K in LanguageCode]: {
    title: string;
    description: string;
  };
} & { image: Image | null };

export type Overview = {
  [K in LanguageCode]: {
    challenges: string;
    links: string;
  }
} & {
  images: {
    1: Image | null;
    2: Image | null;
    3: Image | null;
  }
}

export type Process = {
  [K in LanguageCode]: {
    whatILearned: string;
    usefulResources: Item[];
  }
} & {
  developedWith: string[];
}