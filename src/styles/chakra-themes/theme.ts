import { extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
	fonts: {
		neue: 'Neue Machina',
		neueBold: 'Neue Machina Bold',
		space: 'Space Grotesk',
		spaceBold: 'Space Grotesk Bold'
	},
	colors: {
		brand: {
			light: '#DDEBED',
			dark: '#00001C',
			lime: '#D4FE48',
			newBlack: '#1E1E1E',
			fuchsia: '#9936E8'
		}
	},
	components: {
		Progress: {
			baseStyle: {
				filledTrack: {
					bg: 'brand.light'
				},
				track: {
					bg: 'gray.200'
				}
			}
		},
		Button: {
			variants: {
				primary: {
					bg: 'brand.light',
					borderRadius: 'lg',
					fontWeight: 'semibold',
					color: 'newBlack',
					size: 'lg',
					_hover: {
						bg: 'brand.lime',
						transitionDuration: '0.2s',
						transitionTimingFunction: 'ease-in-out',
						transform: 'scale(1.05)'
					}
				},
				darkie: {
					bg: 'brand.newBlack',
					borderRadius: 'lg',
					fontWeight: 'semibold',
					color: 'white',
					size: 'lg',
					_hover: {
						transitionDuration: '0.2s',
						transitionTimingFunction: 'ease-in-out',
						transform: 'scale(1.05)'
					}
				},
				outline: {
					bg: 'transparent',
					borderRadius: 'lg',
					borderColor: 'gray.300',
					fontWeight: 'semibold',
					border: '1px',
					_hover: {
						shadow: 'md',
						transitionDuration: '0.2s',
						transitionTimingFunction: 'ease-in-out',
						transform: 'scale(1.05)'
					},
					color: 'gray.500'
				}
			}
		}
	}
})

export default customTheme
