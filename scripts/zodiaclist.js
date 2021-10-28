import { useZodiac } from "./dataprovider.js";
import { Zodiacuniform } from "./zodiac.js";

export const ZodiacList = () => {
    const contentZodiac = document.querySelector("#zodiacsection")
    const Zodiac = useZodiac()

    let HTMLZodiacRep = ""
    for(const singleZodiac of Zodiac){
    HTMLZodiacRep += Zodiacuniform(singleZodiac)
}
contentZodiac.innerHTML += `
    <article class="zodiacsection">
        ${HTMLZodiacRep}
    </article>
`
}