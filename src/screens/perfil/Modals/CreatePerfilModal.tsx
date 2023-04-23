import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { Modal } from "../../../components/Modal";
import { FormPerfil } from "../FormPerfil";
import { ICreatePerfil } from "../../../interfaces/perfil/ICreatePerfil";
import { createPerfil } from "../../../api/perfil/perfil.services";

type Props = {
  closeModal(): void;
  clientId: number;
};

export const CreatePerfilModal = ({
  closeModal,
  clientId,
}: Props): JSX.Element => {
  const { mutate: createPerfilAction } = useMutation(
    (perfil: ICreatePerfil) => createPerfil(perfil, clientId),
    {
      onSuccess: async (data) => {
        toast.success("Perfil added successfully.");
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const onSubmit = (data: ICreatePerfil) => createPerfilAction(data);

  return (
    <Modal
      title={"Create New Perfil"}
      closeModal={closeModal}
      showButtons={false}
      body={<FormPerfil onSubmit={onSubmit} closeForm={closeModal} />}
    />
  );
};
