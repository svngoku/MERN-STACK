import axios from "axios";
const url = `http://localhost:4000/api/partenaire`;

export default {
    getAll: async () => {
      let res = await axios.get(url);
      return res.data || [];
    },
    create: async (user) => {
        return await axios.post(url, {user})
            .then((res) => { 
                console.log(res);
                console.log(res.data);
            }).catch((err) => {
                console.error(err);
        })
    },
    // edit: async (user) => {
        
    // }
};