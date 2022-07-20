import { emailCodec } from "./email";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import { mapAll } from "@/config/tests/fixtures";

it("Should validate the email correctly", () => {
  pipe(
    "meli@email.com",
    emailCodec.decode,
    E.map((result) => expect(result).toBe("meli@email.com"))
  );
});

it("Should return an error when email is invalid", () => {
  pipe(
    "Invalid email",
    emailCodec.decode,
    E.mapLeft((error) => expect(error[0]?.message).toBe("Invalid email."))
  );
});
