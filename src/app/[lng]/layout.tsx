import { dir } from 'i18next'

const languages = ['en', 'de']

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

interface PageProps {
  params: {
    lng: string;
  };
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}: {children: any, { params: { lng } }: PageProps}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}