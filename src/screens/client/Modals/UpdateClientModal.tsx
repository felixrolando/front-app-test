import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { updateClient } from "../../../api/client/client.services";
import { ICreateClient } from "../../../interfaces/ICreateClient";
import toast from "react-hot-toast";
import { IClient } from "../../../interfaces/IClient";
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
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ICreateClient>();

  const { mutate } = useMutation(
    (data: ICreateClient) => updateClient(data, client.id),
    {
      onSuccess: async (data) => {
        toast.success("Client updated successfully.");
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
      action={handleSubmit(onSubmit)}
      body={
        <FormClient register={register} setValue={setValue} client={client} />
      }
    />
  );
};
