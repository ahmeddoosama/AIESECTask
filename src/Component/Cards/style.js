import styled from 'styled-components';

export const CardSection = styled.section`
    font-size: 16px;
    margin: 40px auto;
    a {
        color: #555;
        &:hover {
            text-decoration: none;
        }
    }
    .card {
        max-width: 90% !important;
        margin-bottom: 25px;
    }
    .card-img {
        width: 164px;
        height: 100%;
    }

    .card-body {
        text-align: start;
    }

    .dots {
        width: 3px;
        height: 3px;
        display: inline-block;
        border-radius: 50%;
        border: 1px solid;
        background-color: #9b9b9b;
        vertical-align: middle;
    }
`;

export const TileDesc = styled.div`
    color: #4a4a4a;
    font-size: 14px;
    opacity: .75;
`;

export const Span = styled.span`
    margin-right: 10px;
`;

export const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 35px;
    .company-logo {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 5px;
    }
    .com-name {
        display: inline;
    }
`;