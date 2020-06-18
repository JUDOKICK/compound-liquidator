# compound-liquidator
Big thanks to chiragkhatri for fixing the API originally. I simply patched the JSON output for a 2020 Update. 
Its now hosted on IPFS for maximum decentralizational liquidations. 

Mostly just wanted to tinker with this and see how the whole thing worked. I also patched and added the other assets that were missing SAI, wBTC DAI and USDT

Something to note: Gas is super expensive for this txn, around 3.99 USD (Gas price of 40Gwei thanks Paxos and USDT) at time of writing 650k ish in gas. 
So any liquidation that you want to execute. Will cost you that. Factor that in if you think its worth doing. 
At the allotted 8% discount at time of writing that's about 50 USD minimum 
# How to Use

- Go to: https://ipfs.io/ipfs/QmQuWBV3xninsDZXr5DfNzRivDLM98PieHHWnVzrSBzc8f/
- You will see a list of accounts. The ones that have a state "unhealthy" are usually liquidable.
- Click inspect and you should see a more detailed screen.
- Note liquidating is **disabled** if account liquidity > 1 it will say so at the top of the screen
- You might see a bunch of check marks, this is because for the liquidation to work you must first approve the underlying token (DAI) for example to interact with the cDAI smart contract.
- Before you can utilize these tokens, to repay or retrieve they must be enabled.
- Click on the checkmark and approve the transaction. This will only cost gas, nothing else. It will say 'approval' at the top of the transaction (if you're using metamask)
- Once it's approved the checkmark will turn into a circle which can be selected
- Once you have selected a asset to repay and an asset to retrieve you can adjust the slider at the bottom to change the amount you're paying back
- Once you've selected your amount click the repay button
- A transaction will pop up, for this transaction to succeed you will need that much underlying in the same account as the account you're sending the transaction from.
- Once the transaction goes through if it's success you will get the amount of cToken sent to your address, you can check your amounts using the compound.finance site.

# stretch goals

- Automate this for all the gains.
