import { appendingData4 } from "./scripts/appending_third_rrb.js";

import { navbar } from "./components/navbar.js";
let navbar_div_rrb =  document.getElementById("navbar_rrb");
navbar_div_rrb.innerHTML = navbar();

 import {footer} from "./components/footer.js"
     let footer_div=document.getElementById("footer_rj");
    footer_div.innerHTML=footer(); 

const getIndiaNews = async () => {
    let data_div = document.getElementById("appending_news_rrb");
    try{
        let res_rrb = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=1fcaf420d38f427dade012480ca67b84`);
        let data_rrb = await res_rrb.json();
        let actual_data_rrb = data_rrb.articles;
        appendingData4(actual_data_rrb,data_div);
        console.log(data_rrb.articles);
    }catch(e){
        console.log(e);
    }
}
getIndiaNews();

const homePage_logo = document.getElementById('homePage_logo');
homePage_logo.addEventListener("click",homepage)
homePage_logo.style.cursor="pointer";

function homepage (){
window.location.href="index.html"
}
