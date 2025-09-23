'use client'

import React, { useEffect, useRef, useState } from 'react'
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<Boolean>(false)
  const mobileMenuRef = useRef<HTMLElement | null>(null)

  const isDark =
    theme === 'dark' || (theme === 'system' && systemTheme === 'dark')

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  //
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as HTMLInputElement)
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isMobileMenuOpen])

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
          <div className='md:flex items-center justify-end'>
            {/* User Login */}
            <div className='hidden md:flex items-center space-x-2'>
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
            </div>
            <div className='flex items-center space-x-2'>
              {/* Mobile Menu & Dark Mode Toggle */}

              <Button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                variant='secondary'
                size='sm'
              >
                <Sun className='h-6 w-6 text-yellow-500 rotate-0 transition-all dark:hidden block' />
                <Moon className='h-6 w-6 text-blue-500 rotate-0 transition-all hidden dark:block' />
              </Button>
              <Button
                onClick={handleToggleMobileMenu}
                variant={'secondary'}
                className='inline-block md:hidden'
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>

            {/* Mobile Navigation Menu */}

            <nav
              ref={mobileMenuRef}
              className={`md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-950 shadow-lg transition-all duration-300 ease-in-out ${
                isMobileMenuOpen
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-full opacity-0 pointer-events-none'
              }`}
            >
              <div className='flex flex-col items-center py-4 space-y-4'>
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
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
