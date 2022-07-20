import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import { emailCodec } from "./email";
import { mapAllE, mapAllTE } from "@/config/tests/fixtures";

it("Should validate the email correctly", () => {
  pipe(
    "meli@email.com",
    emailCodec.decode,
    mapAllE((result) => expect(result).toBe("meli@email.com"))
  );
});

it("Should return an error when email is invalid", () => {
  pipe(
    "invalid-email",
    emailCodec.decode,
    mapAllE((error) => expect(error[0]?.message).toBe("Invalid email."))
  );
});
