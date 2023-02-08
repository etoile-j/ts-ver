import axios from 'axios';

const BASE_URL = 'https://openmarket.weniv.co.kr' as const;

// export const axiosBasic = axios.create({
//     baseURL: BASE_URL,
// });

// 둘 중에 하나만 이름 정해서 만들자!! 걍 엑시오스 인스턴스/?..ㅎ

export const axiosAuth = axios.create({
    baseURL: BASE_URL,
});

axiosAuth.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    if (token && config.headers) {
        config.headers['Authorization'] = `JWT ${token}`;
    }

    return config;
});


//테스트 통과!!!! 토큰 헤더 필요한 경우만 알아서 들어간다! 전처리로!! 굿~~
//토큰 부분은 좀 정리해야 하고
//요청때마다 header에 값을 넣어서 처리하는 것이 아닌 interceptors를 사용해서
// api 요청시 자동으로 해당 값이 들어가서 매 요청때마다 header에 값을 넣지 않아도 되고, 코드도 간결해지고 복잡성도 줄어든다는 장점이 있었다.
//아래 코드를 설정하면 header에 token이 필요한 api를 호출할 경우 자동으로 header에 값이 들어가게 된다.

//예시 함수
const handleGetProductList = async () => {
    try {
        const response = await axiosAuth.get('주소',{'바디있으면 바디'});
        console.log(response);
        return response.data;
    } catch (err) {
        console.error(err);
    }
};