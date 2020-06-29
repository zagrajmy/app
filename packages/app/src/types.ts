import { Theme } from "theme-ui";

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
    description: string;
    waitlist: string;
    fieldsets: Fieldset[];
  }

  export interface Fieldset {
    description: string;
    fields: (Field & (SingleValueField | ChoiceField))[];
  }

  export interface Field {
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

  //#endregion generated types

  export interface FestivalSettings extends FormsSettings {}

  export interface SphereSettings extends FormsSettings {
    theme: Theme;
  }
}
