// "use client";

import Link from 'next/link';

interface NavigateButtonProps {
  route: string;
  label: string;
}

function NavigateButton({ route, label }: NavigateButtonProps) {
  return (
    <Link
      href={route}
      className="inline-block px-4 py-2 mt-2 bg-blue-500 hover:bg-blue-700 hover:scale-105 text-white rounded"
    >
      {label}
    </Link>
  );
}

export default NavigateButton;
