const API_URL = "https://www.omdbapi.com";
const API_KEY = "4f281bef";

export const GET_FILMS = async (payload) => {
  const { search, type, page } = payload;
  console.log(search, type, page);

  try {
    const response = await fetch(
      `${API_URL}/?apikey=${API_KEY}&s=${encodeURIComponent(
        search
      )}&type=${type}&page=${page}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data.search);
    return data.Search; // Access the correct part of the response
  } catch (err) {
    console.error(err.message); // Use message instead of error
  }
};
