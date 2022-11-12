import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Temp, Temp2 } from './CarouselStyle';

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
                <Temp />
                <Temp2 />
                <Temp />
                <Temp2 />
            </Slider>
        </Container>
    );
};
export default Carousel;
