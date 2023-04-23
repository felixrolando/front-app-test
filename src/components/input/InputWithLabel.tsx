import { Control, Controller } from "react-hook-form";
import { ICreateClient } from "../../interfaces/ICreateClient";
import { InputField } from "./InputField";

type Props = {
  control: Control<ICreateClient>;
  name: "first_name" | "last_name" | "phone" | "email";
  label: string;
  defaultValue: any;
};

export const InputWithLabel = ({
  control,
  name,
  label,
  defaultValue,
}: Props): JSX.Element => {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue">
        {label}
      </label>
      <InputField control={control} name={name} defaultValue={defaultValue} />
    </>
  );
};
