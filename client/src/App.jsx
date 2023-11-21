import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './App.css'
import Navbar from './components/Navbar';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
    </ApolloProvider>
    </>
  );
}

export default App
