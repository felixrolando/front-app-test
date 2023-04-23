import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { Modal } from "../../../components/Modal";
import { FormPerfil } from "../FormPerfil";
import { ICreatePerfil } from "../../../interfaces/perfil/ICreatePerfil";
import { updatePerfil } from "../../../api/perfil/perfil.services";
import { IPerfil } from "../../../interfaces/perfil/IPerfil";

type Props = {
  closeModal(): void;
  perfil: IPerfil;
};

export const UpdatePerfilModal = ({
  closeModal,
  perfil,
}: Props): JSX.Element => {
  const { mutate: updatePerfilAction } = useMutation(
    (newData: ICreatePerfil) => updatePerfil(newData, perfil.id),
    {
      onSuccess: async (data) => {
        toast.success("Perfil updated successfully.");
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const onSubmit = (data: ICreatePerfil) => updatePerfilAction(data);

  return (
    <Modal
      title={"Update New Perfil"}
      closeModal={closeModal}
      showButtons={false}
      body={
        <FormPerfil
          onSubmit={onSubmit}
          closeForm={closeModal}
          perfil={perfil}
        />
      }
    />
  );
};
