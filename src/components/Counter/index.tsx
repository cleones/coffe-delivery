import { ReactComponent as Minus } from '../../assets/minus-bold.svg';
import { ReactComponent as Plus } from '../../assets/plus-bold.svg';
import { CounterContainer } from './styles';

interface CounterProps {
  count: number;
  addCallback: () => void;
  removeCallback: () => void;
}

export function Counter({ removeCallback, addCallback, count }: CounterProps) {
  return (
    <CounterContainer>
      <button type="button" onClick={removeCallback}>
        <Minus width={14} />
      </button>
      <span>{count}</span>
      <button type="button" onClick={addCallback}>
        <Plus width={14} />
      </button>
    </CounterContainer>
  );
}
