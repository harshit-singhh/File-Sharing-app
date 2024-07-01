import axios from "axios";

const API_URL = "http://localhost:8000";

// as axios is asynchronous function, we use await, and because we use
// await , we have to use async as well
const uploadFile = async (data) => {
  try {
    let response = await axios.post(`${API_URL}/upload`, data);
    // axios ek pura object return karta he
    // eg
    // {
    //     Headers
    //     requestheaders
    //     data
    //     ...
    // }

    // we only took data from it.
    return response.data;
  } catch (error) {
    console.log("error while calling the api ", error.message);
  }
};

export { uploadFile };
