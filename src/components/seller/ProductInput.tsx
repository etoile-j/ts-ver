import { useState } from 'react';
import styled from 'styled-components';

const Temp = styled.div`
    background-color: lightgray;
    width: 454px;
    height: 454px;
`;

interface styledCompo {
    width: string;
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
const InputBtn = styled(Input)`
    border-radius: 5px;
    margin-right: 10px;
    color: #767676;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
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

const BtnContainer = styled.div`
    margin-top: 50px;
    text-align: right;
`;

const ColorBtn = styled.button.attrs({
    type: 'button',
})`
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

    return (
        <>
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
                                // {...register('name', {
                                //     required: '필수정보 입니다.',
                                // })}
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
                            // {...register('name', {
                            //     required: '필수정보 입니다.',
                            // })}
                        />
                        <Unit>원</Unit>
                    </Field>
                    <Field>
                        <Label htmlFor="">배송방법</Label>
                        <InputBtn
                            id=""
                            type="button"
                            value="택배, 소포, 등기"
                            width="220px"
                        />
                        <InputBtn
                            id=""
                            type="button"
                            value="직접배송(화물배달)"
                            width="220px"
                        />
                    </Field>
                    <Field>
                        <Label htmlFor="shippingFee">기본 배송비</Label>
                        <Input
                            id="shippingFee"
                            type="text"
                            width="166px"
                            // {...register('name', {
                            //     required: '필수정보 입니다.',
                            // })}
                        />
                        <Unit>원</Unit>
                    </Field>
                    <div>
                        <Label htmlFor="stock">재고</Label>
                        <Input
                            id="stock"
                            type="number"
                            width="166px"
                            // {...register('name', {
                            //     required: '필수정보 입니다.',
                            // })}
                        />
                        <Unit>개</Unit>
                    </div>
                </InputContainer>
            </Wrap>
            <BtnContainer>
                <WhiteBtn>취소</WhiteBtn>
                <ColorBtn>저장하기</ColorBtn>
            </BtnContainer>
        </>
    );
};
export default ProductInput;
