import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { ICreateClient } from "../../interfaces/ICreateClient";
import { useEffect } from "react";

type Props = {
  register: UseFormRegister<ICreateClient>;
  client?: ICreateClient;
  setValue?: UseFormSetValue<ICreateClient>;
};

export const FormClient = ({
  register,
  client,
  setValue,
}: Props): JSX.Element => {
  useEffect(() => {
    if (setValue && client) {
      setValue("first_name", client.first_name);
      setValue("last_name", client.last_name);
      setValue("phone", client.phone);
      setValue("email", client.email);
    }
  }, []);

  return (
    <form className="space-y-6">
      <div>
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue"
        >
          First Name
        </label>
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="jose"
          {...register("first_name", { required: true })}
        />
      </div>

      <div>
        <label
          htmlFor="last_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue"
        >
          Last Name
        </label>
        <input
          type="text"
          id="last_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="perez"
          {...register("last_name", { required: true })}
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue"
        >
          Phone
        </label>
        <input
          type="text"
          id="phone"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="809-574-5412"
          {...register("phone", { required: true })}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="joseperez@hotmail.com"
          {...register("email", { required: true })}
        />
      </div>
    </form>
  );
};
