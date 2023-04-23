import { useForm } from "react-hook-form";
import { ICreateClient } from "../../interfaces/ICreateClient";
import { InputWithLabel } from "../../components/input/InputWithLabel";
import { IClient } from "../../interfaces/IClient";
type Props = {
  onSubmit: (data: ICreateClient) => void;
  client?: IClient;
  closeForm: () => void;
};

export const FormClient = ({
  onSubmit,
  client,
  closeForm,
}: Props): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateClient>();

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <InputWithLabel
          control={control}
          name={"first_name"}
          label="First Name"
          defaultValue={client ? client.first_name : ""}
        />
      </div>

      <div>
        <InputWithLabel
          control={control}
          name={"last_name"}
          label="Last Name"
          defaultValue={client ? client.last_name : ""}
        />
      </div>

      <div>
        <InputWithLabel
          control={control}
          name={"phone"}
          label="Phone"
          defaultValue={client ? client.phone : ""}
        />
      </div>

      <div>
        <InputWithLabel
          control={control}
          name={"email"}
          label="Email"
          defaultValue={client ? client.email : ""}
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
