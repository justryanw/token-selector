import { useState } from "react";
import { TokenData, tokenData } from "../tokens";
import { TokenList } from "./TokenList";

export interface Token extends TokenData {
  id: string,
  selected: boolean
}

export function TokenSelector() {
    const ingestData = (tokens: TokenData[]) => tokens.map(token => ({
        ...token,
        id: crypto.randomUUID(),
        selected: false
    } as Token));

    const [tokens, setTokens] = useState(ingestData(tokenData))
    const [dropdown, setDrowdown] = useState(false);

    const handleSelectionChange = (id: string) => {
        setTokens((currentTokens) => currentTokens.map((token) => token.id !== id ? token : { ...token, selected: !token.selected }));
    }

    const toggleDropdown = () => {
        setDrowdown(current => !current);
    };


    return (
        <>
            <p>Accepted Currencies</p>
            <div className='selectedTokens'>
                {tokens.filter(({selected}) => selected).map(({ id, iconUrl }) => <img key={id} src={iconUrl}></img>)}
            </div>
            <div>

                <button onClick={toggleDropdown}>show currencies</button>
            </div>
            {dropdown && <TokenList tokens={tokens} handleSelectionChange={handleSelectionChange} />}
        </>
    );
}