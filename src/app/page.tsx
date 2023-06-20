import Link from "next/link";
import "./home.scss";

export default function Home () {
  return (
    <div className="home">
      <header className="home-header">
        <h1 className="home-header__title">Criador README</h1>
        <span className="home-header__subtitle">
          para projetos de <wbr />aprendizado do Github
        </span>
      </header>

      <main className="home-main">
        <Link href="/create" className="home-cta">
          Criar README
        </Link>

        <div className="content-wrapper">
          <div className="content">
            <h2 className="content__title">O que é?</h2>
            <p className="content__paragraph">
              Você já criou um repositório no Github de um projeto ou desafio e
              acabou deixando sem nenhuma explicação de como você o fez, de como
              é estruturado ou o que você aprendeu com ele? Isso não é nada bom!
              A documentação dos projetos é uma das partes mais importantes e
              mais negligenciadas ao mesmo tempo. O Criador README busca
              simplificar esse processo, levando seus projetos ao próximo nível
              {" :)"}
            </p>
          </div>
          <div className="content">
            <h2 className="content__title">Como funciona?</h2>
            <p className="content__paragraph">
              O Criador README segue um esquema funcional para informar de forma
              prática e clara os objetivos do projeto, aprendizados e
              ferramentas utilizadas, sendo inspirado no README modelo do{" "}
              <a href="https://www.frontendmentor.io/" className="external-link">
                Frontend Mentor
              </a>
              . Esse formato é <strong>específico para projetos de aprendizado/desafio.</strong>
            </p>
            <p className="content__paragraph">
              Basta iniciar o processo de criação, preencher os campos e o seu
              README será gerado automaticamente!
            </p>
          </div>
          <div className="content">
            <h2 className="content__title">Por que usar?</h2>
            <p className="content__paragraph">
              A documentação, apesar de não ser o núcleo do projeto, é de grande
              importância. Por quê? Porque é através dele que há a comunicação
              prática, rápida e simples do que é o seu projeto e o que ele
              realizou, a qual até leigos poderão entender se bem escrito. É
              indispensável seus projetos terem um README se você está em busca
              de emprego!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
