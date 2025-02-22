import { Routes as Switch, Route } from "react-router";
import { Home } from "@/pages";

function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
    </Switch>
  );
}

export { Routes };
