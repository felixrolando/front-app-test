import { Control, Controller } from "react-hook-form";
import { ICreateClient } from "../../interfaces/ICreateClient";

type Props = {
  control: Control<ICreateClient>;
  name: "first_name" | "last_name" | "phone" | "email";
  defaultValue: any;
};

export const InputField = ({
  control,
  name,
  defaultValue,
}: Props): JSX.Element => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <input
          {...field}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        />
      )}
    />
  );
};
