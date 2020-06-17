/* eslint-disable import/no-extraneous-dependencies */

import loadable from "@loadable/component";
import { Fragment, useState } from "react";
import { I18nextProvider } from "react-i18next";
import dedent from "ts-dedent";

import texts from "../../../public/locales/en.json";
import { i18n } from "../../i18n";
import {
  ProgrammeProposalFestivalSettings,
  ProgrammeProposalForm,
  ProgrammeProposalFormProps,
} from "./ProgrammeProposalForm";

const ReactJson = loadable(() => import("react-json-view"));

export const Demo = () => {
  const [settings, setSettings] = useState<ProgrammeProposalFestivalSettings>({
    description: texts["proposal-form-description"],
    needs: texts["proposal-form-needs"],
    other_contact: texts["proposal-form-other_contact"],
    title: texts["proposal-form-title"],
    footerText: dedent`
      ## Uwaga!
      Sesje konwentowe rządzą się swoimi prawami. Może nie być dobrych
      warunków na utrzymanie ciężkiego klimatu, mogą przyjść niedoświadczeni
      gracze, dla których lepiej mieć gotowe postacie. Zachęcamy do
      zgłaszania niewymagających sesji, w których wziąć udział będzie mogła
      każda osoba "z ulicy". Jeśli zaś wymagasz doświadczonych graczy,
      proszę zaznacz odpowiednią opcję w opisie swojej sesji.
    `,
    introText: dedent`
      # Zgłoś sesję RPG na Awaryjne Granie!
      
      Witaj! Dziękujemy Ci za Twój udział w naszym wydarzeniu i prosimy o
      wypełnienie poniższej ankiety.
    `,
  });

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
            src={settings}
            onEdit={({ updated_src }) => {
              if (updated_src) {
                setSettings(updated_src as ProgrammeProposalFestivalSettings);
              } else {
                console.error("settings new_value is empty");
              }
            }}
          />
        </div>
        <ProgrammeProposalForm settings={settings} onSubmit={console.log} />
      </Fragment>
    </I18nextProvider>
  );
};

export const docsComponentProps: ProgrammeProposalFormProps = {
  settings: {
    introText: "intro-text",
    footerText: "footer-text",
  },
  onSubmit: (values) => console.log({ values }),
};
