import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { RectangleGroupIcon } from '@heroicons/react/24/outline';
import { lusitana } from './fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      
      <p className="text-[36px]">DashNext</p>
      <RectangleGroupIcon className="h-11 w-11 m-1" />
    </div>
  );
}
