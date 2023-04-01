export default `
body{
display: block;
}
#jebal {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: white;
}
.loging {
    position: fixed;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 38%;
    width: 10%;
    height: 12%;
    animation: fade-in 3s;
}
#globalLoader{
    position: fixed;
    z-index: 1700;
    justify-content: center;
    align-items: center;
    animation: spin 3s;
    margin-left: 36%;
    margin-top: 8%;
}
/* 안쪽 원 애니메이션 */
.loader div:nth-child(1) {
    width: 500px;
    height: 500px;
    background-image: url(/images/v.png);
    background-size: cover;
    animation: spin 5s;
}
/* 애니메이션 시간 */
.loader div:nth-child(1) {
    opacity: 0%;
    z-index: 100;
    animation: spin 5s;
}
@keyframes spin {
    0% {
        opacity: 0%:
    }
    5% {
        opacity: 50%;
    }
    10% {
        transform: scale(1);
        opacity: 100%;
    }
    100% {
        transform: scale(3);
        opacity: 10%;
    }
}
@keyframes fade-in {
    0% {
    opacity: 100%;
    }
    100% {
        opacity: 0%;
    }
}
`
    ;