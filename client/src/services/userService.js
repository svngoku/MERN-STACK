import axios from "axios";

export default {
    getAll: async () => {
      let res = await axios.get(`http://localhost:4000/api/user`);
      return res.data || [];
    }
};