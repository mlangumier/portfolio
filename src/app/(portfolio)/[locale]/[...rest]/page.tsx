import { notFound } from 'next/navigation';

export async function generateMetadata() {
  return {
    title: '404',
  };
}

export default function CatchAllPage() {
  notFound();
}
