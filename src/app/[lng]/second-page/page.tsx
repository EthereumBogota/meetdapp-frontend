import Link from 'next/link'

interface PageProps {
    params: {
      lng: string;
    };
  }

export default function Page({ params: { lng } }: PageProps) {
  return (
    <>
      <h1>Hi from second page!</h1>
      <Link href={`/${lng}`}>
        back
      </Link>
    </>
  )
}