fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(cdata => {
        let data=cdata.slice(0,3);
        let ass="";
        data.map((values)=>{
            ass+=`<div class="box">
            <h3>${values.title}</h3>
            <p>${values.body}</p>
            <button>Read More</button>
        </div>`
        })
        document.getElementById("frow").innerHTML=ass,
        document.getElementById("frow2").innerHTML=ass,
        document.getElementById("frow3").innerHTML=ass
    })