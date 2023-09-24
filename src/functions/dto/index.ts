import { Event, EventDTO } from '@/models/event.model'
import { BigNumber } from 'ethers'

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

export function mapEventToDTO(event: Event): EventDTO {
	return {
		id: event.id,
		name: event.name,
		description: event.description,
		location: event.location,
		totalTickets: BigNumber.from(event.totalTickets),
		remainingTickets: BigNumber.from(event.remainingTickets),
		startTime: BigNumber.from(event.startTime),
		endTime: BigNumber.from(event.endTime),
		reedemableTime: BigNumber.from(event.reedemableTime),
		ownerAddress: event.ownerAddress,
		nftAddress: event.nftAddress
	}
}
