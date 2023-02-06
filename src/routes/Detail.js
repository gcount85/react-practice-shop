import { useParams } from 'react-router-dom';
import styled from 'styled-components';

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
  console.log(id);
  let 찾은상품 = props.dataList.find((x) => {
    return x.id == id;
  });

  return (
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
      <div>
        <Box>
          <YellowBtn>버튼임</YellowBtn>
        </Box>
      </div>
    </div>
  );
}

export default Detail;
