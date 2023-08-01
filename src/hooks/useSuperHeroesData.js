import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery(
    //Unique key
    "super-heroes",
    //fetcher function
    fetchSuperHeroes,

    //configurations and options
    {
      /* //Polling
      //Useful for data that changes very frequently
      refetchInterval: 2000,
      refetchIntervalInBackground: true, */

      /*  //Fetching data on button Click
      enabled: false, */
      onSuccess,
      onError,
      //data transformation or filtering
      select: (data) => {
        const heroNames = data.data.map((hero) => hero.name);
        return heroNames;
      },
    }
  );
};
