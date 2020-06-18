export default {
  tokens : [
		{
      		"symbol" : "cETH",
          "ogSymbol": "ETH",
      		"address" : "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5",
          "regularAddress": "0x0000000000000000000000000000000000000001",
      		"decimals" : 18,
          "abi": [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"amount","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"mint","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"reserveFactorMantissa","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"borrowBalanceCurrent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"exchangeRateStored","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOfUnderlying","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCash","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newComptroller","type":"address"}],"name":"_setComptroller","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalBorrows","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"repayBorrow","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"comptroller","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"reduceAmount","type":"uint256"}],"name":"_reduceReserves","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"initialExchangeRateMantissa","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"accrualBlockNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"totalBorrowsCurrent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"redeemAmount","type":"uint256"}],"name":"redeemUnderlying","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalReserves","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"borrowBalanceStored","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"accrueInterest","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"borrowIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"borrower","type":"address"},{"name":"cTokenCollateral","type":"address"}],"name":"liquidateBorrow","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"supplyRatePerBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"liquidator","type":"address"},{"name":"borrower","type":"address"},{"name":"seizeTokens","type":"uint256"}],"name":"seize","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newPendingAdmin","type":"address"}],"name":"_setPendingAdmin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"exchangeRateCurrent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"getAccountSnapshot","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"borrowAmount","type":"uint256"}],"name":"borrow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"redeemTokens","type":"uint256"}],"name":"redeem","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"borrower","type":"address"}],"name":"repayBorrowBehalf","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"_acceptAdmin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newInterestRateModel","type":"address"}],"name":"_setInterestRateModel","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"interestRateModel","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrowRatePerBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newReserveFactorMantissa","type":"uint256"}],"name":"_setReserveFactor","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isCToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"comptroller_","type":"address"},{"name":"interestRateModel_","type":"address"},{"name":"initialExchangeRateMantissa_","type":"uint256"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"interestAccumulated","type":"uint256"},{"indexed":false,"name":"borrowIndex","type":"uint256"},{"indexed":false,"name":"totalBorrows","type":"uint256"}],"name":"AccrueInterest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"minter","type":"address"},{"indexed":false,"name":"mintAmount","type":"uint256"},{"indexed":false,"name":"mintTokens","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"redeemer","type":"address"},{"indexed":false,"name":"redeemAmount","type":"uint256"},{"indexed":false,"name":"redeemTokens","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"borrower","type":"address"},{"indexed":false,"name":"borrowAmount","type":"uint256"},{"indexed":false,"name":"accountBorrows","type":"uint256"},{"indexed":false,"name":"totalBorrows","type":"uint256"}],"name":"Borrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"payer","type":"address"},{"indexed":false,"name":"borrower","type":"address"},{"indexed":false,"name":"repayAmount","type":"uint256"},{"indexed":false,"name":"accountBorrows","type":"uint256"},{"indexed":false,"name":"totalBorrows","type":"uint256"}],"name":"RepayBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"liquidator","type":"address"},{"indexed":false,"name":"borrower","type":"address"},{"indexed":false,"name":"repayAmount","type":"uint256"},{"indexed":false,"name":"cTokenCollateral","type":"address"},{"indexed":false,"name":"seizeTokens","type":"uint256"}],"name":"LiquidateBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldPendingAdmin","type":"address"},{"indexed":false,"name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldAdmin","type":"address"},{"indexed":false,"name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldComptroller","type":"address"},{"indexed":false,"name":"newComptroller","type":"address"}],"name":"NewComptroller","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldInterestRateModel","type":"address"},{"indexed":false,"name":"newInterestRateModel","type":"address"}],"name":"NewMarketInterestRateModel","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldReserveFactorMantissa","type":"uint256"},{"indexed":false,"name":"newReserveFactorMantissa","type":"uint256"}],"name":"NewReserveFactor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"admin","type":"address"},{"indexed":false,"name":"reduceAmount","type":"uint256"},{"indexed":false,"name":"newTotalReserves","type":"uint256"}],"name":"ReservesReduced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"error","type":"uint256"},{"indexed":false,"name":"info","type":"uint256"},{"indexed":false,"name":"detail","type":"uint256"}],"name":"Failure","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Approval","type":"event"}]
    },
    {
      		"symbol" : "cSAI",
          "ogSymbol" : "SAI",
      		"address" : "0xf5dce57282a584d2746faf1593d3121fcac444dc",
          "regularAddress" : "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
      		"decimals" : 18,
          "abi": [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"amount","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"repayAmount","type":"uint256"}],"name":"repayBorrow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"reserveFactorMantissa","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"borrowBalanceCurrent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"exchangeRateStored","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"borrower","type":"address"},{"name":"repayAmount","type":"uint256"}],"name":"repayBorrowBehalf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOfUnderlying","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCash","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newComptroller","type":"address"}],"name":"_setComptroller","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalBorrows","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"comptroller","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"reduceAmount","type":"uint256"}],"name":"_reduceReserves","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"initialExchangeRateMantissa","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"accrualBlockNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"underlying","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"totalBorrowsCurrent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"redeemAmount","type":"uint256"}],"name":"redeemUnderlying","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalReserves","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"borrowBalanceStored","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"mintAmount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"accrueInterest","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"borrowIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"supplyRatePerBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"liquidator","type":"address"},{"name":"borrower","type":"address"},{"name":"seizeTokens","type":"uint256"}],"name":"seize","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newPendingAdmin","type":"address"}],"name":"_setPendingAdmin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"exchangeRateCurrent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"getAccountSnapshot","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"borrowAmount","type":"uint256"}],"name":"borrow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"redeemTokens","type":"uint256"}],"name":"redeem","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"_acceptAdmin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newInterestRateModel","type":"address"}],"name":"_setInterestRateModel","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"interestRateModel","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"borrower","type":"address"},{"name":"repayAmount","type":"uint256"},{"name":"cTokenCollateral","type":"address"}],"name":"liquidateBorrow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrowRatePerBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newReserveFactorMantissa","type":"uint256"}],"name":"_setReserveFactor","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isCToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"underlying_","type":"address"},{"name":"comptroller_","type":"address"},{"name":"interestRateModel_","type":"address"},{"name":"initialExchangeRateMantissa_","type":"uint256"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"interestAccumulated","type":"uint256"},{"indexed":false,"name":"borrowIndex","type":"uint256"},{"indexed":false,"name":"totalBorrows","type":"uint256"}],"name":"AccrueInterest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"minter","type":"address"},{"indexed":false,"name":"mintAmount","type":"uint256"},{"indexed":false,"name":"mintTokens","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"redeemer","type":"address"},{"indexed":false,"name":"redeemAmount","type":"uint256"},{"indexed":false,"name":"redeemTokens","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"borrower","type":"address"},{"indexed":false,"name":"borrowAmount","type":"uint256"},{"indexed":false,"name":"accountBorrows","type":"uint256"},{"indexed":false,"name":"totalBorrows","type":"uint256"}],"name":"Borrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"payer","type":"address"},{"indexed":false,"name":"borrower","type":"address"},{"indexed":false,"name":"repayAmount","type":"uint256"},{"indexed":false,"name":"accountBorrows","type":"uint256"},{"indexed":false,"name":"totalBorrows","type":"uint256"}],"name":"RepayBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"liquidator","type":"address"},{"indexed":false,"name":"borrower","type":"address"},{"indexed":false,"name":"repayAmount","type":"uint256"},{"indexed":false,"name":"cTokenCollateral","type":"address"},{"indexed":false,"name":"seizeTokens","type":"uint256"}],"name":"LiquidateBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldPendingAdmin","type":"address"},{"indexed":false,"name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldAdmin","type":"address"},{"indexed":false,"name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldComptroller","type":"address"},{"indexed":false,"name":"newComptroller","type":"address"}],"name":"NewComptroller","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldInterestRateModel","type":"address"},{"indexed":false,"name":"newInterestRateModel","type":"address"}],"name":"NewMarketInterestRateModel","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldReserveFactorMantissa","type":"uint256"},{"indexed":false,"name":"newReserveFactorMantissa","type":"uint256"}],"name":"NewReserveFactor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"admin","type":"address"},{"indexed":false,"name":"reduceAmount","type":"uint256"},{"indexed":false,"name":"newTotalReserves","type":"uint256"}],"name":"ReservesReduced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"error","type":"uint256"},{"indexed":false,"name":"info","type":"uint256"},{"indexed":false,"name":"detail","type":"uint256"}],"name":"Failure","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Approval","type":"event"}]
    },
    {
      		"symbol" : "cUSDC",
          "ogSymbol" : "USDC",
      		"address" : "0x39aa39c021dfbae8fac545936693ac917d5e7563",
          "regularAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      		"decimals" : 6,
          "abi": [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"amount","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"repayAmount","type":"uint256"}],"name":"repayBorrow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"reserveFactorMantissa","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"borrowBalanceCurrent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"exchangeRateStored","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"borrower","type":"address"},{"name":"repayAmount","type":"uint256"}],"name":"repayBorrowBehalf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOfUnderlying","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCash","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newComptroller","type":"address"}],"name":"_setComptroller","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalBorrows","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"comptroller","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"reduceAmount","type":"uint256"}],"name":"_reduceReserves","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"initialExchangeRateMantissa","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"accrualBlockNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"underlying","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"totalBorrowsCurrent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"redeemAmount","type":"uint256"}],"name":"redeemUnderlying","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalReserves","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"borrowBalanceStored","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"mintAmount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"accrueInterest","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"borrowIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"supplyRatePerBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"liquidator","type":"address"},{"name":"borrower","type":"address"},{"name":"seizeTokens","type":"uint256"}],"name":"seize","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newPendingAdmin","type":"address"}],"name":"_setPendingAdmin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"exchangeRateCurrent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"getAccountSnapshot","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"borrowAmount","type":"uint256"}],"name":"borrow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"redeemTokens","type":"uint256"}],"name":"redeem","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"_acceptAdmin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newInterestRateModel","type":"address"}],"name":"_setInterestRateModel","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"interestRateModel","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"borrower","type":"address"},{"name":"repayAmount","type":"uint256"},{"name":"cTokenCollateral","type":"address"}],"name":"liquidateBorrow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrowRatePerBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newReserveFactorMantissa","type":"uint256"}],"name":"_setReserveFactor","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isCToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"underlying_","type":"address"},{"name":"comptroller_","type":"address"},{"name":"interestRateModel_","type":"address"},{"name":"initialExchangeRateMantissa_","type":"uint256"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"interestAccumulated","type":"uint256"},{"indexed":false,"name":"borrowIndex","type":"uint256"},{"indexed":false,"name":"totalBorrows","type":"uint256"}],"name":"AccrueInterest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"minter","type":"address"},{"indexed":false,"name":"mintAmount","type":"uint256"},{"indexed":false,"name":"mintTokens","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"redeemer","type":"address"},{"indexed":false,"name":"redeemAmount","type":"uint256"},{"indexed":false,"name":"redeemTokens","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"borrower","type":"address"},{"indexed":false,"name":"borrowAmount","type":"uint256"},{"indexed":false,"name":"accountBorrows","type":"uint256"},{"indexed":false,"name":"totalBorrows","type":"uint256"}],"name":"Borrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"payer","type":"address"},{"indexed":false,"name":"borrower","type":"address"},{"indexed":false,"name":"repayAmount","type":"uint256"},{"indexed":false,"name":"accountBorrows","type":"uint256"},{"indexed":false,"name":"totalBorrows","type":"uint256"}],"name":"RepayBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"liquidator","type":"address"},{"indexed":false,"name":"borrower","type":"address"},{"indexed":false,"name":"repayAmount","type":"uint256"},{"indexed":false,"name":"cTokenCollateral","type":"address"},{"indexed":false,"name":"seizeTokens","type":"uint256"}],"name":"LiquidateBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldPendingAdmin","type":"address"},{"indexed":false,"name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldAdmin","type":"address"},{"indexed":false,"name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldComptroller","type":"address"},{"indexed":false,"name":"newComptroller","type":"address"}],"name":"NewComptroller","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldInterestRateModel","type":"address"},{"indexed":false,"name":"newInterestRateModel","type":"address"}],"name":"NewMarketInterestRateModel","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldReserveFactorMantissa","type":"uint256"},{"indexed":false,"name":"newReserveFactorMantissa","type":"uint256"}],"name":"NewReserveFactor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"admin","type":"address"},{"indexed":false,"name":"reduceAmount","type":"uint256"},{"indexed":false,"name":"newTotalReserves","type":"uint256"}],"name":"ReservesReduced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"error","type":"uint256"},{"indexed":false,"name":"info","type":"uint256"},{"indexed":false,"name":"detail","type":"uint256"}],"name":"Failure","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Approval","type":"event"}]
    },
    {
      		"symbol" : "cBAT",
          "ogSymbol" : "BAT",
      		"address" : "0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e",
          "regularAddress": "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
      		"decimals" : 18,
          "abi": [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"amount","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"repayAmount","type":"uint256"}],"name":"repayBorrow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"reserveFactorMantissa","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"borrowBalanceCurrent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"exchangeRateStored","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"borrower","type":"address"},{"name":"repayAmount","type":"uint256"}],"name":"repayBorrowBehalf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOfUnderlying","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCash","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newComptroller","type":"address"}],"name":"_setComptroller","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalBorrows","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"comptroller","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"reduceAmount","type":"uint256"}],"name":"_reduceReserves","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"initialExchangeRateMantissa","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"accrualBlockNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"underlying","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"totalBorrowsCurrent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"redeemAmount","type":"uint256"}],"name":"redeemUnderlying","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalReserves","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"borrowBalanceStored","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"mintAmount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"accrueInterest","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"borrowIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"supplyRatePerBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"liquidator","type":"address"},{"name":"borrower","type":"address"},{"name":"seizeTokens","type":"uint256"}],"name":"seize","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newPendingAdmin","type":"address"}],"name":"_setPendingAdmin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"exchangeRateCurrent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"getAccountSnapshot","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"borrowAmount","type":"uint256"}],"name":"borrow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"redeemTokens","type":"uint256"}],"name":"redeem","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"_acceptAdmin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newInterestRateModel","type":"address"}],"name":"_setInterestRateModel","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"interestRateModel","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"borrower","type":"address"},{"name":"repayAmount","type":"uint256"},{"name":"cTokenCollateral","type":"address"}],"name":"liquidateBorrow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrowRatePerBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newReserveFactorMantissa","type":"uint256"}],"name":"_setReserveFactor","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isCToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"underlying_","type":"address"},{"name":"comptroller_","type":"address"},{"name":"interestRateModel_","type":"address"},{"name":"initialExchangeRateMantissa_","type":"uint256"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"interestAccumulated","type":"uint256"},{"indexed":false,"name":"borrowIndex","type":"uint256"},{"indexed":false,"name":"totalBorrows","type":"uint256"}],"name":"AccrueInterest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"minter","type":"address"},{"indexed":false,"name":"mintAmount","type":"uint256"},{"indexed":false,"name":"mintTokens","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"redeemer","type":"address"},{"indexed":false,"name":"redeemAmount","type":"uint256"},{"indexed":false,"name":"redeemTokens","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"borrower","type":"address"},{"indexed":false,"name":"borrowAmount","type":"uint256"},{"indexed":false,"name":"accountBorrows","type":"uint256"},{"indexed":false,"name":"totalBorrows","type":"uint256"}],"name":"Borrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"payer","type":"address"},{"indexed":false,"name":"borrower","type":"address"},{"indexed":false,"name":"repayAmount","type":"uint256"},{"indexed":false,"name":"accountBorrows","type":"uint256"},{"indexed":false,"name":"totalBorrows","type":"uint256"}],"name":"RepayBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"liquidator","type":"address"},{"indexed":false,"name":"borrower","type":"address"},{"indexed":false,"name":"repayAmount","type":"uint256"},{"indexed":false,"name":"cTokenCollateral","type":"address"},{"indexed":false,"name":"seizeTokens","type":"uint256"}],"name":"LiquidateBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldPendingAdmin","type":"address"},{"indexed":false,"name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldAdmin","type":"address"},{"indexed":false,"name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldComptroller","type":"address"},{"indexed":false,"name":"newComptroller","type":"address"}],"name":"NewComptroller","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldInterestRateModel","type":"address"},{"indexed":false,"name":"newInterestRateModel","type":"address"}],"name":"NewMarketInterestRateModel","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldReserveFactorMantissa","type":"uint256"},{"indexed":false,"name":"newReserveFactorMantissa","type":"uint256"}],"name":"NewReserveFactor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"admin","type":"address"},{"indexed":false,"name":"reduceAmount","type":"uint256"},{"indexed":false,"name":"newTotalReserves","type":"uint256"}],"name":"ReservesReduced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"error","type":"uint256"},{"indexed":false,"name":"info","type":"uint256"},{"indexed":false,"name":"detail","type":"uint256"}],"name":"Failure","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Approval","type":"event"}]
    },
    {
      		"symbol" : "cREP",
          "ogSymbol" : "REP",
      		"address" : "0x158079ee67fce2f58472a96584a73c7ab9ac95c1",
          "regularAddress": "0xe94327d07fc17907b4db788e5adf2ed424addff6",
      		"decimals" : 18,
          "abi": [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"amount","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"repayAmount","type":"uint256"}],"name":"repayBorrow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"reserveFactorMantissa","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"borrowBalanceCurrent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"exchangeRateStored","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"borrower","type":"address"},{"name":"repayAmount","type":"uint256"}],"name":"repayBorrowBehalf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOfUnderlying","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCash","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newComptroller","type":"address"}],"name":"_setComptroller","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalBorrows","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"comptroller","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"reduceAmount","type":"uint256"}],"name":"_reduceReserves","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"initialExchangeRateMantissa","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"accrualBlockNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"underlying","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"totalBorrowsCurrent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"redeemAmount","type":"uint256"}],"name":"redeemUnderlying","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalReserves","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"borrowBalanceStored","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"mintAmount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"accrueInterest","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"borrowIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"supplyRatePerBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"liquidator","type":"address"},{"name":"borrower","type":"address"},{"name":"seizeTokens","type":"uint256"}],"name":"seize","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newPendingAdmin","type":"address"}],"name":"_setPendingAdmin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"exchangeRateCurrent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"getAccountSnapshot","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"borrowAmount","type":"uint256"}],"name":"borrow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"redeemTokens","type":"uint256"}],"name":"redeem","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"_acceptAdmin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newInterestRateModel","type":"address"}],"name":"_setInterestRateModel","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"interestRateModel","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"borrower","type":"address"},{"name":"repayAmount","type":"uint256"},{"name":"cTokenCollateral","type":"address"}],"name":"liquidateBorrow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrowRatePerBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newReserveFactorMantissa","type":"uint256"}],"name":"_setReserveFactor","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isCToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"underlying_","type":"address"},{"name":"comptroller_","type":"address"},{"name":"interestRateModel_","type":"address"},{"name":"initialExchangeRateMantissa_","type":"uint256"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"interestAccumulated","type":"uint256"},{"indexed":false,"name":"borrowIndex","type":"uint256"},{"indexed":false,"name":"totalBorrows","type":"uint256"}],"name":"AccrueInterest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"minter","type":"address"},{"indexed":false,"name":"mintAmount","type":"uint256"},{"indexed":false,"name":"mintTokens","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"redeemer","type":"address"},{"indexed":false,"name":"redeemAmount","type":"uint256"},{"indexed":false,"name":"redeemTokens","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"borrower","type":"address"},{"indexed":false,"name":"borrowAmount","type":"uint256"},{"indexed":false,"name":"accountBorrows","type":"uint256"},{"indexed":false,"name":"totalBorrows","type":"uint256"}],"name":"Borrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"payer","type":"address"},{"indexed":false,"name":"borrower","type":"address"},{"indexed":false,"name":"repayAmount","type":"uint256"},{"indexed":false,"name":"accountBorrows","type":"uint256"},{"indexed":false,"name":"totalBorrows","type":"uint256"}],"name":"RepayBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"liquidator","type":"address"},{"indexed":false,"name":"borrower","type":"address"},{"indexed":false,"name":"repayAmount","type":"uint256"},{"indexed":false,"name":"cTokenCollateral","type":"address"},{"indexed":false,"name":"seizeTokens","type":"uint256"}],"name":"LiquidateBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldPendingAdmin","type":"address"},{"indexed":false,"name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldAdmin","type":"address"},{"indexed":false,"name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldComptroller","type":"address"},{"indexed":false,"name":"newComptroller","type":"address"}],"name":"NewComptroller","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldInterestRateModel","type":"address"},{"indexed":false,"name":"newInterestRateModel","type":"address"}],"name":"NewMarketInterestRateModel","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldReserveFactorMantissa","type":"uint256"},{"indexed":false,"name":"newReserveFactorMantissa","type":"uint256"}],"name":"NewReserveFactor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"admin","type":"address"},{"indexed":false,"name":"reduceAmount","type":"uint256"},{"indexed":false,"name":"newTotalReserves","type":"uint256"}],"name":"ReservesReduced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"error","type":"uint256"},{"indexed":false,"name":"info","type":"uint256"},{"indexed":false,"name":"detail","type":"uint256"}],"name":"Failure","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Approval","type":"event"}]
    },
    {
      		"symbol" : "cZRX",
          "ogSymbol" : "ZRX",
      		"address" : "0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407",
          "regularAddress": "0xe41d2489571d322189246dafa5ebde1f4699f498",
      		"decimals" : 18,
          "abi": [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"amount","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"repayAmount","type":"uint256"}],"name":"repayBorrow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"reserveFactorMantissa","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"borrowBalanceCurrent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"exchangeRateStored","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"borrower","type":"address"},{"name":"repayAmount","type":"uint256"}],"name":"repayBorrowBehalf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOfUnderlying","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCash","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newComptroller","type":"address"}],"name":"_setComptroller","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalBorrows","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"comptroller","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"reduceAmount","type":"uint256"}],"name":"_reduceReserves","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"initialExchangeRateMantissa","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"accrualBlockNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"underlying","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"totalBorrowsCurrent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"redeemAmount","type":"uint256"}],"name":"redeemUnderlying","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalReserves","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"borrowBalanceStored","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"mintAmount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"accrueInterest","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"borrowIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"supplyRatePerBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"liquidator","type":"address"},{"name":"borrower","type":"address"},{"name":"seizeTokens","type":"uint256"}],"name":"seize","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newPendingAdmin","type":"address"}],"name":"_setPendingAdmin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"exchangeRateCurrent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"getAccountSnapshot","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"borrowAmount","type":"uint256"}],"name":"borrow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"redeemTokens","type":"uint256"}],"name":"redeem","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"_acceptAdmin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newInterestRateModel","type":"address"}],"name":"_setInterestRateModel","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"interestRateModel","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"borrower","type":"address"},{"name":"repayAmount","type":"uint256"},{"name":"cTokenCollateral","type":"address"}],"name":"liquidateBorrow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrowRatePerBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newReserveFactorMantissa","type":"uint256"}],"name":"_setReserveFactor","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isCToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"underlying_","type":"address"},{"name":"comptroller_","type":"address"},{"name":"interestRateModel_","type":"address"},{"name":"initialExchangeRateMantissa_","type":"uint256"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"interestAccumulated","type":"uint256"},{"indexed":false,"name":"borrowIndex","type":"uint256"},{"indexed":false,"name":"totalBorrows","type":"uint256"}],"name":"AccrueInterest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"minter","type":"address"},{"indexed":false,"name":"mintAmount","type":"uint256"},{"indexed":false,"name":"mintTokens","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"redeemer","type":"address"},{"indexed":false,"name":"redeemAmount","type":"uint256"},{"indexed":false,"name":"redeemTokens","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"borrower","type":"address"},{"indexed":false,"name":"borrowAmount","type":"uint256"},{"indexed":false,"name":"accountBorrows","type":"uint256"},{"indexed":false,"name":"totalBorrows","type":"uint256"}],"name":"Borrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"payer","type":"address"},{"indexed":false,"name":"borrower","type":"address"},{"indexed":false,"name":"repayAmount","type":"uint256"},{"indexed":false,"name":"accountBorrows","type":"uint256"},{"indexed":false,"name":"totalBorrows","type":"uint256"}],"name":"RepayBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"liquidator","type":"address"},{"indexed":false,"name":"borrower","type":"address"},{"indexed":false,"name":"repayAmount","type":"uint256"},{"indexed":false,"name":"cTokenCollateral","type":"address"},{"indexed":false,"name":"seizeTokens","type":"uint256"}],"name":"LiquidateBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldPendingAdmin","type":"address"},{"indexed":false,"name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldAdmin","type":"address"},{"indexed":false,"name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldComptroller","type":"address"},{"indexed":false,"name":"newComptroller","type":"address"}],"name":"NewComptroller","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldInterestRateModel","type":"address"},{"indexed":false,"name":"newInterestRateModel","type":"address"}],"name":"NewMarketInterestRateModel","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldReserveFactorMantissa","type":"uint256"},{"indexed":false,"name":"newReserveFactorMantissa","type":"uint256"}],"name":"NewReserveFactor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"admin","type":"address"},{"indexed":false,"name":"reduceAmount","type":"uint256"},{"indexed":false,"name":"newTotalReserves","type":"uint256"}],"name":"ReservesReduced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"error","type":"uint256"},{"indexed":false,"name":"info","type":"uint256"},{"indexed":false,"name":"detail","type":"uint256"}],"name":"Failure","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Approval","type":"event"}]
      },
      {
          "symbol" : "cDAI",
          "ogSymbol" : "DAI",
          "address" : "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643",
          "regularAddress": "0x6b175474e89094c44da98b954eedeac495271d0f",
          "decimals" : 18,
          "abi": [
              {
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "underlying_",
                          "type": "address"
                      },
                      {
                          "internalType": "contract ComptrollerInterface",
                          "name": "comptroller_",
                          "type": "address"
                      },
                      {
                          "internalType": "contract InterestRateModel",
                          "name": "interestRateModel_",
                          "type": "address"
                      },
                      {
                          "internalType": "uint256",
                          "name": "initialExchangeRateMantissa_",
                          "type": "uint256"
                      },
                      {
                          "internalType": "string",
                          "name": "name_",
                          "type": "string"
                      },
                      {
                          "internalType": "string",
                          "name": "symbol_",
                          "type": "string"
                      },
                      {
                          "internalType": "uint8",
                          "name": "decimals_",
                          "type": "uint8"
                      },
                      {
                          "internalType": "address payable",
                          "name": "admin_",
                          "type": "address"
                      },
                      {
                          "internalType": "address",
                          "name": "implementation_",
                          "type": "address"
                      },
                      {
                          "internalType": "bytes",
                          "name": "becomeImplementationData",
                          "type": "bytes"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "constructor",
                  "signature": "constructor"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "cashPrior",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "interestAccumulated",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "borrowIndex",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "totalBorrows",
                          "type": "uint256"
                      }
                  ],
                  "name": "AccrueInterest",
                  "type": "event",
                  "signature": "0x4dec04e750ca11537cabcd8a9eab06494de08da3735bc8871cd41250e190bc04"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": true,
                          "internalType": "address",
                          "name": "owner",
                          "type": "address"
                      },
                      {
                          "indexed": true,
                          "internalType": "address",
                          "name": "spender",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "amount",
                          "type": "uint256"
                      }
                  ],
                  "name": "Approval",
                  "type": "event",
                  "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "borrower",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "borrowAmount",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "accountBorrows",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "totalBorrows",
                          "type": "uint256"
                      }
                  ],
                  "name": "Borrow",
                  "type": "event",
                  "signature": "0x13ed6866d4e1ee6da46f845c46d7e54120883d75c5ea9a2dacc1c4ca8984ab80"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "error",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "info",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "detail",
                          "type": "uint256"
                      }
                  ],
                  "name": "Failure",
                  "type": "event",
                  "signature": "0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "liquidator",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "borrower",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "repayAmount",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "cTokenCollateral",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "seizeTokens",
                          "type": "uint256"
                      }
                  ],
                  "name": "LiquidateBorrow",
                  "type": "event",
                  "signature": "0x298637f684da70674f26509b10f07ec2fbc77a335ab1e7d6215a4b2484d8bb52"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "minter",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "mintAmount",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "mintTokens",
                          "type": "uint256"
                      }
                  ],
                  "name": "Mint",
                  "type": "event",
                  "signature": "0x4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "oldAdmin",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "newAdmin",
                          "type": "address"
                      }
                  ],
                  "name": "NewAdmin",
                  "type": "event",
                  "signature": "0xf9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "contract ComptrollerInterface",
                          "name": "oldComptroller",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "contract ComptrollerInterface",
                          "name": "newComptroller",
                          "type": "address"
                      }
                  ],
                  "name": "NewComptroller",
                  "type": "event",
                  "signature": "0x7ac369dbd14fa5ea3f473ed67cc9d598964a77501540ba6751eb0b3decf5870d"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "oldImplementation",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "newImplementation",
                          "type": "address"
                      }
                  ],
                  "name": "NewImplementation",
                  "type": "event",
                  "signature": "0xd604de94d45953f9138079ec1b82d533cb2160c906d1076d1f7ed54befbca97a"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "contract InterestRateModel",
                          "name": "oldInterestRateModel",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "contract InterestRateModel",
                          "name": "newInterestRateModel",
                          "type": "address"
                      }
                  ],
                  "name": "NewMarketInterestRateModel",
                  "type": "event",
                  "signature": "0xedffc32e068c7c95dfd4bdfd5c4d939a084d6b11c4199eac8436ed234d72f926"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "oldPendingAdmin",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "newPendingAdmin",
                          "type": "address"
                      }
                  ],
                  "name": "NewPendingAdmin",
                  "type": "event",
                  "signature": "0xca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a9"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "oldReserveFactorMantissa",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "newReserveFactorMantissa",
                          "type": "uint256"
                      }
                  ],
                  "name": "NewReserveFactor",
                  "type": "event",
                  "signature": "0xaaa68312e2ea9d50e16af5068410ab56e1a1fd06037b1a35664812c30f821460"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "redeemer",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "redeemAmount",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "redeemTokens",
                          "type": "uint256"
                      }
                  ],
                  "name": "Redeem",
                  "type": "event",
                  "signature": "0xe5b754fb1abb7f01b499791d0b820ae3b6af3424ac1c59768edb53f4ec31a929"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "payer",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "borrower",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "repayAmount",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "accountBorrows",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "totalBorrows",
                          "type": "uint256"
                      }
                  ],
                  "name": "RepayBorrow",
                  "type": "event",
                  "signature": "0x1a2a22cb034d26d1854bdc6666a5b91fe25efbbb5dcad3b0355478d6f5c362a1"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "benefactor",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "addAmount",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "newTotalReserves",
                          "type": "uint256"
                      }
                  ],
                  "name": "ReservesAdded",
                  "type": "event",
                  "signature": "0xa91e67c5ea634cd43a12c5a482724b03de01e85ca68702a53d0c2f45cb7c1dc5"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "admin",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "reduceAmount",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "newTotalReserves",
                          "type": "uint256"
                      }
                  ],
                  "name": "ReservesReduced",
                  "type": "event",
                  "signature": "0x3bad0c59cf2f06e7314077049f48a93578cd16f5ef92329f1dab1420a99c177e"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": true,
                          "internalType": "address",
                          "name": "from",
                          "type": "address"
                      },
                      {
                          "indexed": true,
                          "internalType": "address",
                          "name": "to",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "amount",
                          "type": "uint256"
                      }
                  ],
                  "name": "Transfer",
                  "type": "event",
                  "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
              },
              {
                  "payable": true,
                  "stateMutability": "payable",
                  "type": "fallback"
              },
              {
                  "constant": false,
                  "inputs": [],
                  "name": "_acceptAdmin",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xe9c714f2"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "uint256",
                          "name": "addAmount",
                          "type": "uint256"
                      }
                  ],
                  "name": "_addReserves",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x3e941010"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "uint256",
                          "name": "reduceAmount",
                          "type": "uint256"
                      }
                  ],
                  "name": "_reduceReserves",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x601a0bf1"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "contract ComptrollerInterface",
                          "name": "newComptroller",
                          "type": "address"
                      }
                  ],
                  "name": "_setComptroller",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x4576b5db"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "implementation_",
                          "type": "address"
                      },
                      {
                          "internalType": "bool",
                          "name": "allowResign",
                          "type": "bool"
                      },
                      {
                          "internalType": "bytes",
                          "name": "becomeImplementationData",
                          "type": "bytes"
                      }
                  ],
                  "name": "_setImplementation",
                  "outputs": [],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x555bcc40"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "contract InterestRateModel",
                          "name": "newInterestRateModel",
                          "type": "address"
                      }
                  ],
                  "name": "_setInterestRateModel",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xf2b3abbd"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "address payable",
                          "name": "newPendingAdmin",
                          "type": "address"
                      }
                  ],
                  "name": "_setPendingAdmin",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xb71d1a0c"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "uint256",
                          "name": "newReserveFactorMantissa",
                          "type": "uint256"
                      }
                  ],
                  "name": "_setReserveFactor",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xfca7820b"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "accrualBlockNumber",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x6c540baf"
              },
              {
                  "constant": false,
                  "inputs": [],
                  "name": "accrueInterest",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xa6afed95"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "admin",
                  "outputs": [
                      {
                          "internalType": "address payable",
                          "name": "",
                          "type": "address"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0xf851a440"
              },
              {
                  "constant": true,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "owner",
                          "type": "address"
                      },
                      {
                          "internalType": "address",
                          "name": "spender",
                          "type": "address"
                      }
                  ],
                  "name": "allowance",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0xdd62ed3e"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "spender",
                          "type": "address"
                      },
                      {
                          "internalType": "uint256",
                          "name": "amount",
                          "type": "uint256"
                      }
                  ],
                  "name": "approve",
                  "outputs": [
                      {
                          "internalType": "bool",
                          "name": "",
                          "type": "bool"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x095ea7b3"
              },
              {
                  "constant": true,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "owner",
                          "type": "address"
                      }
                  ],
                  "name": "balanceOf",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x70a08231"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "owner",
                          "type": "address"
                      }
                  ],
                  "name": "balanceOfUnderlying",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x3af9e669"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "uint256",
                          "name": "borrowAmount",
                          "type": "uint256"
                      }
                  ],
                  "name": "borrow",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xc5ebeaec"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "account",
                          "type": "address"
                      }
                  ],
                  "name": "borrowBalanceCurrent",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x17bfdfbc"
              },
              {
                  "constant": true,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "account",
                          "type": "address"
                      }
                  ],
                  "name": "borrowBalanceStored",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x95dd9193"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "borrowIndex",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0xaa5af0fd"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "borrowRatePerBlock",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0xf8f9da28"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "comptroller",
                  "outputs": [
                      {
                          "internalType": "contract ComptrollerInterface",
                          "name": "",
                          "type": "address"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x5fe3b567"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "decimals",
                  "outputs": [
                      {
                          "internalType": "uint8",
                          "name": "",
                          "type": "uint8"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x313ce567"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                      }
                  ],
                  "name": "delegateToImplementation",
                  "outputs": [
                      {
                          "internalType": "bytes",
                          "name": "",
                          "type": "bytes"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x0933c1ed"
              },
              {
                  "constant": true,
                  "inputs": [
                      {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                      }
                  ],
                  "name": "delegateToViewImplementation",
                  "outputs": [
                      {
                          "internalType": "bytes",
                          "name": "",
                          "type": "bytes"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x4487152f"
              },
              {
                  "constant": false,
                  "inputs": [],
                  "name": "exchangeRateCurrent",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xbd6d894d"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "exchangeRateStored",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x182df0f5"
              },
              {
                  "constant": true,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "account",
                          "type": "address"
                      }
                  ],
                  "name": "getAccountSnapshot",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      },
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      },
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      },
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0xc37f68e2"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "getCash",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x3b1d21a2"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "implementation",
                  "outputs": [
                      {
                          "internalType": "address",
                          "name": "",
                          "type": "address"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x5c60da1b"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "interestRateModel",
                  "outputs": [
                      {
                          "internalType": "contract InterestRateModel",
                          "name": "",
                          "type": "address"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0xf3fdb15a"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "isCToken",
                  "outputs": [
                      {
                          "internalType": "bool",
                          "name": "",
                          "type": "bool"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0xfe9c44ae"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "borrower",
                          "type": "address"
                      },
                      {
                          "internalType": "uint256",
                          "name": "repayAmount",
                          "type": "uint256"
                      },
                      {
                          "internalType": "contract CTokenInterface",
                          "name": "cTokenCollateral",
                          "type": "address"
                      }
                  ],
                  "name": "liquidateBorrow",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xf5e3c462"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "uint256",
                          "name": "mintAmount",
                          "type": "uint256"
                      }
                  ],
                  "name": "mint",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xa0712d68"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "name",
                  "outputs": [
                      {
                          "internalType": "string",
                          "name": "",
                          "type": "string"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x06fdde03"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "pendingAdmin",
                  "outputs": [
                      {
                          "internalType": "address payable",
                          "name": "",
                          "type": "address"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x26782247"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "uint256",
                          "name": "redeemTokens",
                          "type": "uint256"
                      }
                  ],
                  "name": "redeem",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xdb006a75"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "uint256",
                          "name": "redeemAmount",
                          "type": "uint256"
                      }
                  ],
                  "name": "redeemUnderlying",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x852a12e3"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "uint256",
                          "name": "repayAmount",
                          "type": "uint256"
                      }
                  ],
                  "name": "repayBorrow",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x0e752702"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "borrower",
                          "type": "address"
                      },
                      {
                          "internalType": "uint256",
                          "name": "repayAmount",
                          "type": "uint256"
                      }
                  ],
                  "name": "repayBorrowBehalf",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x2608f818"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "reserveFactorMantissa",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x173b9904"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "liquidator",
                          "type": "address"
                      },
                      {
                          "internalType": "address",
                          "name": "borrower",
                          "type": "address"
                      },
                      {
                          "internalType": "uint256",
                          "name": "seizeTokens",
                          "type": "uint256"
                      }
                  ],
                  "name": "seize",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xb2a02ff1"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "supplyRatePerBlock",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0xae9d70b0"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "symbol",
                  "outputs": [
                      {
                          "internalType": "string",
                          "name": "",
                          "type": "string"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x95d89b41"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "totalBorrows",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x47bd3718"
              },
              {
                  "constant": false,
                  "inputs": [],
                  "name": "totalBorrowsCurrent",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x73acee98"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "totalReserves",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x8f840ddd"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "totalSupply",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x18160ddd"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "dst",
                          "type": "address"
                      },
                      {
                          "internalType": "uint256",
                          "name": "amount",
                          "type": "uint256"
                      }
                  ],
                  "name": "transfer",
                  "outputs": [
                      {
                          "internalType": "bool",
                          "name": "",
                          "type": "bool"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xa9059cbb"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "src",
                          "type": "address"
                      },
                      {
                          "internalType": "address",
                          "name": "dst",
                          "type": "address"
                      },
                      {
                          "internalType": "uint256",
                          "name": "amount",
                          "type": "uint256"
                      }
                  ],
                  "name": "transferFrom",
                  "outputs": [
                      {
                          "internalType": "bool",
                          "name": "",
                          "type": "bool"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x23b872dd"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "underlying",
                  "outputs": [
                      {
                          "internalType": "address",
                          "name": "",
                          "type": "address"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x6f307dc3"
              }
          ]
      },
      {
          "symbol" : "cUSDT",
          "ogSymbol" : "USDT",
          "address" : "0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9",
          "regularAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
          "decimals" : 6,
          "abi": [
              {
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "underlying_",
                          "type": "address"
                      },
                      {
                          "internalType": "contract ComptrollerInterface",
                          "name": "comptroller_",
                          "type": "address"
                      },
                      {
                          "internalType": "contract InterestRateModel",
                          "name": "interestRateModel_",
                          "type": "address"
                      },
                      {
                          "internalType": "uint256",
                          "name": "initialExchangeRateMantissa_",
                          "type": "uint256"
                      },
                      {
                          "internalType": "string",
                          "name": "name_",
                          "type": "string"
                      },
                      {
                          "internalType": "string",
                          "name": "symbol_",
                          "type": "string"
                      },
                      {
                          "internalType": "uint8",
                          "name": "decimals_",
                          "type": "uint8"
                      },
                      {
                          "internalType": "address payable",
                          "name": "admin_",
                          "type": "address"
                      },
                      {
                          "internalType": "address",
                          "name": "implementation_",
                          "type": "address"
                      },
                      {
                          "internalType": "bytes",
                          "name": "becomeImplementationData",
                          "type": "bytes"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "constructor",
                  "signature": "constructor"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "cashPrior",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "interestAccumulated",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "borrowIndex",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "totalBorrows",
                          "type": "uint256"
                      }
                  ],
                  "name": "AccrueInterest",
                  "type": "event",
                  "signature": "0x4dec04e750ca11537cabcd8a9eab06494de08da3735bc8871cd41250e190bc04"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": true,
                          "internalType": "address",
                          "name": "owner",
                          "type": "address"
                      },
                      {
                          "indexed": true,
                          "internalType": "address",
                          "name": "spender",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "amount",
                          "type": "uint256"
                      }
                  ],
                  "name": "Approval",
                  "type": "event",
                  "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "borrower",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "borrowAmount",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "accountBorrows",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "totalBorrows",
                          "type": "uint256"
                      }
                  ],
                  "name": "Borrow",
                  "type": "event",
                  "signature": "0x13ed6866d4e1ee6da46f845c46d7e54120883d75c5ea9a2dacc1c4ca8984ab80"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "error",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "info",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "detail",
                          "type": "uint256"
                      }
                  ],
                  "name": "Failure",
                  "type": "event",
                  "signature": "0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "liquidator",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "borrower",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "repayAmount",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "cTokenCollateral",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "seizeTokens",
                          "type": "uint256"
                      }
                  ],
                  "name": "LiquidateBorrow",
                  "type": "event",
                  "signature": "0x298637f684da70674f26509b10f07ec2fbc77a335ab1e7d6215a4b2484d8bb52"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "minter",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "mintAmount",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "mintTokens",
                          "type": "uint256"
                      }
                  ],
                  "name": "Mint",
                  "type": "event",
                  "signature": "0x4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "oldAdmin",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "newAdmin",
                          "type": "address"
                      }
                  ],
                  "name": "NewAdmin",
                  "type": "event",
                  "signature": "0xf9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "contract ComptrollerInterface",
                          "name": "oldComptroller",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "contract ComptrollerInterface",
                          "name": "newComptroller",
                          "type": "address"
                      }
                  ],
                  "name": "NewComptroller",
                  "type": "event",
                  "signature": "0x7ac369dbd14fa5ea3f473ed67cc9d598964a77501540ba6751eb0b3decf5870d"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "oldImplementation",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "newImplementation",
                          "type": "address"
                      }
                  ],
                  "name": "NewImplementation",
                  "type": "event",
                  "signature": "0xd604de94d45953f9138079ec1b82d533cb2160c906d1076d1f7ed54befbca97a"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "contract InterestRateModel",
                          "name": "oldInterestRateModel",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "contract InterestRateModel",
                          "name": "newInterestRateModel",
                          "type": "address"
                      }
                  ],
                  "name": "NewMarketInterestRateModel",
                  "type": "event",
                  "signature": "0xedffc32e068c7c95dfd4bdfd5c4d939a084d6b11c4199eac8436ed234d72f926"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "oldPendingAdmin",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "newPendingAdmin",
                          "type": "address"
                      }
                  ],
                  "name": "NewPendingAdmin",
                  "type": "event",
                  "signature": "0xca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a9"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "oldReserveFactorMantissa",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "newReserveFactorMantissa",
                          "type": "uint256"
                      }
                  ],
                  "name": "NewReserveFactor",
                  "type": "event",
                  "signature": "0xaaa68312e2ea9d50e16af5068410ab56e1a1fd06037b1a35664812c30f821460"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "redeemer",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "redeemAmount",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "redeemTokens",
                          "type": "uint256"
                      }
                  ],
                  "name": "Redeem",
                  "type": "event",
                  "signature": "0xe5b754fb1abb7f01b499791d0b820ae3b6af3424ac1c59768edb53f4ec31a929"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "payer",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "borrower",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "repayAmount",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "accountBorrows",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "totalBorrows",
                          "type": "uint256"
                      }
                  ],
                  "name": "RepayBorrow",
                  "type": "event",
                  "signature": "0x1a2a22cb034d26d1854bdc6666a5b91fe25efbbb5dcad3b0355478d6f5c362a1"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "benefactor",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "addAmount",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "newTotalReserves",
                          "type": "uint256"
                      }
                  ],
                  "name": "ReservesAdded",
                  "type": "event",
                  "signature": "0xa91e67c5ea634cd43a12c5a482724b03de01e85ca68702a53d0c2f45cb7c1dc5"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "address",
                          "name": "admin",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "reduceAmount",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "newTotalReserves",
                          "type": "uint256"
                      }
                  ],
                  "name": "ReservesReduced",
                  "type": "event",
                  "signature": "0x3bad0c59cf2f06e7314077049f48a93578cd16f5ef92329f1dab1420a99c177e"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": true,
                          "internalType": "address",
                          "name": "from",
                          "type": "address"
                      },
                      {
                          "indexed": true,
                          "internalType": "address",
                          "name": "to",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "amount",
                          "type": "uint256"
                      }
                  ],
                  "name": "Transfer",
                  "type": "event",
                  "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
              },
              {
                  "payable": true,
                  "stateMutability": "payable",
                  "type": "fallback"
              },
              {
                  "constant": false,
                  "inputs": [],
                  "name": "_acceptAdmin",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xe9c714f2"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "uint256",
                          "name": "addAmount",
                          "type": "uint256"
                      }
                  ],
                  "name": "_addReserves",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x3e941010"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "uint256",
                          "name": "reduceAmount",
                          "type": "uint256"
                      }
                  ],
                  "name": "_reduceReserves",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x601a0bf1"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "contract ComptrollerInterface",
                          "name": "newComptroller",
                          "type": "address"
                      }
                  ],
                  "name": "_setComptroller",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x4576b5db"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "implementation_",
                          "type": "address"
                      },
                      {
                          "internalType": "bool",
                          "name": "allowResign",
                          "type": "bool"
                      },
                      {
                          "internalType": "bytes",
                          "name": "becomeImplementationData",
                          "type": "bytes"
                      }
                  ],
                  "name": "_setImplementation",
                  "outputs": [],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x555bcc40"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "contract InterestRateModel",
                          "name": "newInterestRateModel",
                          "type": "address"
                      }
                  ],
                  "name": "_setInterestRateModel",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xf2b3abbd"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "address payable",
                          "name": "newPendingAdmin",
                          "type": "address"
                      }
                  ],
                  "name": "_setPendingAdmin",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xb71d1a0c"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "uint256",
                          "name": "newReserveFactorMantissa",
                          "type": "uint256"
                      }
                  ],
                  "name": "_setReserveFactor",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xfca7820b"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "accrualBlockNumber",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x6c540baf"
              },
              {
                  "constant": false,
                  "inputs": [],
                  "name": "accrueInterest",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xa6afed95"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "admin",
                  "outputs": [
                      {
                          "internalType": "address payable",
                          "name": "",
                          "type": "address"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0xf851a440"
              },
              {
                  "constant": true,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "owner",
                          "type": "address"
                      },
                      {
                          "internalType": "address",
                          "name": "spender",
                          "type": "address"
                      }
                  ],
                  "name": "allowance",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0xdd62ed3e"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "spender",
                          "type": "address"
                      },
                      {
                          "internalType": "uint256",
                          "name": "amount",
                          "type": "uint256"
                      }
                  ],
                  "name": "approve",
                  "outputs": [
                      {
                          "internalType": "bool",
                          "name": "",
                          "type": "bool"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x095ea7b3"
              },
              {
                  "constant": true,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "owner",
                          "type": "address"
                      }
                  ],
                  "name": "balanceOf",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x70a08231"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "owner",
                          "type": "address"
                      }
                  ],
                  "name": "balanceOfUnderlying",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x3af9e669"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "uint256",
                          "name": "borrowAmount",
                          "type": "uint256"
                      }
                  ],
                  "name": "borrow",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xc5ebeaec"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "account",
                          "type": "address"
                      }
                  ],
                  "name": "borrowBalanceCurrent",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x17bfdfbc"
              },
              {
                  "constant": true,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "account",
                          "type": "address"
                      }
                  ],
                  "name": "borrowBalanceStored",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x95dd9193"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "borrowIndex",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0xaa5af0fd"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "borrowRatePerBlock",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0xf8f9da28"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "comptroller",
                  "outputs": [
                      {
                          "internalType": "contract ComptrollerInterface",
                          "name": "",
                          "type": "address"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x5fe3b567"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "decimals",
                  "outputs": [
                      {
                          "internalType": "uint8",
                          "name": "",
                          "type": "uint8"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x313ce567"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                      }
                  ],
                  "name": "delegateToImplementation",
                  "outputs": [
                      {
                          "internalType": "bytes",
                          "name": "",
                          "type": "bytes"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x0933c1ed"
              },
              {
                  "constant": true,
                  "inputs": [
                      {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                      }
                  ],
                  "name": "delegateToViewImplementation",
                  "outputs": [
                      {
                          "internalType": "bytes",
                          "name": "",
                          "type": "bytes"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x4487152f"
              },
              {
                  "constant": false,
                  "inputs": [],
                  "name": "exchangeRateCurrent",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xbd6d894d"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "exchangeRateStored",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x182df0f5"
              },
              {
                  "constant": true,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "account",
                          "type": "address"
                      }
                  ],
                  "name": "getAccountSnapshot",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      },
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      },
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      },
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0xc37f68e2"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "getCash",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x3b1d21a2"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "implementation",
                  "outputs": [
                      {
                          "internalType": "address",
                          "name": "",
                          "type": "address"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x5c60da1b"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "interestRateModel",
                  "outputs": [
                      {
                          "internalType": "contract InterestRateModel",
                          "name": "",
                          "type": "address"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0xf3fdb15a"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "isCToken",
                  "outputs": [
                      {
                          "internalType": "bool",
                          "name": "",
                          "type": "bool"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0xfe9c44ae"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "borrower",
                          "type": "address"
                      },
                      {
                          "internalType": "uint256",
                          "name": "repayAmount",
                          "type": "uint256"
                      },
                      {
                          "internalType": "contract CTokenInterface",
                          "name": "cTokenCollateral",
                          "type": "address"
                      }
                  ],
                  "name": "liquidateBorrow",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xf5e3c462"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "uint256",
                          "name": "mintAmount",
                          "type": "uint256"
                      }
                  ],
                  "name": "mint",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xa0712d68"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "name",
                  "outputs": [
                      {
                          "internalType": "string",
                          "name": "",
                          "type": "string"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x06fdde03"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "pendingAdmin",
                  "outputs": [
                      {
                          "internalType": "address payable",
                          "name": "",
                          "type": "address"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x26782247"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "uint256",
                          "name": "redeemTokens",
                          "type": "uint256"
                      }
                  ],
                  "name": "redeem",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xdb006a75"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "uint256",
                          "name": "redeemAmount",
                          "type": "uint256"
                      }
                  ],
                  "name": "redeemUnderlying",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x852a12e3"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "uint256",
                          "name": "repayAmount",
                          "type": "uint256"
                      }
                  ],
                  "name": "repayBorrow",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x0e752702"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "borrower",
                          "type": "address"
                      },
                      {
                          "internalType": "uint256",
                          "name": "repayAmount",
                          "type": "uint256"
                      }
                  ],
                  "name": "repayBorrowBehalf",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x2608f818"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "reserveFactorMantissa",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x173b9904"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "liquidator",
                          "type": "address"
                      },
                      {
                          "internalType": "address",
                          "name": "borrower",
                          "type": "address"
                      },
                      {
                          "internalType": "uint256",
                          "name": "seizeTokens",
                          "type": "uint256"
                      }
                  ],
                  "name": "seize",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xb2a02ff1"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "supplyRatePerBlock",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0xae9d70b0"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "symbol",
                  "outputs": [
                      {
                          "internalType": "string",
                          "name": "",
                          "type": "string"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x95d89b41"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "totalBorrows",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x47bd3718"
              },
              {
                  "constant": false,
                  "inputs": [],
                  "name": "totalBorrowsCurrent",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x73acee98"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "totalReserves",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x8f840ddd"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "totalSupply",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x18160ddd"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "dst",
                          "type": "address"
                      },
                      {
                          "internalType": "uint256",
                          "name": "amount",
                          "type": "uint256"
                      }
                  ],
                  "name": "transfer",
                  "outputs": [
                      {
                          "internalType": "bool",
                          "name": "",
                          "type": "bool"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xa9059cbb"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "src",
                          "type": "address"
                      },
                      {
                          "internalType": "address",
                          "name": "dst",
                          "type": "address"
                      },
                      {
                          "internalType": "uint256",
                          "name": "amount",
                          "type": "uint256"
                      }
                  ],
                  "name": "transferFrom",
                  "outputs": [
                      {
                          "internalType": "bool",
                          "name": "",
                          "type": "bool"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x23b872dd"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "underlying",
                  "outputs": [
                      {
                          "internalType": "address",
                          "name": "",
                          "type": "address"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x6f307dc3"
              }
          ]
      },
      {
          "symbol" : "cWBTC",
          "ogSymbol" : "WBTC",
          "address" : "0xc11b1268c1a384e55c48c2391d8d480264a3a7f4",
          "regularAddress": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
          "decimals" : 8,
          "abi": [
              {
                  "constant": true,
                  "inputs": [],
                  "name": "name",
                  "outputs": [
                      {
                          "name": "",
                          "type": "string"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x06fdde03"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "name": "spender",
                          "type": "address"
                      },
                      {
                          "name": "amount",
                          "type": "uint256"
                      }
                  ],
                  "name": "approve",
                  "outputs": [
                      {
                          "name": "",
                          "type": "bool"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x095ea7b3"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "name": "repayAmount",
                          "type": "uint256"
                      }
                  ],
                  "name": "repayBorrow",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x0e752702"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "reserveFactorMantissa",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x173b9904"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "name": "account",
                          "type": "address"
                      }
                  ],
                  "name": "borrowBalanceCurrent",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x17bfdfbc"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "totalSupply",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x18160ddd"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "exchangeRateStored",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x182df0f5"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "name": "src",
                          "type": "address"
                      },
                      {
                          "name": "dst",
                          "type": "address"
                      },
                      {
                          "name": "amount",
                          "type": "uint256"
                      }
                  ],
                  "name": "transferFrom",
                  "outputs": [
                      {
                          "name": "",
                          "type": "bool"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x23b872dd"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "name": "borrower",
                          "type": "address"
                      },
                      {
                          "name": "repayAmount",
                          "type": "uint256"
                      }
                  ],
                  "name": "repayBorrowBehalf",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x2608f818"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "pendingAdmin",
                  "outputs": [
                      {
                          "name": "",
                          "type": "address"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x26782247"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "decimals",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x313ce567"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "name": "owner",
                          "type": "address"
                      }
                  ],
                  "name": "balanceOfUnderlying",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x3af9e669"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "getCash",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x3b1d21a2"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "name": "newComptroller",
                          "type": "address"
                      }
                  ],
                  "name": "_setComptroller",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x4576b5db"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "totalBorrows",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x47bd3718"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "comptroller",
                  "outputs": [
                      {
                          "name": "",
                          "type": "address"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x5fe3b567"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "name": "reduceAmount",
                          "type": "uint256"
                      }
                  ],
                  "name": "_reduceReserves",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x601a0bf1"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "initialExchangeRateMantissa",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x675d972c"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "accrualBlockNumber",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x6c540baf"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "underlying",
                  "outputs": [
                      {
                          "name": "",
                          "type": "address"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x6f307dc3"
              },
              {
                  "constant": true,
                  "inputs": [
                      {
                          "name": "owner",
                          "type": "address"
                      }
                  ],
                  "name": "balanceOf",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x70a08231"
              },
              {
                  "constant": false,
                  "inputs": [],
                  "name": "totalBorrowsCurrent",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x73acee98"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "name": "redeemAmount",
                          "type": "uint256"
                      }
                  ],
                  "name": "redeemUnderlying",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0x852a12e3"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "totalReserves",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x8f840ddd"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "symbol",
                  "outputs": [
                      {
                          "name": "",
                          "type": "string"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x95d89b41"
              },
              {
                  "constant": true,
                  "inputs": [
                      {
                          "name": "account",
                          "type": "address"
                      }
                  ],
                  "name": "borrowBalanceStored",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0x95dd9193"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "name": "mintAmount",
                          "type": "uint256"
                      }
                  ],
                  "name": "mint",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xa0712d68"
              },
              {
                  "constant": false,
                  "inputs": [],
                  "name": "accrueInterest",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xa6afed95"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "name": "dst",
                          "type": "address"
                      },
                      {
                          "name": "amount",
                          "type": "uint256"
                      }
                  ],
                  "name": "transfer",
                  "outputs": [
                      {
                          "name": "",
                          "type": "bool"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xa9059cbb"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "borrowIndex",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0xaa5af0fd"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "supplyRatePerBlock",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0xae9d70b0"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "name": "liquidator",
                          "type": "address"
                      },
                      {
                          "name": "borrower",
                          "type": "address"
                      },
                      {
                          "name": "seizeTokens",
                          "type": "uint256"
                      }
                  ],
                  "name": "seize",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xb2a02ff1"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "name": "newPendingAdmin",
                          "type": "address"
                      }
                  ],
                  "name": "_setPendingAdmin",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xb71d1a0c"
              },
              {
                  "constant": false,
                  "inputs": [],
                  "name": "exchangeRateCurrent",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xbd6d894d"
              },
              {
                  "constant": true,
                  "inputs": [
                      {
                          "name": "account",
                          "type": "address"
                      }
                  ],
                  "name": "getAccountSnapshot",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      },
                      {
                          "name": "",
                          "type": "uint256"
                      },
                      {
                          "name": "",
                          "type": "uint256"
                      },
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0xc37f68e2"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "name": "borrowAmount",
                          "type": "uint256"
                      }
                  ],
                  "name": "borrow",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xc5ebeaec"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "name": "redeemTokens",
                          "type": "uint256"
                      }
                  ],
                  "name": "redeem",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xdb006a75"
              },
              {
                  "constant": true,
                  "inputs": [
                      {
                          "name": "owner",
                          "type": "address"
                      },
                      {
                          "name": "spender",
                          "type": "address"
                      }
                  ],
                  "name": "allowance",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0xdd62ed3e"
              },
              {
                  "constant": false,
                  "inputs": [],
                  "name": "_acceptAdmin",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xe9c714f2"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "name": "newInterestRateModel",
                          "type": "address"
                      }
                  ],
                  "name": "_setInterestRateModel",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xf2b3abbd"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "interestRateModel",
                  "outputs": [
                      {
                          "name": "",
                          "type": "address"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0xf3fdb15a"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "name": "borrower",
                          "type": "address"
                      },
                      {
                          "name": "repayAmount",
                          "type": "uint256"
                      },
                      {
                          "name": "cTokenCollateral",
                          "type": "address"
                      }
                  ],
                  "name": "liquidateBorrow",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xf5e3c462"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "admin",
                  "outputs": [
                      {
                          "name": "",
                          "type": "address"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0xf851a440"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "borrowRatePerBlock",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0xf8f9da28"
              },
              {
                  "constant": false,
                  "inputs": [
                      {
                          "name": "newReserveFactorMantissa",
                          "type": "uint256"
                      }
                  ],
                  "name": "_setReserveFactor",
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "function",
                  "signature": "0xfca7820b"
              },
              {
                  "constant": true,
                  "inputs": [],
                  "name": "isCToken",
                  "outputs": [
                      {
                          "name": "",
                          "type": "bool"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "view",
                  "type": "function",
                  "signature": "0xfe9c44ae"
              },
              {
                  "inputs": [
                      {
                          "name": "underlying_",
                          "type": "address"
                      },
                      {
                          "name": "comptroller_",
                          "type": "address"
                      },
                      {
                          "name": "interestRateModel_",
                          "type": "address"
                      },
                      {
                          "name": "initialExchangeRateMantissa_",
                          "type": "uint256"
                      },
                      {
                          "name": "name_",
                          "type": "string"
                      },
                      {
                          "name": "symbol_",
                          "type": "string"
                      },
                      {
                          "name": "decimals_",
                          "type": "uint256"
                      }
                  ],
                  "payable": false,
                  "stateMutability": "nonpayable",
                  "type": "constructor",
                  "signature": "constructor"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "name": "interestAccumulated",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "name": "borrowIndex",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "name": "totalBorrows",
                          "type": "uint256"
                      }
                  ],
                  "name": "AccrueInterest",
                  "type": "event",
                  "signature": "0x875352fb3fadeb8c0be7cbbe8ff761b308fa7033470cd0287f02f3436fd76cb9"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "name": "minter",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "name": "mintAmount",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "name": "mintTokens",
                          "type": "uint256"
                      }
                  ],
                  "name": "Mint",
                  "type": "event",
                  "signature": "0x4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "name": "redeemer",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "name": "redeemAmount",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "name": "redeemTokens",
                          "type": "uint256"
                      }
                  ],
                  "name": "Redeem",
                  "type": "event",
                  "signature": "0xe5b754fb1abb7f01b499791d0b820ae3b6af3424ac1c59768edb53f4ec31a929"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "name": "borrower",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "name": "borrowAmount",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "name": "accountBorrows",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "name": "totalBorrows",
                          "type": "uint256"
                      }
                  ],
                  "name": "Borrow",
                  "type": "event",
                  "signature": "0x13ed6866d4e1ee6da46f845c46d7e54120883d75c5ea9a2dacc1c4ca8984ab80"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "name": "payer",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "name": "borrower",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "name": "repayAmount",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "name": "accountBorrows",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "name": "totalBorrows",
                          "type": "uint256"
                      }
                  ],
                  "name": "RepayBorrow",
                  "type": "event",
                  "signature": "0x1a2a22cb034d26d1854bdc6666a5b91fe25efbbb5dcad3b0355478d6f5c362a1"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "name": "liquidator",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "name": "borrower",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "name": "repayAmount",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "name": "cTokenCollateral",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "name": "seizeTokens",
                          "type": "uint256"
                      }
                  ],
                  "name": "LiquidateBorrow",
                  "type": "event",
                  "signature": "0x298637f684da70674f26509b10f07ec2fbc77a335ab1e7d6215a4b2484d8bb52"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "name": "oldPendingAdmin",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "name": "newPendingAdmin",
                          "type": "address"
                      }
                  ],
                  "name": "NewPendingAdmin",
                  "type": "event",
                  "signature": "0xca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a9"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "name": "oldAdmin",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "name": "newAdmin",
                          "type": "address"
                      }
                  ],
                  "name": "NewAdmin",
                  "type": "event",
                  "signature": "0xf9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "name": "oldComptroller",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "name": "newComptroller",
                          "type": "address"
                      }
                  ],
                  "name": "NewComptroller",
                  "type": "event",
                  "signature": "0x7ac369dbd14fa5ea3f473ed67cc9d598964a77501540ba6751eb0b3decf5870d"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "name": "oldInterestRateModel",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "name": "newInterestRateModel",
                          "type": "address"
                      }
                  ],
                  "name": "NewMarketInterestRateModel",
                  "type": "event",
                  "signature": "0xedffc32e068c7c95dfd4bdfd5c4d939a084d6b11c4199eac8436ed234d72f926"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "name": "oldReserveFactorMantissa",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "name": "newReserveFactorMantissa",
                          "type": "uint256"
                      }
                  ],
                  "name": "NewReserveFactor",
                  "type": "event",
                  "signature": "0xaaa68312e2ea9d50e16af5068410ab56e1a1fd06037b1a35664812c30f821460"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "name": "admin",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "name": "reduceAmount",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "name": "newTotalReserves",
                          "type": "uint256"
                      }
                  ],
                  "name": "ReservesReduced",
                  "type": "event",
                  "signature": "0x3bad0c59cf2f06e7314077049f48a93578cd16f5ef92329f1dab1420a99c177e"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "name": "error",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "name": "info",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "name": "detail",
                          "type": "uint256"
                      }
                  ],
                  "name": "Failure",
                  "type": "event",
                  "signature": "0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": true,
                          "name": "from",
                          "type": "address"
                      },
                      {
                          "indexed": true,
                          "name": "to",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "name": "amount",
                          "type": "uint256"
                      }
                  ],
                  "name": "Transfer",
                  "type": "event",
                  "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": true,
                          "name": "owner",
                          "type": "address"
                      },
                      {
                          "indexed": true,
                          "name": "spender",
                          "type": "address"
                      },
                      {
                          "indexed": false,
                          "name": "amount",
                          "type": "uint256"
                      }
                  ],
                  "name": "Approval",
                  "type": "event",
                  "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
              }
          ]
      },

  ],

  minCollateralRatio : 1.5,
  safeCollateralRatio : 2,

  comptrollerAddress: "0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b",
  comptrollerAbi : [{"constant":true,"inputs":[],"name":"isComptroller","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"cToken","type":"address"},{"name":"payer","type":"address"},{"name":"borrower","type":"address"},{"name":"repayAmount","type":"uint256"},{"name":"borrowerIndex","type":"uint256"}],"name":"repayBorrowVerify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cToken","type":"address"},{"name":"payer","type":"address"},{"name":"borrower","type":"address"},{"name":"repayAmount","type":"uint256"}],"name":"repayBorrowAllowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newCloseFactorMantissa","type":"uint256"}],"name":"_setCloseFactor","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"unitroller","type":"address"},{"name":"_oracle","type":"address"},{"name":"_closeFactorMantissa","type":"uint256"},{"name":"_maxAssets","type":"uint256"},{"name":"reinitializing","type":"bool"}],"name":"_become","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cToken","type":"address"},{"name":"minter","type":"address"},{"name":"mintAmount","type":"uint256"},{"name":"mintTokens","type":"uint256"}],"name":"mintVerify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cTokenBorrowed","type":"address"},{"name":"cTokenCollateral","type":"address"},{"name":"liquidator","type":"address"},{"name":"borrower","type":"address"},{"name":"repayAmount","type":"uint256"},{"name":"seizeTokens","type":"uint256"}],"name":"liquidateBorrowVerify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"liquidationIncentiveMantissa","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"cToken","type":"address"},{"name":"minter","type":"address"},{"name":"mintAmount","type":"uint256"}],"name":"mintAllowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newLiquidationIncentiveMantissa","type":"uint256"}],"name":"_setLiquidationIncentive","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cToken","type":"address"},{"name":"redeemer","type":"address"},{"name":"redeemAmount","type":"uint256"},{"name":"redeemTokens","type":"uint256"}],"name":"redeemVerify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOracle","type":"address"}],"name":"_setPriceOracle","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cToken","type":"address"},{"name":"borrower","type":"address"},{"name":"borrowAmount","type":"uint256"}],"name":"borrowVerify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"getAccountLiquidity","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"cTokenBorrowed","type":"address"},{"name":"cTokenCollateral","type":"address"},{"name":"liquidator","type":"address"},{"name":"borrower","type":"address"},{"name":"repayAmount","type":"uint256"}],"name":"liquidateBorrowAllowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cToken","type":"address"},{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"transferTokens","type":"uint256"}],"name":"transferVerify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cTokenCollateral","type":"address"},{"name":"cTokenBorrowed","type":"address"},{"name":"liquidator","type":"address"},{"name":"borrower","type":"address"},{"name":"seizeTokens","type":"uint256"}],"name":"seizeVerify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"oracle","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"markets","outputs":[{"name":"isListed","type":"bool"},{"name":"collateralFactorMantissa","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"},{"name":"cToken","type":"address"}],"name":"checkMembership","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxAssets","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"cToken","type":"address"}],"name":"_supportMarket","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"getAssetsIn","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"comptrollerImplementation","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"cToken","type":"address"},{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"transferTokens","type":"uint256"}],"name":"transferAllowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cTokens","type":"address[]"}],"name":"enterMarkets","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"cTokenBorrowed","type":"address"},{"name":"cTokenCollateral","type":"address"},{"name":"repayAmount","type":"uint256"}],"name":"liquidateCalculateSeizeTokens","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"cTokenCollateral","type":"address"},{"name":"cTokenBorrowed","type":"address"},{"name":"liquidator","type":"address"},{"name":"borrower","type":"address"},{"name":"seizeTokens","type":"uint256"}],"name":"seizeAllowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newMaxAssets","type":"uint256"}],"name":"_setMaxAssets","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cToken","type":"address"},{"name":"borrower","type":"address"},{"name":"borrowAmount","type":"uint256"}],"name":"borrowAllowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"accountAssets","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingComptrollerImplementation","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"cToken","type":"address"},{"name":"newCollateralFactorMantissa","type":"uint256"}],"name":"_setCollateralFactor","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"closeFactorMantissa","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"cToken","type":"address"},{"name":"redeemer","type":"address"},{"name":"redeemTokens","type":"uint256"}],"name":"redeemAllowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cTokenAddress","type":"address"}],"name":"exitMarket","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"cToken","type":"address"}],"name":"MarketListed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"cToken","type":"address"},{"indexed":false,"name":"account","type":"address"}],"name":"MarketEntered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"cToken","type":"address"},{"indexed":false,"name":"account","type":"address"}],"name":"MarketExited","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldCloseFactorMantissa","type":"uint256"},{"indexed":false,"name":"newCloseFactorMantissa","type":"uint256"}],"name":"NewCloseFactor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"cToken","type":"address"},{"indexed":false,"name":"oldCollateralFactorMantissa","type":"uint256"},{"indexed":false,"name":"newCollateralFactorMantissa","type":"uint256"}],"name":"NewCollateralFactor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldLiquidationIncentiveMantissa","type":"uint256"},{"indexed":false,"name":"newLiquidationIncentiveMantissa","type":"uint256"}],"name":"NewLiquidationIncentive","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldMaxAssets","type":"uint256"},{"indexed":false,"name":"newMaxAssets","type":"uint256"}],"name":"NewMaxAssets","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldPriceOracle","type":"address"},{"indexed":false,"name":"newPriceOracle","type":"address"}],"name":"NewPriceOracle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"error","type":"uint256"},{"indexed":false,"name":"info","type":"uint256"},{"indexed":false,"name":"detail","type":"uint256"}],"name":"Failure","type":"event"}],

  liquidationAddress: "0x1055be4bf7338c7606d9efdcf80593f180ba043e",
  liquidationABI : [{"constant":true,"inputs":[],"name":"moneyMarket","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"targetAccount","type":"address"},{"name":"assetBorrow","type":"address"},{"name":"assetCollateral","type":"address"},{"name":"requestedAmountClose","type":"uint256"}],"name":"liquidateBorrow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"moneyMarket_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"name":"targetAccount","type":"address","indexed":false},{"name":"assetBorrow","type":"address","indexed":false},{"name":"borrowBalanceBefore","type":"uint256","indexed":false},{"indexed":false,"name":"borrowBalanceAccumulated","type":"uint256"},{"indexed":false,"name":"amountRepaid","type":"uint256"},{"indexed":false,"name":"borrowBalanceAfter","type":"uint256"},{"indexed":false,"name":"liquidator","type":"address"},{"indexed":false,"name":"assetCollateral","type":"address"},{"indexed":false,"name":"collateralBalanceBefore","type":"uint256"},{"indexed":false,"name":"collateralBalanceAccumulated","type":"uint256"},{"indexed":false,"name":"amountSeized","type":"uint256"},{"indexed":false,"name":"collateralBalanceAfter","type":"uint256"}],"name":"BorrowLiquidated","type":"event","anonymous":false},{"inputs":[{"indexed":false,"name":"error","type":"uint256"},{"indexed":false,"name":"info","type":"uint256"},{"indexed":false,"name":"detail","type":"uint256"}],"name":"Failure","type":"event","anonymous":false}],

  erc20ABI : [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function","constant":true,"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}]},{"payable":false,"stateMutability":"view","type":"function","constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}]},{"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","type":"function","constant":false,"outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable"},{"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","type":"function","constant":true,"outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}],

  oracleAddress: "0x02557a5e05defeffd4cae6d83ea3d173b272c904",

  oracleAbi: [{"constant":false,"inputs":[{"name":"asset","type":"address"},{"name":"requestedPriceMantissa","type":"uint256"}],"name":"setPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"anchorAdmin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxSwingMantissa","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"_assetPrices","outputs":[{"name":"mantissa","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"requestedState","type":"bool"}],"name":"_setPaused","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"asset","type":"address"}],"name":"getPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"assets","type":"address[]"},{"name":"requestedPriceMantissas","type":"uint256[]"}],"name":"setPrices","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"pendingAnchorAdmin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numBlocksPerPeriod","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"readers","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"asset","type":"address"}],"name":"assetPrices","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"anchors","outputs":[{"name":"period","type":"uint256"},{"name":"priceMantissa","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"poster","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newPendingAnchorAdmin","type":"address"}],"name":"_setPendingAnchorAdmin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"pendingAnchors","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxSwing","outputs":[{"name":"mantissa","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"_acceptAnchorAdmin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"asset","type":"address"},{"name":"newScaledPrice","type":"uint256"}],"name":"_setPendingAnchor","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_poster","type":"address"},{"name":"addr0","type":"address"},{"name":"reader0","type":"address"},{"name":"addr1","type":"address"},{"name":"reader1","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"msgSender","type":"address"},{"indexed":false,"name":"asset","type":"address"},{"indexed":false,"name":"error","type":"uint256"},{"indexed":false,"name":"info","type":"uint256"},{"indexed":false,"name":"detail","type":"uint256"}],"name":"OracleFailure","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"anchorAdmin","type":"address"},{"indexed":false,"name":"asset","type":"address"},{"indexed":false,"name":"oldScaledPrice","type":"uint256"},{"indexed":false,"name":"newScaledPrice","type":"uint256"}],"name":"NewPendingAnchor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"asset","type":"address"},{"indexed":false,"name":"previousPriceMantissa","type":"uint256"},{"indexed":false,"name":"requestedPriceMantissa","type":"uint256"},{"indexed":false,"name":"newPriceMantissa","type":"uint256"}],"name":"PricePosted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"asset","type":"address"},{"indexed":false,"name":"requestedPriceMantissa","type":"uint256"},{"indexed":false,"name":"anchorPriceMantissa","type":"uint256"},{"indexed":false,"name":"cappedPriceMantissa","type":"uint256"}],"name":"CappedPricePosted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newState","type":"bool"}],"name":"SetPaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldPendingAnchorAdmin","type":"address"},{"indexed":false,"name":"newPendingAnchorAdmin","type":"address"}],"name":"NewPendingAnchorAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldAnchorAdmin","type":"address"},{"indexed":false,"name":"newAnchorAdmin","type":"address"}],"name":"NewAnchorAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"error","type":"uint256"},{"indexed":false,"name":"info","type":"uint256"},{"indexed":false,"name":"detail","type":"uint256"}],"name":"Failure","type":"event"}]
}
