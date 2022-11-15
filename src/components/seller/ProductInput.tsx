import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { BASE_URL } from '../../constants/constants';
import {
    Wrap,
    InputContainer,
    Field,
    Label,
    ImgWrap,
    ImgLabel,
    ImgInput,
    ImgPreview,
    Input,
    NameInputWrap,
    NameInput,
    NameLength,
    Unit,
    RadioInput,
    RadioLabel,
    LabelWrap,
    CautionText,
    BtnContainer,
    ColorBtn,
    WhiteBtn,
} from './ProductInputStyle';

interface IGetDetailForEdit {
    product_id?: number;
    image?: string;
    product_name?: string;
    price?: number;
    shipping_method?: 'PARCEL' | 'DELIVERY';
    shipping_fee?: number;
    stock?: number;
}

const ProductInput = ({ detail }: { detail?: IGetDetailForEdit }) => {
    const [preImg, setPreImg] = useState<any>();
    const [img, setImg] = useState<any>();
    const [name, setName] = useState<string>();
    const [parcel, setParcel] = useState(true);
    const [delivery, setDelivery] = useState(false);

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

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<Inputs>({
        mode: 'onChange',
    });

    const onSubmit = (data: Inputs) => {
        console.log('훅폼', data);
        if (detail === undefined) {
            handlePostProduct(data);
        } else {
            handleEditProduct(data);
        }
    };

    useEffect(() => {
        if (detail !== undefined) {
            setValue('price', detail?.price);
            setValue('stock', detail?.stock);
            setValue('shippingFee', detail?.shipping_fee);
        }
        setName(detail?.product_name);
        setPreImg(detail?.image);
        if (detail?.shipping_method === 'DELIVERY') {
            setParcel(false);
            setDelivery(true);
        }
    }, [detail]);

    const token = localStorage.getItem('token');

    const handlePostProduct = async (data: Inputs) => {
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

    const handleEditProduct = async (data: Inputs) => {
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
                            <LabelWrap>
                                <Label htmlFor="price">판매가</Label>
                                {errors.price && (
                                    <CautionText>
                                        {errors.price.message}
                                    </CautionText>
                                )}
                            </LabelWrap>
                            <Input
                                id="price"
                                type="text"
                                width="166px"
                                {...register('price', {
                                    required: '필수정보 입니다.',
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: '숫자만 입력 가능합니다.',
                                    },
                                })}
                            />
                            <Unit>원</Unit>
                        </Field>
                        <Field>
                            <Label htmlFor="">배송 방법</Label>
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
                                직접 배송(화물)
                            </RadioLabel>
                        </Field>
                        <Field>
                            <LabelWrap>
                                <Label htmlFor="shippingFee">기본 배송비</Label>
                                {errors.shippingFee && (
                                    <CautionText>
                                        {errors.shippingFee.message}
                                    </CautionText>
                                )}
                            </LabelWrap>
                            <Input
                                id="shippingFee"
                                type="text"
                                width="166px"
                                {...register('shippingFee', {
                                    required: '필수정보 입니다.',
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: '숫자만 입력 가능합니다.',
                                    },
                                })}
                            />
                            <Unit>원</Unit>
                        </Field>
                        <div>
                            <LabelWrap>
                                <Label htmlFor="stock">재고</Label>
                                {errors.stock && (
                                    <CautionText>
                                        {errors.stock.message}
                                    </CautionText>
                                )}
                            </LabelWrap>
                            <Input
                                id="stock"
                                type="text"
                                width="166px"
                                {...register('stock', {
                                    required: '필수정보 입니다.',
                                    min: {
                                        value: 1,
                                        message:
                                            '재고는 1개 이상 입력해야 합니다.',
                                    },
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: '숫자만 입력 가능합니다.',
                                    },
                                })}
                            />
                            <Unit>개</Unit>
                        </div>
                    </InputContainer>
                </Wrap>
                <BtnContainer>
                    <WhiteBtn
                        type="button"
                        onClick={() => (window.location.href = '/seller')}
                    >
                        취소
                    </WhiteBtn>
                    <ColorBtn type="submit">저장하기</ColorBtn>
                </BtnContainer>
            </form>
        </>
    );
};
export default ProductInput;
