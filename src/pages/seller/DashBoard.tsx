import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ITEMS_PER_PAGE } from 'constants/index';
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
    PageButton,
} from './DashBoardStyle';

const NAV_LIST = [
    { id: 1, title: '주문/배송' },
    { id: 2, title: '통계' },
    { id: 3, title: '스토어 설정' },
];

const DashBoard = () => {
    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPage = Math.ceil(totalCount! / ITEMS_PER_PAGE);

    return (
        <>
            <SellerCenterHeader />
            <Main>
                <HeadingWrap>
                    <h2>대시보드</h2>
                    <Link to="/seller/upload">
                        <ProductUpload>
                            <IconUpload src={UploadIcon} />
                            상품 업로드
                        </ProductUpload>
                    </Link>
                </HeadingWrap>
                <nav>
                    <Ol>
                        <li>
                            <OnListBtn>판매중인 상품 ({totalCount})</OnListBtn>
                        </li>
                        {NAV_LIST.map((info) => {
                            return (
                                <li key={info.id}>
                                    <ListBtn>{info.title}</ListBtn>
                                </li>
                            );
                        })}
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
                                totalCount={totalCount}
                                setTotalCount={setTotalCount}
                                currentPage={currentPage}
                            />
                        </Container>
                    </Table>
                    <PageNum>
                        <PageButton
                            disabled={currentPage <= 1}
                            onClick={() => setCurrentPage((preValue) => preValue - 1)}
                            style={{
                                backgroundImage:
                                    currentPage <= 1
                                        ? `url(${PreOffIcon})`
                                        : `url(${PreIcon})`,
                            }}
                            aria-label="이전 페이지로 이동"
                        />
                        {Array.from({ length: totalPage }, (_, index) => index + 1).map(
                            (page) => {
                                return (
                                    <Page
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        style={{
                                            color:
                                                currentPage === page ? '#000000' : '#c4c4c4',
                                        }}
                                    >
                                        {page}
                                    </Page>
                                );
                            },
                        )}
                        <PageButton
                            disabled={currentPage >= totalPage}
                            onClick={() => setCurrentPage((preValue) => preValue + 1)}
                            style={{
                                backgroundImage:
                                    currentPage >= totalPage
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
