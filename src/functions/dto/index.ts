import { Event, EventDTO } from '@/models/event.model'

export function mapDTOtoEvent(eventDTO: EventDTO): Event {
	return {
		id: eventDTO.id,
		name: eventDTO.name,
		description: eventDTO.description,
		location: eventDTO.location,
		totalTickets: eventDTO.totalTickets.toNumber(),
		remainingTickets: eventDTO.remainingTickets.toNumber(),
		startTime: eventDTO.startTime.toNumber(),
		endTime: eventDTO.endTime.toNumber(),
		reedemableTime: eventDTO.reedemableTime.toNumber(),
		ownerAddress: eventDTO.ownerAddress,
		nftAddress: eventDTO.nftAddress
	}
}
