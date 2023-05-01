import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer} from 'recharts';
import {useSelector} from "react-redux";


const Graphics = () => {
    let filmData = useSelector(state => state.filmsStore.films);
    let randNumb = Math.round(Math.random() * filmData.length);
    let randDirector = filmData[randNumb].director;
    filmData = filmData.filter(item => item.director === randDirector).sort((a, b) => a.releaseDate - b.releaseDate)
    return (
        <div className={'w-full h-full overflow-y-hidden'}>
            <p className={'poppins text-slate-50 text-4xl mb-4'}>{randDirector} filmes history</p>
            <ResponsiveContainer width="100%" height="80%">
                <LineChart width={300} height={100} data={filmData}>
                    <XAxis dataKey={"name"} dy={8}/>
                    <YAxis domain={[filmData[0].releaseDate - 2, filmData[filmData.length - 1].releaseDate + 2]}
                           tickCount={filmData.length + 3} dataKey={"releaseDate"} dx={-10}/>
                    <CartesianGrid stroke={"#fff"}/>
                    <Line type="monotone" dataKey="releaseDate" stroke="#8884d8" strokeWidth={4}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Graphics;