import React, { useState } from 'react';
import styled from "styled-components";
import { Link,useParams } from 'react-router-dom';
const Header = () => {
    const { regionId } = useParams();
    const [detail, setDetail] = useState(false);
    const isDetail = () => {
        if(regionId != undefined && detail == false){
            setDetail(current => !current);
        }
    }
    isDetail();
    return (
        <HeaderEl className="header">
            <Link to="/" className="logo">
                <h1>요근방</h1>
                <h2>랜드마크 근처 방 추천 서비스</h2>
            </Link>
        </HeaderEl>
    )
}




// styled-components 
const HeaderEl = styled.div`
    position: relative;
    height: 30%;
    background-color: #00baca;
    .logo {
    position:absolute;
    display:block;
    left: 10%;
    top:40%;
    color: #fff;
    text-shadow: 0px 0px 3px #003838;
        h1 {
            font-size: 3.5rem;
        }
        h2 {
            margin-top: 10px;
            font-size: 1rem;
        }
    }
    img {
        display: block;
        width:100%;
        height: 100%;
    }
`;


export default Header;