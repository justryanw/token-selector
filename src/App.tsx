import { useState } from 'react';
import './style.css';
import { tokenData, TokenData } from './tokens';
import { TokenSelector } from './components/TokenSelector';

export interface Token extends TokenData {
  id: string,
  selected: boolean
}

export default function App() {
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
      <div>
        <div className='selectedTokens'>
          {
            tokens.filter(({ selected }) => selected)
              .map(({ iconUrl }) => <img src={iconUrl}></img>)
          }
        </div>
        <button onClick={toggleDropdown}>show currencies</button>
      </div>
      {dropdown && <TokenSelector tokens={tokens} handleSelectionChange={handleSelectionChange} />}
    </>
  );
}
