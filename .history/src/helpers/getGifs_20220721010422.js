export const getGifs = async (category) => {
    const uri = `https://api.giphy.com/v1/gifs/search?api_key=aJ16I10gt55ey1OiM8UpKKHQbomn51i3&q=${ category }`;
    const response = await fetch( uri );
    const { data } = await response.json();

    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));

    console.log(gifs);
    return gifs;
}; 