import CrystallizersCard from "../../ui/CrystallizersCard";
import AddCrystallizer from "./AddCrystallizer";

const crystData = [
  {
    id: 1,
    batch: 821,
    type: "D90",
    cryst: 1,
    fillEnd: "22:00",
    volume: 17000,
    solids: 51,
    isPasteurized: true,
    pH: 6.21,
    acidity: 75,
    createdBy: "MZ",
  },
  {
    id: 2,
    batch: 822,
    type: "D90",
    cryst: 1,
    fillEnd: "22:00",
    volume: 17000,
    solids: 51,
    isPasteurized: true,
    pH: 6.21,
    acidity: 75,
    createdBy: "MZ",
  },
  {
    id: 3,
    batch: 823,
    type: "D90",
    cryst: 1,
    fillEnd: "22:00",
    volume: 17000,
    solids: 51,
    isPasteurized: true,
    pH: 6.21,
    acidity: 75,
    createdBy: "MZ",
  },
];

function EvapCrystallizers() {
  return (
    <div className="flex flex-col">
      <AddCrystallizer />

      <div className="flex flex-col flex-wrap gap-4 pt-4">
        {crystData.map((crystallizer) => (
          <CrystallizersCard
            data={crystallizer}
            key={crystallizer.id}
            cardWidth="pr-14 pl-2"
          />
        ))}
      </div>
    </div>
  );
}

export default EvapCrystallizers;
