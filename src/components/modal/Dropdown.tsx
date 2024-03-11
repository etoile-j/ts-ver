import { clearLocalStorage, getLocalStorage } from 'utils/storage';
import { LOGIN_TYPE } from 'constants/index';
import { Container, Button } from './DropdownStyle';

const Dropdown = () => {
    const loginType = getLocalStorage('login_type');

    return (
        <Container>
            <ul>
                {loginType === LOGIN_TYPE.BUYER && (
                    <li>
                        <Button onClick={() => (window.location.href = '/mypage')}>
                            마이페이지
                        </Button>
                    </li>
                )}
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
