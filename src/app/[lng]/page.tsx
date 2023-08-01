import Link from 'next/link'
import { useTranslation } from '../i18n';

interface PageProps {
  params: {
    lng: string;
  };
}

export default async function Page({ params: { lng } }: PageProps) {
  const { t } = await useTranslation(lng)

  return (
    <>
      <h1>{t('title')}</h1>
    </>
  )
}