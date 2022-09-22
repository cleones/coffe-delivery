import styled from 'styled-components';

interface InputWrapperProps {
  required?: boolean;
  filled?: boolean;
}

export const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  position: relative;
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  padding: 0.75rem;

  :focus-within {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};

    :before {
      display: none;
    }
  }

  ${(props) =>
    !props.required &&
    !props.filled &&
    `
      :before {
        content: "opcional";
        font-style: italic;
        font-weight: 400;
        font-size: 12px;
        line-height: 130%;
        position: absolute;
        right: 0.75rem;
      }
  `}
  input {
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
    background-color: transparent;
    border: 0;
    flex: 1;

    :-webkit-autofill {
      transition: all 0s 50000s;
    }

    :focus {
      border: 0;
      box-shadow: none;
    }

    ::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`;
