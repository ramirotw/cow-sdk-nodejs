import { CowSdk } from '@cowprotocol/cow-sdk'

const chainId = 4 // Rinkeby
const cowSdk = new CowSdk(chainId)

async function run() {
    const trades = await cowSdk.cowApi.getOrders({
        owner: '0x1811be0994930fE9480eAEDe25165608B093ad7A', // Trader
        limit: 5,
        offset: 0,
    })
    console.log(trades)
}

run()