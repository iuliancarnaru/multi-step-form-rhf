import { useFormContext } from "react-hook-form";
import { FormWrapper } from "../components/FormWrapper";

export function UserForm() {
  const { register } = useFormContext();

  return (
    <FormWrapper title="User details">
      <label>First Name</label>
      <input
        {...register("firstName", { required: true })}
        autoFocus
        type="text"
      />

      <label>Last Name</label>
      <input {...register("lastName", { required: true })} type="text" />

      <label>Age</label>
      <input
        {...register("age", { required: true, min: 1 })}
        min={1}
        type="number"
      />
    </FormWrapper>
  );
}
