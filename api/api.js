


//phone information
async function phone()

        {
            let response= await fetch("https://api-mobilespecs.azharimm.site/v2/brands")
            .then((response)=>{
                return response.json()
            })
            .then((data)=>{
            
                //phone1
                document.querySelector("#id1").innerText="id:"+data.data[0].brand_id;
                document.querySelector("#name1").innerText="name:"+data.data[0].brand_name;
                document.querySelector("#count1").innerText="count:"+data.data[0].device_count;
               /* let phone1 =document.getElementById("acer");
                let acer=document.createElement("img");
                acer.setAttribute("src","acer.jpg");
                acer.setAttribute("class","image");
                phone1.append(acer);*/
              //phone2
               document.querySelector("#id2").innerText="id:"+data.data[5].brand_id;
                document.querySelector("#name2").innerText="name:"+data.data[5].brand_name;
                document.querySelector("#count2").innerText="data:"+data.data[5].device_count;
               /* let phone2 =document.getElementById("apple");
                let apple=document.createElement("img");
                apple.setAttribute("src","apple.jpg");
                apple.setAttribute("class","image");
                phone2.append(apple);*/
               //phone3
                document.querySelector("#id3").innerText="id:"+data.data[38].brand_id;
                document.querySelector("#name3").innerText="name:"+data.data[38].brand_name;
                document.querySelector("#count3").innerText="count:"+data.data[38].device_count;
               /* let phone3 =document.getElementById("huawie");
                let huawie=document.createElement("img");
                huawie.setAttribute("src","huawie.jpg");
                huawie.setAttribute("class","image");
                phone3.append(huawie);*/
                //phone4
                    document.querySelector("#id4").innerText="id:"+data.data[35].brand_id;
                    document.querySelector("#name4").innerText="name:"+data.data[35].brand_name;
                    document.querySelector("#count4").innerText="count:"+data.data[35].device_count;
                   /* let phone4 =document.getElementById("honor");
                    let honor=document.createElement("img");
                    honor.setAttribute("src","honor.jpg");
                    honor.setAttribute("class","image");
                    phone4.append(honor);  */
                
                //phone5
                
                    document.querySelector("#id5").innerText="id:"+data.data[69].brand_id;
                    document.querySelector("#name5").innerText="name:"+data.data[69].brand_name;
                    document.querySelector("#count5").innerText="count:"+data.data[69].device_count;
                 /*   let phone5 =document.getElementById("oneplus");
                    let oneplus=document.createElement("img");
                    oneplus.setAttribute("src","oneplu3.jpg");
                    oneplus.setAttribute("class","image");
                    phone5.append(oneplus); */ 

            })
          
            .catch((e)=>
            {
                console.log(e);
            }) }  
        
        phone()
    
        //corona information
        async function corona()
        {
            let response= await fetch("https://disease.sh/v3/covid-19/all")
                   .then((response)=>{
                return response.json();
            })
            .then((data)=>
            {  
                 
                document.querySelector("#active").innerText="active:"+data.active
                document.querySelector("#activePerOneMillion").innerText="activePerOneMillion:"+data.activePerOneMillion
                document.querySelector("#affectedCountries").innerText="affectedCountries:"+data.affectedCountries
                document.querySelector("#cases").innerText="cases:"+data.cases
                document.querySelector("#casesPerOneMillion").innerText="casesPerOneMillion:"+data.casesPerOneMillion
                document.querySelector("#deaths").innerText="deaths:"+data.deaths
                document.querySelector("#deathsPerOneMillion").innerText="deathsPerOneMillion:"+data.deathsPerOneMillion
                document.querySelector("#population").innerText="population:"+data.population
                document.querySelector("#recovered").innerText="recovered"+data.recovered
                document.querySelector("#recoveredPerOneMillion").innerText="recoveredPerOneMillion:"+data.recoveredPerOneMillion
                document.querySelector("#tests").innerText="tests:"+data.tests
                document.querySelector("#todayCases").innerText="todayCases:"+data.todayCases
                document.querySelector("#todayDeaths").innerText="todayDeaths:"+data.todayDeaths
                document.querySelector("#todayRecovered").innerText="todayRecoverer:"+data.todayRecovered
                document.querySelector("#updated").innerText="updated:"+data.updated;   
            })
            .catch((e)=>
            {
                console.log(e);
            }) 
          
        }
        corona()

/*Promise.all([
    fetch("https://api-thirukkural.vercel.app/api?num=1"),
    fetch("https://api-thirukkural.vercel.app/api?num=2"),
    fetch("https://api-thirukkural.vercel.app/api?num=3"),
    fecth("https://api-thirukkural.vercel.app/api?num=4"),
    fetch("https://api-thirukkural.vercel.app/api?num=5")
]).then(([data1,data2,data3,data4,data5])=>
{
    return data1.json(),data2.json(),data3.json(),data4.json(),data5.json();
   
    
}).then((r1,r2,r3,r4,r5)=>
{
console.log(r1,r2,r3,r4,r5);
document.querySelector("#quotes").innerText=data1.tam_exp;
})
.catch((e)=>{
console.log(e);
})*/



        async function find()
        {
            let response= await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
            .then((response)=>{
                return response.json();
            })
            .then((data)=>
            {
                console.log(data);
                document.querySelector("#d1").innerText="word:"+data[0].word
                document.querySelector("#d2").innerText="phonetic:"+data[0].phonetic
                document.querySelector("#d3").innerText="definition:"+ data[0].meanings[0].definitions[0].definition
                document.querySelector("#d4").innerText="example:"+data[0].meanings[0].definitions[0].example
                document.querySelector("#d5").innerText= "parts of speech:"+data[0].meanings[1].partOfSpeech
                document.querySelector("#d6").innerText="definition:"+data[0].meanings[1].definitions[0].definition
                document.querySelector("#d7").innerText= "example:"+data[0].meanings[1].definitions[0].example
                document.querySelector("#d8").innerText="parts of speech:"+data[0].meanings[2].partOfSpeech
                document.querySelector("#d9").innerText="definition:"+data[0].meanings[2].definitions[0].definition
                document.querySelector("#d10").innerText="example:"+data[0].meanings[2].definitions[0].example
                
               
            }) 
            .catch((e)=>
            {
                console.log(e);
            })     
        }
        find()



    