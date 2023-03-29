export default `
body{
display: block;
}
#globalLoader{
    position: fixed;
    z-index: 1700;
    justify-content: center;
    align-items: center;
    animation: spin 1s infinite;
    margin-left: 36%;
    margin-top: 8%;
}
/* 안쪽 원 애니메이션 */
.loader div:nth-child(1) {
    width: 500px;
    height: 500px;
    background-image: url(/images/v.png);
    background-size: cover;
    animation: spin 1s infinite;
}
/* 애니메이션 시간 */
.loader div:nth-child(1) {
    z-index: 100;
    animation: spin 3s infinite;
}
@keyframes spin {
    0% {
    opacity: 100%:
    }
    100% {
        transform: scale(3);
        opacity: 100%;
    }
}
`
    ;