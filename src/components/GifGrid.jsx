import { useState, useEffect } from "react";
import { getGif } from "../helpers/getGif";


export const GifGrid = ({ category }) => {

    const [state, setState ] = useState([]);

    const newState = async() => {

      const images = await getGif( category );

      setState( images );


    }


  useEffect(() => {
    newState();
  }, [])
  


  return (
    <div>
     <ol>





     </ol>



      </div>
  );
};
