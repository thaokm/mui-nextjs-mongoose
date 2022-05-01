// ■---- userSession.js
export const getUserSession = () => {
    let userSession
    if (typeof window !== 'undefined') {
        let username = localStorage.getItem('userId')
        let name = localStorage.getItem('name')
        let authority = localStorage.getItem('authority')
        userSession = username?{
            userId: username,
            name: name,
            authority: authority
        }:null
    }
    return userSession
}

export const setUserSession = (userId, name, authority) => {
    let status = false
    if (typeof window !== 'undefined') {
        localStorage.setItem('userId', userId)
        localStorage.setItem('name', name)
        localStorage.setItem('authority', authority)
        status = true
    }
    return status
}