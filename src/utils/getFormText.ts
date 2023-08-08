import { ExtendedLanguageFields, extendedLanguageFieldsText } from "./../lang/form-fields-text";
import { LanguageCode } from "../lang/form-fields-text";
import {
  FieldContent,
  LanguageFieldsText,
  LanguageFields,
} from "../lang/form-fields-text";

type FieldOptions = keyof LanguageFields;
type ContentOptions = keyof FieldContent;

type Fields = keyof ExtendedLanguageFields
type Subtitles<T extends Fields> = keyof ExtendedLanguageFields[T]["subtitles"]

export type FieldTextGetter = (
  field: FieldOptions,
  valueToGet: ContentOptions
) => string | undefined;

export type ExtendedFieldTextGetter = <T extends keyof ExtendedLanguageFields, >(
  field: T,
  subtitleToGet: Subtitles<T>,
  subtitleValue: ContentOptions
) => string | undefined;

type CurryTextGetterType = FieldTextGetter | ExtendedFieldTextGetter;

export function curryTextGetter(
  langcode: LanguageCode,
  getterFunction: "standard"
): FieldTextGetter

export function curryTextGetter(
  langcode: LanguageCode,
  getterFunction: "extended"
): ExtendedFieldTextGetter

export function curryTextGetter<T extends keyof ExtendedLanguageFields>(
  langcode: LanguageCode,
  getterFunction: "standard" | "extended"
): CurryTextGetterType {
  if (getterFunction === "standard") {
    return (field: FieldOptions, valueToGet: ContentOptions) => {
      try {
        const valueToReturn = LanguageFieldsText[langcode][field][valueToGet];
        return valueToReturn;
      } catch (error) {
        if (error instanceof Error) {
          console.error("Caught error on Field Text Getter:");
          console.error(error.message);
        }
        return LanguageFieldsText["en"][field][valueToGet];
      }
    };
  } else {
    const extendedFieldTextGetter = (
      field: T,
      subtitleToGet: Subtitles<T>,
      subtitleValue: ContentOptions
    ) => {
      try {
        const languageObj = extendedLanguageFieldsText[langcode];
        const fieldObj = languageObj[field];
        // @ts-expect-error ts2536
        const valueToReturn = fieldObj["subtitles"][subtitleToGet][subtitleValue];

        return valueToReturn;
      } catch (error) {
        if (error instanceof Error) {
          console.error("Caught error on Extended Field Text Getter:");
          console.error(error.message);
          
        }
        // TODO: change "pt-br" to "en" when finished form fields language
        // @ts-expect-error ts2536
        return extendedLanguageFieldsText["pt-br"][field]["subtitles"][subtitleToGet][subtitleValue];
      }
    };
    // Needed to be assertive because of unresolved error ts2322
    return extendedFieldTextGetter as ExtendedFieldTextGetter;
  }
}

// Not in use

// export function extendedFieldTextGetter<T extends keyof ExtendedLanguageFields>(
//   langcode: LanguageCode,
//   field: T,
//   subtitleToGet: keyof ExtendedLanguageFields[T]["subtitles"],
//   subtitleValue?: ContentOptions
// ) {
//   console.log(langcode);
//   console.log(field);
//   console.log(subtitleToGet);
//   console.log(subtitleValue);
// }

// export function getExtendedFieldTextTitle(langcode: LanguageCode, field: Fields) {
//   return extendedLanguageFieldsText[langcode][field]["value"];
// }