import { EventRegistry } from "./Event";

export interface User {
  wallet: string;
  nickName: string;
  cid_img?: string;
  web3_confirmed?: boolean;
  user_registry_links: EventRegistry[];
}