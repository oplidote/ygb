import React from 'react';
import styled from "styled-components";
const Distance10min = () => {
    return (
        <DistanceLayout>
            <Header>도보 <span>10</span> 분 이내</Header>
            <ListWrap>
                <Card>
                    <div className="info">
                        <img src="#" alt="숙소 이미지" />
                        <div className="text">
                            <strong>업체명</strong>
                            <span className="locate">상세 위치 보기</span>
                            <span className="price"><em>???,000</em> 원 ~</span>
                        </div>
                    </div>
                    <button className="move">예약하러 가기</button>
                </Card>
            </ListWrap>
        </DistanceLayout>
    )
}

// styled-components 
const DistanceLayout = styled.div`
    position:relative;
    display: block;
    background-color:#fff;
`;
const Header = styled.div`
    margin: 5% 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: #000;
    span {
        font-size: 1.7rem;
        color: #A6DBE1;
    }
`;
const ListWrap = styled.div`
`;
const Card = styled.div`
    position:relative;
    padding: 10% 0;
    border-bottom: 1px solid #999;
    .info {
        display: flex;
        margin-bottom: 10%;
        img {
            margin-right:10%;
            width: 130px;
            border-radius: 5px;
            background-color: #ccc;
            height: 130px;
        }
        .text{
            flex-grow: 1;
            font-weight: bold;
            strong {
                margin-bottom: 20%;
                font-size: 1.5rem;
                display:block;
            }
            .locate {
                display:block;
                margin-bottom: 10%;
                font-size: .8rem;
                color: #ccc;
            }
            .price {
                display:block;
                font-size: 1.3rem;
                text-align: right;
            }
        }
        
    }
    .move {
        width:100%;
        height:50px;
        border: 0;
        border-radius: 5px;
        background-color: #A6DBE1;
        color: #fff;
        font-weight: bold;
        font-size: 1.5rem;
    }
`;


export default Distance10min;