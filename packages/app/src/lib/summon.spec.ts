import fetchMock from "jest-fetch-mock";

import { makeSummon } from "./summon";

const summon = makeSummon(fetchMock);

beforeEach(() => {
  fetchMock.resetMocks();
});

describe("summon", () => {
  // requirements

  it("throws HttpError on HTTP 400", async () => {
    fetchMock.once("/bad-request", { status: 400 });

    return expect(summon("/bad-request")).rejects.toThrowError(
      "HTTP 400 Bad Request"
    );
  });

  it("throws HttpError on HTTP 404", () => {
    fetchMock.once("/not-found", { status: 404 });

    return expect(summon("/not-found")).rejects.toThrowError(
      "HTTP 404 Not Found"
    );
  });

  it("throws HttpError on HTTP 500", () => {
    fetchMock.once("/internal", { status: 500 });

    return expect(summon("/internal")).rejects.toThrowError(
      "HTTP 500 Internal Server Error"
    );
  });

  it("passes info to fetch", async () => {
    fetchMock.mockResponseOnce("{}");

    await summon("/test");
    expect(fetchMock).toBeCalledWith("/test");

    fetchMock.resetMocks();
    fetchMock.mockResponseOnce("{}");

    const req = new Request("/test", {
      method: "POST",
      body: JSON.stringify({ a: 1 }),
    });
    await summon(req);
    expect(fetchMock).toBeCalledWith(req);
  });

  it("stringifies init.json and sets method to POST", async () => {
    fetchMock.mockResponseOnce("{}");

    await summon("/test", { json: { foo: { bar: "qux" } } });
    expect(fetchMock).toBeCalledWith("/test", {
      method: "POST",
      body: '{"foo":{"bar":"qux"}}',
    });
  });

  it("prepends baseUrl from external request headers", async () => {
    fetchMock.mockResponseOnce("{}");

    await summon("/test", undefined, {
      headers: { referer: "https://example.com:1234" },
    });
    expect(fetchMock).toBeCalledWith("https://example.com:1234/test");
  });

  it("stringifies init.searchParams", async () => {
    let req: Request | string | undefined;
    fetchMock.mockImplementation((request) => {
      req = request;
      return Promise.resolve(new Response("{}"));
    });

    await summon("https://example.com/test", {
      searchParams: { a: "42", b: "b" },
    });

    const url = typeof req === "string" ? req : req?.url;
    expect(url).toBe("https://example.com/test?a=42&b=b");
  });

  // bugs

  it("doesn't override method which is already set", async () => {
    fetchMock.mockResponseOnce("{}");

    await summon("/test", { method: "PATCH", json: { foo: { bar: "qux" } } });
    expect(fetchMock).toBeCalledWith("/test", {
      method: "PATCH",
      body: '{"foo":{"bar":"qux"}}',
    });
  });
});
