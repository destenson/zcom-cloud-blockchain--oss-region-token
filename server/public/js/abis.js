var DEMO_ABI = [{"constant":true,"inputs":[],"name":"provider","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isVersionContract","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isVersionLogic","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"logic_v1","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isVersionContractOrLogic","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_symbol","type":"bytes32"},{"name":"_name","type":"bytes32"}],"name":"createToken","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"cns","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getContractName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getCns","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"_cns","type":"address"},{"name":"_logic_v1","type":"address"}],"payable":false,"type":"constructor"}];
var PROXY_CONTROLLER_ABI = [{"constant":true,"inputs":[],"name":"provider","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_tokenAddress","type":"address"},{"name":"_storeKey","type":"bytes32"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"inactivateStore","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isVersionContract","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_addr","type":"address"}],"name":"getParticipantAndNonce","outputs":[{"name":"participant","type":"address"},{"name":"nonce","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_tokenAddress","type":"address"},{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"approve","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_tokenAddress","type":"address"},{"name":"_storeKey","type":"bytes32"},{"name":"_terminal","type":"address"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"addTerminal","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_tokenAddress","type":"address"},{"name":"_storeKey","type":"bytes32"},{"name":"_maxLiabilities","type":"uint256"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"setStoreMaxLiabilities","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isVersionLogic","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_tokenAddress","type":"address"},{"name":"_storeKey","type":"bytes32"},{"name":"_terminal","type":"address"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"removeTerminal","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_tokenAddress","type":"address"}],"name":"getName","outputs":[{"name":"name","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_storeKey","type":"bytes32"}],"name":"getStoreName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_tokenAddress","type":"address"}],"name":"getTotalSupply","outputs":[{"name":"totalSupply","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_addr","type":"address"}],"name":"isTerminal","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_storeKey","type":"bytes32"}],"name":"getStoreMaster","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_storeKey","type":"bytes32"}],"name":"isActiveStore","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"logic_v1","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_storeKey","type":"bytes32"}],"name":"getStoreCurrentMinus","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_storeKey","type":"bytes32"}],"name":"getStoreInfo","outputs":[{"name":"balance","type":"uint256"},{"name":"liabilities","type":"uint256"},{"name":"maxLiabilities","type":"uint256"},{"name":"active","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_storeKey","type":"bytes32"}],"name":"getStoreAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_addr","type":"address"}],"name":"isStoreMaster","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_tokenAddress","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isVersionContractOrLogic","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_tokenAddress","type":"address"}],"name":"getSymbol","outputs":[{"name":"symbol","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_tokenAddress","type":"address"},{"name":"_storeKey","type":"bytes32"},{"name":"_name","type":"bytes32"},{"name":"_storeMasterAddress","type":"address"},{"name":"_maxLiabilities","type":"uint256"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"addStore","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_addr","type":"address"}],"name":"getBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_addr","type":"address"}],"name":"getNonce","outputs":[{"name":"nonce","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_holder","type":"address"},{"name":"_spender","type":"address"}],"name":"getAllowance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_tokenAddress","type":"address"},{"name":"_storeKey","type":"bytes32"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"activateStore","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_storeKey","type":"bytes32"}],"name":"getStoreMaxLiabilities","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"cns","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getContractName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getCns","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"_cns","type":"address"},{"name":"_logic_v1","type":"address"}],"payable":false,"type":"constructor"}];