/*export const GoogleButton = () => {
    const handleLogin = () => {
        const CLIENT_ID = '924707972646-299oa203pbkhdc6rv65gpvkliqlbkhve.apps.googleusercontent.com'
        const REDIRECT_URL = 'http://localhost:3000/auth/google-redirect'
        const scope = 'email profile'
        const url = `https://accounts.google.com/o/oauth2/v2/auth?scope=${scope}&response_type=code&redirect_uri=${REDIRECT_URL}&client_id=${CLIENT_ID}&access_type=offline&prompt=consent`
        window.location.assign(url)

    }
    return (
        <div>
            <button onClick={handleLogin}>GoogleButton</button>

        </div>
    )
}*/

////////////////////////////////////////////////////////////////////////////

//ЭТА ВЕРСИЯ ДЛЯ ТЕСТА СТАЖИРОВКИ OLD


export const GoogleButton = () => {
    const handleLogin = () => {
        const CLIENT_ID = '761955523949-l08r71n31nu0892jpb2lltj7ult76qhq.apps.googleusercontent.com'
        const REDIRECT_URL = 'http://localhost:3000/oauth2/callback'
        const scope = 'email profile'
        const url = `https://accounts.google.com/o/oauth2/v2/auth?scope=${scope}&response_type=code&redirect_uri=${REDIRECT_URL}&client_id=${CLIENT_ID}&access_type=offline&prompt=consent`
        window.location.assign(url)

    }
    return (
        <div>
            <button onClick={handleLogin}>GoogleButton</button>

        </div>
    )
}

