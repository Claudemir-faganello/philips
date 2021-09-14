type Props = {
  grid: any[];
};

function AdressGrid({ grid }: Props) {
  return (
    <div>
      {grid?.map((item, index) => (
        <div key={index} className="adress-container">
          <span className="adress-detail adress-title">Endereço: {item.type}</span>
          <span className="adress-detail">Cep: {item.zipCode}</span>
          <span className="adress-detail">Rua: {item.street}</span>
          <span className="adress-detail">Cidade: {item.street}</span>
          <span className="adress-detail">Estado: {item.state}</span>
          <span className="adress-detail">Número: {item.number}</span>
          <span className="adress-detail">País: {item.country}</span>


        </div>
      ))}
    </div>
  );
}

export default AdressGrid;
