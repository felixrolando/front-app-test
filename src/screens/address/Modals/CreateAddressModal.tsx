import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { Modal } from "../../../components/Modal";
import { FormAddress } from "../FormAddress";
import { ICreateAddress } from "../../../interfaces/address/ICreateAddress";
import { createAddress } from "../../../api/address/address.services";

type Props = {
  closeModal(): void;
  clientId: number;
};

export const CreateAddressModal = ({
  closeModal,
  clientId,
}: Props): JSX.Element => {
  const queryClient = useQueryClient();
  const { mutate: createAddressAction } = useMutation(
    (address: ICreateAddress) => createAddress(address, clientId),
    {
      onSuccess: async (data) => {
        toast.success("Address added successfully.");
        queryClient.setQueriesData("listAddress", (oldData: any) => [
          ...oldData,
          data,
        ]);
      },
      onError: (error: any) => {
        toast.error(error.message);
      },
    }
  );

  const onSubmit = (data: ICreateAddress) => createAddressAction(data);

  return (
    <Modal
      title={"Create New Address"}
      closeModal={closeModal}
      showButtons={false}
      body={<FormAddress onSubmit={onSubmit} closeForm={closeModal} />}
    />
  );
};
