import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Evaporation from "./pages/Evaporation";
import Standardization from "./pages/Standardization";
import Spray from "./pages/Spray";
import Packaging from "./pages/Packaging";
import Silos from "./pages/Silos";
import Account from "./pages/Account";
import Crystallizer from "./pages/Crystallizer";
// import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import EvapCIP from "./features/evaporation/EvapCIP";
import EvapProcess from "./features/evaporation/EvapProcess";
import EvapCrystallizers from "./features/evaporation/EvapCrystallizers";
import EvapObservation from "./features/evaporation/EvapObservation";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 0 },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="evaporation" element={<Evaporation />}>
              <Route path="process" element={<EvapProcess />} />
              <Route path="cip" element={<EvapCIP />} />
              <Route path="crystallizers" element={<EvapCrystallizers />} />
              <Route path="observations" element={<EvapObservation />} />
            </Route>
            <Route path="crystallizer" element={<Crystallizer />} />
            <Route path="standardization" element={<Standardization />} />
            <Route path="spray" element={<Spray />} />
            <Route path="packaging" element={<Packaging />} />
            <Route path="silos" element={<Silos />} />
            <Route path="account" element={<Account />} />
          </Route>
          {/* <Route path="login" element={<Login />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
