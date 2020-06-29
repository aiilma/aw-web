import React, {useEffect, useState} from 'react';
import Button from "@material-ui/core/Button";
import LS from "../../../../store/utils/LS";
import {UserSrv} from "../../../../store/services/UserSrv";

function LoginButton() {
    const [steamUrl, setSteamUrl] = useState(`#`);
    const userSrv = new UserSrv()

    // получение ссылки аутентификации через steam
    useEffect(() => {
        // ссылка имеется в локальном хранилище ?> сохранить её в стейт из локального хранилища
        if (!!localStorage.getItem(LS._STEAM_LINK)) {
            setSteamUrl(localStorage.getItem(LS._STEAM_LINK))
        } else {
            if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
                let url = process.env.REACT_APP_STEAM_LOGIN_URL
                setSteamUrl(url)
                localStorage.setItem(LS._STEAM_LINK, url)
            } else {
                userSrv.getSteamLink().then(url => {
                    setSteamUrl(url)
                    localStorage.setItem(LS._STEAM_LINK, url)
                })
            }
        }
    }, [setSteamUrl, userSrv]);

    return !!steamUrl && (
        <Button href={steamUrl} color="inherit">Login</Button>
    )
}


export default LoginButton
