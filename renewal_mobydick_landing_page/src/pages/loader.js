export default `
body{
display: block;
}
#globalLoader{
    position: fixed;
    z-index: 1700;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url(/images/a.png);
    display: flex;
    left: 0,
    right: 0;
    width: 100%;
    height: 100%;
    margin-left: %;
    justify-content: center;
    align-items: center;
}
.loader {
    --clr: #3498db;
 /* color of spining  */
    width: 50px;
    height: 50px;
    position: relative;
}
/* 안쪽 원 애니메이션 */
.loader div:nth-child(1) {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    background-image: url(/images/Vector.png);
}
/* 애니메이션 시간 */
.loader div:nth-child(1) {
    z-index: 100;
    animation: spin 2s infinite;
}
@keyframes spin {
 0% {
  transform: scale(1);
 }
 100% {
    transform: scale(50);
 }
}`;