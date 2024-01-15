import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 1WBSemD2iDNhAgHUoXzGSPDlgpxHiXZ1WbgWBN4m0Ws",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
