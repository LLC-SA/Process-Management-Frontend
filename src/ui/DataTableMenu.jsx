import { BsThreeDots } from "react-icons/bs";
import { Button } from "./shadcn_component/button";

import CreateStateForm from "../features/evaporation/CreateStateForm";
import { useState } from "react";
import Modal from "./Modal/Modal";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./shadcn_component/popover";

function DataTableMenu() {
  const [isOpenModal, setIsOpenModal] = useState();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="p-1">
          <BsThreeDots />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-full flex-col gap-6">
        <Button onClick={() => setIsOpenModal((show) => !show)}>Editar</Button>
        {isOpenModal && (
          <Modal onCloseModal={() => setIsOpenModal(false)}>
            <CreateStateForm />
          </Modal>
        )}

        <Button>Borrar</Button>
      </PopoverContent>
    </Popover>
  );
}

export default DataTableMenu;
