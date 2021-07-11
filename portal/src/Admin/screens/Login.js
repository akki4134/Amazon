import './Login.css'

import { useHistory } from "react-router-dom";


const Login = () => {

    let history = useHistory();

    return (
        <div class="wrapper fadeInDown">
            <div id="formContent">

                <form>
                    <input type="text" id="login" class="fadeIn second" placeholder="login" />
                    <input type="password" id="password" class="fadeIn third" placeholder="password" />
                    <input type="submit" onClick={() => {history.push('/adminHome')}} class="fadeIn fourth" value="Log In" />            
                </form>

                <div id="formFooter">
                    <div class="underlineHover" >Forgot Password?</div>
                </div>
            </div>
        </div>
    )
}

export default Login
