import Image from 'next/image';
import NavigateButton from './navigate-button';
import { lusitana } from '@/app/fonts';

const Hero = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div>
        <Image
          src="/hero-desktop.jpg"
          alt="Desktop Hero"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          className="hidden md:block"
          priority
        />
      </div>
      <div>
        <Image
          src="/hero-mobile.jpg"
          alt="Mobile Hero"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          className="md:hidden"
          priority
        />
      </div>
      <div className="flex flex-col mt-2 items-center">
        <h1 className="text-2xl">Home Page</h1>
        <h1 className={`${lusitana.className} text-lg`}>
          Welcome to Our Website
        </h1>
        <p className={`${lusitana.className} text-lg`}>
          Your success starts here.
        </p>
        <button className="bg-red-500" id="123">
          abc
        </button>
      </div>
      <NavigateButton route="/dogs" label="Test 404" />
      <NavigateButton route="/dashboard" label="Dashboard" />
    </div>
  );
};

export default Hero;
