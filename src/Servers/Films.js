const API_URL = "https://www.omdbapi.com";
const API_KEY = "4f281bef";

export class FilmsService {
  static async GET_FILMS(payload) {
    const { search, page } = payload;

    try {
      const response = await fetch(
        `${API_URL}/?apikey=${API_KEY}&s=${encodeURIComponent(
          search
        )}&page=${page}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data; // Access the correct part of the response
    } catch (err) {
      console.error(err.message); // Use message instead of error
    }
  }

  static async GET_FILM_BY_ID(imdbID) {
    try {
      const response = await fetch(`${API_URL}/?apikey=${API_KEY}&i=${imdbID}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      return data; // Access the correct part of the response
    } catch (err) {
      console.error(err.message); // Use message instead of error
    }
  }

  static async GET_FILMS_BY_FILTERS(payload) {
    const { search, type, year } = payload;
    try {
      const response = await fetch(
        `${API_URL}/?apikey=${API_KEY}&s=${encodeURIComponent(
          search
        )}&type=${type}&y=${year}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data; // Access the correct part of the response
    } catch (err) {
      console.error(err.message); // Use message instead of error
    }
  }
}
