import Dropdown from 'components/modal/Dropdown';
import CartIcon from '../../../assets/icon-shopping-cart.svg';
import UserIcon from '../../../assets/icon-user.svg';
import { HearderBtn, IconShoppingCart, IconUser } from './HeaderStyle';

interface IRightButton {
    title: string;
    onClick: () => void;
    style?: React.CSSProperties;
    openDropdown?: boolean;
}

const RightButton = ({ title, onClick, style, openDropdown }: IRightButton) => {
    return (
        <>
            <HearderBtn onClick={onClick} style={style}>
                {title === '장바구니' && <IconShoppingCart src={CartIcon} />}
                {title !== '장바구니' && <IconUser src={UserIcon} />}
                <span>{title}</span>
            </HearderBtn>
            {openDropdown && <Dropdown />}
        </>
    );
};
export default RightButton;
