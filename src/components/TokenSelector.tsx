import { useState } from "react";
import { Token } from "../App";
import { SelectableToken } from "./SelectableToken";

interface TokenSelectorProps {
    tokens: Token[],
    handleSelectionChange: (id: string) => void
};

export function TokenSelector({ tokens, handleSelectionChange }: TokenSelectorProps) {
    const [search, setSearch] = useState("");

    return (
        <div>
            <input value={search} onChange={e => setSearch(e.target.value)} />
            <div>
                {
                    tokens
                        .filter(({name}) => name.toLowerCase().includes(search.toLowerCase()))
                        .map((token) => <SelectableToken key={token.id} token={token} onSelectionChange={handleSelectionChange} />)
                }
            </div>
        </div>
    );
};