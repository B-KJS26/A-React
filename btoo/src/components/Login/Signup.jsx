import './login.css';
export default function Signup() {
    return (
        <div>
            <h1>회원가입</h1>
            <h2>학년</h2>
            <div>
                <input type="radio" name="grade" id='1grade'/><label for="1grade">1학년</label>
                <input type="radio" name="grade" id='2grade'/><label for="2grade">2학년</label>
                <input type="radio" name="grade" id='3grade'/><label for="3grade">3학년</label>
            </div>
            <h2>반</h2>
            <div>
                <input type="radio" name="class" id='classone' /><label for="classone">1반</label>
                <input type="radio" name="class" id='classtwo' /><label for="classtwo">2반</label>
                <input type="radio" name="class" id='classthird' /><label for="classthird">3반</label>
                <input type="radio" name="class" id='classfourth' /><label for="classfourth">4반</label>
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