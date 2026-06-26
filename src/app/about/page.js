'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  // PUNTO 4: PÁGINA ABOUT
  // Completar la presentación personal, la interacción de la imagen
  // y el listado de personajes favoritos solicitado en la consigna.
  //- Tu nombre y apellido.
//- Una imagen guardada dentro de `public`. Debe comenzar oculta y ser reemplazada por un botón “Ver imagen”. Usá `useState`, `onClick` y renderizado condicional.
//- Un párrafo que te presente como un personaje de Rick & Morty.
//- Un enlace a LinkedIn u otra red social.
//- Un array de personajes favoritos. Cada objeto debe tener un nombre y la cantidad de veces que viste al personaje.
//- Mostrá los personajes con `map`, agregando la palabra “veces”. Antes del `map`, usá `filter` para mostrar solamente los vistos más de 3 veces.
//- Convertí el texto About de `Navbar.js` en un enlace a `/about`.
//- Usá HTML semántico, Tailwind y un diseño responsive.

  const [showImage, setShowImage] = useState(false);

  const personajes = [
    {nombre: 'Summer Smith', veces: 6},
    {nombre: 'Rick Sanchez', veces: 10},
    {nombre: 'Amish Cyborg', veces: 4},
    {nombre: 'Abadango Cluster Princess', veces: 6},
  ];

  return (
    <main className='mx-auto px-6 py-16 bg-panel/50  text-[#fff8f6]'>
      <section className='mx-auto flex max-w-[1100px] flex-col gap-10 px-6 p-10 md:flex-row md:gap-14 md:px-10 md:py-16'>
        <section className='flex flex-1 flex-col gap-5'>
          <h1 className='text-4xl font-semibold md:text-4xl'>Mia Carini Rojo</h1>
          <p className='max-w-xl text-base leading-7 md:text-lg'><b>gender: </b>"Female" <br></br>
          <b>location:</b> 'Earth (Replacement Dimension)' <br></br>
          <b>origin:</b> 'Anatomy Park' <br></br>
          <b>species:</b> "Robot" <br></br>
          <b>status:</b> "Unknown"</p>
          <Link className='w-fit border-b border-[#44c960] pb-1 text-lg font-medium text-[#7A2E2E}' href='https://www.linkedin.com/in/mia-carini-rojo' target='_blank' rel='noreferrer'>LinkedIn</Link>
          <div className='pt-4'>
            <h2 className='mb-3 text-xl font-semibold text-[#44c960]'>Personajes favoritos</h2>
            <ul className='flex flex-col gap-2'>
              { personajes
                .filter((personaje) => personaje.veces > 3)
                .map((personaje => (
                  <li key={personaje.nombre}>
                    {personaje.nombre} : {personaje.veces} veces
                  </li>
                )))
              }
            </ul>
          </div>
        </section>
        <section className='flex-1'>
          {!showImage ? (
            <button type='button' onClick={()=>setShowImage(true)} className='flex min-h-[280px] w-full items-center justify-center rounded-2xl bg-slate-500 px-6 py-12 text-lg font-semibold text-[#fff8f6] md:min-h-[315px] hover:bg-slate-700'>Ver imagen</button>
          ) : (
            <Image 
            src='/mifoto.png'
            alt='Foto personal para about' 
            width={1200}
            height={900}
            className='h-auto w-full rounded-2xl object-cover'
            priority/>
          )
          }
        </section>
      </section>
    </main>
  );
}
