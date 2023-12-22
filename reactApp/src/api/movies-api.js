export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=28690cade9d9e54199bbcade3cdac9c1&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };