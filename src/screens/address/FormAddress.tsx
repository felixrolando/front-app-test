import { Controller, useForm } from "react-hook-form";
import { ControllerInput } from "../../components/input/ControllerInput";
import { ICreateAddress } from "../../interfaces/address/ICreateAddress";
import { IAddress } from "../../interfaces/address/IAddress";
type Props = {
  onSubmit: (data: ICreateAddress) => void;
  address?: IAddress;
  closeForm: () => void;
};

export const FormAddress = ({
  onSubmit,
  address,
  closeForm,
}: Props): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateAddress>();

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <ControllerInput
          control={control}
          name={"country"}
          label="Country"
          defaultValue={address ? address.country : ""}
        />
      </div>

      <div>
        <ControllerInput
          control={control}
          name={"city"}
          label="City"
          defaultValue={address ? address.city : ""}
        />
      </div>

      <div>
        <ControllerInput
          control={control}
          name={"street"}
          label="Street"
          defaultValue={address ? address.street : ""}
        />
      </div>

      <div>
        <ControllerInput
          control={control}
          name={"zip_code"}
          label="Zip Code"
          defaultValue={address ? address.zip_code : ""}
        />
      </div>

      <div>
        <Controller
          name={"is_default"}
          control={control}
          defaultValue={address ? address.is_default : false}
          render={({ field: props }) => (
            <>
              <input
                checked={props.value}
                id="link-checkbox"
                type="checkbox"
                onChange={(e) => props.onChange(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />

              <label
                htmlFor="link-checkbox"
                className="ml-2 text-sm font-medium text-blue-900 dark:text-blue-900"
              >
                is Default
              </label>
            </>
          )}
        />
      </div>

      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
        <button
          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={closeForm}
        >
          Close
        </button>
        <button
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
};
