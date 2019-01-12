const Tx = require('ethereumjs-tx')
const Web3 = require('web3')
const web3 =new Web3('https://rinkeby.infura.io/v3/9ce80a86c6c54d22aa821d0486a1a47d')


var account1 = '0xa00c70B72150D627cf53872eefD077079116B6a6'
const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1,'hex')

var data = '0x60806040526012600460006101000a81548160ff021916908360ff1602179055503480156200002d57600080fd5b506040516200115638038062001156833981018060405260608110156200005357600080fd5b8101908080516401000000008111156200006c57600080fd5b828101905060208101848111156200008357600080fd5b8151856001820283011164010000000082111715620000a157600080fd5b50509291906020018051640100000000811115620000be57600080fd5b82810190506020810184811115620000d557600080fd5b8151856001820283011164010000000082111715620000f357600080fd5b505092919060200180519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600460009054906101000a900460ff1660ff16600a0a810260018190555082600290805190602001906200017e929190620001e5565b50816003908051906020019062000197929190620001e5565b5080600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050505062000294565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200022857805160ff191683800117855562000259565b8280016001018555821562000259579182015b82811115620002585782518255916020019190600101906200023b565b5b5090506200026891906200026c565b5090565b6200029191905b808211156200028d57600081600090555060010162000273565b5090565b90565b610eb280620002a46000396000f3fe608060405234801561001057600080fd5b50600436106100ec576000357c01000000000000000000000000000000000000000000000000000000009004806370a08231116100a9578063a9059cbb11610083578063a9059cbb1461040d578063dd62ed3e14610473578063f0dda65c146104eb578063f2fde38b14610539576100ec565b806370a08231146102e85780638da5cb5b1461034057806395d89b411461038a576100ec565b806306fdde03146100f1578063095ea7b31461017457806318160ddd146101da57806323b872dd146101f8578063313ce5671461027e57806342966c68146102a2575b600080fd5b6100f961057d565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013957808201518184015260208101905061011e565b50505050905090810190601f1680156101665780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101c06004803603604081101561018a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061061b565b604051808215151515815260200191505060405180910390f35b6101e261070d565b6040518082815260200191505060405180910390f35b6102646004803603606081101561020e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610713565b604051808215151515815260200191505060405180910390f35b610286610840565b604051808260ff1660ff16815260200191505060405180910390f35b6102ce600480360360208110156102b857600080fd5b8101908080359060200190929190505050610853565b604051808215151515815260200191505060405180910390f35b61032a600480360360208110156102fe57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109ae565b6040518082815260200191505060405180910390f35b6103486109c6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103926109eb565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103d25780820151818401526020810190506103b7565b50505050905090810190601f1680156103ff5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104596004803603604081101561042357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a89565b604051808215151515815260200191505060405180910390f35b6104d56004803603604081101561048957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610aa0565b6040518082815260200191505060405180910390f35b6105376004803603604081101561050157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ac5565b005b61057b6004803603602081101561054f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c07565b005b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106135780601f106105e857610100808354040283529160200191610613565b820191906000526020600020905b8154815290600101906020018083116105f657829003601f168201915b505050505081565b600081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60015481565b6000600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156107a057600080fd5b81600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550610835848484610ca5565b600190509392505050565b600460009054906101000a900460ff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156108b057600080fd5b81600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101515156108fe57600080fd5b81600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816001600082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff167fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5836040518082815260200191505060405180910390a2919050565b60056020528060005260406000206000915090505481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60038054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a815780601f10610a5657610100808354040283529160200191610a81565b820191906000526020600020905b815481529060010190602001808311610a6457829003601f168201915b505050505081565b6000610a96338484610ca5565b6001905092915050565b6006602052816000526040600020602052806000526040600020600091509150505481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b2057600080fd5b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550806001600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610c6257600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610cf357600080fd5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540110151515610d8257600080fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555080600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a350505056fea165627a7a72305820a6ca38b0bce11cfa1a18330e7316d893843fe4a199f9f994efefd6ba09c3c2270029'

web3.eth.getTransactionCount(account1,(err,txCount)=>{
  //Building a Transaction
  const txObject = {
    nonce:web3.utils.toHex(txCount),
    gasLimit:web3.utils.toHex(2100000),
    gasPrice:web3.utils.toHex(web3.utils.toWei('10','gwei')),
    data:data,
  }
  console.log(txObject)
    //signing a Transaction
  const tx = new Tx(txObject)
  tx.sign(privateKey1)

  const serializedTransaction = tx.serialize()
  const raw = '0x'+serializedTransaction.toString('hex')

  //broadcasting a Transaction
  web3.eth.sendSignedTransaction(raw,(err,txHash)=>{
    console.log(txHash)
  })

})
