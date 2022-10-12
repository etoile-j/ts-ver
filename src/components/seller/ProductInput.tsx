import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { BASE_URL } from '../../constants/constants';
import styled from 'styled-components';

const Temp = styled.div`
    background-color: lightgray;
    width: 454px;
    height: 454px;
`;

interface styledCompo {
    width?: string;
    font?: string;
    color?: string;
    border?: string;
}

const Wrap = styled.div`
    display: flex;
`;

const InputContainer = styled.div`
    width: 826px;
    margin-left: 40px;
`;

const Field = styled.div`
    margin-bottom: 16px;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    color: #767676;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const Input = styled.input`
    width: ${(props: styledCompo) => props.width};
    padding: 16px 15px;
    border: 1px solid #c4c4c4;
    border-radius: 5px 0 0 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const NameInputWrap = styled.div`
    position: relative;
    width: 100%;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
`;
const NameInput = styled(Input)`
    border: none;
`;

const NameLength = styled.span`
    position: absolute;
    top: 17px;
    right: 15px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #c4c4c4;
`;

const Unit = styled.button`
    background-color: #c4c4c4;
    width: 54px;
    height: 54px;
    border-radius: 0 5px 5px 0;
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const RadioInput = styled.input.attrs({
    type: 'radio',
    name: 'shippingMethod',
})`
    display: none;
`;
const RadioLabel = styled.label`
    display: inline-block;
    background-color: ${(props: styledCompo) => props.color};
    width: 220px;
    padding: 16px 0;
    margin-right: 10px;
    border: ${(props: styledCompo) => props.border};
    border-radius: 5px;
    color: ${(props: styledCompo) => props.font};
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
`;

const BtnContainer = styled.div`
    margin-top: 50px;
    text-align: right;
`;

const ColorBtn = styled.button`
    background-color: #6997f7;
    width: 200px;
    padding: 19px 0;
    color: #ffffff;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    border-radius: 5px;
`;
const WhiteBtn = styled(ColorBtn)`
    background-color: #ffffff;
    padding: 18px 0;
    margin-right: 14px;
    border: 1px solid #c4c4c4;
    color: #767676;
`;

const ProductInput = () => {
    const [name, setName] = useState<string>();
    const [parcel, setParcel] = useState(true);
    const [delivery, setDelivery] = useState(false);

    type Inputs = {
        price: number;
        shippingMethod: 'PARCEL' | 'DELIVERY';
        shippingFee: number;
        stock: number;
    };

    const { register, handleSubmit } = useForm<Inputs>({ mode: 'onChange' });

    const onSubmit = (data: Inputs) => {
        console.log('훅폼', data);
        postProduct(data);
    };

    const token = localStorage.getItem('token');

    const postProduct = async (data: Inputs) => {
        try {
            const url = BASE_URL + '/products/';
            const response = await axios.post(
                url,
                {
                    product_name: name,
                    image: 'http://www.jejuilbo.net/news/photo/202210/192011_128224_1557.jpg',
                    price: data.price,
                    shipping_method: data.shippingMethod, // PARCEL 또는 DELIVERY 선택
                    shipping_fee: data.shippingFee,
                    stock: data.stock,
                    product_info: '정보입니다.',
                    token: `JWT ${token}`,
                },
                {
                    headers: {
                        Authorization: `JWT ${token}`,
                    },
                },
            );
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Wrap>
                    <div>
                        <Label htmlFor="name">상품 이미지</Label>
                        <Temp />
                    </div>
                    <InputContainer>
                        <Field>
                            <Label htmlFor="name">상품명</Label>
                            <NameInputWrap>
                                <NameInput
                                    id="name"
                                    type="text"
                                    width="95%"
                                    maxLength={20}
                                    value={name || ''}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>,
                                    ) => {
                                        setName(e.target.value);
                                    }}
                                />
                                <NameLength>{name?.length}/20</NameLength>
                            </NameInputWrap>
                        </Field>
                        <Field>
                            <Label htmlFor="price">판매가</Label>
                            <Input
                                id="price"
                                type="text"
                                width="166px"
                                {...register('price', {
                                    required: '필수정보 입니다.',
                                })}
                            />
                            <Unit>원</Unit>
                        </Field>
                        <Field>
                            <Label htmlFor="">배송방법</Label>
                            <RadioLabel
                                onClick={() => {
                                    setParcel(true);
                                    setDelivery(false);
                                }}
                                color={parcel ? '#6997f7' : '#ffffff'}
                                font={parcel ? '#ffffff' : '#767676'}
                                border={
                                    parcel
                                        ? '1px solid #6997f7'
                                        : '1px solid #c4c4c4'
                                }
                            >
                                <RadioInput
                                    value="PARCEL"
                                    checked={parcel}
                                    {...register('shippingMethod', {
                                        required: true,
                                    })}
                                />
                                택배, 소포, 등기
                            </RadioLabel>
                            <RadioLabel
                                onClick={() => {
                                    setDelivery(true);
                                    setParcel(false);
                                }}
                                color={delivery ? '#6997f7' : '#ffffff'}
                                font={delivery ? '#ffffff' : '#767676'}
                                border={
                                    delivery
                                        ? '1px solid #6997f7'
                                        : '1px solid #c4c4c4'
                                }
                            >
                                <RadioInput
                                    value="DELIVERY"
                                    checked={delivery}
                                    {...register('shippingMethod', {
                                        required: true,
                                    })}
                                />
                                직접배송(화물배달)
                            </RadioLabel>
                        </Field>
                        <Field>
                            <Label htmlFor="shippingFee">기본 배송비</Label>
                            <Input
                                id="shippingFee"
                                type="text"
                                width="166px"
                                {...register('shippingFee', {
                                    required: '필수정보 입니다.',
                                })}
                            />
                            <Unit>원</Unit>
                        </Field>
                        <div>
                            <Label htmlFor="stock">재고</Label>
                            <Input
                                id="stock"
                                type="number"
                                width="166px"
                                {...register('stock', {
                                    required: '필수정보 입니다.',
                                })}
                            />
                            <Unit>개</Unit>
                        </div>
                    </InputContainer>
                </Wrap>
                <BtnContainer>
                    <WhiteBtn type="button">취소</WhiteBtn>
                    <ColorBtn type="submit">저장하기</ColorBtn>
                </BtnContainer>
            </form>
        </>
    );
};
export default ProductInput;
