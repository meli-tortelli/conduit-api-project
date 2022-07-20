import { pipe } from "fp-ts/function";
import { urlCodec } from "./url";
import { mapAllE } from "@/config/tests/fixtures";

it("Should validate the url correctly", () => {
  pipe(
    "https://www.google.com",
    urlCodec.decode,
    mapAllE((result) => expect(result).toBe("https://www.google.com"))
  );
});

it("Should return an error when url is invalid", () => {
  pipe(
    "invalid-url",
    urlCodec.decode,
    mapAllE((error) => {
      if (Array.isArray(error)) {
        expect(error[0]?.message).toBe("Invalid URL");
      }
    })
  );
});
