import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();

        setResult(json);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, []);

  return { loading, result, error };
}
