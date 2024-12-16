import { Outlet } from "react-router";
import Header from "../../../components/Header";

export function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer style={{ padding: '20px' }}>Footer</footer>
    </>
  );
}