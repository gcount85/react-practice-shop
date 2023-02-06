import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import productData from './data.js';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';

function App() {
  let [dataList, setDataList] = useState(productData);
  let navigate = useNavigate();
  let [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log(inputValue);
    if (isNaN(inputValue)) {
      alert('그러지마세요');
    }
  }, [inputValue]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ShopNavbar navigate={navigate}></ShopNavbar>
              <div>
                <input
                  placeholder="숫자만 입력하세요"
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                />
              </div>
              <div className="container">
                <div className="row">
                  {dataList.map((data, i) => {
                    return <DataCard data={data} key={data.title}></DataCard>;
                  })}
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/detail/:id"
          element={
            <>
              <ShopNavbar navigate={navigate}></ShopNavbar>
              <p>상세페이지임</p>
              <Detail dataList={dataList}></Detail>
            </>
          }
        />

        <Route
          path="/event"
          element={
            <>
              <ShopNavbar navigate={navigate}></ShopNavbar>
              <EventPage></EventPage>
            </>
          }
        >
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>

        <Route
          path="/about"
          element={
            <>
              <ShopNavbar navigate={navigate}></ShopNavbar>
              <p>어바웃 페이지</p>
            </>
          }
        >
          <Route path="member" element={<div>멤버들</div>} />
          <Route path="location" element={<div>회사위치</div>} />
        </Route>

        <Route path="*" element={<div>없는페이지임</div>} />
      </Routes>
    </>
  );
}

function EventPage() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function ShopNavbar(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">다사라 쇼핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 링크 내신 navigate 이용 */}
      <Button
        onClick={() => {
          props.navigate('/');
        }}
      >
        홈으로 이동
      </Button>
      <Button
        onClick={() => {
          props.navigate('/detail');
        }}
      >
        상세 페이지로 이동
      </Button>
      <Button
        onClick={() => {
          props.navigate('/about');
        }}
      >
        어바웃 페이지로 이동
      </Button>
      <Button
        onClick={() => {
          props.navigate('/event/one');
        }}
      >
        이벤트1 페이지로 이동
      </Button>
      <Button
        onClick={() => {
          props.navigate('/event/two');
        }}
      >
        이벤트2 페이지로 이동
      </Button>
    </>
  );
}

function DataCard(props) {
  return (
    <div className="col-md-4" key={props.data.key}>
      <img src="logo512.png" width="80%" alt={props.data.title} />
      <h4>{props.data.title}</h4>
      <p>{props.data.content}</p>
    </div>
  );
}

export default App;
