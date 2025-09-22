'use client'

import React, { useState } from 'react'
import { LineChart, Menu, Moon, Sun, X } from 'lucide-react'
import Link from 'next/link'

import { Button } from '../ui/button'
import { useTheme } from 'next-themes'
import { Audiowide } from 'next/font/google'
import { cn } from '@/lib/utils'
import { menuItems } from '@/data/menu'

const sourceBokor = Audiowide({
  variable: '--font-bokor',
  subsets: ['latin'],
  weight: ['400'],
})

const Header = () => {
  const { theme, setTheme, systemTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isDark =
    theme === 'dark' || (theme === 'system' && systemTheme === 'dark')

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className='sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm py-2 dark:border-b  dark:border-gray-800 rounded-lg'>
      <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
        <Link href='/' className='flex items-center space-x-2'>
          <LineChart className='h-8 w-8 text-fuchsia-600' />

          <h1
            className={cn(
              sourceBokor.className,
              'text-2xl font-bold text-gray-900 dark:text-gray-50 '
            )}
          >
            RUPIO
          </h1>
        </Link>

        {/*  Menu Bar*/}
        <nav className='hidden md:flex items-center space-x-6'>
          {menuItems.map((menu) => {
            return (
              <Link
                key={menu.path}
                href={menu.path}
                className='text-gray-600 dark:text-gray-300 hover:text-fuchsia-600  dark:hover:text-fuchsia-600 font-medium transition-colors'
              >
                {menu.name}
              </Link>
            )
          })}
        </nav>
        <div>
          <div className='hidden md:flex items-center justify-end'>
            {/* User Login */}
            <Link href='/login' className='mr-4'>
              <Button variant='outline' size='sm'>
                Log In
              </Button>
            </Link>

            {/* User Register */}
            <Link href='/register' className='mr-4'>
              <Button variant='primary' size='sm'>
                Register
              </Button>
            </Link>
            <div className='flex items-center space-x-2'>
              <Button
                onClick={handleToggleMobileMenu}
                className='text-gray-600 dark:text-gray-300 hover:text-fuchsia-600 inline-block md:hidden'
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
              {/* Mobile Menu & Dark Mode Toggle */}

              <Button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                variant='secondary'
                size='sm'
              >
                {isDark ? (
                  <Sun className='h-6 w-6 text-yellow-500 rotate-0 transition-all' />
                ) : (
                  <Moon className='h-6 w-6 text-blue-500 rotate-0 transition-all' />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
