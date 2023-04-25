import { useMutation, useQueryClient } from "react-query";
import { updateClient } from "../../../api/client/client.services";
import { ICreateClient } from "../../../interfaces/client/ICreateClient";
import toast from "react-hot-toast";
import { IClient } from "../../../interfaces/client/IClient";
import { Modal } from "../../../components/Modal";
import { FormClient } from "../FormClient";

type Props = {
  client: IClient;
  closeModal(): void;
};

export const UpdateClientModal = ({
  closeModal,
  client,
}: Props): JSX.Element => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    (data: ICreateClient) => updateClient(data, client.id),
    {
      onSuccess: async (data) => {
        toast.success("Client updated successfully.");
        queryClient.setQueryData(["listClient", { id: client.id }], data);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const onSubmit = (data: ICreateClient) => mutate(data);

  return (
    <Modal
      title={`Update Client: ${client.first_name.toLocaleUpperCase()}`}
      closeModal={closeModal}
      showButtons={false}
      body={
        <FormClient
          onSubmit={onSubmit}
          client={client}
          closeForm={closeModal}
        />
      }
    />
  );
};
