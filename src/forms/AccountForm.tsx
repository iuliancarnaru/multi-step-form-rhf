import { useFormContext } from "react-hook-form";
import { FormWrapper } from "../components/FormWrapper";

export function AccountForm() {
  const { register } = useFormContext();

  return (
    <FormWrapper title="Account">
      <label>Email</label>
      <input
        {...register("email", { required: true })}
        autoFocus
        type="email"
      />

      <label>Password</label>
      <input {...register("password", { required: true })} type="password" />
    </FormWrapper>
  );
}
