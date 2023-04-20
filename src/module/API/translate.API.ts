import axios from "axios";
import { typeFineTranslate } from "./types";

const servicesTranslateAPI = {
    translateAPI
}

export default servicesTranslateAPI

async function translateAPI(reqText: string | null, resLang: string | null, reqLang: string | null): Promise<typeFineTranslate> {
    let finTranslate: typeFineTranslate = { translatedText: "" }

    const encodedParams = new URLSearchParams();
    encodedParams.append("q", `${reqText}`);
    encodedParams.append("target", `${resLang}`);
    encodedParams.append("source", `${reqLang}`);

    const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '0bc4872ef5mshb5500d0485b302fp1bef17jsnf315a81a8a63',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: encodedParams
    };

    await axios.request(options)
        .then(response => finTranslate = response.data.data.translations[0])
        .catch(error => console.error(error));
    return (
        finTranslate
    )
}