import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_QUESTIONS } from '../utils/queries';

const Home = () => {
    const {loading, data} = useQuery(GET_QUESTIONS);
    const questions = data?.getQuestion || [];

return (
    <>{console.log(questions)}
    <h1>Hello World Home</h1>
    </>

    
   
)
}

export default Home;