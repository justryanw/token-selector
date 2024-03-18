import { Token } from "./TokensSelector"

interface SelectableTokenProps {
    token: Token,
    onSelectionChange: (id: string) => void
}

export function SelectableToken({ token, onSelectionChange }: SelectableTokenProps) {
    return (
        <div onClick={() => onSelectionChange(token.id)}>
            <input type="checkbox" checked={token.selected} />
            <span> {token.name} </span>
        </div>
    )
}