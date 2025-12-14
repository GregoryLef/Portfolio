import Image from 'next/image';

interface StackCardProps {
  name: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const StackLandingCard = ({ name, src, alt, width, height }: StackCardProps) => {
  return (
      <div className="flex flex-col justify-center items-center bg-primary w-36 h-36 lg:w-80 lg:h-80 rounded-md p-4" style={{
        boxShadow: "10px 10px 4px rgba(0, 0, 0, 0.25)",}}>
        <div className='flex justify-center items-center h-full'>
           <Image src={src} alt={alt} width={width} height={height} className='w-24 lg:w-60'/> 
        </div>
        <h3 className="font-regular text-2xl text-secondary font-bold lg:text-4xl">{name}</h3>
      </div>
  );
};