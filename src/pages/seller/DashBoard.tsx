import { useState } from 'react';
import SellerCenterHeader from 'components/seller/SellerCenterHeader';
import ProductList from 'components/seller/ProductList';
import UploadIcon from '../../assets/icon-upload.svg';
import PreIcon from '../../assets/icon-previous.svg';
import PreOffIcon from '../../assets/icon-previous-off.svg';
import NextIcon from '../../assets/icon-next.svg';
import NextOffIcon from '../../assets/icon-next-off.svg';
import {
    Main,
    HeadingWrap,
    ProductUpload,
    IconUpload,
    Ol,
    ListBtn,
    OnListBtn,
    TableWrap,
    Table,
    Container,
    Title,
    Content,
    PageNum,
    Page,
    PreviousPage,
    NextPage,
} from './DashBoardStyle';

const DashBoard = () => {
    const [count, setCount] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    const pages = [];
    for (let i = 0; i < Math.ceil(count! / 15); i++) {
        pages.push(i + 1);
    }

    return (
        <>
            <SellerCenterHeader />
            <Main>
                <HeadingWrap>
                    <h2>대시보드</h2>
                    <ProductUpload
                        onClick={() =>
                            (window.location.href = '/seller/upload')
                        }
                    >
                        <IconUpload src={UploadIcon} />
                        상품 업로드
                    </ProductUpload>
                </HeadingWrap>
                <nav>
                    <Ol>
                        <li>
                            <OnListBtn>판매중인 상품({count})</OnListBtn>
                        </li>
                        <li>
                            <ListBtn>주문/배송</ListBtn>
                        </li>
                        <li>
                            <ListBtn>통계</ListBtn>
                        </li>
                        <li>
                            <ListBtn>스토어 설정</ListBtn>
                        </li>
                    </Ol>
                </nav>
                <TableWrap>
                    <Table>
                        <Title>
                            <Content width="939px">상품정보</Content>
                            <Content width="451px">판매가격</Content>
                            <Content width="205px">수정</Content>
                            <Content width="205px">삭제</Content>
                        </Title>
                        <Container>
                            <ProductList
                                count={count}
                                setCount={setCount}
                                currentPage={currentPage}
                            />
                        </Container>
                    </Table>
                    <PageNum>
                        <PreviousPage
                            disabled={currentPage <= 1}
                            onClick={() =>
                                setCurrentPage(
                                    (previousValue) => previousValue - 1,
                                )
                            }
                            style={{
                                backgroundImage:
                                    currentPage <= 1
                                        ? `url(${PreOffIcon})`
                                        : `url(${PreIcon})`,
                            }}
                            aria-label="이전 페이지로 이동"
                        />
                        {pages.map((page) => {
                            return (
                                <Page
                                    key="page"
                                    onClick={() => setCurrentPage(page)}
                                    style={{
                                        color:
                                            currentPage === page
                                                ? '#000000'
                                                : '#c4c4c4',
                                    }}
                                >
                                    {page}
                                </Page>
                            );
                        })}
                        <NextPage
                            disabled={currentPage >= Math.ceil(count! / 15)}
                            onClick={() =>
                                setCurrentPage(
                                    (previousValue) => previousValue + 1,
                                )
                            }
                            style={{
                                backgroundImage:
                                    currentPage >= Math.ceil(count! / 15)
                                        ? `url(${NextOffIcon})`
                                        : `url(${NextIcon})`,
                            }}
                            aria-label="다음 페이지로 이동"
                        />
                    </PageNum>
                </TableWrap>
            </Main>
        </>
    );
};
export default DashBoard;
