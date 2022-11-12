import { Container, Button } from './DropdownStyle';

interface IDropdown {
    mouseOver: React.MouseEventHandler<HTMLDivElement>;
    mouseOut: React.MouseEventHandler<HTMLDivElement>;
}

const Dropdown = (dropdown: IDropdown) => {
    return (
        <Container
            onMouseOver={dropdown.mouseOver}
            onMouseOut={dropdown.mouseOut}
        >
            <ul>
                <li>
                    <Button>마이페이지</Button>
                </li>
                <li>
                    <Button
                        onClick={() => {
                            localStorage.clear();
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
