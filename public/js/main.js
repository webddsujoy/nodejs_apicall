const search= document.getElementById("searchapi");
const apiitem= document.getElementById("form1");
const errordi= document.getElementById("errorsmg")
const datainhtml= document.getElementById("email")
const getinfo= async (e)=>{
    e.preventDefault();
    const apiitemvalu= apiitem.value;
    console.log(apiitemvalu)
    if(apiitemvalu===""){
        errordi.innerText="No search  you";
    }else{
        try {
            const url= `https://jsonplaceholder.typicode.com/${apiitemvalu}`;
            const resp= await fetch(url);
            const data= await resp.json()
            const arrodata= [data];
            datainhtml.innerHTML=arrodata[0][1].email

           console.log (arrodata[0][1].email)
        } 
        catch (error) {
            console.log(error);
        }
        

    }
    
}
search.addEventListener('click',  getinfo);
