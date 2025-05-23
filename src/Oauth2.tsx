import {useLocation} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

/*export const Oauth2 = () => {
    const [res, setRes] = useState('nothing')

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const code = params.get('code');


    useEffect(() => {
        if (code) {
            // Отправка кода на бэкенд для обмена на токен доступа
            axios.post('http://localhost:3001', {code})
                .then(response => {
                    // Здесь вы можете сохранить токен доступа в состоянии или localStorage
                    setRes(response.data.accessToken);
                })
                .catch(error => {
                    setRes(error.message);
                });
        }
    }, [code])


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
}*/


////////////////////////////////////////

//ЭТА ВЕРСИЯ ДЛЯ ТЕСТА СТАЖИРОВКИ OLD

export const Oauth2 = () => {
    const [res, setRes] = useState('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const code = params.get('code');


    useEffect(() => {
        if (code) {
            console.log(code)
            // Отправка кода на бэкенд для обмена на токен доступа
            //axios.post('http://localhost:3010/api/v1/google', {code})
            //axios.post('http://localhost:3001', {code})
            axios.post('http://localhost:3010/api/v1/auth/google', {code})
                .then(response => {
                    console.log('response', response.data)
                    // Здесь вы можете сохранить токен доступа в состоянии или localStorage
                    setRes(response.data.accessToken);
                })
                .catch(error => {
                    setRes(error.message);
                });
        }
    }, [code])


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
