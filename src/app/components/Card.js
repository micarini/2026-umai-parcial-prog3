import Image from 'next/image';
import Link from 'next/link';

export default function Card({ character }) {
  // PUNTO 2: CARD DE PERSONAJE
  // Mostrar los datos del personaje recibido y permitir acceder a su detalle.
  // En `Card.js`, completá el enlace al detalle usando el `id` y mostrá el nombre (`name`) y la imagen (`image`) recibidos dentro del objeto `character`.
  return (
    <Link
      href={`/character/${character.id}`}
      className='group relative block overflow-hidden rounded-2xl border border-white/10 bg-panel/60 transition duration-300 hover:-translate-y-1.5 hover:border-portal/50 hover:shadow-[0_10px_40px_-8px_rgba(151,206,76,0.4)]'
    >
      <div className='relative aspect-square overflow-hidden'>
        <Image
          src={character.image}
          fill
          sizes='(max-width:768px) 50vw, 25vw'
          alt={character.name}
          className='object-cover transition duration-500 group-hover:scale-105'
        />
        <div className='absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink via-ink/80 to-transparent' />
      </div>
      <div className='absolute inset-x-0 bottom-0 p-4'>
        <h2 className='truncate text-base font-semibold text-mist transition-colors group-hover:text-portal'>
          {character.name}
        </h2>
      </div>
    </Link>
  );
}
