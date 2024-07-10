import {
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import { NavLink, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <main className="flex flex-col md:flex-row justify-center h-auto md:h-dvh bg-gradient-to-b from-indigo-950 to-black">
      <section className="md:w-3/4 w-full px-4 pb-4 md:px-0">
        <div className="flex flex-col items-center mt-6 md:mt-6">
          <img
            src="profile.jpg"
            alt="Welingson Expedito dos Santos"
            className="w-28 md:w-24 h-28 md:h-24 rounded-full object-cover border-4 border-white"
          />
          <div className="mt-3">
            <div className="flex justify-center gap-3 text-white mb-2 md:mb-4">
              <a href="https://github.com/Welingson" target="_blank">
                <SiGithub size={35} />
              </a>
              <a
                href="https://www.linkedin.com/in/welingson-webdev/"
                target="_blank"
              >
                <SiLinkedin size={35} className="" />
              </a>
            </div>
            <h1 className="text-xl md:text-2xl text-white font-medium text-center">
              Welingson Expedito dos Santos
            </h1>
          </div>
          <div className="flex gap-2 my-3 text-indigo-900 font-semibold font-sans uppercase">
            <NavLink
              className="w-24 flex justify-center bg-white rounded"
              to={""}
            >
              Sobre
            </NavLink>
            <NavLink
              className="w-24 flex justify-center bg-white rounded"
              to={"projetos"}
            >
              Projetos
            </NavLink>
          </div>

          <div className="border w-full md:w-2/3" />
          <div className="w-full lg:w-2/3 my-4 md:my-8 ">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
}