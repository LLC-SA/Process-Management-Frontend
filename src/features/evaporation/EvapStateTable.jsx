import { useQuery } from "@tanstack/react-query";
import DataTable from "../../ui/DataTable";
import evapStateColumns from "./data/columns/evapStateColumns";
import EvapDataDummy from "./data/EvapDataDummy";
import { getEvaporationState } from "../../services/apiEvaporation";
import Spinner from "../..//ui/Spinner";
import Error from "../../ui/Error";
import evapStateJSXColumns from "./data/columns/evapStateJSXColumns";
import AddState from "./AddState";

function EvaporationTable() {
  // const {
  //   isLoading,
  //   data: evaporationState,
  //   error,
  // } = useQuery({
  //   queryKey: ["evapState"],
  //   queryFn: getEvaporationState,
  // });

  // // if (isLoading) return <Spinner />;
  // if (error) return <Error />;

  return (
    <DataTable
      columns={evapStateColumns}
      // data={evaporationState}
      data={EvapDataDummy}
      textSize="text-sm"
      columnWidth="p-0"
      rowWidth="p-0"
      actions={true}
    />
  );
}

export default EvaporationTable;
