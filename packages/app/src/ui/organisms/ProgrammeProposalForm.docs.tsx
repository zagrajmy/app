/* eslint-disable import/no-extraneous-dependencies */

import loadable from "@loadable/component";
import { Fragment, useState } from "react";
import { I18nextProvider } from "react-i18next";
import { dedent } from "ts-dedent";

import { forms } from "../../../../schemas/src/FormsSettings/example.json";
import { i18n } from "../../i18n";
import { settings } from "../../types";
import {
  ProgrammeProposalForm,
  ProgrammeProposalFormProps,
} from "./ProgrammeProposalForm";

const ReactJson = loadable(() => import("react-json-view"));

const exampleForm = forms[0];

const secondExampleForm: settings.Form = {
  ...exampleForm,
  fieldsets: (exampleForm as settings.Form).fieldsets.map(
    (fieldset): settings.Fieldset => ({
      description: fieldset.description,
      fields: fieldset.fields.map(
        (field): settings.Field => ({
          ...field,
          // ids have to be unique
          name: `${field.name}-$2`,
        })
      ),
    })
  ),
};

export const Demo = () => {
  const [form, setForm] = useState<settings.Form>(secondExampleForm);

  return (
    <I18nextProvider i18n={i18n}>
      <Fragment>
        <div
          sx={{
            mt: 3,
            mb: 4,
            maxWidth: "80ch",
            overflow: "hidden",

            ".copy-to-clipboard-container": {
              position: "absolute",
            },
            ".click-to-edit": {
              position: "absolute",
              marginLeft: "18px",
            },
            ".data-type-label": { display: "none" },
            "textarea.variable-editor[style]": {
              minWidth: "400px !important",
            },
          }}
        >
          <ReactJson
            src={form}
            onEdit={({ updated_src }) => {
              if (updated_src) {
                setForm(updated_src as settings.Form);
              } else {
                console.error("settings new_value is empty");
              }
            }}
          />
        </div>
        <ProgrammeProposalForm settings={form} onSubmit={console.log} />
      </Fragment>
    </I18nextProvider>
  );
};

export const docsComponentProps: ProgrammeProposalFormProps = {
  settings: {
    title: "Run a game on Testcon 2050",
    waitlist: "100210",
    introText: dedent(
      `
      Sup friend!
      
      Do you fancy running an [RPG] game?
      You're in a good place. Just fill this form and we'll add you to the
      agenda. Thanks!

      [RPG]: https://en.wikipedia.org/wiki/Role-playing_game
    `
    ),
    footerText: `Sweet! See you on Testcon!`,
    fieldsets: [
      {
        description: "🙋 Few words about You!",
        fields: [
          {
            name: "name",
            type: "line",
            label: "Name",
            required: true,
          },
          {
            name: "email",
            type: "email",
            label: "Email address",
            required: true,
          },
          {
            name: "other_contact.discord",
            type: "discord",
            label: "Discord",
            required: true,
          },
          {
            name: "accepted_terms_and_conditions",
            type: "checkbox",
            label:
              "I've read the terms and conditions of Testcon and I accept them.",
            required: true,
            description:
              "[Terms and Conditions](https://example.com/terms-and-conditions)",
          },
        ],
      },
      {
        description: "🎲 Your game",
        fields: [
          {
            label: "Title",
            type: "line",
            name: "title",
            required: true,
            description: "The name of the game",
          },
          {
            label: "Description",
            type: "text",
            required: true,
            name: "description",
            description:
              "Describe what's up. What game are you going to run? What's required?",
          },
          {
            name: "time_slots",
            type: "multiple-choice",
            label: "Time slots",
            description: "Pick one or more",
            required: true,
            choices: [
              ["Friday 18-22", 21],
              ["Saturday 10-14", 22],
              ["Saturday 14-18", 23],
              ["Saturday 18-22", 24],
              ["Sunday 10-14", 25],
            ],
          },
          {
            name: "other_data.max_players",
            type: "number",
            label: "Maximum number of players",
            max: 8,
            min: 1,
          },
        ],
      },
    ],
  },
  onSubmit: (values) => console.log({ values }),
  defaultValues: {
    name: "Johnny Cool",
    email: "johnny@zagrajmy.net",
    title: "The Coolest Game",
    description: "This is going to be **really** cool.",
    // time_slots:
    "other_data.max_players": 4,
  },
};
