import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate('/')
    };

    return (
        <div> 
            <p> sign in with ggoddle</p>
            <button onClick={signInWithGoogle}> sing ni with googl</button>
        </div>
    );
};