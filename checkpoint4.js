// /init
let movie = {
    Title : 'The dark night rises',
    Year : 2012,
    rate : 8.4
};
// console.log(movie);
// //read
console.log(movie.Title);
console.log(movie.Year);
console.log(movie.rate);
// // update // create
movie.rate = 8.7;T
console.log(movie)
movie.rate += 0.5;
console.log(movie)
user = prompt(`What do you want to update ?`);
if (user == Title){
    movie.Title = prompt(`What is the update ?`);
    console.log(movie)
}else if (user == Year){
    movie.Year = prompt(`What is the update ?`);
    console.log(movie)
}else if (user == rate){
    movie.rate = prompt(`What is the update ?`);
    console.log(movie)
}else {
    alert(`It does not exist in our date , we will add new`)
    let n = prompt(`enter the new`)
    movie[n] = prompt(`What is the update`)
    console.log(movie)
}

//Object and Array mix structure



let movies = [];
let movie_1 = {
    title: 'Attack on Titan',
    year: 2013,
    rate: 9,
    casts: ['Aren Armin Mikasa'],
};

let movie_2 = {
    title: 'Mind hunter',
    year: 2017,
    rate: 8.6,
    casts: ['Hoden Bill'],
};

let movie_3 = {
    title: 'Unabomber',
    year: 2017,
    rate: 8.1,
    casts: ['Ted'],
};

movies.push(movie_1);
movies.push(movie_2);
movies.push(movie_3);

for (let i = 0; i < movies.length; i++) {
    console.log(movies[i].title);
    console.log('Year: ' + movies[i].year);
    console.log('Rate: ' + movies[i].rate);
    let casts = movies[i].casts.join(' ');
    console.log('Casts: ' + casts);
    console.log('---------------------');
}