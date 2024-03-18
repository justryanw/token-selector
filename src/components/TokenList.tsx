import { useState } from "react";
import { Token } from "./TokensSelector";
import { SelectableToken } from "./SelectableToken";

interface TokenListProps {
    tokens: Token[],
    handleSelectionChange: (id: string) => void
};

export function TokenList({ tokens, handleSelectionChange }: TokenListProps) {
    const [search, setSearch] = useState("");

    const selectableTokenList = tokens
        .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
        .map((token) => <SelectableToken key={token.id} token={token} onSelectionChange={handleSelectionChange} />);

    return (
        <div>
            <input value={search} onChange={e => setSearch(e.target.value)} />
            <div> {selectableTokenList} </div>
        </div>
    );
};