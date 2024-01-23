import axios from "axios";

const apikey = "f24169ebe84142998e6f4ebd20e10f31"
const apicall = "https://api.bigbookapi.com/search-books?api-key=" + apikey + "&query=" + query;


export default {
  search: function() {
    return axios.get(apicall);
  }
};