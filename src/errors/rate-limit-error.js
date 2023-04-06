export default class RateLimitError extends Error {
  constructor(type, options) {
    super(`${type} rate limit exceeded`, options);
    this.type = type;
    this.name = this.constructor.name;
  }
}
