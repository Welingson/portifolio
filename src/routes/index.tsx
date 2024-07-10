import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/home";
import { Layout } from "../layout/_layout";
import { LayoutProjects } from "../pages/projects/_layout-projects";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/projetos" element={<LayoutProjects />}>
            <Route path="aquilatalk" element={<>Aquila talk</>} />
            <Route path="real-time-voting" element={<>Realtime-voting</>} />
            <Route path="marketplace" element={<>Marketplace</>} />
            <Route path="simple-call" element={<>Simple call</>} />
            <Route path="strange-tales" element={<>Strange tales</>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
