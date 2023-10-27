import { render, screen } from '@testing-library/react'

import Attendees from './Attendees'

jest.mock('react-blockies', () => () => null)

const initialValue: string[] = []

const attendees: string[] = [
	'0xE8e1543235e6C35C656ef0b28526C61571583f4B',
	'0x7Db67b92794e2569DAB6A2E38D877900F8883350',
	'0xd243438f6d14E2097e96D81e56E08C7D847a67A6'
]

describe('Attendees', () => {
	it('should render without crashing with attendees', () => {
		render(<Attendees attendees={attendees} />)
	})

	it('should render without crashing with empty attendees', () => {
		render(<Attendees attendees={initialValue} />)
	})

	it('should display the "Asistentes" text', () => {
		render(<Attendees attendees={attendees} />)

		// @ts-ignore
		expect(screen.getByText('Asistentes')).toBeInTheDocument()
	})

	it('should render shorted attendee wallet', () => {
		render(<Attendees attendees={attendees} />)

		attendees.forEach((wallet: string) => {
			const shortened: string =
				wallet.substring(0, 6) + '...' + wallet.substring(wallet.length - 4)

			// @ts-ignore
			expect(screen.getByText(shortened)).toBeInTheDocument()
		})
	})
})
