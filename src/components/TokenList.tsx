import { useState } from "react";
import { Token } from "./TokensSelector";
import { SelectableToken } from "./SelectableToken";

interface TokenListProps {
    tokens: Token[],
    handleSelectionChange: (id: string) => void
};

export function TokenList({ tokens, handleSelectionChange }: TokenListProps) {
    const [search, setSearch] = useState("");

    const filteredTokens = tokens
        .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()));


    const selectableTokenList = filteredTokens.map((token) => <SelectableToken key={token.id} token={token} onSelectionChange={handleSelectionChange} />);

    return (
        <div className={"token-list"}>
            <input className={`token-search ${filteredTokens.length !== 0 && "bottom-seperator"}`} value={search} onChange={e => setSearch(e.target.value)} />
            <div className="token-list-inner"> {selectableTokenList} </div>
        </div>
    );
};