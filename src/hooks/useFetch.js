import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";


const initialValue = {
    data:[],
    isLoading:true,
    error:false,
}

export const useFetch = (category) => {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    getGif(category)
      .then((imgs) => {
        setState({ ...state, data: imgs, isLoading: false });
      })
      .catch((err) => {
        setState({ data: [], isLoading: false, error: err });
      });
  }, [category]);


return state;


};
