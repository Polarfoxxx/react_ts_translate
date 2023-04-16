
import axios from "axios";
import { type } from "os";

const servicestypeLanguage = {
    typeLanguage
}
export default servicestypeLanguage

type typesLanguagefromAPI = {
    allLanguage: string 
}
type typesObjectLanguagefromAPI = {
    allLanguage : typesLanguagefromAPI[]
}


async function typeLanguage() {
    const options = {
        method: 'GET',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
        headers: {
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '0bc4872ef5mshb5500d0485b302fp1bef17jsnf315a81a8a63',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

