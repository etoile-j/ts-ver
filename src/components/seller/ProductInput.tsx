import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { BASE_URL } from '../../constants/constants';
import uploadIcon from '../../assets/icon-img.svg';
import styled from 'styled-components';

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

const ImgWrap = styled.div`
    position: relative;
`;

const ImgLabel = styled(Label)`
    ::after {
        content: '';
        display: inline-block;
        position: absolute;
        width: 50px;
        height: 50px;
        bottom: 10px;
        right: 10px;
        background-image: url(${uploadIcon});
        background-repeat: no-repeat;
        background-size: 50px 50px;
        cursor: pointer;
    }
`;

const ImgInput = styled.input`
    display: none;
`;

const ImgPreview = styled.img`
    background-color: lightgray;
    width: 454px;
    height: 454px;
    object-fit: cover;
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

interface IGetDetailForEdit {
    product_id?: number;
    image?: string;
    product_name?: string;
    price?: number;
    shipping_fee?: number;
    stock?: number;
}

const ProductInput = ({ detail }: { detail?: IGetDetailForEdit }) => {
    const [preImg, setPreImg] = useState<any>();
    const [img, setImg] = useState<any>();
    const [name, setName] = useState<string>();
    const [parcel, setParcel] = useState(true);
    const [delivery, setDelivery] = useState(false);

    console.log(detail);

    const uploadImg = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        const file = target.files![0];
        setPreImg(URL.createObjectURL(file));
        const formData = new FormData();
        formData.append('image', file);
        setImg(file);
    };

    type Inputs = {
        price?: number;
        shippingMethod: 'PARCEL' | 'DELIVERY';
        shippingFee?: number;
        stock?: number;
    };

    const { register, handleSubmit, setValue } = useForm<Inputs>({
        mode: 'onChange',
    });

    const onSubmit = (data: Inputs) => {
        console.log('훅폼', data);
        if (detail === undefined) {
            handelPostProduct(data);
        } else {
            handelEditProduct(data);
        }
    };

    if (detail !== undefined) {
        //이거를 저장버튼 눌렀을떄 이용하면 되겠다!!!!!onSumit에다가~ 조건 걸면 되겠다>_<!!후 분리 전에 생각해서 다행
        setValue('price', detail?.price);
        setValue('stock', detail?.stock);
        setValue('shippingFee', detail?.shipping_fee);
    }
    useEffect(() => {
        setPreImg(detail?.image);
    }, [detail]);

    const token = localStorage.getItem('token');

    const handelPostProduct = async (data: Inputs) => {
        try {
            const url = BASE_URL + '/products/';
            const response = await axios.post(
                url,
                {
                    product_name: name,
                    image: img,
                    price: data.price,
                    shipping_method: data.shippingMethod,
                    shipping_fee: data.shippingFee,
                    stock: data.stock,
                    product_info: '정보입니다.',
                    token: `JWT ${token}`,
                },
                {
                    headers: {
                        Authorization: `JWT ${token}`,
                        'Content-Type': 'multipart/form-data',
                    },
                },
            );
            console.log(response);
            window.location.replace(`/detail/${response.data.product_id}`);
            URL.revokeObjectURL(preImg);
            setPreImg('');
        } catch (err) {
            console.error(err);
        }
    };

    const handelEditProduct = async (data: Inputs) => {
        try {
            const response = await axios.patch(
                BASE_URL + `/products/${detail?.product_id}/`,
                {
                    product_name: name,
                    image: img,
                    price: data.price,
                    shipping_method: data.shippingMethod,
                    shipping_fee: data.shippingFee,
                    stock: data.stock,
                    product_info: '정보입니다.',
                },
                {
                    headers: {
                        Authorization: `JWT ${token}`,
                        'Content-Type': 'multipart/form-data',
                    },
                },
            );
            console.log(response);
            window.location.replace(`/detail/${response.data.product_id}`);
            URL.revokeObjectURL(preImg);
            setPreImg('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Wrap>
                    <ImgWrap>
                        <ImgLabel htmlFor="image">상품 이미지</ImgLabel>
                        <ImgInput
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={uploadImg}
                        />
                        <ImgPreview src={preImg} />
                    </ImgWrap>
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
