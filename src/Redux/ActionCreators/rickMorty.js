import axios from "axios";

export const getCharacterWithPagination = (url) => {
  return {
    type: "GET_CHARACTER_PAGINATED",
    payload: axios.get(url),
  };
};

// GET_CHARACTER_PAGINATED

// GET_CHARACTER_PAGINATED_PENDING sedang
// GET_CHARACTER_PAGINATED_FULFILLED then
// GET_CHARACTER_PAGINATED_REJECTED catch
