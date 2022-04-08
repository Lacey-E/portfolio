requestURL = 'https://api.themoviedb.org/3/movie/550?api_key=a2755679008289e727308fb6375b618a'
fetch(requestURL)
  .then(function (response) {
    console.log(response.json);
    return response.json();
  })
//   .then(function (jsonObject) {
//     const prophets = jsonObject['prophets'];
//     for (let i = 0; i < prophets.length; i++ ) {


//     }});
// function Update(data) {

// 	if (data.results && data.results.length > 0) {
// 		let outcomeList = $("#newData");
// 		outcomeList.empty();

// 		for (let i = 0; i < data.results.length; i++) {
// 			let title = data.results[i].title;
// 			let image ="https://moviedb.kr/image/w500"+ data.results[i].poster_path;
//             let year = data.results[i].release_date;
//             let movie = data.results[i].id;
// 			outcomeList.append("<div class='title imgContainer'><a href='" + movie
//  + "' target='_blank'/'><img class='poster' src='" + image + "' alt='" + title + "'><p class='titleText'>"+"Title:"+" " + title +"<br>"+"Year:"+" "+ year + "</p></a></div>");
// 		} 
// 	} else {
// 			let outcomeList = $("#newData");
// 			outcomeList.empty();
// 			outcomeList.append("<p class='error'>Try again</p>");
// 		}

// }



// const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

// fetch(requestURL)
//   .then(function (response) {
//     console.log(response.json);
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     const prophets = jsonObject['prophets'];
//     for (let i = 0; i < prophets.length; i++ ) {

//       let card = document.createElement("section");
//       let h2 = document.createElement("h2");
//       let bday = document.createElement("p");
//       let bplace = document.createElement("p");
//       let image = document.createElement("img");

  
//       card.setAttribute("class", `order${prophets[i].order}`)
//       h2.textContent = `${prophets[i].name} ${prophets[i].lastname}`;
//       bday.textContent = `Birth Date: ${prophets[i].birthdate}`;

      
//       bplace.textContent = `Birth Place: ${prophets[i].birthplace}`;
//       image.setAttribute("src", prophets[i].imageurl);
//       image.setAttribute("alt", `${prophets[i].name} ${prophets[i].lastname} - ${prophets[i].order}`);
//       card.appendChild(h2);
//       card.appendChild(bday);
//       card.appendChild(bplace);
//       card.appendChild(image);

//       document.querySelector("div.cards").appendChild(card);
      
//     }
//   });



