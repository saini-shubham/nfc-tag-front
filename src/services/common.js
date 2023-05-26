export function getAuthToken(){
    const token = sessionStorage.getItem('token')
    return token;
}

export function getUserType(){
    const userType = sessionStorage.getItem('userType')
    return userType;
}

