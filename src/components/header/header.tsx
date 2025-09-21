'use client'

import React, { useEffect, useState } from 'react'
import { ChartCandlestick, Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu'
import { Button } from '../ui/button'
import { useTheme } from 'next-themes'

const Header = () => {
  const { theme, setTheme, systemTheme } = useTheme()

  const isDark =
    theme === 'dark' || (theme === 'system' && systemTheme === 'dark')

  return (
    <header className='border-b bg-gray-800 shadow-sm py-5'>
      <div className='container grid grid-cols-3 mx-auto p-2'>
        <Link href='/' className='flex items-center space-x-2'>
          <ChartCandlestick size='40' className='text-red-900' />
          <h1 className='text-3xl font-bold text-white'>RUPIO</h1>
        </Link>

        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className='flex items-center justify-end'>
          {/* User Login */}
          <Link href='/login' className='mr-4'>
            <Button variant='outline' size='sm'>
              Log In
            </Button>
          </Link>

          {/* User Register */}
          <Link href='/register' className='mr-4'>
            <Button variant='destructive' size='sm'>
              Register
            </Button>
          </Link>

          {/* Theme Toggle */}
          <Button
            variant='outline'
            type='button'
            size='sm'
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={`flex items-center transition-transform duration-500 cursor-pointer
              ${isDark ? 'rotate-180' : 'rotate-0'}
            `}
          >
            {isDark ? (
              <Sun className='h-6 w-6 text-yellow-500 rotate-0 transition-all' />
            ) : (
              <Moon className='h-6 w-6 text-blue-500 rotate-0 transition-all' />
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}
export default Header
