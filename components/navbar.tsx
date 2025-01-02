'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='border-b bg-background'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex-shrink-0'>
            <Link href='/' className='text-2xl font-bold text-primary'>
              Logo
            </Link>
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className='rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground'
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className='md:hidden'>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant='ghost' size='icon'>
                  <Menu className='h-6 w-6' />
                  <span className='sr-only'>Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='w-[240px] sm:w-[300px]'>
                <nav className='flex flex-col gap-4'>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className='block rounded-md px-3 py-2 text-base font-medium text-foreground hover:text-primary'
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
