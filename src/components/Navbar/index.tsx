'use client';

import { BoomBox, DiscAlbum, House, LogOut, User } from 'lucide-react';
import { useState } from 'react';
import { NavbarItem } from './Navitem';

export const Navbar = () => {
  const [isActive, setIsActive] = useState<string>('home');

  return (
    <aside className='space-y-6'>
      <nav className='bg-dark w-large flex h-fit flex-col rounded-4xl'>
        <NavbarItem
          icon={House}
          isActive={isActive === 'home'}
          onClick={() => setIsActive('home')}
        />
        <NavbarItem
          icon={DiscAlbum}
          isActive={isActive === 'album'}
          onClick={() => setIsActive('album')}
        />
        <NavbarItem
          icon={BoomBox}
          isActive={isActive === 'radio'}
          onClick={() => setIsActive('radio')}
        />
      </nav>

      <nav className='bg-dark w-large flex h-fit flex-col rounded-4xl'>
        <NavbarItem
          icon={User}
          isActive={isActive === 'user'}
          onClick={() => setIsActive('user')}
        />
        <NavbarItem icon={LogOut} onClick={() => alert('logout')} />
      </nav>
    </aside>
  );
};
