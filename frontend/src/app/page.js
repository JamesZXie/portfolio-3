import Blobs from '../components/Blobs';

export default function Home() {
  return (
    <div className='relative min-h-screen w-full flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-2 z-0'>
        <h1 className='text-white text-[144px] font-sans leading-none'>
          JAMES XIE
        </h1>
        <h4 className='font-mono text-4xl text-right w-full'>Design & Code</h4>
      </div>
      <Blobs />
    </div>
  );
}
