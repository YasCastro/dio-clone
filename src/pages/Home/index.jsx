import { Link } from 'react-router-dom';

import bannerImage from '../../assets/banner.png';
import { Button } from '../../components/Button';
import {Header} from '../../components/Header'

import { Container, TextContent, Title, TitleHighlight, Banner } from './styles';
  
const Home = () => {
  return (<>
    <Header></Header>
    <Container>
      <div>
        <Title>
          <TitleHighlight>
          Implemente <br />
          </TitleHighlight>
          O seu futuro global agora!
        </Title>
        <TextContent>
          Lorem ipsum
        </TextContent>
        <Button title="Começar" variant="secondary" onClick={() => null} />
      </div>
      <div>
        <Banner src={bannerImage} ></Banner>
      </div>
    </Container>
  </>)
}
export { Home }