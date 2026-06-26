import Link from 'next/link';

export default function Navbar() {
  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-md'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-6'>
        <Link href='/' className='group flex items-center gap-3'>
          <span className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-portal to-aqua text-sm font-extrabold text-ink shadow-[0_0_15px_-2px_rgba(151,206,76,0.6)]'>
            R
          </span>
          <span className='text-lg font-bold tracking-tight text-mist'>
            Rick<span className='text-portal'>&amp;</span>Morty
          </span>
        </Link>
        <nav>
          <ul className='flex items-center gap-8 text-sm font-medium'>
            <li>
              <Link href='/' className='text-haze transition-colors hover:text-portal'>
                Home
              </Link>
            </li>
            <li>
              {/* PUNTO 4: agregar el acceso a la página About. */}
              <Link href='/about' className='text-haze'>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
