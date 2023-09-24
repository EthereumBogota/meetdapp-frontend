import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
	en: {
		translation: require('@/assets/i18n/en.json')
	},
	es: {
		translation: require('@/assets/i18n/es.json')
	}
}

i18n.use(initReactI18next).init({
	resources,
	fallbackLng: 'en',
	lng: 'en',
	interpolation: {
		escapeValue: false
	}
})

export default i18n
