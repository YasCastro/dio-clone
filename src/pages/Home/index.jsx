import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import {Header} from '../../components/Header'

const Home = () => {
  return (<>
    <Header></Header>
    <Link to="/login" >Ir para o login</Link>
  </>)
}
export { Home }