import { pipe } from "fp-ts/function";
import { emailCodec } from "./email";
import { mapAllE } from "@/config/tests/fixtures";

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
    mapAllE((error) => {
      if (Array.isArray(error)) {
        expect(error[0]?.message).toBe("Invalid email.");
      }
    })
  );
});
