import { Control, Controller } from "react-hook-form";
import { InputField } from "./InputField";

type Props = {
  control: Control<any>;
  name: string;
  defaultValue: any;
  label: string;
};

export const ControllerInput = ({
  control,
  name,
  defaultValue,
  label,
}: Props): JSX.Element => {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue">
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { name, onChange, value } }) => (
          <InputField name={name} value={value} onChange={onChange} />
        )}
      />
    </>
  );
};
