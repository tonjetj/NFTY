import { login } from "../../api/auth/login";
import { register } from "../../api/auth/register";

export async function onAuth(event: any){
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if(event.submitter.dataset.auth === "login"){
        await login(email, password);
    } else {
        await register(name, email, password);
        await login(email, password);
    }
}