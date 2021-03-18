import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    onToggleTransactionModal: () => void;
}

export function Header({onToggleTransactionModal}: HeaderProps){
    return (
        <Container>
            <Content>
                <img src={logo} alt="dtmoney"/>
                <button type="button" onClick={onToggleTransactionModal}>Nova transação</button>
            </Content>   
        </Container>
    )
}