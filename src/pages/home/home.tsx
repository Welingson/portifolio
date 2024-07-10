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
} from "react-icons/si";

export function Home() {
  return (
    <>
      <div>
        <p className="text-white text-justify text-lg md:text-xl">
          Sou Welingson, também conhecido como Well e sou desenvolvedor. Sou
          formado em{" "}
          <span className="text-emerald-300">Informática para Internet</span> no{" "}
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
          <span className="text-slate-500">Express</span> para o desenvolvimento
          e manutenção de API´s.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 text-white cursor-pointer mt-6">
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
    </>
  );
}
