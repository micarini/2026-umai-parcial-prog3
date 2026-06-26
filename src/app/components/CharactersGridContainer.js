'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CharactersGrid from '@/app/components/CharactersGrid';

const API_URL = `https://rickandmortyapi.com/api/character`;

function PortalLoader() {
  return (
    <div className='flex flex-col items-center justify-center gap-5 py-24'>
      <div className='relative h-16 w-16'>
        <div className='absolute inset-0 animate-spinSlow rounded-full border-2 border-portal/30 border-t-portal' />
        <div className='absolute inset-2 animate-spinSlow rounded-full border-2 border-aqua/20 border-b-aqua [animation-direction:reverse]' />
      </div>
      <p className='text-sm uppercase tracking-[0.3em] text-haze'>Abriendo portal…</p>
    </div>
  );
}
   
export default function CharactersGridContainer() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // PUNTO 1: FETCH DEL LISTADO
  // Consultar con Axios el listado de personajes y conservar
  // la información necesaria para mostrarla en la grilla.
  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        console.log(response.data.results);
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error al obtener los personajes:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
      
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      {loading && <PortalLoader />}
      {error && (
        <p className='py-16 text-center text-rose-300'>
          No se pudieron cargar los personajes.
        </p>
      )}
      {/* Mostrar grilla CharactersGrid si no hay error y no está en loading, pasando las props: characters y loading (importante!) */}
      {loading ? <p>Loading...</p> : <CharactersGrid characters={characters} loading={loading}/>}
    </div>
  );
}
