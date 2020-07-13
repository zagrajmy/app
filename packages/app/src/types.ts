import { Theme } from "theme-ui";

import type { SupportedLanguage, TranslationTexts } from "./i18n";

export declare namespace settings {
  //#region generated types
  /**
   * generated from JSON Schema
   * @see https://gist.github.com/hasparus/1f13a6d64d9799f468cd004939ad2239
   */

  export interface FormsSettings {
    forms: Form[];
    [k: string]: unknown;
  }

  export interface Form {
    title: string;
    introText: string;
    footerText: string;
    waitlist: string;
    fieldsets: Fieldset[];
  }

  export interface Fieldset {
    description: string;
    fields: (BaseField & (SingleValueField | ChoiceField | NumberField))[];
  }

  export interface BaseField {
    label: string;
    name: string;
    required: boolean;
    description?: string;
    [k: string]: unknown;
  }

  export interface SingleValueField {
    type: "line" | "text" | "email" | "phone" | "discord" | "checkbox";
    [k: string]: unknown;
  }

  export interface ChoiceField {
    type: "single-choice" | "multiple-choice";
    choices: {
      [k: string]: string | number;
    };
    [k: string]: unknown;
  }
  export interface NumberField {
    type: "number";
    max?: number;
    min?: number;
    step?: number;
    [k: string]: unknown;
  }

  //#endregion generated types

  export type Field = Fieldset["fields"][number];

  export interface FestivalSettings extends FormsSettings {}

  export interface SphereSettings extends FormsSettings {
    theme: Theme;
    locale?: Record<SupportedLanguage, TranslationTexts>;
  }
}
