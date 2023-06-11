//import {redirect, useNavigate} from 'react-router-dom'
//const navigate = useNavigate()
export function getAuthToken(){
    const token = sessionStorage.getItem('token')
    return token;
}

export function getUserType(){
    const userType = sessionStorage.getItem('userType')
    return userType;
}
export function getUserId(){
    const userType = sessionStorage.getItem('userId')
    return userType;
}




// export function logout(){
//     sessionStorage.clear();
//     return redirect('/')
// }
