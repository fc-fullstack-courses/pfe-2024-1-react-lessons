import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <>
      <header style={{ padding: '20px' }}>Auth header</header>
      <main>
        <Outlet />
      </main>
      <footer style={{ padding: '20px' }}>Footer</footer>
    </>
  );
}