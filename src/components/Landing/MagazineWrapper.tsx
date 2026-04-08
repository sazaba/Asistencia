'use client';

import dynamic from 'next/dynamic';

// Aquí hacemos la importación dinámica apagando el SSR
const MagazineViewer = dynamic(() => import('./MagazineViewer'), {
  ssr: false,
});

export default function MagazineWrapper() {
  return <MagazineViewer />;
}