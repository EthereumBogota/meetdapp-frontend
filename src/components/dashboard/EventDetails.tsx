import React from 'react'
import {
	Flex,
	Text,
	VStack,
} from '@chakra-ui/react'

const EventDetails = () => {
	return (
		<Flex
			minH='500px'
			h='fit-content'
			borderRadius='3xl'
			margin='0px auto'
			bg='#DDEBED'
			backgroundPosition={{ base: '100%', md: 'left top' }}
			align='flex-start'
			w='70%'
			flexDirection='column'
			px={12}
      		py={10}
		>
			<VStack align='start' spacing={5}>
				{' '}
				{/* Añadido VStack para apilar los textos verticalmente */}
				<Text fontSize='1.953rem' fontFamily={'space'} fontWeight='semibold' color={'#00001C'}>
          Detalles del Evento
				</Text>
				<Text fontSize='md' color={'#00001C'} fontFamily={'space'}>
          🌐 Web3 en Acción: Sé voluntari@ de impacto 🌐<br />
          ¡Únete a nosotros el Jueves 14 de septiembre a las 6pm en el restaurante Bitácora (Cra. 19 # 134-69) para una experiencia única que te conectará con el poder de ser un voluntario web3!<br /><br />

          ¿Quieres ser parte del cambio y hacer un impacto significativo en la comunidad? ¿Te interesa conocer más sobre la tecnología web3 y cómo puedes usarla para el bien común? ¡Este evento es para ti!<br /><br />

          Tendremos un preámbulo a la Blockchain Summit Latam donde conocerás más detalles de los beneficios que recibirás al registrarte como voluntario, igualmente encontrarás:<br /><br />

          🗣️ Charlas Inspiradoras: Escucha a expertos de la industria compartir su visión y experiencias en el mundo web3 y cómo el voluntariado puede impulsar un cambio real.<br />
          🍽️ Comida deliciosa: Disfruta de la sazón del restaurante Bitácora mientras conectas con otros apasionados por la tecnología y el voluntariado web3.<br />
          🤝 Networking enriquecedor: Amplía tu red de contactos, conoce a personas afines y crea conexiones valiosas que pueden marcar la diferencia.<br /><br />

          Este evento es una oportunidad única para inspirarte, aprender y tomar acción. ¡Juntos podemos construir un futuro mejor a través de la tecnología y el voluntariado!¡Regístrate ahora y sé parte de este movimiento de cambio!#Web3EnAccion #VoluntariadoWeb3 #ImpactoPositivo
				</Text>
			</VStack>
		</Flex>
	)
}

export default EventDetails
