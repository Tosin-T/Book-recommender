import axios from "axios";

const apikey = "f24169ebe84142998e6f4ebd20e10f31"
const apiurl = "https://api.bigbookapi.com/search-books?api-key=" + apikey + "&query=";

const apicall = {
  search: function() {
    return axios.get(apiurl);
  }
}

export default apicall;