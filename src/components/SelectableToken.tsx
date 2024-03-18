import { Token } from "./TokensSelector"
import './selectableToken.css';

interface SelectableTokenProps {
    token: Token,
    onSelectionChange: (id: string) => void
}

export function SelectableToken({ token, onSelectionChange }: SelectableTokenProps) {
    const { id, name, ticker, iconUrl, selected } = token;

    return (
        <div className="selectable-token" onClick={() => onSelectionChange(id)}>
            <input type="checkbox" checked={selected} />
            <div className="checkmark">
                {/* <div>✓</div> */}
            </div>
            <img src={iconUrl} alt="" />
            <div>{name}</div>
            <div>{ticker}</div>
        </div>
    )
}