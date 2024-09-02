import { useForm, FormProvider } from "react-hook-form";
import "./App.css";
import { useMultistepForm } from "./hooks/useMultiStepForm";
import { UserForm } from "./forms/UserForm";
import { AddressFrom } from "./forms/AddressForm";
import { AccountForm } from "./forms/AccountForm";

interface FormValues {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
}

function App() {
  const methods = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      email: "",
      password: "",
    },
  });

  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([<UserForm />, <AddressFrom />, <AccountForm />]);

  const onSubmit = (data: FormValues) => {
    if (!isLastStep) {
      next();
    } else {
      console.log("Form submitted:", data);
    }
  };

  return (
    <FormProvider {...methods}>
      <div
        style={{
          position: "relative",
          background: "white",
          border: "1px solid black",
          padding: "2rem",
          margin: "1rem",
          borderRadius: ".5rem",
          fontFamily: "Arial",
          maxWidth: "max-content",
        }}
      >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
            {currentStepIndex + 1}/{steps.length}
          </div>

          {step}

          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              gap: ".5rem",
              justifyContent: "flex-end",
            }}
          >
            {!isFirstStep && (
              <button type="button" onClick={back}>
                Back
              </button>
            )}
            <button>{isLastStep ? "Finish" : "Next"}</button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
}

export default App;
