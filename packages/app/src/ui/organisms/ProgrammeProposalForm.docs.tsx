/* eslint-disable import/no-extraneous-dependencies */

import loadable from "@loadable/component";
import { Fragment, useState } from "react";
import { I18nextProvider } from "react-i18next";

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
  settings: exampleForm as settings.Form,
  onSubmit: (values) => console.log({ values }),
};
