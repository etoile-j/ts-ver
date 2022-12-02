import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
    Container,
    Banner,
    Banner2,
    Banner3,
    Wrap,
    MainText,
    SubText,
    PointText,
} from './CarouselStyle';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
    };

    return (
        <Container>
            <Slider {...settings}>
                <Banner>
                    {/* <Wrap>
                        <MainText>OUR SHOP 이달의 이벤트</MainText>
                    </Wrap> */}
                </Banner>
                <Banner2 onClick={() => (window.location.href = '/detail/298')}>
                    <MainText>샐러드 무료 배송</MainText>
                    <SubText>~ 재고 소진 시까지</SubText>
                </Banner2>
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
