import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '50726e14b6f2469389b3648144d47d84'
  }

})
