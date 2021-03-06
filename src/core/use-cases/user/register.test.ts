import { pipe } from "fp-ts/function";
import { register, OutsideRegister } from "./register";
import { CreateUser } from "@/core/types/user";
import { unsafeEmail, mapAll } from "@/config/tests/fixtures";

const registerOk: OutsideRegister<string> = async (data) => {
  return `Usuário ${data.username} cadastrado com sucesso!`;
};

const data: CreateUser = {
  username: "esther",
  email: unsafeEmail("esther@email.com"),
  password: "melis123!",
};

it("Should register a user with sucess", async () => {
  return pipe(
    data,
    register(registerOk),
    mapAll((result) =>
      expect(result).toBe(`Usuário ${data.username} cadastrado com sucesso!`)
    )
  )();
});
