import { useState } from "react";
import { Button } from "../../ui/shadcn_component/button";
import CreateCIPForm from "./CreateCIPForm";
import Modal from "../../ui/Modal/Modal";
import CreateFilterForm from "./CreateFilterForm";

function AddCIP() {
  const [isOpenModalCIP, setIsOpenModalCIP] = useState();
  const [isOpenModalFilter, setIsOpenModalFilter] = useState();

  return (
    <div className="flex justify-end gap-4">
      <Button
        onClick={() => setIsOpenModalCIP((show) => !show)}
        className="w-full"
      >
        Registrar Lavado
      </Button>
      {isOpenModalCIP && (
        <Modal onCloseModal={() => setIsOpenModalCIP(false)}>
          <CreateCIPForm />
        </Modal>
      )}

      <Button
        onClick={() => setIsOpenModalFilter((show) => !show)}
        className="w-full"
      >
        Revisión Filtros
      </Button>
      {isOpenModalFilter && (
        <Modal onCloseModal={() => setIsOpenModalFilter(false)}>
          <CreateFilterForm />
        </Modal>
      )}
    </div>
  );
}

export default AddCIP;
