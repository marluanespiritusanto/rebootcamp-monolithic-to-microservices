const { HttpStatusCode } = require("../helpers");

class UnauthorizeException extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = HttpStatusCode.UNAUTHORIZED;
  }
}

class NotFoundException extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = HttpStatusCode.NOT_FOUND;
  }
}

class ServerErrorException extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = HttpStatusCode.INTERNAL_SERVER_ERROR;
  }
}

class BadRequestException extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = HttpStatusCode.BAD_REQUEST;
  }
}

class ConflictException extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = HttpStatusCode.CONFLICT;
  }
}

class ForbiddenException extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = HttpStatusCode.FORBIDDEN;
  }
}

module.exports = {
  UnauthorizeException,
  NotFoundException,
  ServerErrorException,
  BadRequestException,
  ConflictException,
  ForbiddenException
};
