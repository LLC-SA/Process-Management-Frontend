import { Button } from "../../ui/shadcn_component/button";
import { useState } from "react";
import CreateStateForm from "./CreateStateForm";
import Modal from "../../ui/Modal/Modal";

function AddState() {
  const [isOpenModal, setIsOpenModal] = useState();

  return (
    <>
      <Button
        onClick={() => setIsOpenModal((show) => !show)}
        className="ml-auto"
      >
        Agregar Estado
      </Button>
      {isOpenModal && (
        <Modal onCloseModal={() => setIsOpenModal(false)}>
          <CreateStateForm />
        </Modal>
      )}
    </>
  );
}

export default AddState;
