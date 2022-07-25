import * as TE from "fp-ts/TaskEither";
import { pipe } from "fp-ts/function";
import { urlCodec } from "./url";
import { mapAll } from "@/config/tests/fixtures";

it("Should validate the url correctly", () => {
  pipe(
    "https://www.google.com",
    urlCodec.decode,
    TE.fromEither,
    mapAll((result) => expect(result).toBe("https://www.google.com"))
  );
});

it("Should return an error when url is invalid", () => {
  pipe(
    "invalid-url",
    urlCodec.decode,
    TE.fromEither,
    mapAll((error) => {
      const errorMessage: string = Array.isArray(error) ? error[0].message : "";
      expect(errorMessage).toBe("Invalid URL");
    })
  );
});
