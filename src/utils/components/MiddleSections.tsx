import React from 'react'
import '@/styles/globals.css'
import { Flex } from '@chakra-ui/react'
import Section from './Section'
import { useTranslation } from 'react-i18next'
import Events from './Events'
import FAQ from './FAQ'

export default function MiddleSections() {
  const { t } = useTranslation()

  return (
    <Flex width={"100%"} zIndex={50} gap={"8em"} direction={"column"} align={"center"} justify={"center"} py={"5em"} background="#DDEBED" >
      <Events />

      <Section badge={t('landing.section1.badge')}
        heading={t('landing.section1.title')}
        description={t('landing.section1.description')}
        button={t('landing.section1.button')}
        image={'/img/Section 1 Image.png'}
        imageRight={true}
      />

      <Section badge={t('landing.section2.badge')}
        heading={t('landing.section2.title')}
        description={t('landing.section2.description')}
        button={t('landing.section2.button')}
        image={'/img/Section 2 Image.png'}
        imageRight={false}
      />

      <Section badge={t('landing.section3.badge')}
        heading={t('landing.section3.title')}
        description={t('landing.section3.description')}
        button={t('landing.section3.button')}
        image={'/img/Section 3 Image.svg'}
        imageRight={true}
      />

      <Section badge={t('landing.section4.badge')}
        heading={t('landing.section4.title')}
        description={t('landing.section4.description')}
        button={t('landing.section4.button')}
        image={'/img/Section 4 Image.png'}
        imageRight={false}
      />

      <FAQ />
    </Flex >

  )
}
