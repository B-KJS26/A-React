import { Navigate } from "react-router-dom"
import './Header.css';
export default function Header() {
    function Logins() {
        //페이지 이동 코드 추가할 예정
    }
    return(
        <div>
            <h2 className="title">민준민준챗</h2>
            <text onClick={Logins} className="loginso">Log in / Sign up</text>
        </div>
    )
}