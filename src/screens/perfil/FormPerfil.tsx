import { useForm } from "react-hook-form";
import { ControllerInput } from "../../components/input/ControllerInput";
import { ICreatePerfil } from "../../interfaces/perfil/ICreatePerfil";
import { IPerfil } from "../../interfaces/perfil/IPerfil";
type Props = {
  onSubmit: (data: ICreatePerfil) => void;
  perfil?: IPerfil;
  closeForm: () => void;
};

export const FormPerfil = ({
  onSubmit,
  perfil,
  closeForm,
}: Props): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreatePerfil>();

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <ControllerInput
          control={control}
          name={"description"}
          label="Description"
          defaultValue={perfil ? perfil.description : ""}
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
