
let URL ="https://contest-hive.vercel.app/api/all";

let fun =async()=>{
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data)
    let a =data.data.atcoder
    let inner=""
    let cardcontainer1 = document.getElementById("card-container1"); 
    for(let i in a){
      console.log(a[i])
      let car
     inner +=`
         <div class="card" style="width: 18rem;">
        <img src="https://imgs.search.brave.com/Wcv_-kUOFLHweyGW8ODFtVJ-JoGgodZqLaAmb06fBSE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvaGFuZC1jb2Rp/bmctY29uY2VwdC1p/bGx1c3RyYXRpb25f/MTE0MzYwLTgxOTMu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA" class="card-img-top" alt="..."> 
            <div class="card-body">
             <h5 class="card-title">${a[i].title}</h5>
               <p class="card-text"><a href="${a[i].url}">Visit here</a></p>
               <p> Stert at:${a[i].startTime}</p>
               <p> End at:${a[i].startTime}</p>
                <a href="#" class="btn btn-primary" >Go somewhere</a>
  </div>
</div>
      `
    }
cardcontainer1.innerHTML=inner
    
}
fun()