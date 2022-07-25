import * as TE from "fp-ts/TaskEither";
import { pipe } from "fp-ts/function";
import { dateCodec } from "./date";
import { mapAll } from "@/config/tests/fixtures";

it("Sould validate Date properly", () => {
  const date = new Date().toISOString();

  pipe(
    date,
    dateCodec.decode,
    TE.fromEither,
    mapAll((result) => expect(result).toBe(date))
  );
});
