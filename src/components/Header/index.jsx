import { Button } from '../Button';

import {
  BuscarInputContainer,
  Column,
  Row,
  Menu,
  Container,
  UserPicture,
  MenuRight,
  Input,
  Wrapper,
  Logo
} from './styles';

import logo from '../../assets/favicon.png';

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Logo src={ logo } alt="Logo da Empresa" />
          <BuscarInputContainer>
            <Input placeholder=""></Input>
          </BuscarInputContainer>
          <MenuRight>

          </MenuRight>
        </Row>

      </Container>
    </Wrapper>
    
)}

export { Header }