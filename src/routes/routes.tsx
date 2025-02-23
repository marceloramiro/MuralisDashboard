import { Routes as Switch, Route } from "react-router";
import { Home, Ingressantes } from "@/pages";

function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/ingressantes" element={<Ingressantes />} />
    </Switch>
  );
}

export { Routes };
