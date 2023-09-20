import { User } from "./User"
enum EventRegistryStatusEnum {
  REGISTERED = 'registered',
  CANCELLED = 'cancelled',
  ASISTED = 'asisted'
}
export interface Event {
	eventId: string
	eventName: string
	eventDescription: string
	eventLocation: string
	nftName: string
	nftSymbol: string
	nftUri: string
	startDate: number
	endDate: number
	capacity: number
}
export interface EventRegistry {
  event_id: string;
  user_wallet: string;
  status: EventRegistryStatusEnum;
  log_date?: Date;
  web3_confirmed? : boolean;
  users: User[];
  events: Event[];
}