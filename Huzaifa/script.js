fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(cdata => {
        let data=cdata(0,9);
        let ass="";
        data.map((values)=>{
            ass+=`<div class="data2">
            <div class="data3">
                <h1>${values.title}</h1>
                <p>${values.body}</p>
                <h3>Author: Leanne Graham</h3>
                <button>Read More</button>
            </div>
        </div>`
        })
        document.querySelector("#ch1").innerHTML= ass
    })

