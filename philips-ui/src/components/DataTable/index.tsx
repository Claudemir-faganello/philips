import axios from "axios";
import Pagination from "components/Pagination";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "requests";
import { Page } from "types/page";

function DataTable() {
  const [activePage, setActivePage] = useState(0);

  const [page, setPage] = useState<Page>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  });

  useEffect(() => {
    fetchClients(0);
  }, []);

  const changePage = (page: number) => {
    setActivePage(page);
    fetchClients(page);
  };

  const fetchClients = (page: number) => {
    axios.get(`${BASE_URL}/clients?page=${page}`).then((response) => {
      setPage(response.data);
    });
  };

  const removeClient = (id: any) => {
    console.log(id);
    axios.delete(`${BASE_URL}/clients/${id}`).then((response) => {
      fetchClients(0);
      alert("Cliente excluido com sucesso!");
    });
  };

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-primary text-left py-4">Lista de clientes</h2>
        <div className="col-sm-10 py-2 text-center">
          <Pagination onPageChange={changePage} page={page} />
        </div>
        <div className="col-sm-2 py-2">
          <Link to="/clients/form">
            <button className="btn btn-primary fluid">Novo</button>
          </Link>
        </div>
        <div className="col-sm-12 py-2">
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
                      <a
                        onClick={() => removeClient(item.id)}
                        className="text-danger"
                      >
                        Excluir
                      </a>
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
