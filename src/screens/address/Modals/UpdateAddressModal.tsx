import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { Modal } from "../../../components/Modal";
import { FormAddress } from "../FormAddress";
import { IAddress } from "../../../interfaces/address/IAddress";
import { updateAddress } from "../../../api/address/address.services";
import { ICreateAddress } from "../../../interfaces/address/ICreateAddress";

type Props = {
  closeModal(): void;
  address: IAddress;
};

export const UpdateAddressModal = ({
  closeModal,
  address,
}: Props): JSX.Element => {
  const { mutate: updateAddressAction } = useMutation(
    (newData: ICreateAddress) => updateAddress(newData, address.id),
    {
      onSuccess: async (data) => {
        toast.success("Address updated successfully.");
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const onSubmit = (data: ICreateAddress) => updateAddressAction(data);

  return (
    <Modal
      title={"Update Address"}
      closeModal={closeModal}
      showButtons={false}
      body={
        <FormAddress
          onSubmit={onSubmit}
          closeForm={closeModal}
          address={address}
        />
      }
    />
  );
};
