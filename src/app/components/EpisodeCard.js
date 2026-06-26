export default function EpisodeCard({ episode }) {
  // PUNTO 3: COMPONENTE DE EPISODIO
  // Mostrar el código, nombre y fecha de emisión del episodio recibido.
  return (
    <li className='flex items-center gap-3 rounded-xl border border-white/5 bg-ink/40 px-4 py-3 transition-colors hover:border-portal/30 hover:bg-panel2/60'>
      <span className='shrink-0 rounded-md bg-portal/15 px-2 py-1 font-mono text-xs font-bold text-portal'>
        {episode.episode}
      </span>
      <span className='min-w-0 flex-1'>
        <span className='block truncate font-medium text-mist'>
          {episode.name}
        </span>
        <span className='text-xs text-haze'>
          {episode.air_date}
        </span>
      </span>
    </li>
  );
}
