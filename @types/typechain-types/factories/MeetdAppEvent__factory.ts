/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MeetdAppEvent, MeetdAppEventInterface } from "../MeetdAppEvent";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_varAdr",
        type: "address[]",
      },
      {
        internalType: "string[]",
        name: "_varStr",
        type: "string[]",
      },
      {
        internalType: "uint256[]",
        name: "_varInt",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
    ],
    name: "BoughtTicket",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
    ],
    name: "RefundedTicket",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "TransferredTicket",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "eventDescription",
        type: "string",
      },
    ],
    name: "UpdatedEventDescription",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "eventEndTime",
        type: "uint256",
      },
    ],
    name: "UpdatedEventEndTime",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "eventLocation",
        type: "string",
      },
    ],
    name: "UpdatedEventLocation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "eventName",
        type: "string",
      },
    ],
    name: "UpdatedEventName",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "eventOwner",
        type: "address",
      },
    ],
    name: "UpdatedEventOwner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "eventStartTime",
        type: "uint256",
      },
    ],
    name: "UpdatedEventStartTime",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "eventTotalTickets",
        type: "uint256",
      },
    ],
    name: "UpdatedEventTotalTickets",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "eventReedemableTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "eventSecretWordHash",
        type: "bytes32",
      },
    ],
    name: "UpdatedReedemableTimeAndSecretWordHash",
    type: "event",
  },
  {
    inputs: [],
    name: "buyTicket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "eventAttendees",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eventDescription",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eventEndTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eventFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eventId",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eventLocation",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eventName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eventNfts",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eventOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eventReedemableTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eventRemainingTickets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eventSecretWordHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eventStartTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eventTotalTickets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_eventSecretWord",
        type: "string",
      },
    ],
    name: "reedemNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "refundTicket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferTicket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_eventDescription",
        type: "string",
      },
    ],
    name: "updateEventDescription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_eventEndTime",
        type: "uint256",
      },
    ],
    name: "updateEventEndTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_eventLocation",
        type: "string",
      },
    ],
    name: "updateEventLocation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_eventName",
        type: "string",
      },
    ],
    name: "updateEventName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_eventOwner",
        type: "address",
      },
    ],
    name: "updateEventOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_eventStartTime",
        type: "uint256",
      },
    ],
    name: "updateEventStartTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_eventTotalTickets",
        type: "uint256",
      },
    ],
    name: "updateEventTotalTickets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001c1e38038062001c1e833981016040819052620000349162000599565b6200003f33620001f5565b8260008151811062000055576200005562000644565b6020908102919091010151600b80546001600160a01b0319166001600160a01b039092169190911790558260018151811062000095576200009562000644565b6020908102919091010151600c80546001600160a01b0319166001600160a01b0390921691909117905581600081518110620000d557620000d562000644565b602002602001015160009081620000ed919062000752565b508160018151811062000104576200010462000644565b6020026020010151600190816200011c919062000752565b508160028151811062000133576200013362000644565b6020026020010151600290816200014b919062000752565b508160038151811062000162576200016262000644565b6020026020010151600390816200017a919062000752565b508060008151811062000191576200019162000644565b602090810291909101015160065580600181518110620001b557620001b562000644565b602090810291909101015160075580600281518110620001d957620001d962000644565b6020026020010151600581905560048190555050505062000822565b600e80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b601f19601f83011681018181106001600160401b038211171562000285576200028562000247565b6040525050565b60006200029860405190565b9050620002a682826200025d565b919050565b60006001600160401b03821115620002c757620002c762000247565b5060209081020190565b60006001600160a01b0382165b92915050565b620002ef81620002d1565b8114620002fb57600080fd5b50565b8051620002de81620002e4565b6000620003226200031c84620002ab565b6200028c565b83815290506020808201908402830185811115620003435762000343600080fd5b835b818110156200036b57806200035b8882620002fe565b8452506020928301920162000345565b5050509392505050565b600082601f8301126200038b576200038b600080fd5b81516200039d8482602086016200030b565b949350505050565b60006001600160401b03821115620003c157620003c162000247565b601f19601f83011660200192915050565b60005b83811015620003ef578181015183820152602001620003d5565b50506000910152565b6000620004096200031c84620003a5565b905082815260208101848484011115620004265762000426600080fd5b62000433848285620003d2565b509392505050565b600082601f830112620004515762000451600080fd5b81516200039d848260208601620003f8565b6000620004746200031c84620002ab565b83815290506020808201908402830185811115620004955762000495600080fd5b835b818110156200036b5780516001600160401b03811115620004bb57620004bb600080fd5b808601620004ca89826200043b565b855250506020928301920162000497565b600082601f830112620004f157620004f1600080fd5b81516200039d84826020860162000463565b80620002ef565b8051620002de8162000503565b6000620005286200031c84620002ab565b83815290506020808201908402830185811115620005495762000549600080fd5b835b818110156200036b57806200056188826200050a565b845250602092830192016200054b565b600082601f830112620005875762000587600080fd5b81516200039d84826020860162000517565b600080600060608486031215620005b357620005b3600080fd5b83516001600160401b03811115620005ce57620005ce600080fd5b620005dc8682870162000375565b93505060208401516001600160401b03811115620005fd57620005fd600080fd5b6200060b86828701620004db565b92505060408401516001600160401b038111156200062c576200062c600080fd5b6200063a8682870162000571565b9150509250925092565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602260045260246000fd5b6002810460018216806200068557607f821691505b6020821081036200069a576200069a6200065a565b50919050565b6000620002de620006ae8381565b90565b620006bc83620006a0565b815460001960089490940293841b1916921b91909117905550565b6000620006e6818484620006b1565b505050565b818110156200070a5762000701600082620006d7565b600101620006eb565b5050565b601f821115620006e6576000818152602090206020601f85010481016020851015620007375750805b6200074b6020601f860104830182620006eb565b5050505050565b81516001600160401b038111156200076e576200076e62000247565b6200077a825462000670565b620007878282856200070e565b6020601f831160018114620007be5760008415620007a55750858201515b600019600886021c19811660028602178655506200081a565b600085815260208120601f198616915b82811015620007f05788850151825560209485019460019092019101620007ce565b868310156200080d5784890151600019601f89166008021c191682555b6001600288020188555050505b505050505050565b6113ec80620008326000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c8063740ea9a6116100f95780639434571b11610097578063d6bd5db111610071578063d6bd5db11461036a578063e38096f014610373578063edca914c14610386578063f2fde38b1461038e57600080fd5b80639434571b1461033c578063bfebbda814610344578063c0af23461461035757600080fd5b806377d1efb4116100d357806377d1efb4146102fd5780637b1ac251146103105780638043c9c0146103235780638da5cb5b1461032b57600080fd5b8063740ea9a6146102ce57806374995689146102d75780637721fe5c146102ea57600080fd5b80632a6ca755116101665780636afadefb116101405780636afadefb146102985780636fdbd3f6146102ab578063713a3c93146102be578063715018a6146102c657600080fd5b80632a6ca7551461027457806361cec0601461027c578063644714521461028f57600080fd5b80631f4894b1116101a25780631f4894b1146102125780632021413414610242578063270821b614610262578063297449af1461026b57600080fd5b806305ccfd33146101c9578063089cdd0c146101de57806309e52c12146101fc575b600080fd5b6101dc6101d7366004610bd2565b6103a1565b005b6101e66103f1565b6040516101f39190610c63565b60405180910390f35b61020560085481565b6040516101f39190610c83565b610235610220366004610cc7565b600d6020526000908152604090205460ff1681565b6040516101f39190610cf0565b600b54610255906001600160a01b031681565b6040516101f39190610d07565b61020560095481565b61020560055481565b6101e661047f565b600c54610255906001600160a01b031681565b61020560045481565b6101dc6102a6366004610cc7565b61048c565b600a54610255906001600160a01b031681565b6101dc61052d565b6101dc6105ca565b61020560065481565b6101dc6102e5366004610d26565b6105de565b6101dc6102f8366004610d26565b61063d565b6101dc61030b366004610bd2565b61069b565b6101dc61031e366004610d99565b6106e0565b6101e6610873565b600e546001600160a01b0316610255565b6101e6610880565b6101dc610352366004610d26565b61088d565b6101dc610365366004610bd2565b6108eb565b61020560075481565b6101dc610381366004610cc7565b610930565b6101dc610984565b6101dc61039c366004610cc7565b610a19565b6103a9610a53565b60016103b58282610ec7565b507f43abd8587b7e2fd4918308a13f0cf9759cdbba18adb47403d2779a67dac06ef860016040516103e69190611004565b60405180910390a150565b600080546103fe90610df7565b80601f016020809104026020016040519081016040528092919081815260200182805461042a90610df7565b80156104775780601f1061044c57610100808354040283529160200191610477565b820191906000526020600020905b81548152906001019060200180831161045a57829003601f168201915b505050505081565b600380546103fe90610df7565b336000908152600d602052604090205460ff1615156001146104c95760405162461bcd60e51b81526004016104c09061104c565b60405180910390fd5b336000818152600d6020526040808220805460ff199081169091556001600160a01b0385168352918190208054909216600117909155517f7478cc8eb40d9aeecde2e2f399de4bfeb61e737a737f3412f2a6043a077e4494916103e691849061105c565b336000908152600d602052604090205460ff1615156001146105615760405162461bcd60e51b81526004016104c09061104c565b336000908152600d60205260408120805460ff19169055600580546001929061058b90849061108d565b90915550506040517f90cd9e65b809d22b37179b3997ffde6ac5df8905f83e2af169f9dcfbfd824d53906105c0903390610d07565b60405180910390a1565b6105d2610a53565b6105dc6000610a7d565b565b6105e6610a53565b6005548110156106085760405162461bcd60e51b81526004016104c0906110fd565b60048190556040517f7912a16bc65fddc53602b6a128feb835b934d3d374e62b1d229f0ea0b0544664906103e6908390610c83565b610645610a53565b60065481116106665760405162461bcd60e51b81526004016104c090611152565b60078190556040517f64fe254a049b2bf9f5756beb1fce549a5971b13c81378906e2152d25972b90bb906103e6908390610c83565b6106a3610a53565b60036106af8282610ec7565b507f848e9f060382bf958555423cce59bb0b82d362236369f776dc2bc7b5db192b5d60036040516103e69190611004565b336000908152600d602052604090205460ff1615156001146107145760405162461bcd60e51b81526004016104c09061104c565b6008544211156107365760405162461bcd60e51b81526004016104c090611196565b600954828260405160200161074c9291906111b9565b604051602081830303815290604052805190602001201461077f5760405162461bcd60e51b81526004016104c0906111fa565b600c546040516370a0823160e01b81526001600160a01b03909116906370a08231906107af903390600401610d07565b602060405180830381865afa1580156107cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f09190611215565b1561080d5760405162461bcd60e51b81526004016104c090611263565b600c546040516340d097c360e01b81526001600160a01b03909116906340d097c39061083d903390600401610d07565b600060405180830381600087803b15801561085757600080fd5b505af115801561086b573d6000803e3d6000fd5b505050505050565b600180546103fe90610df7565b600280546103fe90610df7565b610895610a53565b60065481116108b65760405162461bcd60e51b81526004016104c0906112ba565b60068190556040517f83f749c39e7f10426bc8d591c61bcbac26fea26bf5ed757ed6cf0a1c753be269906103e6908390610c83565b6108f3610a53565b60026108ff8282610ec7565b507fd65307e9549d188f5ca686b92113466953e2c86f75071c922cb6c06a3a52d16860026040516103e69190611004565b610938610a53565b600b80546001600160a01b0319166001600160a01b0383169081179091556040517f28abb6d14a7f6e94196258e3c3acf0afce19ef39ea4ffe24e4231b9b4250f444916103e691610d07565b336000908152600d602052604090205460ff16156109b45760405162461bcd60e51b81526004016104c0906112fe565b336000908152600d60205260408120805460ff1916600190811790915560058054919290916109e490849061130e565b90915550506040517f6464f1c0b927235997ea56a096b2a63209270b55e0bce7589dd8996e79806e6f906105c0903390610d07565b610a21610a53565b6001600160a01b038116610a475760405162461bcd60e51b81526004016104c090611364565b610a5081610a7d565b50565b600e546001600160a01b031633146105dc5760405162461bcd60e51b81526004016104c0906113a6565b600e80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b601f19601f830116810181811067ffffffffffffffff82111715610b0b57610b0b610acf565b6040525050565b6000610b1d60405190565b9050610b298282610ae5565b919050565b600067ffffffffffffffff821115610b4857610b48610acf565b601f19601f83011660200192915050565b82818337506000910152565b6000610b78610b7384610b2e565b610b12565b905082815260208101848484011115610b9357610b93600080fd5b610b9e848285610b59565b509392505050565b600082601f830112610bba57610bba600080fd5b8135610bca848260208601610b65565b949350505050565b600060208284031215610be757610be7600080fd5b813567ffffffffffffffff811115610c0157610c01600080fd5b610bca84828501610ba6565b60005b83811015610c28578181015183820152602001610c10565b50506000910152565b6000610c3b825190565b808452602084019350610c52818560208601610c0d565b601f01601f19169290920192915050565b60208082528101610c748184610c31565b9392505050565b805b82525050565b60208101610c918284610c7b565b92915050565b60006001600160a01b038216610c91565b610cb181610c97565b8114610a5057600080fd5b8035610c9181610ca8565b600060208284031215610cdc57610cdc600080fd5b6000610bca8484610cbc565b801515610c7d565b60208101610c918284610ce8565b610c7d81610c97565b60208101610c918284610cfe565b80610cb1565b8035610c9181610d15565b600060208284031215610d3b57610d3b600080fd5b6000610bca8484610d1b565b60008083601f840112610d5c57610d5c600080fd5b50813567ffffffffffffffff811115610d7757610d77600080fd5b602083019150836001820283011115610d9257610d92600080fd5b9250929050565b60008060208385031215610daf57610daf600080fd5b823567ffffffffffffffff811115610dc957610dc9600080fd5b610dd585828601610d47565b92509250509250929050565b634e487b7160e01b600052602260045260246000fd5b600281046001821680610e0b57607f821691505b602082108103610e1d57610e1d610de1565b50919050565b6000610c91610e2f8381565b90565b610e3b83610e23565b815460001960089490940293841b1916921b91909117905550565b6000610e63818484610e32565b505050565b81811015610e8357610e7b600082610e56565b600101610e68565b5050565b601f821115610e63576000818152602090206020601f85010481016020851015610eae5750805b610ec06020601f860104830182610e68565b5050505050565b815167ffffffffffffffff811115610ee157610ee1610acf565b610eeb8254610df7565b610ef6828285610e87565b6020601f831160018114610f2a5760008415610f125750858201515b600019600886021c198116600286021786555061086b565b600085815260208120601f198616915b82811015610f5a5788850151825560209485019460019092019101610f3a565b86831015610f765784890151600019601f89166008021c191682555b600160028802018855505050505050505050565b60008154610f9781610df7565b808552602085019450600182168015610fb75760018114610fcd57610ffb565b60ff198316865260208215150286019350610ffb565b60008581526020902060005b83811015610ff557815488820152600190910190602001610fd9565b87019450505b50505092915050565b60208082528101610c748184610f8a565b601881526000602082017f596f7520646f206e6f7420686176652061207469636b65740000000000000000815291505b5060200190565b60208082528101610c9181611015565b6040810161106a8285610cfe565b610c746020830184610cfe565b634e487b7160e01b600052601160045260246000fd5b80820180821115610c9157610c91611077565b604081526000602082017f546f74616c207469636b657473206d757374206265206772656174657220746881527f616e206f7220657175616c20746f2072656d61696e696e67207469636b657473602082015291505b5060400190565b60208082528101610c91816110a0565b602881526000602082017f456e642074696d65206d7573742062652067726561746572207468616e2073748152676172742074696d6560c01b602082015291506110f6565b60208082528101610c918161110d565b601e81526000602082017f596f752063616e6e6f742072656564656d20796f7572204e465420796574000081529150611045565b60208082528101610c9181611162565b60006111b3838584610b59565b50500190565b6000610bca8284866111a6565b601881526000602082017f53656372657420776f726420697320696e636f7272656374000000000000000081529150611045565b60208082528101610c91816111c6565b8051610c9181610d15565b60006020828403121561122a5761122a600080fd5b6000610bca848461120a565b6016815260006020820175165bdd48185b1c9958591e481a185d9948184813919560521b81529150611045565b60208082528101610c9181611236565b602a81526000602082017f53746172742074696d65206d7573742062652067726561746572207468616e2081526973746172742074696d6560b01b602082015291506110f6565b60208082528101610c9181611273565b601981526000602082017f596f7520616c726561647920686176652061207469636b65740000000000000081529150611045565b60208082528101610c91816112ca565b81810381811115610c9157610c91611077565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b602082015291506110f6565b60208082528101610c9181611321565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657291019081526000611045565b60208082528101610c918161137456fea2646970667358221220f7bc301bec67a902cb48a255a9c02b92171de352012befb15f4128c57a25218f64736f6c63430008130033";

type MeetdAppEventConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MeetdAppEventConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MeetdAppEvent__factory extends ContractFactory {
  constructor(...args: MeetdAppEventConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MeetdAppEvent";
  }

  deploy(
    _varAdr: string[],
    _varStr: string[],
    _varInt: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MeetdAppEvent> {
    return super.deploy(
      _varAdr,
      _varStr,
      _varInt,
      overrides || {}
    ) as Promise<MeetdAppEvent>;
  }
  getDeployTransaction(
    _varAdr: string[],
    _varStr: string[],
    _varInt: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _varAdr,
      _varStr,
      _varInt,
      overrides || {}
    );
  }
  attach(address: string): MeetdAppEvent {
    return super.attach(address) as MeetdAppEvent;
  }
  connect(signer: Signer): MeetdAppEvent__factory {
    return super.connect(signer) as MeetdAppEvent__factory;
  }
  static readonly contractName: "MeetdAppEvent";
  public readonly contractName: "MeetdAppEvent";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MeetdAppEventInterface {
    return new utils.Interface(_abi) as MeetdAppEventInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MeetdAppEvent {
    return new Contract(address, _abi, signerOrProvider) as MeetdAppEvent;
  }
}