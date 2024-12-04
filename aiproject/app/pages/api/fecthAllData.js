const axios = require("axios");
require("dotenv").config();
// Use CRUD API key for full access
const API_KEY = "674c7fc41a71a081f8a0f6f3";

const BASE_URL = "https://demosql-fdcb.restdb.io/rest/demo-data";

export default async function queryDatabse(setData) {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        "x-apikey": API_KEY, // Use the CRUD key here
        "Content-Type": "application/json",
      },
    });
    setData(response.data);
    console.log("Fetched Data:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}
