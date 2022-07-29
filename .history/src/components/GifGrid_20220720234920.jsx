
export const GifGrid = ({ category }) => {

    const GetGifs = () => {
        const uri = `https://api.giphy.com/v1/gifs/search?api_key=aJ16I10gt55ey1OiM8UpKKHQbomn51i3&q=${category}`;
    };

    return (
        <>
            <h3>{ category }</h3>
            <p>Hola mundo</p>
        </>
    )
}
