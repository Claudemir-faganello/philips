import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { BASE_URL } from "requests";
import { Page } from "types/page";

function DataTable() {
  const [page, setPage] = useState<Page>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/clients`).then((response) => {
      console.log(response.data);
      setPage(response.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 py-3">
          <h2 className="text-secondary text-center py-4">Lista de clientes</h2>

          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nome</th>
                  <th>CPF</th>
                  <th>Nascimento</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {page.content?.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.cpf}</td>
                    <td>{item.fullName}</td>
                    <td>{item.birth}</td>
                    <td>
                      <a className="fa fa-edit">Editar | </a>
                      <a className="fa fa-edit">Excluir</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
