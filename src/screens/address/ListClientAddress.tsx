import { useMutation, useQuery } from "react-query";
import { useState } from "react";
import { CreateAddressModal } from "./Modals/CreateAddressModal";
import { useParams } from "react-router-dom";
import { AlertDialog } from "../../components/AlertDialog";
import { toast } from "react-hot-toast";
import { UpdateAddressModal } from "./Modals/UpdateAddressModal";
import {
  deleteAddress,
  listAllAddress,
} from "../../api/address/address.services";
import { IAddress } from "../../interfaces/address/IAddress";

export const ListClientAddress = (): JSX.Element => {
  const { clientId } = useParams();
  const [createAddress, setCreateAddress] = useState<boolean>(false);
  const { data } = useQuery("listAddress", listAllAddress);
  const [address, setAddress] = useState<IAddress>();
  const [deleteAddressModal, setDeleteAddressModal] = useState<boolean>(false);
  const [updateAddressModal, setUpdateAddressModal] = useState<boolean>(false);

  const toggleModalDeleteAddress = () =>
    setDeleteAddressModal((value) => !value);
  const toggleModalAddress = () => setCreateAddress((value) => !value);
  const toggleModaUpdateAddress = () =>
    setUpdateAddressModal((value) => !value);

  const { mutate: deleteAddressAction } = useMutation(
    () => deleteAddress(address ? address.id : 0),
    {
      onSuccess: async (data) => {
        toast.success("Address deleted successfully.");
        toggleModalDeleteAddress();
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const handleDeleteClick = (event: any, row: IAddress) => {
    toggleModalDeleteAddress();
    event.preventDefault();
    setAddress(row);
  };

  const handleUpdateClick = (event: any, row: IAddress) => {
    toggleModaUpdateAddress();
    event.preventDefault();
    setAddress(row);
  };

  return (
    <div className="container max-w-7xl mx-auto mt-8">
      {createAddress && (
        <CreateAddressModal
          closeModal={toggleModalAddress}
          clientId={Number(clientId)}
        />
      )}
      {address && deleteAddressModal && (
        <AlertDialog
          closeAlert={toggleModalDeleteAddress}
          info={`Are you sure you want to delete this address:`}
          text={`${address.street.toUpperCase()}`}
          action={deleteAddressAction}
          type="Info"
          color="red"
        />
      )}
      {address && updateAddressModal && (
        <UpdateAddressModal
          closeModal={toggleModaUpdateAddress}
          address={address}
        />
      )}
      <div className="mb-4">
        <h1 className="font-serif text-3xl font-bold underline decoration-gray-400">
          Address
        </h1>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 rounded-md bg-sky-500 text-sky-100 hover:bg-sky-600"
            onClick={toggleModalAddress}
          >
            Create Address
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {data?.map((address) => {
          return (
            <div key={address.id}>
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                {address.is_default === true && (
                  <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-white bg-gray-200 rounded dark:bg-gray-700 dark:text-white">
                    Default
                  </span>
                )}
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {address.street}
                </h5>
                <div className="flex items-center mb-4 space-x-2">
                  <span className="text-xs text-white"> Created At</span>
                  <span className="text-xs text-white">
                    {address.created_at}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-sm font-medium">
                    <button
                      className="text-white hover:text-indigo-900"
                      onClick={(event: any) =>
                        handleUpdateClick(event, address)
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="text-sm font-medium">
                    <button
                      onClick={(event: any) =>
                        handleDeleteClick(event, address)
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-red-600 hover:text-red-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
      {data?.length == 0 && (
        <h3 className="text-3xl font-bold dark:text-black m-auto text-center">
          No address registered yet
        </h3>
      )}
    </div>
  );
};
