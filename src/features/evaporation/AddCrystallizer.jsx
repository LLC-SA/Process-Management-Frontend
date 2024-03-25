import { Button } from "../../ui/shadcn_component/button";
import { useState } from "react";
import Modal from "../../ui/Modal/Modal";
import CreateCrystallizerForm from "./CreateCrystallizerForm";

function AddCrystallizer() {
  const [isOpenModal, setIsOpenModal] = useState();

  return (
    <div className="flex justify-end">
      <Button
        onClick={() => setIsOpenModal((show) => !show)}
        className="w-full"
      >
        Registrar Cristalizador
      </Button>
      {isOpenModal && (
        <Modal onCloseModal={() => setIsOpenModal(false)}>
          <CreateCrystallizerForm />
        </Modal>
      )}
    </div>
  );
}

export default AddCrystallizer;
