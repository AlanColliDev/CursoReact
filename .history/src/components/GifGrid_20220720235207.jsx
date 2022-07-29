
export const GifGrid = ({ category }) => {

    // Si uso AWAIT, la funcion debe ser async
    const GetGifs = async () => {
        const uri = `https://api.giphy.com/v1/gifs/search?api_key=aJ16I10gt55ey1OiM8UpKKHQbomn51i3&q=${ category }`;
    };  const response = await fetch( uri );

    GetGifs();
    return (
        <>
            <h3>{ category }</h3>
            <p>Hola mundo</p>
        </>
    )
}
