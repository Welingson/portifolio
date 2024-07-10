import { Outlet, NavLink } from "react-router-dom";

export function LayoutProjects() {
  return (
    <main className="flex justify-center md:h-dvh bg-gradient-to-b from-indigo-950 to-black">
      <div className="flex border w-2/3">
        <nav>
          <ul>
            <li>
              <NavLink to={"aquilatalk"}>AquilaTalk </NavLink>
            </li>
            <li>
              <NavLink to={"simple-call"}>SimpleCall </NavLink>
            </li>
            <li>
              <NavLink to={"marketplace"}>Marketplace </NavLink>
            </li>
            <li>
              <NavLink to={"real-time-voting"}>Realtime Voting </NavLink>
            </li>
            <li>
              <NavLink to={"strange-tales"}>Strange Tales</NavLink>
            </li>
          </ul>
        </nav>
        <section>
          <Outlet />
        </section>
      </div>
    </main>
  );
}
