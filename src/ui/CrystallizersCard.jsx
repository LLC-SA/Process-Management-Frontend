import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./shadcn_component/card";

function CrystallizersCard({ data, cardWidth }) {
  return (
    <Card className={cardWidth}>
      <CardHeader className="p-4">
        <CardTitle className="text-sm">Batch {data.batch}</CardTitle>
        <CardDescription className="font-me text-sm">
          Tipo: {data.type}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pb-0 pt-0 text-sm">
        <div>Cristalizador: {data.cryst}</div>
        <div>Hora: {data.fillEnd}</div>
        <div>Litros: {data.volume} litros</div>
        <div>Sólidos: {data.solids} ºBx</div>
        <div>pH: {data.pH}</div>
        <div>Acidez: {data.acidity} ºD</div>
      </CardContent>
      <CardFooter className="p-4 text-sm">
        <p>Responsable: {data.createdBy}</p>
      </CardFooter>
    </Card>
  );
}

export default CrystallizersCard;
