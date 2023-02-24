import { LanguageCode } from "../components/CreatorLanguages/CreatorLanguages";
import { FieldContent, formLanguageTexts, LanguageOption } from "../lang/formLanguageTexts";


type FieldOptions = keyof LanguageOption;
type ContentOptions = keyof FieldContent;

export function getFormText(langcode: LanguageCode, field: FieldOptions, valueToGet: ContentOptions ) {
  try {
    const valueToReturn = formLanguageTexts[langcode][field][valueToGet];
    return valueToReturn;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return formLanguageTexts["en"][field][valueToGet];
  }
}