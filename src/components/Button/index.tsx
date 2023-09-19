import React from 'react'

import { ButtonContainer } from './styles';
import { IButton } from './types';

const Button = ({title, variant = "primary", onClick, disabled} : IButton) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick} disabled={disabled} >{title}</ButtonContainer>
    
  )
}

export { Button }