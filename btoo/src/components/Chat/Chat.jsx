export default function Chat() {
    let name;
    let chatlog;
    return(
        <div>
            <h1>Chat</h1>
            <input type="text" placeholder="텍스트를 입력해주세요."></input>
            <h1>{name}</h1>
            <p>{chatlog}</p>
        </div>
    )
}
