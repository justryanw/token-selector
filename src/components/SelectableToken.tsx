import { Token } from "../App";

interface SelectableTokenProps {
    token: Token,
    onSelectionChange: (id: string) => void
}

export function SelectableToken({ token, onSelectionChange }: SelectableTokenProps) {
    return (
        <div>
            <input type="checkbox" checked={token.selected} onChange={() => onSelectionChange(token.id)}/>
            <div> {token.name} </div>
        </div>
    )
}