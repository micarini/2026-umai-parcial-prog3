import Card from '@/app/components/Card';

export default function CharactersGrid({ characters, loading }) {
  // PUNTO 2: GRILLA DE PERSONAJES
  // Mostrar una Card por cada personaje recibido cuando finalice la carga. 
  // En `CharactersGrid.js`, recorré el array `characters` con `map` y renderizá un componente `Card` por cada personaje.
  return (
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
      {!loading && characters.map((character) => <Card key={character.id} character={character}/> )}
    </div>
  );
}
