import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Frown } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-slate-950 p-4 relative overflow-hidden'>
      <div className='absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-950 via-slate-950 to-slate-950 opacity-50'></div>

      <Card className='max-w-md w-full text-center p-8 space-y-6 bg-slate-900 border-slate-700 relative z-10'>
        <div className='space-y-4'>
          <Frown size={64} className='mx-auto text-primary' />
          <h1 className='text-5xl font-extrabold tracking-tight text-white sm:text-6xl'>
            404
          </h1>
          <p className='text-xl font-semibold text-slate-200'>Page Not Found</p>
        </div>
        <div className='space-y-4'>
          <p className='text-base text-slate-400'>
            It looks like you've taken a wrong turn. The page you're looking for
            doesn't exist or has been moved.
          </p>
          <CardContent>
            <Button
              // onClick={() => setCurrentPage('home')}
              className='bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:opacity-90 transform transition-transform duration-200 hover:scale-105'
            >
              Go to Homepage
            </Button>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}
