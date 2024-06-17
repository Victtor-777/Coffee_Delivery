import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { CartPage } from "./pages/Cart";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { ConfirmedPage } from "./pages/Confirmed";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/confirmed" element={<ConfirmedPage />} />
      </Route>
    </Routes>
  );
}
