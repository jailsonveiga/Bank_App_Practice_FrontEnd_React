import axios from "axios";

const ACCOUNT_API_BASE_URL = "http://localhost:8080/bankapp/getall";
class AccountService {
  getAccounts() {
    return axios.get(ACCOUNT_API_BASE_URL);
  }
}

export default new AccountService();
