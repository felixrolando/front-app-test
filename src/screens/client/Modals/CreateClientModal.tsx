import { useMutation } from "react-query";
import { createClient } from "../../../api/client/client.services";
import { ICreateClient } from "../../../interfaces/client/ICreateClient";
import toast from "react-hot-toast";
import { Modal } from "../../../components/Modal";
import { FormClient } from "../FormClient";

type Props = {
  closeModal(): void;
};

export const CreateClientModal = ({ closeModal }: Props): JSX.Element => {
  const { mutate: createClientAction } = useMutation(
    (client: ICreateClient) => createClient(client),
    {
      onSuccess: async (data) => {
        toast.success("Client added successfully.");
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const onSubmit = (data: ICreateClient) => createClientAction(data);

  return (
    <Modal
      title={"Create New Client"}
      closeModal={closeModal}
      showButtons={false}
      body={<FormClient onSubmit={onSubmit} closeForm={closeModal} />}
    />
  );
};
