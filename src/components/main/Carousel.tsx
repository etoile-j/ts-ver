import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
    Container,
    Banner,
    Banner2,
    Banner3,
    MainText,
    SubText,
    PointText,
} from './CarouselStyle';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <Container>
            <Slider {...settings}>
                <Banner2 onClick={() => (window.location.href = '/detail/156')}>
                    <MainText>샐러드 무료 배송</MainText>
                    <SubText>~ 재고 소진 시까지</SubText>
                </Banner2>
                <Banner onClick={() => (window.location.href = '/detail/157')}>
                    <MainText>어디서나 최상의 원두와</MainText>
                    <SubText>OUR SHOP 단독 판매</SubText>
                </Banner>
                <Banner3>
                    <MainText>OO카드 간편 결제 시</MainText>
                    <PointText>최대 7% 청구 할인</PointText>
                    <SubText>개인 신용/체크 카드 한정 1인 1일 1회</SubText>
                </Banner3>
            </Slider>
        </Container>
    );
};
export default Carousel;
