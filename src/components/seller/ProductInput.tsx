import { useEffect, useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { patchProductInfo, postProduct } from 'apis/seller';
import { FieldErrors, IProductSeller } from 'GlobalType';
import { FORM_MSG, REGEX } from 'constants/index';
import { goToRoute } from 'utils';
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

const ProductInput = ({ existingDetails }: { existingDetails?: IProductSeller }) => {
    const [preImg, setPreImg] = useState<string>();
    const [img, setImg] = useState<{}>();
    const [parcel, setParcel] = useState(true);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<IProductSeller>({ mode: 'onChange' });
    const productName = watch('product_name');

    useEffect(() => {
        if (existingDetails) {
            setValue('product_name', existingDetails.product_name);
            setValue('price', existingDetails.price);
            setValue('stock', existingDetails.stock);
            setValue('shipping_fee', existingDetails.shipping_fee);
            setPreImg(existingDetails.image);
        }
        if (existingDetails?.shipping_method === 'DELIVERY') {
            setParcel(false);
        }
    }, [existingDetails]);

    const onSubmit = async (data: IProductSeller) => {
        const requestData = { image: img, product_info: data.product_name, ...data };

        if (existingDetails) {
            await patchProductInfo(existingDetails?.product_id!, requestData);
            window.location.replace(`/detail/${existingDetails?.product_id}`);
        } else {
            const productId = await postProduct(requestData);
            window.location.replace(`/detail/${productId}`);
        }

        removePreImg();
    };

    const uploadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files![0];
        setPreImg(URL.createObjectURL(file) ?? '');

        const formData = new FormData();
        formData.append('image', file);
        setImg(file);
    };

    const removePreImg = () => {
        URL.revokeObjectURL(preImg!);
        setPreImg('');
    };

    const showCautionText = (error: FieldErrors<FieldValues>) => {
        return error && <CautionText aria-live="assertive">{error.message}</CautionText>;
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
                        <LabelWrap>
                            <Label htmlFor="product_name">상품명</Label>
                            {showCautionText(errors.product_name!)}
                        </LabelWrap>
                        <NameInputWrap>
                            <NameInput
                                id="product_name"
                                type="text"
                                width="95%"
                                {...register('product_name', {
                                    required: FORM_MSG.REQUIRED,
                                    maxLength: {
                                        value: 20,
                                        message: '최대 20자까지 입력 가능합니다.',
                                    },
                                })}
                            />
                            <NameLength>{productName?.length ?? 0}/20</NameLength>
                        </NameInputWrap>
                    </Field>
                    <Field>
                        <LabelWrap>
                            <Label htmlFor="price">판매가</Label>
                            {showCautionText(errors.price!)}
                        </LabelWrap>
                        <Input
                            id="price"
                            type="text"
                            inputMode="numeric"
                            width="166px"
                            {...register('price', {
                                required: FORM_MSG.REQUIRED,
                                pattern: {
                                    value: REGEX.ONLY_NUMBER,
                                    message: FORM_MSG.ONLY_NUMBER,
                                },
                            })}
                        />
                        <Unit title="원">원</Unit>
                    </Field>
                    <Field>
                        <Label>배송 방법</Label>
                        <RadioLabel
                            htmlFor="parcel"
                            onClick={() => setParcel(true)}
                            color={parcel ? 'var(--point-color)' : 'var(--white)'}
                            font={parcel ? 'var(--white)' : 'var(--dark-gray)'}
                            border-color={parcel ? 'var(--point-color)' : 'var(--base-gray)'}
                        >
                            <RadioInput
                                id="parcel"
                                value="PARCEL"
                                checked={parcel}
                                {...register('shipping_method', { required: true })}
                            />
                            택배, 소포, 등기
                        </RadioLabel>
                        <RadioLabel
                            htmlFor="delivery"
                            onClick={() => setParcel(false)}
                            color={!parcel ? 'var(--point-color)' : 'var(--white)'}
                            font={!parcel ? 'var(--white)' : 'var(--dark-gray)'}
                            border-color={parcel ? 'var(--point-color)' : 'var(--base-gray)'}
                        >
                            <RadioInput
                                id="delivery"
                                value="DELIVERY"
                                checked={!parcel}
                                {...register('shipping_method', { required: true })}
                            />
                            직접 배송(화물)
                        </RadioLabel>
                    </Field>
                    <Field>
                        <LabelWrap>
                            <Label htmlFor="shipping_fee">기본 배송비</Label>
                            {showCautionText(errors.shipping_fee!)}
                        </LabelWrap>
                        <Input
                            id="shipping_fee"
                            type="text"
                            inputMode="numeric"
                            width="166px"
                            {...register('shipping_fee', {
                                required: FORM_MSG.REQUIRED,
                                pattern: {
                                    value: REGEX.ONLY_NUMBER,
                                    message: FORM_MSG.ONLY_NUMBER,
                                },
                            })}
                        />
                        <Unit>원</Unit>
                    </Field>
                    <div>
                        <LabelWrap>
                            <Label htmlFor="stock">재고</Label>
                            {showCautionText(errors.stock!)}
                        </LabelWrap>
                        <Input
                            id="stock"
                            type="text"
                            inputMode="numeric"
                            width="166px"
                            {...register('stock', {
                                required: FORM_MSG.REQUIRED,
                                min: { value: 1, message: '재고는 1개 이상 입력해야 합니다.' },
                                pattern: {
                                    value: REGEX.ONLY_NUMBER,
                                    message: FORM_MSG.ONLY_NUMBER,
                                },
                            })}
                        />
                        <Unit>개</Unit>
                    </div>
                </InputContainer>
            </Wrap>
            <BtnContainer>
                <WhiteBtn type="button" onClick={() => goToRoute('/seller')}>
                    취소
                </WhiteBtn>
                <ColorBtn type="submit">저장하기</ColorBtn>
            </BtnContainer>
        </form>
    );
};
export default ProductInput;
