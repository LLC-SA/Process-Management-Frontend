import DataTable from "../../ui/DataTable";
import processColumns from "./data/columns/evapProcessColumns";
import AddProcess from "./AddProcess";

function EvaporationProcess() {
  return (
    <div>
      <AddProcess />
      <DataTable
        columns={processColumns}
        data={[
          {
            inputTime: "22:00",
            flowRate: "44845",
            process: "Recirculación",
            feed: "S1",
            output: "S2",
          },
          {
            inputTime: "22:00",
            flowRate: "44845",
            process: "Recirculación",
            feed: "S1",
            output: "S2",
          },
          {
            inputTime: "22:00",
            flowRate: "44845",
            process: "Recirculación",
            feed: "S1",
            output: "S2",
          },
        ]}
        rowWidth="p-4"
      />
    </div>
  );
}

export default EvaporationProcess;
