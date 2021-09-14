function FormClient() {
  return (
    <div className="row">
      <div className="col-sm-12 py-3">
        <h2 className="text-secondary text-center py-4">Novo cliente</h2>
        <FormClient />
      </div>
      <form>
        <div className="row">
          <div className="form-group py-2 col-sm-12">
            <label>Nome completo</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Informe seu nome completo"
            ></input>
          </div>

          <div className="form-group py-2 col-sm-6">
            <label>Nascimento</label>
            <input
              type="date"
              className="form-control"
              id="nascimento"
              placeholder="Informe a data de nascimento"
            ></input>
          </div>
          <div className="form-group py-2 col-sm-6">
            <label>CPF</label>
            <input
              type="text"
              className="form-control"
              id="cpf"
              aria-describedby="cpfHelp"
              placeholder="Informe seu cpf"
            ></input>
            <small id="cpfHelp" className="form-text text-muted">
              Nós nunca iremos compartilhar seus dados com ninguém.
            </small>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormClient;
