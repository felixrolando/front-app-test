import { useMutation } from "react-query";
import { createClient } from "../../../api/client/client.services";
import { ICreateClient } from "../../../interfaces/ICreateClient";
import toast from "react-hot-toast";
import { Modal } from "../../../components/Modal";
import { useForm } from "react-hook-form";
import { FormClient } from "../FormClient";

type Props = {
  closeModal(): void;
};

export const CreateClientModal = ({ closeModal }: Props): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICreateClient>();

  const { mutate: createClientAction } = useMutation(
    (client: ICreateClient) => createClient(client),
    {
      onSuccess: async (data) => {
        toast.success("Client added successfully.");
        reset();
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
      action={handleSubmit(onSubmit)}
      body={<FormClient register={register} />}
    />
  );
};
