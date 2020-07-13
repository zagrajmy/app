/**
 * @jest-environment jsdom
 */

import { getByText, waitFor } from "@testing-library/dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { dedent } from "ts-dedent";

import { i18n } from "../../i18n";
import { settings } from "../../types";
import { ProgrammeProposalForm } from "./ProgrammeProposalForm";

// todo: move this to a test setup file?
// react-i18next in `cimode` will always return the key
i18n.changeLanguage("cimode");

describe(ProgrammeProposalForm.name, () => {
  it("can be filled and submitted", async () => {
    const form: settings.Form = {
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
                ["Sunday 10-14", "SUNDAY"],
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
    };

    const onSubmit = jest.fn();

    const { getByLabelText, getByRole, getAllByRole, queryAllByRole } = render(
      <I18nextProvider i18n={i18n}>
        <ProgrammeProposalForm settings={form} onSubmit={onSubmit} />
      </I18nextProvider>
    );

    await act(async () => {
      fireEvent.change(getByLabelText("Name"), {
        target: { value: "Piotr Monwid-Olechnowicz" },
      });
      fireEvent.change(getByLabelText("Email address"), {
        target: { value: "piotr@zagrajmy.net" },
      });
      fireEvent.click(getByLabelText(/terms and conditions/i));

      const multipleChoice = getByRole("group", { name: "Time slots" });
      fireEvent.click(getByText(multipleChoice, "Sunday 10-14"));
      fireEvent.click(getByText(multipleChoice, "Saturday 10-14"));
      fireEvent.click(getByText(multipleChoice, "Friday 18-22"));
    });

    await act(async () => {
      // there is a form on screen
      screen.getByRole("form");

      // there is a submit button
      const submitButton = getByRole("button");
      expect(submitButton.innerHTML).toBe("submit");

      // it can be clicked
      fireEvent.click(submitButton);
    });

    // submitting without all required fields doesn't trigger onSubmit
    expect(onSubmit).not.toBeCalled();

    // error messages should appear
    const errorMessages = await waitFor(() => getAllByRole("alert"));
    expect(errorMessages).toHaveLength(2);

    await act(async () => {
      fireEvent.change(getByLabelText("Title", { exact: false }), {
        target: {
          value: "The Coolest Game",
        },
      });
      fireEvent.change(getByLabelText("Description", { exact: false }), {
        target: {
          value: "This is going to be cool.",
        },
      });
      fireEvent.change(
        getByLabelText("Maximum number of players", { exact: false }),
        {
          target: {
            value: 4,
          },
        }
      );
    });

    await act(async () => {
      fireEvent.click(getByRole("button"));
    });

    // there should be no more error messages
    expect(queryAllByRole("alert")).toHaveLength(0);

    const submittedValue = onSubmit.mock.calls[0][0];
    expect(submittedValue).toStrictEqual({
      waitlist: "100210",
      name: "Piotr Monwid-Olechnowicz",
      email: "piotr@zagrajmy.net",
      accepted_terms_and_conditions: true,
      title: "The Coolest Game",
      description: "This is going to be cool.",
      time_slots: [21, 22, "SUNDAY"],
      other_data: {
        max_players: 4,
      },
    });
  });

  it("can have required nested field", async () => {
    const form: settings.Form = {
      title: "Run a game on Testcon 2050",
      waitlist: "100210",
      introText: "",
      footerText: "",
      fieldsets: [
        {
          description: "",
          fields: [
            {
              type: "discord",
              label: "Discord",
              name: "other_contact.discord",
              required: true,
            },
          ],
        },
      ],
    };

    const onSubmit = jest.fn();
    const { getByLabelText, getByRole } = render(
      <ProgrammeProposalForm settings={form} onSubmit={onSubmit} />
    );

    await act(async () => {
      fireEvent.click(getByRole("button"));
    });

    expect(onSubmit).not.toBeCalled();

    let errorMessage = await waitFor(() => getByRole("alert"));
    expect(errorMessage.innerHTML).toBe("field-is-required");

    await act(async () => {
      fireEvent.change(getByLabelText("Discord"), {
        target: { value: "mike" },
      });
    });

    await act(async () => {
      fireEvent.click(getByRole("button"));
    });

    expect(onSubmit).not.toBeCalled();

    errorMessage = await waitFor(() => getByRole("alert"));
    expect(errorMessage.innerHTML).toBe(
      "does-not-match-discord-username-pattern"
    );

    await act(async () => {
      fireEvent.change(getByLabelText("Discord"), {
        target: { value: "mike#4441" },
      });
    });

    await act(async () => {
      fireEvent.click(getByRole("button"));
    });

    expect(onSubmit).toBeCalled();
  });
});
