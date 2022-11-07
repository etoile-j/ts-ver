import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Poster from '../../assets/poster1.png';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0 auto;
    padding-bottom: 80px;
`;

const Temp = styled.div`
    background-color: lightblue;
    height: 430px;
`;
const Temp2 = styled(Temp)`
    background-color: lightgray;
`;

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
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
