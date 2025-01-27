import {useLocation} from "react-router-dom";
import axios from "axios";
import {useState} from "react";

export const Oauth2 = () => {
    const [res, setRes] = useState('nothing')

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    console.log(code)

    if (code) {
        // Отправка кода на бэкенд для обмена на токен доступа
        axios.post('http://localhost:3001', {code})
            .then(response => {
                console.log('Access token:', response.data.accessToken);
                // Здесь вы можете сохранить токен доступа в состоянии или localStorage
                setRes(response.data.accessToken)
            })
            .catch(error => {
                console.error('Error exchanging code for access token:', error);
                setRes(error)
            });
    }


    return (
        <div>
            <div>
                code:{code}

            </div>
            <div>

                answer with back:{res}
            </div>
        </div>
    )
}