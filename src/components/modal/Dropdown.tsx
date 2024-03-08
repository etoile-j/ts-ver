import { clearLocalStorage } from 'utils/storage';
import { Container, Button } from './DropdownStyle';

const Dropdown = () => {
    return (
        <Container>
            <ul>
                <li>
                    <Button onClick={() => (window.location.href = '/mypage')}>
                        마이페이지
                    </Button>
                </li>
                <li>
                    <Button
                        onClick={() => {
                            clearLocalStorage();
                            window.location.replace('/');
                        }}
                    >
                        로그아웃
                    </Button>
                </li>
            </ul>
        </Container>
    );
};
export default Dropdown;
