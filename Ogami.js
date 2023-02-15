function slidee() {
    document.getElementById("parent11").style.display="none";
    document.getElementById("parent22").style.display="block";
}

function slidee1() {
    document.getElementById("parent11").style.display="block";
    document.getElementById("parent22").style.display="none";
}

// var bttn = document.getElementById("sss");
// bttn.addEventListener("click",()=>{
//     document.getElementById("parent11").style.display="none";
//     document.getElementById("parent22").style.display="block";
// })




var url =" https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&language=en&search=type.slug:grocery%3Bstatus:publish";
fetch(url)
.then(result=>result.json())
.then(data=>{
    data.data.map((res)=>
    {
        console.log(data);
        var disc = eval(Math.ceil((res.price)-10/100));       
        const newHtml=`
        <div class="card">
       <img src=${res.image.thumbnail} />
        <div>${res.name}</div>
        <div>₹ ${disc}  <strike>${res.price}</strike></div>
        <div class="btnn"><button>Add to cart</button><button>+</button></div>
        </div>`

        const newDiv  = document.getElementById("divv")
        newDiv.innerHTML += newHtml
        console.log(res);
    })
})
