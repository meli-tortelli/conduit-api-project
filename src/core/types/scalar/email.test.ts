import { Email } from "./email";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";

it("Should validate the email correctly", () => {
  pipe(
    "meli@email.com",
    Email.decode,
    E.map((result) => expect(result).toBe("meli@email.com"))
  );
});

it("Should return an error when email is invalid", () => {
  pipe(
    "Invalid email",
    Email.decode,
    E.mapLeft((error) => expect(error[0]?.message).toBe("Invalid email."))
  );
});
