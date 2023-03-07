import { ExtendedLanguageFields } from "./../lang/form-fields-text";
import { LanguageCode } from "../lang/form-fields-text";
import {
  FieldContent,
  formLanguageTexts,
  LanguageFields,
} from "../lang/form-fields-text";

type FieldOptions = keyof LanguageFields;
type ExtendedFieldOptions = keyof ExtendedLanguageFields;
type ContentOptions = keyof FieldContent;

export function getFieldText(
  langcode: LanguageCode,
  field: FieldOptions,
  valueToGet: ContentOptions
) {
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

export function curryTextGetter(
  langcode: LanguageCode,
  getterFunction: "standard" | "extended"
): (field: FieldOptions, valueToGet: ContentOptions) => string | undefined {
  if (getterFunction === "standard") {
    return (field: FieldOptions, valueToGet: ContentOptions) => {
      try {
        const valueToReturn = formLanguageTexts[langcode][field][valueToGet];
        return valueToReturn;
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
        return formLanguageTexts["en"][field][valueToGet];
      }
    };
  } else {
    return () => {
      console.log("oi");
    };
  }
}

export function ExtendedFieldTextGetter(
  langcode: LanguageCode,
  field: ExtendedFieldOptions,
  valueToGet: keyof ExtendedLanguageFields[typeof field],
  subtitleValue?: ContentOptions
) {
  console.log(langcode);
  console.log(field);
  console.log(valueToGet);
  console.log(subtitleValue);
}
