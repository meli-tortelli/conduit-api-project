import * as TE from "fp-ts/TaskEither";
import { pipe } from "fp-ts/function";
import { emailCodec } from "./email";
import { mapAll } from "@/config/tests/fixtures";

it("Should validate the email correctly", () => {
  pipe(
    "meli@email.com",
    emailCodec.decode,
    TE.fromEither,
    mapAll((result) => expect(result).toBe("meli@email.com"))
  );
});

it("Should return an error when email is invalid", () => {
  pipe(
    "invalid-email",
    emailCodec.decode,
    TE.fromEither,
    mapAll((error) => {
      const errorMessage: string = Array.isArray(error)
        ? error[0]?.message
        : "";
      expect(errorMessage).toBe("Invalid email");
    })
  );
});
