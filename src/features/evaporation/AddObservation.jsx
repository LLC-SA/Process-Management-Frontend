import { useState } from "react";
import Modal from "../../ui/Modal/Modal";
import { Button } from "../../ui/shadcn_component/button";
import CreateObservationForm from "./CreateObservationForm";

function AddObservation() {
  const [isOpenModal, setIsOpenModal] = useState();

  return (
    <div>
      <Button
        onClick={() => setIsOpenModal((show) => !show)}
        className="ml-auto"
      >
        Agregar Observación
      </Button>
      {isOpenModal && (
        <Modal onCloseModal={() => setIsOpenModal(false)}>
          <CreateObservationForm />
        </Modal>
      )}
    </div>
  );
}

export default AddObservation;
