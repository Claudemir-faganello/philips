function DataTable() {
  return (
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
              <tr>
                  <td>1</td>
                  <td>Claudemir</td>
                  <td>03101078067</td>
                  <td>26/08/1993</td>
                  <td>
                      <a className="fa fa-edit">Editar | </a>
                      <a className="fa fa-edit">Excluir</a>
                  </td>
              </tr>
              <tr>
                  <td>1</td>
                  <td>Claudemir</td>
                  <td>03101078067</td>
                  <td>26/08/1993</td>
                  <td>
                      <a className="fa fa-edit">Editar | </a>
                      <a className="fa fa-edit">Excluir</a>
                  </td>
              </tr>
              <tr>
                  <td>1</td>
                  <td>Claudemir</td>
                  <td>03101078067</td>
                  <td>26/08/1993</td>
                  <td>
                      <a className="fa fa-edit">Editar | </a>
                      <a className="fa fa-edit">Excluir</a>
                  </td>
              </tr>
            
              
          </tbody>
      </table>
  </div>
    
      </div>

    </div>
  );
}

export default DataTable;
