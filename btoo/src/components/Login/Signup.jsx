export default function Signup() {
    return (
        <div>
            <h1>회원가입</h1>
            <h2>학년</h2>
            <div>
                <input type="radio" name="grade">1학년</input>
                <input type="radio" name="grade">2학년</input>
                <input type="radio" name="grade">3학년</input>
            </div>
            <h2>반</h2>
            <div>
                <input type="radio" name="class">1반</input>
                <input type="radio" name="class">2반</input>
                <input type="radio" name="class">3반</input>
                <input type="radio" name="class">4반</input>
            </div>
            <h2>닉네임</h2>
            <input type="text" placeholder="닉네임을 입력해주세요"></input>
            <h2>아이디, 비밀번호</h2>
            <input type="text" placeholder="아이디를 입력해주세요"></input>
            <input type="text" placeholder="비밀번호 입력해주세요"></input>
            <input type="text" placeholder="비밀번호 확인"></input>
            <button><text>가입하기</text></button>
        </div>
    );
}