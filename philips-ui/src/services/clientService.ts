import axios from "axios";

const API_URL = "http://localhost:8080";

class ClientDataService {
  listAllClients() {
    return axios.get(`${API_URL}/clients`);
  }
}

export default new ClientDataService();
