const fetchData = async (setData, setLoading, categoryID) => {
  const response = await fetch(
    `https://gateway.marvel.com:443/v1/public/${categoryID}?ts=1&limit=15&apikey=816f4bd5bdc9f3c4d9b678553dc6abf6&hash=2d18d7e777e04191c3ebe81d0dfb6485`
  );
  const data = await response.json();
  setData(data.data.results);
  setLoading(false);
};

export default fetchData;
