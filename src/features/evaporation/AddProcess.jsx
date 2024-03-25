import Modal from "../../ui/Modal/Modal";
import { Button } from "../../ui/shadcn_component/button";
import { useState } from "react";
import CreateProcessForm from "./CreateProcessForm";

function AddProcess() {
  const [isOpenModal, setIsOpenModal] = useState();

  return (
    <div className="flex justify-end">
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Agregar Proceso
      </Button>
      {isOpenModal && (
        <Modal onCloseModal={() => setIsOpenModal(false)}>
          <CreateProcessForm />
        </Modal>
      )}
    </div>
  );
}

export default AddProcess;
