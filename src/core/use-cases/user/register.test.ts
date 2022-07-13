import * as TE from 'fp-ts/TaskEither'
import { pipe } from 'fp-ts/function'
import { register, OutsideRegister } from './register'
import { CreateUser } from '@/core/types/user'

const registerOk: OutsideRegister<string> = async(data) => {
  return `Usuário ${data.username} cadastrado com sucesso!`
}

const data: CreateUser = {
  username: 'esther',
  email: 'esther@email.com',
  password: 'melis123!',
}

it('Should register a user with sucess', async () => {
  return pipe(
    data,
    register(registerOk),
    TE.map(result => expect(result).toBe(`Usuário ${data.username} cadastrado com sucesso!`))
  )();
});
