import React, { useEffect, useRef, useState } from 'react'
import styled from "styled-components";

const LayoutBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;

`;
const ViewWindow = styled.div`
  width: 50vw;
  height: 124px;
  margin-bottom: -5%;
  /* border: 2px solid red; */
  /* 이거 넣어주면 View Window 상자 안에만 보임..  */
  overflow: hidden;
`;
const Elements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: ${props => (props.boolean ? '' : 'transform 0.01s ease-in')};
  transform: ${props => 'translateY(-' + props.count * 120 + 'px)'};


`;
const Element = styled.div`
  width: 40%;
  height: 10%;
  margin: 10px 0;
  font-size: 44px;
  font-weight: 500;
  line-height: 100px;
  color: orange;
  vertical-align: middle;
  text-align: center;
`;
const ElementH1 = styled.div`
    margin-top: 1%;
    font-size: 40px;
    font-weight: 500;
    color: white;

`;
const ElementH2 = styled.div`
    margin-top: 2%;
    font-size: 40px;
    font-weight: 500;
    margin-bottom: -3%;
    color: white;
`;





export default function CS25() {
    const elementHeight = 120;
    const elementLength = 7;
    const [count, setCount] = useState(0);
    const boolean = useRef(false)

    useEffect(() => {

        // setInterval 삽입하여 2.5초마다 setCount 실행
            const timer = setInterval(() => {
        if (count < elementLength - 1) {
            setCount(prev => prev + 1);
          } else {
            boolean.current = true;
            setCount(0);
          }
        },
  // count가 0 or Not? 에 따라 interval time이 조절된다.
        boolean.count === 0 ? 0 : 2500
      );

    return () => {
        clearInterval(timer);
      };
    }, [count]);

  return (
    <LayoutBox>
           <ElementH1>
           Introducing our pre-project.
            </ElementH1> 
            <ElementH2>
            One of members is
            </ElementH2>
    <ViewWindow>

      <Elements count={count} boolean={boolean.current}>
        <Element name="1" color="F4BFBF">
          김정민
        </Element>
        <Element name="2" color="FFD9C0">
          김효준
        </Element>
        <Element name="3" color="FAF0D7">
          허준오
        </Element>
        <Element name="4" color="8CC0DE">
          김민성
        </Element>
        <Element name="5" color="F4BFBF">
          안지수
        </Element>
        <Element name="6" color="F4BFBF">
          윤세연
        </Element>
        <Element name="7" color="F4BFBF">
          편범준
        </Element>
      </Elements>
    </ViewWindow>
    <ElementH1>in CS 25</ElementH1>
  </LayoutBox>
  )
}
