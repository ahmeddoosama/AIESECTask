import styled from 'styled-components';

export const HeaderSection = styled.header`
background-image: url(https://cdn-expa.aiesec.org/assets/images/aiesec_org/search-cover.jpg);
height: 40vh;
width: 100%;
background-size: cover;
background-repeat: no-repeat;
background-position: top;

.navbar {
    .aiesec-logo {
        width: 180px;
        line-height: 60px;
    }
}

.navbar-nav {
    width: 100%;
    justify-content: flex-end;
}

.nav-link {
    margin-right: 30px;
    color: #FFF !important;
    padding: 4px 1rem ;
}

.btn-nav-link {
    background-color: #037ef3;
    padding: 3px;
    margin-top: 5px;
}

.border-right-white {
    border-right: 2px solid #fff;
}
`;


export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    position: relative;
`;

export const CoverText = styled.div`
    position: absolute;
    top: 35%;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 52px;
    color: #fff;
`;