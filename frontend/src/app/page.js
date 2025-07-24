'use client';

import Button from '@/components/Button';
import Blobs from '../components/Blobs';
import HomeTypeBanner from '../components/HomeTypeBanner';
import Navigation from '@/components/Navigation';
import HomeButton from '@/components/HomeButton';

export default function Home() {
  return (
    <div className='relative w-full h-screen min-h-screen'>
      <HomeButton />
      <Navigation />
      <div className='flex px-[128px] h-full w-full items-center justify-center'>
        <HomeTypeBanner />
        <Blobs />
      </div>
      <div className='text-[144px] border-t-1'>
        <Button>hi</Button>
        <div className='text-amber-100'>hi</div>
        lorem ipsu mdolor sit amet lorem ipsu mdolor sit amet lorem ipsu mdolor
        sit amet lorem ipsu mdolor sit amet lorem ipsu mdolor sit amet lorem
        ipsu mdolor sit amet lorem ipsu mdolor sit amet lorem ipsu mdolor sit
        amet lorem ipsu mdolor sit amet lorem ipsu mdolor sit amet{' '}
      </div>
    </div>
  );
}
