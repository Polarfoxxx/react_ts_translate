
import axios from "axios";
import { typesObjectLanguagefromAPI } from "./types";
import { fakeDataAllLang } from "../../allLanguage/language";

const servicestypeLanguage = {
    typeLanguage
}
export default servicestypeLanguage



async function typeLanguage(): Promise<typesObjectLanguagefromAPI | undefined> {
    let allLanguageArray: typesObjectLanguagefromAPI | undefined = undefined

 /*    const options = {
        method: 'GET',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
        params: {target: 'sk'},
        headers: {
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '0bc4872ef5mshb5500d0485b302fp1bef17jsnf315a81a8a63',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        }
    };
    
   await axios.request(options)

    .then((response) => {allLanguageArray = response.data.data.name})
    .catch((error) => {console.error(error)}); */
    allLanguageArray = fakeDataAllLang.data.languages

    return(
        allLanguageArray
    )
}



