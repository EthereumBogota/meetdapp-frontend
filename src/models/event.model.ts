import { BigNumber } from 'ethers'

export interface Event {
	id: string
	name: string
	description: string
	location: string
	totalTickets: number
	remainingTickets: number
	startTime: number
	endTime: number
	reedemableTime: number
	ownerAddress: string
	nftAddress: string
}

export interface EventDTO {
	id: string
	name: string
	description: string
	location: string
	totalTickets: BigNumber
	remainingTickets: BigNumber
	startTime: BigNumber
	endTime: BigNumber
	reedemableTime: BigNumber
	ownerAddress: string
	nftAddress: string
}
