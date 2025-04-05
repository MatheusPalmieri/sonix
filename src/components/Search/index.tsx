import { Search as IconSearch } from 'lucide-react';

export const Search = () => (
  <div className='hover:bg-dark/10 focus-within:bg-dark/50 flex flex-grow items-center rounded-4xl px-4 py-2 transition-all duration-300 focus-within:shadow-lg'>
    <IconSearch className='text-foreground/25' />

    <input
      type='text'
      placeholder='Search for songs, albums, artists...'
      className='placeholder:text-foreground/25 ml-2 h-10 w-full bg-transparent px-4 text-base focus:outline-none'
    />
  </div>
);
