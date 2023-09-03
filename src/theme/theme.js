import { extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
	fonts: {
		body: "Neue Machina",
		heading: "Neue Machina",
	  },
	colors: {
		brand: {
			light: '#70C9FE',
			dark: '#035231',
			lime: '#A7D7F4',
			newBlack: '#1E1E1E',
			fuchsia: '#9936E8'
		}
	},
	components: {
		Progress: {
			// Customize the colors for different states
			baseStyle: {
				filledTrack: {
					bg: 'blue.200' // Background color of the progress bar
				},
				track: {
					bg: 'gray.200' // Background color of the progress track
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
