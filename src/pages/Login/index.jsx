import { Link } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

import {Input} from '../../components/Input'

import { Container, Title, Banner } from './styles';
  
const Login = () => {
  return (<>
    <Header></Header>
    <Container>
      <div>
        <Title>

          O seu futuro global agora!
        </Title>
        <Button title="Começar" variant="secondary" onClick={() => null} />
      </div>
      <div>
        <Input></Input>
      </div>
    </Container>
  </>)
}
export { Login }