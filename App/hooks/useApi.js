import { useState } from "react";

export default useApi = (apiFun) => {
  const [error, setError] = useState(null);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadListings = async (...args) => {
    setLoading(true);
    const response = await apiFun(...args);
    setLoading(false);
    if (!response.ok) {
      return setError(response.problem);
    }
    setError(null);
    setListings(response.data);
  };

  return { error, listings, loading, loadListings };
};
