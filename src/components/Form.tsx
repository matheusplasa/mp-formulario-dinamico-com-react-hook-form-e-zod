import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { UserSchema, userSchema } from "../schemas/userSchema";
import { Input } from "./Input";
// import { EyeOffIcon } from 'lucide-react';

export default function Form() {
  const method = useForm({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: UserSchema) => console.log(data);

  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(onSubmit)}>
        <Input label="Nome Completo" type="text" name="name" />
        <Input label="E-mail" type="email" name="email" />
        <Input label="Senha" type="password" name="password" />
        <Input
          label="Confirmar Senha"
          type="password"
          name="password_confirmation"
        />
        <Input label="Telefone Celular" type="text" name="phone" />
        <Input label="CPF" type="text" name="cpf" />
        <Input label="CEP" type="text" name="cep" />
        <Input label="Endereço" type="text" name="address" />
        <Input label="Cidade" type="text" name="city" />
        <Input labelClassName="text-sm font-light text-slate-500 mb-1 inline" type="checkbox" name="state">
          Aceito os{" "}
          <span className="underline hover:text-slate-900 cursor-pointer">
            termos e condições
          </span>
        </Input>
        <button
          type="submit"
          className="bg-slate-500 font-semibold text-white w-full rounded-xl p-4 mt-10 hover:bg-slate-600 transition-colors"
        >
          Cadastrar
        </button>
      </form>
    </FormProvider>
  );
}
