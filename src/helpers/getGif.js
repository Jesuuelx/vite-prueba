
export const getGif = async( category ) => {
  
    const url = `https://api.giphy.com/v1/gifs/search?api_key=rjKzGQk64Qt49hapLq9bTSzXis1iXXad&q=${category}&limit=20`;

    const resp = await fetch( url );

    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id:img.id,
        title:img.title,
        image:img.images?.downsized_medium,
    }))

    console.log(gifs)
}
