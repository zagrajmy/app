import { getUrl } from "./getUrl";

describe("getUrl", () => {
  it("detects proper domain when host and referer are in headers", () => {
    expect(
      getUrl({
        headers: {
          referer: "https://www.facebook.com/",
          host: "kapitularz.zagrajmy.net",
        },
      })
    ).toBe("https://kapitularz.zagrajmy.net");
  });
});
