export interface TokenData {
    name: string,
    ticker: string,
    iconUrl: string,
}

export const tokenData: TokenData[] = [
    {
        name: "Bitcoin",
        ticker: "BTC",
        iconUrl: "https://assets.kraken.com/marketing/web/icons/sym-btc_colored.svg"
    }, {
        name: "Ethereum",
        ticker: "ETH",
        iconUrl: "https://assets.kraken.com/marketing/web/icons/sym-eth_colored.svg"
    }, {
        name: "Tether",
        ticker: "USDT",
        iconUrl: "https://assets.kraken.com/marketing/web/icons/sym-usdt_colored.svg"
    }, {
        name: "Solana",
        ticker: "SOL",
        iconUrl: "https://assets.kraken.com/marketing/web/icons/sym-sol_colored.svg"
    }
];
