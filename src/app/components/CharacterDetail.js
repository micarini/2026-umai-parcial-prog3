'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { obtenerEpisodios } from '@/app/utils/episodes';
import EpisodeCard from './EpisodeCard';

function Stat({ label, value }) {
  return (
    <div className='rounded-xl border border-white/10 bg-panel/70 p-4'>
      <p className='mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-haze'>
        {label}
      </p>
      <p className='font-medium text-mist'>{value || '—'}</p>
    </div>
  );
}

function DetailLoader() {
  return (
    <div className='flex flex-col items-center justify-center gap-5 py-32'>
      <div className='relative h-16 w-16'>
        <div className='absolute inset-0 animate-spinSlow rounded-full border-2 border-portal/30 border-t-portal' />
        <div className='absolute inset-2 animate-spinSlow rounded-full border-2 border-aqua/20 border-b-aqua [animation-direction:reverse]' />
      </div>
      <p className='text-sm uppercase tracking-[0.3em] text-haze'>Cargando ficha…</p>
    </div>
  );
}

export default function CharacterDetail({ id }) {
  const [characterDetail, setCharacterDetail] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const API_URL = `https://rickandmortyapi.com/api/character/${id}`;

  // PUNTO 1: FETCH DEL DETALLE
  // Consultar con Axios el personaje seleccionado y obtener la información
  // completa de sus episodios mediante la función obtenerEpisodios.
  useEffect(() => {
    const fetchCharacterDetail = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        setCharacterDetail(response.data);
        console.log(response.data.episode);
        const episodiosCompletos = await obtenerEpisodios(response.data.episode);
        setEpisodes(episodiosCompletos);
      } catch (error) {
        console.error('Error al obtener el personaje:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacterDetail();
  }, [id]);

  if (loading) return <DetailLoader />;

  if (error || !characterDetail) {
    return (
      <p className='px-6 py-32 text-center text-rose-300'>
        No se pudo cargar el personaje.
      </p>
    );
  }

  // PUNTO 3: PÁGINA DE PERSONAJE
  // Mostrar los datos solicitados del personaje y una EpisodeCard
  // por cada episodio en el que aparece.
  //En `CharacterDetail.js`, mostrá nombre, imagen, estado, especie, género, cantidad de episodios, origen y última ubicación.
  return (
    <main className='mx-auto max-w-6xl px-6 py-12'>
      <Link
        href='/'
        className='group mb-8 inline-flex items-center gap-2 text-sm text-haze transition-colors hover:text-portal'
      >
        <span className='transition-transform group-hover:-translate-x-1'>←</span>
        Volver al multiverso
      </Link>

      <div className='grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,400px)_1fr]'>
        <div className='relative mx-auto w-full max-w-sm'>
          <div className='absolute -inset-6 -z-10 animate-floaty rounded-full bg-gradient-radial from-portal/30 via-aqua/15 to-transparent blur-2xl' />
          <div className='relative aspect-square overflow-hidden rounded-3xl border border-white/10 shadow-2xl'>
            <Image
              src={characterDetail.image}
              fill
              sizes='400px'
              alt={characterDetail.name}
              className='object-cover'
            />
          </div>
        </div>

        <div>
          <span className='mb-4 inline-flex rounded-full border border-portal/40 bg-portal/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-portal'>
            {characterDetail.status}
          </span>

          <h1 className='text-4xl font-extrabold tracking-tight text-mist md:text-5xl'>
            {characterDetail.name}
          </h1>
          <p className='mt-2 text-haze'></p>

          <div className='mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3'>
            <Stat label='Especie' value={characterDetail.species} />
            <Stat label='Género' value={characterDetail.gender} />
            <Stat label='Estado' value={characterDetail.status} />
            <Stat label='Origen' value={characterDetail.origin.name} />
            <Stat label='Última ubicación' value={characterDetail.location.name} />
            <Stat label='Episodios' value={characterDetail.episode.length} />
          </div>
        </div>
      </div>

      <section className='mt-12'>
        <h2 className='mb-4 text-xl font-bold text-mist'>Episodios</h2>
        <div className='scroll-portal max-h-[420px] overflow-y-auto rounded-2xl border border-white/10 bg-panel/50 p-3'>
          <ul className='episodios grid grid-cols-1 gap-2 sm:grid-cols-2'>
            {episodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
