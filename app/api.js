const address0="0x0000000000000000000000000000000000000000"
async function doSign(signer, abi, safeAddress, recipientAddress, amount, nonce){
    let contract = new ethers.Contract(safeAddress, abi, signer);
    console.log(contract)
    // receiving account -- 0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73
    owners = await contract.getOwners()
    // console.log(ethers.utils.parseEther(amount).)
    console.log("aaa", nonce, await contract.nonce())
    hash = await contract.getTransactionHash(
        recipientAddress,
        ethers.utils.parseEther(amount),
        '0x',
        0,
        0,
        0,
        0,
        address0,
        address0,
        nonce
    )
    console.log(await(contract.approveHash(hash)))
}
async function doSend(signer, abi, safeAddress, recipientAddress, amount, approvedOwners){
    let contract = new ethers.Contract(safeAddress,abi, signer);
    sigs = "0x"
    approvedOwners.sort().forEach(function(val){
        console.log(val)
        sigs += "000000000000000000000000" + val + "0000000000000000000000000000000000000000000000000000000000000000" + "01"

    })
    console.log(sigs);
    await  contract.execTransaction(recipientAddress,
        ethers.utils.parseEther(amount),
        '0x',
        0,
        0,
        0,
        0,
        address0,
        address0,
        sigs)
}

async function lookupOwners(signer, abi, safeAddress) {
    let contract = new ethers.Contract(safeAddress,abi, signer);
    return contract.getOwners();
}
async function lookupNonce(signer, abi, safeAddress) {
    let contract = new ethers.Contract(safeAddress,abi, signer);
    return contract.nonce();
}