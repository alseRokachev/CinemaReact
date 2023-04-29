import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {useSelector} from "react-redux";


const Graphics = () => {
    const filmData = useSelector(state => state.filmsStore.films).filter(item => item.director == 'Gai Richie').sort((a,b) => a.releaseDate - b.releaseDate)
    console.log(filmData)
    return (
        <div className={'w-full h-full overflow-y-hidden'}>
            <p className={'poppins text-slate-50 text-4xl mb-4'}>Gai Richie filmes history</p>
            <ResponsiveContainer width="100%" height="80%">
                <LineChart width={300} height={100} data={filmData}>
                    <XAxis dataKey={"name"}/>
                    <YAxis dataKey={"releaseDate"}/>
                    <CartesianGrid stroke={"#fff"}/>
                    <Line type="linear" dataKey="releaseDate" stroke="#8884d8" strokeWidth={2}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Graphics;