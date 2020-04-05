export class HttpError extends Error {
  constructor(public response: Response) {
    super(`HTTP ${response.status} ${response.statusText}`);
  }
}
