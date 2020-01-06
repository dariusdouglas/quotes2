const axios = require('axios');

const api = {
  get: async url => {
    const response = await axios.get(url);
    return response.data;
  }
};

export default api;
