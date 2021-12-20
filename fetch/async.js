async function find()
        {
            let response= fetch("https://www.boredapi.com/api/activity")
            .then((response)=>{
                console.log(response);
                return response.json()
            })
            .then((data)=>
            {
                console.log(data);
                document.getElementById("t1").innerText="accessibility:"+data.accessibility;
                document.getElementById("t2").innerText="activity:"+data.activity;
                document.getElementById("t3").innerText="key:"+data.key;
                document.getElementById("t4").innerText="participants:"+data.participants;
                document.getElementById("t5").innerText="price:"+data.price;
                document.getElementById("t6").innerText="type:"+data.type;
            })
            .catch((e)=>
            {
                console.log(e);
            }) 
            console.log("welcome")     
        }
        find()