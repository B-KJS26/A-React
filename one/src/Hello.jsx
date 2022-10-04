function Hello({ color, name, isSpecial }) {
    return <div style={{ color }}>
        {isSpecial && <b>Wow</b>}
        {name}</div>
}
Hello.defaultProps = {
    name: '이름없음'
}
export default Hello;