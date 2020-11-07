const searchFrom = document.querySelector('.search');
// console.log(searchFrom)
const input = document.querySelector('.input');
const newsList = document.querySelector('.news-list');

function retrieve(e){
  if (input.value!="Entertainment" && input.value!="Sport" && input.value!="Technology") {
    alert("Search for Sport, Entertainment, or Technology")
    return
  }
  newsList.innerHTML = '';
  e.preventDefault()
  let topic = input.value;
  let url = "http://newsapi.org/v2/everything?q="
  url = url + topic
  url = url + "&apiKey=78b9d599c4f94f8fa3afb1a5458928d6"
  fetch(url).then((res)=>{
    return res.json()
  }).then((data)=>{
    // console.log(data)
    data.articles.forEach(article =>{
      let li=document.createElement('li');
      let a=document.createElement('a');
      a.setAttribute('href',article.url);
      a.setAttribute('target', '_blank');
      a.textContent = article.title;
      // a.body += "<img src= '"+ article.urlToImage + "'>";
      li.appendChild(a);

      source = document.createElement('source');
      source.textContent = " (" + article.source.name + ")";
      li.appendChild(source);

      const img = document.createElement('img');
      img.src = article.urlToImage;

      li.appendChild(img);

      description = document.createElement('description');
      description.textContent = article.description;
      li.appendChild(description);

      console.log(li)

      newsList.appendChild(li);
    })

  })
}
searchFrom.addEventListener('submit', retrieve)
