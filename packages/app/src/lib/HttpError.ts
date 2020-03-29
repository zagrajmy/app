export class HttpError extends Error {
  constructor(public response: Response) {
    super(response.statusText);
  }
}
