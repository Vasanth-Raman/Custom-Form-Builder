import axios from "axios";

const BACKEND_ORIGIN_URL = "http://localhost:3000/api/v1";

const registerUser = async (userName, email, password) => {
  try {
    const response = await axios.post(`${BACKEND_ORIGIN_URL}/user/register`, {
      userName,
      email,
      password,
    });

    return {
      success: true,
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      success: false,
      data: error.response?.data || "An error occurred",
      status: error.response?.status || 500,
    };
  }
};

const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BACKEND_ORIGIN_URL}/user/login`, {
      email,
      password,
    });
    return {
      success: true,
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      success: false,
      data: error.response?.data || "An error occurred",
      status: error.response?.status || 500,
    };
  }
};

const updateUser = async (userName, email, password, userId) => {
  try {
    const response = await axios.put(
      `${BACKEND_ORIGIN_URL}/user/update/${userId}`,
      {
        userName,
        email,
        password,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { registerUser, loginUser, updateUser };
