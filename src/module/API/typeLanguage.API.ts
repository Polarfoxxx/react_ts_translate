
import axios from "axios";
import { typesObjectLanguagefromAPI } from "./types";

const servicestypeLanguage = {
    typeLanguage
}
export default servicestypeLanguage



async function typeLanguage(): Promise<typesObjectLanguagefromAPI | undefined> {
    let allLanguageArray: typesObjectLanguagefromAPI | undefined = undefined

    const options = {
        method: 'GET',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
        headers: {
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '0bc4872ef5mshb5500d0485b302fp1bef17jsnf315a81a8a63',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        }
    };
    
   await axios.request(options)
    .then((response) => {allLanguageArray = response.data.data.languages})
    .catch((error) => {console.error(error)});

return(
    allLanguageArray
)
}

