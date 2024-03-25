import SectionNav from "../ui/SectionNav";
import AddState from "../features/evaporation/AddState";
import EvapStateTable from "../features/evaporation/EvapStateTable";
import { Outlet } from "react-router-dom";
import { StyledLink } from "../ui/shadcn_component/styledLink";

function Evaporation() {
  return (
    <div>
      <SectionNav name={"Control del Evaporador"}>
        <div className="flex gap-6">
          <StyledLink to="process" className="focus:bg-emerald-900">
            Procesos
          </StyledLink>
          <StyledLink to="crystallizers" className="focus:bg-emerald-900">
            Cristalizadores
          </StyledLink>
          <StyledLink to="cip" className="focus:bg-emerald-900">
            CIP
          </StyledLink>
          <StyledLink to="observations" className="focus:bg-emerald-900">
            Observaciones
          </StyledLink>
        </div>
      </SectionNav>

      <div className="flex gap-6 pt-2">
        <div className="flex-1">
          <AddState />
          <EvapStateTable />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Evaporation;
