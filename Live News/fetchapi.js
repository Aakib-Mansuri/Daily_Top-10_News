let apikey = 'aaf0f6a2a5edb24769ec0e61107b87b8';
let url = 'https://gnews.io/api/v4//search?q=example&token=' + apikey + '&lang=en&country=in&max=50';

//old method;
// http.open('GET',`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`,true);

// http.onload = function ()
// {
//     if(this.status == 200)
//     {
//        let fetchobj = JSON.parse(this.responseText);
//        let articles = fetchobj['articles'];
//        let news = '';
//        Array.from(articles).forEach(element => {               
//         news += `<div class="col-sm-6 mb-3">
//                     <div class="card">
//                         <img src="${element['urlToImage']}" class="card-img-top">
//                         <div class="card-body">
//                         <h5 class="card-title">${element['title']}</h5>
//                         <p class="card-text">${element['description']}</p>
//                         <a href="${element['url']}" class="btn btn-primary" target='_blank'>Read More</a>
//                         </div>
//                     </div>
//                 </div>`;
//        });
//        document.getElementById('card-content').innerHTML = news;               
//     }

//     else
//     {
    //        alert('Technical error please reload the page');
    //     }
    // }
    
    // http.send();

 //new method   
 fetch(url).then(response => response.json()).
 then(fetchobj => {
    let articles = fetchobj['articles'];
    let news = '';
    Array.from(articles).forEach(element => {               
     news += `<div class="col-sm-7 col-md-6 mb-3">
                 <div class="card">
                     <img src="${element['image']}" class="card-img-top">
                     <div class="card-body">
                     <h5 class="card-title">${element['title']}</h5>
                     <p class="card-text">${element['description']}</p>
                     <a href="${element['url']}" class="btn btn-primary" target='_blank'>Read More</a>
                     </div>
                 </div>
             </div>`;
    });
    document.getElementById('card-content').innerHTML = news;               
 }).catch(()=> alert('Technical error please reload the page'));

