import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container py-5">
        <div className="jumbotron">
          <h1 className="display-4">Gestão de clientes</h1>
          <p className="lead">Faça a gestão de cadastro dos seus clientes</p>
          <hr />
          <p>
            Esta aplicação consiste em exibir, crai, editar e excluir clientes a
            partir de dados fornecidos por um back end construído com Spring
            Boot.
          </p>
          <Link className="btn btn-primary bnt-lg py-2" to="/clients">
            Acessar lista de clientes
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
