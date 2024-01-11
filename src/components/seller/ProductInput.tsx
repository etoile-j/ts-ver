import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { patchProductInfo, postProduct } from 'apis/seller';
import { IProductSeller } from 'GlobalType';
import { REGEX } from 'constants/index';
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

const ProductInput = ({ detail }: { detail?: IProductSeller }) => {
    const [preImg, setPreImg] = useState<string>();
    const [img, setImg] = useState<{}>();
    const [name, setName] = useState<string>();
    const [parcel, setParcel] = useState(true);
    const [delivery, setDelivery] = useState(false);

    const uploadImg = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        const file = target.files![0];
        setPreImg(URL.createObjectURL(file) ?? '');
        const formData = new FormData();
        formData.append('image', file);
        setImg(file);
    };

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<IProductSeller>({ mode: 'onChange' });

    const onSubmit = (data: IProductSeller) => {
        if (detail === undefined) {
            handlePostProduct(data);
        } else {
            handleEditProduct(data);
        }
    };

    useEffect(() => {
        if (detail !== undefined) {
            setValue('price', detail.price);
            setValue('stock', detail.stock);
            setValue('shipping_fee', detail.shipping_fee);
        }
        setName(detail?.product_name);
        setPreImg(detail?.image);
        if (detail?.shipping_method === 'DELIVERY') {
            setParcel(false);
            setDelivery(true);
        }
    }, [detail]);

    const reqData = {
        product_name: name,
        image: img,
        product_info: '상품 정보',
    };
    const removePreImg = () => {
        URL.revokeObjectURL(preImg!);
        setPreImg('');
    };

    const handlePostProduct = async (data: IProductSeller) => {
        const requestData = {
            ...reqData,
            ...data,
        };
        const productId = await postProduct(requestData);
        window.location.replace(`/detail/${productId}`);
        removePreImg();
    };

    const handleEditProduct = async (data: IProductSeller) => {
        const requestData = {
            ...reqData,
            ...data,
        };
        if (typeof detail?.product_id === 'number') {
            await patchProductInfo(detail.product_id, requestData);
            window.location.replace(`/detail/${detail.product_id}`);
            removePreImg();
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Wrap>
                <ImgWrap>
                    <ImgLabel htmlFor="image">상품 이미지</ImgLabel>
                    <ImgInput type="file" id="image" accept="image/*" onChange={uploadImg} />
                    <ImgPreview src={preImg} alt="" />
                </ImgWrap>
                <InputContainer>
                    <Field>
                        <Label htmlFor="product_name">상품명</Label>
                        <NameInputWrap>
                            <NameInput
                                id="product_name"
                                type="text"
                                width="95%"
                                maxLength={20}
                                value={name || ''}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
                                <CautionText aria-live="assertive">
                                    {errors.price.message}
                                </CautionText>
                            )}
                        </LabelWrap>
                        <Input
                            id="price"
                            type="text"
                            inputMode="numeric"
                            width="166px"
                            {...register('price', {
                                required: '필수정보 입니다.',
                                pattern: {
                                    value: REGEX.ONLY_NUMBER,
                                    message: '숫자만 입력 가능합니다.',
                                },
                            })}
                        />
                        <Unit title="원">원</Unit>
                    </Field>
                    <Field>
                        <Label>배송 방법</Label>
                        <RadioLabel
                            htmlFor="parcel"
                            onClick={() => {
                                setParcel(true);
                                setDelivery(false);
                            }}
                            color={parcel ? '#6997f7' : '#ffffff'}
                            font={parcel ? '#ffffff' : '#767676'}
                            border={parcel ? '1px solid #6997f7' : '1px solid #c4c4c4'}
                        >
                            <RadioInput
                                id="parcel"
                                value="PARCEL"
                                checked={parcel}
                                {...register('shipping_method', {
                                    required: true,
                                })}
                            />
                            택배, 소포, 등기
                        </RadioLabel>
                        <RadioLabel
                            htmlFor="delivery"
                            onClick={() => {
                                setDelivery(true);
                                setParcel(false);
                            }}
                            color={delivery ? '#6997f7' : '#ffffff'}
                            font={delivery ? '#ffffff' : '#767676'}
                            border={delivery ? '1px solid #6997f7' : '1px solid #c4c4c4'}
                        >
                            <RadioInput
                                id="delivery"
                                value="DELIVERY"
                                checked={delivery}
                                {...register('shipping_method', {
                                    required: true,
                                })}
                            />
                            직접 배송(화물)
                        </RadioLabel>
                    </Field>
                    <Field>
                        <LabelWrap>
                            <Label htmlFor="shipping_fee">기본 배송비</Label>
                            {errors.shipping_fee && (
                                <CautionText aria-live="assertive">
                                    {errors.shipping_fee.message}
                                </CautionText>
                            )}
                        </LabelWrap>
                        <Input
                            id="shipping_fee"
                            type="text"
                            inputMode="numeric"
                            width="166px"
                            {...register('shipping_fee', {
                                required: '필수정보 입니다.',
                                pattern: {
                                    value: REGEX.ONLY_NUMBER,
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
                                <CautionText aria-live="assertive">
                                    {errors.stock.message}
                                </CautionText>
                            )}
                        </LabelWrap>
                        <Input
                            id="stock"
                            type="text"
                            inputMode="numeric"
                            width="166px"
                            {...register('stock', {
                                required: '필수정보 입니다.',
                                min: {
                                    value: 1,
                                    message: '재고는 1개 이상 입력해야 합니다.',
                                },
                                pattern: {
                                    value: REGEX.ONLY_NUMBER,
                                    message: '숫자만 입력 가능합니다.',
                                },
                            })}
                        />
                        <Unit>개</Unit>
                    </div>
                </InputContainer>
            </Wrap>
            <BtnContainer>
                <WhiteBtn type="button" onClick={() => (window.location.href = '/seller')}>
                    취소
                </WhiteBtn>
                <ColorBtn type="submit">저장하기</ColorBtn>
            </BtnContainer>
        </form>
    );
};
export default ProductInput;
