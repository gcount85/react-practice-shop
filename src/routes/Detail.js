import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

let Box = styled.div`
  padding: 20px;
  color: grey;
`;
let YellowBtn = styled.button`
  background: yellow;
  color: black;
  padding: 10px;
`;

function Detail(props) {
  let { id } = useParams();
  console.log(`id는 ${id}`);
  let 찾은상품 = props.dataList.find((x) => {
    return x.id == id;
  });
  let [count, setCount] = useState(0);
  let [btnBool, setBtnBool] = useState(0);

  useEffect(() => {
    let alarm = setTimeout(() => {
      setBtnBool(1);
    }, 3000);
    /* return 안의 코드(clean-up function)가 먼저 실행되고 나머지 useEffect의 코드가 실행 됨 */
    return () => {
      clearTimeout(alarm);
      // console.log('안녕');
    };
  }, [count]);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        재렌더링 버튼
      </button>
      {btnBool === 0 ? (
        <Box>
          <YellowBtn>버튼임</YellowBtn>
        </Box>
      ) : null}

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="/logo512.png" width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
        <div className="yellow-btn"></div>
      </div>
    </>
  );
}

export default Detail;
