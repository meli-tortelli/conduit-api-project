import * as TE from "fp-ts/TaskEither";
import { pipe } from "fp-ts/function";
import { mapAll } from "@/config/tests/fixtures";
import { slugCodec } from "./slug";

it("Sould validate slug properly", () => {
  pipe(
    "slug-test",
    slugCodec.decode,
    TE.fromEither,
    mapAll((result) => expect(result).toBe("slug-test"))
  );
});

it("Sould accept 3 or more characters", () => {
  pipe(
    "slu",
    slugCodec.decode,
    TE.fromEither,
    mapAll((result) => expect(result).toBe("slu"))
  );
});

it("Should not accept numbers at the beginning of the slug", () => {
  pipe(
    "4slug-test",
    slugCodec.decode,
    TE.fromEither,
    mapAll((errors) => {
      const errorMessage: string = Array.isArray(errors)
        ? errors[0].message
        : "";
      expect(errorMessage).toBe(
        "Invalid slug. Please, use alphanumeric characters, dashes and/or numbers."
      );
    })
  );
});

it("Should not accept dashes at the end of the slug", () => {
  pipe(
    "slug-test-",
    slugCodec.decode,
    TE.fromEither,
    mapAll((errors) => {
      const errorMessage: string = Array.isArray(errors)
        ? errors[0].message
        : "";
      expect(errorMessage).toBe(
        "Invalid slug. Please, use alphanumeric characters, dashes and/or numbers."
      );
    })
  );
});

it("Should not accept less than 3 characters", () => {
  pipe(
    "sl",
    slugCodec.decode,
    TE.fromEither,
    mapAll((errors) => {
      const errorMessage: string = Array.isArray(errors)
        ? errors[0].message
        : "";
      expect(errorMessage).toBe(
        "Invalid slug. Please, use alphanumeric characters, dashes and/or numbers."
      );
    })
  );
});
