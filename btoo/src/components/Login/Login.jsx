import "./login.css";
export default function Login() {
    return(
        <div className="loginpg">
            <p className="logm">로그인</p>
            <div className="loginbox">
                <p id="loging">ID</p>
                <input type="text" className="logintext" />
            </div>
            <div className="passwordbox">
                <p id="passwording">PASSWORD</p>
                <input type="text" classname="passwordtext" />
            </div>
            <div className="letlog">
                <p id="letgo">Let's Go!</p>
            </div>
            <p id="singup">Singup</p>
        </div>
    );
}
