import { pipe } from "fp-ts/function";
import { dateCodec } from "./date";
import { mapAllE } from "@/config/tests/fixtures";

it("Sould validate Date properly", () => {
  const date = new Date().toISOString();

  pipe(
    date,
    dateCodec.decode,
    mapAllE((result) => expect(result).toBe(date))
  );
});
