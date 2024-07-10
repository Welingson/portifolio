import {
  SiTypescript,
  SiReact,
  SiGit,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";

export function App() {
  return (
    <main className="flex flex-col md:flex-row justify-center h-auto md:h-dvh bg-gradient-to-b from-indigo-950 to-black">
      <section className="md:w-3/4 w-full px-4 pb-4 md:px-0">
        <div className="flex flex-col items-center mt-6 md:mt-12">
          <img
            src="profile.jpg"
            alt="Welingson Expedito dos Santos"
            className="w-28 md:w-36 h-28 md:h-36 rounded-full object-cover border-4 border-white"
          />

          <div className="my-3 md:my-6">
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
            <h1 className="text-2xl md:text-4xl text-white font-medium text-center">
              Welingson Expedito dos Santos
            </h1>
          </div>
          <div className="border w-full md:w-2/3" />
          <div className="w-full lg:w-2/3 my-4 md:my-8 ">
            <p className="text-white text-justify text-lg md:text-xl">
              Sou Welingson, também conhecido como Well e sou desenvolvedor. Sou
              formado em{" "}
              <span className="text-emerald-300">
                Informática para Internet
              </span>{" "}
              no{" "}
              <a
                className="text-emerald-300"
                target="_blank"
                href="https://www.google.com/search?q=centro+de+educa%C3%A7%C3%A3o+profissional+tancredo+neves"
              >
                Centro de Educação Profissional Tancredo Neves.
              </a>{" "}
              Tenho boa experiência em desenvolvimento{" "}
              <span className="text-emerald-300">Front-end</span> utilizando
              tecnologias como: <span className="text-sky-300">React</span>,{" "}
              <span className="text-blue-400">TypeScript</span> e{" "}
              <span className="text-sky-500">Tailwind CSS</span>. Já colaborei e
              colaboro também em projetos full-stack usando outras tecnologias{" "}
              <span className="text-yellow-400">JavaScript</span> como{" "}
              <span className="text-green-500">Node.Js</span> e{" "}
              <span className="text-slate-500">Express</span> para o
              desenvolvimento e manutenção de API´s.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-white cursor-pointer">
            <div>
              <SiHtml5 size={35} className="text-orange-500" />
            </div>
            <div>
              <SiCss3 size={35} className="text-blue-500" />
            </div>
            <div>
              <SiJavascript size={35} className="text-yellow-400" />
            </div>
            <div>
              <SiTypescript size={35} className="text-blue-400" />
            </div>
            <div>
              <SiNodedotjs size={35} className="text-green-500" />
            </div>
            <div>
              <SiExpress size={35} className="text-slate-500" />
            </div>
            <div>
              <SiReact size={35} className="text-sky-300" />
            </div>
            <div>
              <SiTailwindcss size={35} className="text-sky-500" />
            </div>
            <div>
              <SiGit size={35} className="text-orange-600" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}