function Hello({ color, name, isSpecial }) {
    return <div style={{ color }}>
        {isSpecial && <b>Wow</b>}
        {name}
        <h1>색, 이름, 확인</h1>
        <p>Hello, Today is Sunday</p>
        </div>
}
Hello.defaultProps = {
    name: '이름없음'
}
export default Hello;
