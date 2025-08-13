'use client';

import Blobs from '../components/Blobs';
import HomeTypeBanner from '../components/HomeTypeBanner';
import Navigation from '@/components/Navigation';
import HomeButton from '@/components/HomeButton';
import ProjectSection from '@/components/projects/ProjectSection';

export default function Home() {
  return (
    <div className='relative w-full h-screen min-h-screen'>
      <HomeButton />
      <Navigation />
      <div
        className='w-full flex px-[128px] h-full items-center align-center justify-center'
        id='home'
      >
        <HomeTypeBanner />
        <div className='hidden md:flex'>
          <Blobs />
        </div>
      </div>

      {/* Arrow at bottom */}
      <div className='absolute bottom-12 left-1/2 transform -translate-x-1/2'>
        <img
          src='/down-arrow-long.svg'
          alt='Scroll down'
          className='h-[144px] md:hidden w-auto'
        />
      </div>

      <ProjectSection />
    </div>
  );
}
