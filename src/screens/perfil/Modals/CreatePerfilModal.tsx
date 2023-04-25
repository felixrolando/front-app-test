import { useMutation, useQueryClient } from "react-query";
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
  const queryClient = useQueryClient();
  const { mutate: createPerfilAction } = useMutation(
    (perfil: ICreatePerfil) => createPerfil(perfil, clientId),
    {
      onSuccess: async (data) => {
        toast.success("Perfil added successfully.");
        queryClient.setQueriesData("listPerfil", (oldData: any) => [
          ...oldData,
          data,
        ]);
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
