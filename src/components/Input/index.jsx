import { IconContainer, InputText, InputContainer } from "./styles";

const Input = (leftIcon, name, ...rest) => {
  return (
    <InputContainer>
      {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
      <InputText />
    </InputContainer>
  )
}

export { Input };
