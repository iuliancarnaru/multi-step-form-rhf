import { useFormContext } from "react-hook-form";
import { FormWrapper } from "../components/FormWrapper";

export function AddressFrom() {
  const { register } = useFormContext();

  return (
    <FormWrapper title="Address">
      <label>Street</label>
      <input
        {...register("street", { required: true })}
        autoFocus
        type="text"
      />

      <label>City</label>
      <input {...register("city", { required: true })} type="text" />

      <label>State</label>
      <input {...register("state", { required: true })} type="text" />

      <label>Zip</label>
      <input {...register("zip", { required: true })} type="text" />
    </FormWrapper>
  );
}
