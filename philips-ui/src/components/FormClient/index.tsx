import AdressGrid from "Adress";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "requests";
import { useParams } from "react-router-dom";

function FormClient() {
  const [fullName, setFullName] = useState('');
  const [cpf, setCpf] = useState('');
  const [birth, setBirth] = useState(new Date());
  const [adresses, setAdresses] = useState<any[]>([]);

  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [type, setType] = useState("");

  const save = () => {
    const adressResult = adresses.length
      ? adresses
      : [
          {
            street: street,
            city: city,
            number: number,
            zipCode: zipCode,
            state: state,
            country: country,
            type: type,
          },
        ];
    const client = {
      fullName,
      cpf,
      birth,
      endereco: adressResult,
    };
    console.log(client);

    axios
      .post(`${BASE_URL}/clients`, client)
      .then((response) => {
        alert("Cliente salvo com sucesso!");
        clearFormAdress();
        clearFormClient();
        setAdresses([]);
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao salvar cliente!");
      });
  };
  const hendleFullName = (e: any) => {
    e.preventDefault();
    setFullName(e.target.value);
  };
  const hendleCpf = (e: any) => {
    e.preventDefault();
    setCpf(e.target.value);
  };
  const hendleBirth = (e: any) => {
    e.preventDefault();
    setBirth(e.target.value);
  };

  const hendleStreet = (e: any) => {
    e.preventDefault();
    setStreet(e.target.value);
  };
  const hendleCity = (e: any) => {
    e.preventDefault();
    setCity(e.target.value);
  };
  const hendleNumber = (e: any) => {
    e.preventDefault();
    setNumber(e.target.value);
  };
  const hendleZipCode = (e: any) => {
    e.preventDefault();
    setZipCode(e.target.value);
  };
  const hendleState = (e: any) => {
    e.preventDefault();
    setState(e.target.value);
  };

  const hendleCountry = (e: any) => {
    e.preventDefault();
    setCountry(e.target.value);
  };
  const hendleType = (e: any) => {
    e.preventDefault();
    setType(e.target.value);
  };

  const addAdress = (e: any) => {
    e.preventDefault();

    setAdresses([
      ...adresses,
      {
        street: street,
        city: city,
        number: number,
        zipCode: zipCode,
        state: state,
        country: country,
        type: type,
      },
    ]);
    clearFormAdress();
    console.log(adresses);
  };

  const clearFormAdress = () => {
    const form: any = document.getElementById("form-adress");
    form.reset();
  };
  const clearFormClient = () => {
    const form: any = document.getElementById("form-client");
    form.reset();
  };

  return (
    <div className="container">
      <div className="row">
        <form id="form-client">
          <div className="row">
            <h2 className="text-primary text-left py-4">Novo cliente</h2>
            <div className="form-group py-2 col-sm-12 text-right">
              <Link to="/clients">
                <a className="link">Voltar para lista</a>
              </Link>
              <button
                type="button"
                className="btn btn-primary text-right"
                onClick={save}
              >
                Salvar cliente
              </button>
            </div>
            <div className="form-group py-2 col-sm-12">
              <label>Nome completo</label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="Informe seu nome completo"
                onChange={hendleFullName}
              ></input>
            </div>

            <div className="form-group py-2 col-sm-6">
              <label>Nascimento</label>
              <input
                type="date"
                className="form-control"
                id="nascimento"
                placeholder="Informe a data de nascimento"
                onChange={hendleBirth}
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
                onChange={hendleCpf}
              ></input>
              <small id="cpfHelp" className="form-text text-muted">
                Nós nunca iremos compartilhar seus dados com ninguém.
              </small>
            </div>

            <AdressGrid grid={adresses}></AdressGrid>
          </div>
        </form>

        <form id="form-adress">
          <div className="row">
            <div className="form-group py-2 col-sm-4">
              <label>Cep</label>
              <input
                type="text"
                className="form-control"
                id="cep"
                placeholder="Informe seu cep"
                onChange={hendleZipCode}
              ></input>
            </div>
            <div className="form-group py-2 col-sm-8">
              <label>Rua</label>
              <input
                type="text"
                className="form-control"
                id="rua"
                placeholder="Informe sua rua"
                onChange={hendleStreet}
              ></input>
            </div>
            <div className="form-group py-2 col-sm-3">
              <label>Cidade</label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="Informe a cidade"
                onChange={hendleCity}
              ></input>
            </div>
            <div className="form-group py-2 col-sm-1">
              <label>Número</label>
              <input
                type="number"
                className="form-control"
                id="number"
                placeholder="Informe o número"
                onChange={hendleNumber}
              ></input>
            </div>
            <div className="form-group py-2 col-sm-1">
              <label>UF</label>
              <input
                type="text"
                className="form-control"
                id="state"
                placeholder="Informe sua rua"
                onChange={hendleState}
              ></input>
            </div>

            <div className="form-group py-2 col-sm-2">
              <label>País</label>
              <input
                type="text"
                className="form-control"
                id="country"
                placeholder="Informe seu país"
                onChange={hendleCountry}
              ></input>
            </div>
            <div className="form-group py-2 col-sm-2">
              <label>Tipo</label>
              <input
                type="text"
                className="form-control"
                id="type"
                placeholder="Informe o tipo"
                onChange={hendleType}
              ></input>
            </div>
            <div className="form-group py-2 col-sm-3">
              <button
                type="button"
                className="btn btn-secondary fluid marginTopSmall"
                onClick={addAdress}
              >
                Incluir outro endereço
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormClient;
