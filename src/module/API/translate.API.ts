import axios from "axios";


const servicesTranslateAPI = {
    translateAPI
}

export default servicesTranslateAPI

async function translateAPI(): Promise<any> {

    const encodedParams = new URLSearchParams();
    encodedParams.append("q", "Hello, world!");
    encodedParams.append("target", "es");
    encodedParams.append("source", "en");

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

   await axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

}