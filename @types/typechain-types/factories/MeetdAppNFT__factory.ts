/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MeetdAppNFT, MeetdAppNFTInterface } from "../MeetdAppNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "_URI",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    name: "name",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    name: "symbol",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "pure",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620015573803806200155783398101604081905262000034916200020e565b82826000620000448382620003b7565b506001620000538282620003b7565b505050620000706200006a6200008860201b60201c565b6200008c565b60086200007e8282620003b7565b5050505062000487565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b601f19601f83011681018181106001600160401b03821117156200011c576200011c620000de565b6040525050565b60006200012f60405190565b90506200013d8282620000f4565b919050565b60006001600160401b038211156200015e576200015e620000de565b601f19601f83011660200192915050565b60005b838110156200018c57818101518382015260200162000172565b50506000910152565b6000620001ac620001a68462000142565b62000123565b905082815260208101848484011115620001c957620001c9600080fd5b620001d68482856200016f565b509392505050565b600082601f830112620001f457620001f4600080fd5b81516200020684826020860162000195565b949350505050565b600080600060608486031215620002285762000228600080fd5b83516001600160401b03811115620002435762000243600080fd5b6200025186828701620001de565b93505060208401516001600160401b03811115620002725762000272600080fd5b6200028086828701620001de565b92505060408401516001600160401b03811115620002a157620002a1600080fd5b620002af86828701620001de565b9150509250925092565b634e487b7160e01b600052602260045260246000fd5b600281046001821680620002e457607f821691505b602082108103620002f957620002f9620002b9565b50919050565b6000620003106200030d8381565b90565b92915050565b6200032183620002ff565b815460001960089490940293841b1916921b91909117905550565b60006200034b81848462000316565b505050565b818110156200036f57620003666000826200033c565b60010162000350565b5050565b601f8211156200034b576000818152602090206020601f850104810160208510156200039c5750805b620003b06020601f86010483018262000350565b5050505050565b81516001600160401b03811115620003d357620003d3620000de565b620003df8254620002cf565b620003ec82828562000373565b6020601f8311600181146200042357600084156200040a5750858201515b600019600886021c19811660028602178655506200047f565b600085815260208120601f198616915b8281101562000455578885015182556020948501946001909201910162000433565b86831015620004725784890151600019601f89166008021c191682555b6001600288020188555050505b505050505050565b6110c080620004976000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a2578063a22cb46511610071578063a22cb46514610210578063b88d4fde14610223578063c87b56dd14610236578063e985e9c514610249578063f2fde38b1461028557600080fd5b806370a08231146101cf578063715018a6146101ef5780638da5cb5b146101f757806395d89b411461020857600080fd5b806323b872dd116100de57806323b872dd1461018357806340d097c31461019657806342842e0e146101a95780636352211e146101bc57600080fd5b806301ffc9a71461011057806306fdde0314610139578063081812fc1461014e578063095ea7b31461016e575b600080fd5b61012361011e3660046108ec565b610298565b6040516101309190610917565b60405180910390f35b6101416102ea565b604051610130919061097b565b61016161015c3660046109a4565b61037c565b60405161013091906109df565b61018161017c366004610a01565b6103a3565b005b610181610191366004610a3e565b6103c4565b6101816101a4366004610a8e565b6103dc565b6101816101b7366004610a3e565b61040d565b6101616101ca3660046109a4565b61042d565b6101e26101dd366004610a8e565b610462565b6040516101309190610ab5565b6101816104a6565b6006546001600160a01b0316610161565b6101416104ba565b61018161021e366004610ad6565b6104c9565b610181610231366004610c04565b6104e1565b6101416102443660046109a4565b6104f9565b610123610257366004610c83565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b610181610293366004610a8e565b610596565b60006001600160e01b031982166380ac58cd60e01b14806102c957506001600160e01b03198216635b5e139f60e01b145b806102e457506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546102f990610ccc565b80601f016020809104026020016040519081016040528092919081815260200182805461032590610ccc565b80156103725780601f1061034757610100808354040283529160200191610372565b820191906000526020600020905b81548152906001019060200180831161035557829003601f168201915b5050505050905090565b6000610387826105d0565b506000908152600460205260409020546001600160a01b031690565b60405162461bcd60e51b81526004016103bb90610d27565b60405180910390fd5b60405162461bcd60e51b81526004016103bb90610d6b565b6103e4610604565b60006103ef60075490565b90506103ff600780546001019055565b610409828261062e565b5050565b610428838383604051806020016040528060008152506104e1565b505050565b6000818152600260205260408120546001600160a01b0316806102e45760405162461bcd60e51b81526004016103bb90610daf565b60006001600160a01b03821661048a5760405162461bcd60e51b81526004016103bb90610e08565b506001600160a01b031660009081526003602052604090205490565b6104ae610604565b6104b86000610648565b565b6060600180546102f990610ccc565b60405162461bcd60e51b81526004016103bb90610e4c565b60405162461bcd60e51b81526004016103bb90610e90565b6060610504826105d0565b6008805461051190610ccc565b80601f016020809104026020016040519081016040528092919081815260200182805461053d90610ccc565b801561058a5780601f1061055f5761010080835404028352916020019161058a565b820191906000526020600020905b81548152906001019060200180831161056d57829003601f168201915b50505050509050919050565b61059e610604565b6001600160a01b0381166105c45760405162461bcd60e51b81526004016103bb90610ee3565b6105cd81610648565b50565b6000818152600260205260409020546001600160a01b03166105cd5760405162461bcd60e51b81526004016103bb90610daf565b6006546001600160a01b031633146104b85760405162461bcd60e51b81526004016103bb90610f25565b61040982826040518060200160405280600081525061069a565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6106a483836106cd565b6106b160008484846107c8565b6104285760405162461bcd60e51b81526004016103bb90610f84565b6001600160a01b0382166106f35760405162461bcd60e51b81526004016103bb90610fc6565b6000818152600260205260409020546001600160a01b0316156107285760405162461bcd60e51b81526004016103bb9061100a565b6000818152600260205260409020546001600160a01b03161561075d5760405162461bcd60e51b81526004016103bb9061100a565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006001600160a01b0384163b156108be57604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061080c90339089908890889060040161101a565b6020604051808303816000875af1925050508015610847575060408051601f3d908101601f1916820190925261084491810190611069565b60015b6108a4573d808015610875576040519150601f19603f3d011682016040523d82523d6000602084013e61087a565b606091505b50805160000361089c5760405162461bcd60e51b81526004016103bb90610f84565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506108c2565b5060015b949350505050565b6001600160e01b031981165b81146105cd57600080fd5b80356102e4816108ca565b60006020828403121561090157610901600080fd5b60006108c284846108e1565b8015155b82525050565b602081016102e4828461090d565b60005b83811015610940578181015183820152602001610928565b50506000910152565b6000610953825190565b80845260208401935061096a818560208601610925565b601f01601f19169290920192915050565b6020808252810161098c8184610949565b9392505050565b806108d6565b80356102e481610993565b6000602082840312156109b9576109b9600080fd5b60006108c28484610999565b60006001600160a01b0382166102e4565b610911816109c5565b602081016102e482846109d6565b6108d6816109c5565b80356102e4816109ed565b60008060408385031215610a1757610a17600080fd5b6000610a2385856109f6565b9250506020610a3485828601610999565b9150509250929050565b600080600060608486031215610a5657610a56600080fd5b6000610a6286866109f6565b9350506020610a73868287016109f6565b9250506040610a8486828701610999565b9150509250925092565b600060208284031215610aa357610aa3600080fd5b60006108c284846109f6565b80610911565b602081016102e48284610aaf565b8015156108d6565b80356102e481610ac3565b60008060408385031215610aec57610aec600080fd5b6000610af885856109f6565b9250506020610a3485828601610acb565b634e487b7160e01b600052604160045260246000fd5b601f19601f830116810181811067ffffffffffffffff82111715610b4557610b45610b09565b6040525050565b6000610b5760405190565b9050610b638282610b1f565b919050565b600067ffffffffffffffff821115610b8257610b82610b09565b601f19601f83011660200192915050565b82818337506000910152565b6000610bb2610bad84610b68565b610b4c565b905082815260208101848484011115610bcd57610bcd600080fd5b610bd8848285610b93565b509392505050565b600082601f830112610bf457610bf4600080fd5b81356108c2848260208601610b9f565b60008060008060808587031215610c1d57610c1d600080fd5b6000610c2987876109f6565b9450506020610c3a878288016109f6565b9350506040610c4b87828801610999565b925050606085013567ffffffffffffffff811115610c6b57610c6b600080fd5b610c7787828801610be0565b91505092959194509250565b60008060408385031215610c9957610c99600080fd5b6000610ca585856109f6565b9250506020610a34858286016109f6565b634e487b7160e01b600052602260045260246000fd5b600281046001821680610ce057607f821691505b602082108103610cf257610cf2610cb6565b50919050565b6015815260006020820174105c1c1c9bdd99481a5cdb89dd08185b1b1bddd959605a1b815291505b5060200190565b602080825281016102e481610cf8565b601a81526000602082017f7472616e7366657246726f6d2069736e277420616c6c6f77656400000000000081529150610d20565b602080825281016102e481610d37565b601881526000602082017f4552433732313a20696e76616c696420746f6b656e204944000000000000000081529150610d20565b602080825281016102e481610d7b565b602981526000602082017f4552433732313a2061646472657373207a65726f206973206e6f7420612076618152683634b21037bbb732b960b91b602082015291505b5060400190565b602080825281016102e481610dbf565b601f81526000602082017f736574417070726f76616c466f72416c6c2069736e277420616c6c6f7765640081529150610d20565b602080825281016102e481610e18565b601e81526000602082017f736166655472616e7366657246726f6d2069736e277420616c6c6f776564000081529150610d20565b602080825281016102e481610e5c565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b60208201529150610e01565b602080825281016102e481610ea0565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657291019081526000610d20565b602080825281016102e481610ef3565b603281526000602082017f4552433732313a207472616e7366657220746f206e6f6e20455243373231526581527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60208201529150610e01565b602080825281016102e481610f35565b60208082527f4552433732313a206d696e7420746f20746865207a65726f206164647265737391019081526000610d20565b602080825281016102e481610f94565b601c81526000602082017f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081529150610d20565b602080825281016102e481610fd6565b6080810161102882876109d6565b61103560208301866109d6565b6110426040830185610aaf565b81810360608301526110548184610949565b9695505050505050565b80516102e4816108ca565b60006020828403121561107e5761107e600080fd5b60006108c2848461105e56fea26469706673582212207a717b6d5d991684ce41ff8ca02967de025303e3a44c59d3b47372d7f14756ee64736f6c63430008130033";

type MeetdAppNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MeetdAppNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MeetdAppNFT__factory extends ContractFactory {
  constructor(...args: MeetdAppNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MeetdAppNFT";
  }

  deploy(
    _name: string,
    _symbol: string,
    _URI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MeetdAppNFT> {
    return super.deploy(
      _name,
      _symbol,
      _URI,
      overrides || {}
    ) as Promise<MeetdAppNFT>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _URI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, _URI, overrides || {});
  }
  attach(address: string): MeetdAppNFT {
    return super.attach(address) as MeetdAppNFT;
  }
  connect(signer: Signer): MeetdAppNFT__factory {
    return super.connect(signer) as MeetdAppNFT__factory;
  }
  static readonly contractName: "MeetdAppNFT";
  public readonly contractName: "MeetdAppNFT";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MeetdAppNFTInterface {
    return new utils.Interface(_abi) as MeetdAppNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MeetdAppNFT {
    return new Contract(address, _abi, signerOrProvider) as MeetdAppNFT;
  }
}
