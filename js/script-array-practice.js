//STEP 1
let favMovies = ['Tenet', 'Alice Through The Looking Glass', 'Joker', 'The Dark Knight', 'Voyers']
console.log(favMovies[1])
//STEP 2
let movies2 = new Array(5)
movies2[0] = 'Tenet'
movies2[1] = 'Alice Throught The Lookign Glass'
movies2[2] = 'Joker'
movies2[3] = 'The Dark Knight'
movies2[4] = 'Voyers'
console.log(movies2[0])
//STEP 3
let movies3 = movies2
movies3.splice(2, 0, 'Inception')
console.log(movies3)
//STEP 4
let movies4 = ['Tenet', 'Joker', 'Pulp Fiction', 'The Dark Knight', 'Nope', 'Tokyo Drift']
delete movies4[0]
console.log(movies4)
//STEP 5
let movies5 = ['Tenet', 'Joker', 'Pulp Fiction', 'The Dark Knight', 'Nope', 'Tokyo Drift', 'Alice']
for (index in movies5) {
    console.log(movies5[index])
}
//STEP 6
for (index of movies5) {
    console.log(movies5)
}
//STEP 7
let movies7 = movies5
console.log(movies7.sort())
//STEP 8
let movies8 = ['Tenet', 'Joker', 'Pulp Fiction', 'The Dark Knight', 'Nope', 'Tokyo Drift', 'Alice']
leastFavMovies = ['Scary Movie 1', 'Scary Movie 2', 'Scary Movie 3']
console.log('\nMovies I Like:\n')
for (movie of movies8) {
    console.log(movie)
}
console.log('...\n')
console.log('Movies I Regret Watching:\n')
for (movie of leastFavMovies) {
    console.log(movie)
} 
console.log('...')
//STEP 9
let movieList = movies8.concat(leastFavMovies)
console.log(movieList.sort().reverse())
//STEP 10
let step10 = movieList
console.log(step10.pop())
//STEP 11
let step11 = movieList
console.log(step11.shift())
//STEP 12
let movieList2 = movies8.concat(leastFavMovies)
let badMovies = []
for (i = 0; i < movieList2.length; i++) {
    if (movieList2[i].includes('Scary')) {
        let index = movieList2.indexOf(movieList2[i])
        if (index !== -1) {
            badMovies.push(index)
        } 
    }
}
console.log(badMovies)
let replacementMovies = ['The Godfather', 'Rambo', 'The Dark Knight'];
for (let i = 0; i < movieList2.length; i++) {
    for (let j = 0; j < badMovies.length; j++) {
        if (i === badMovies[j]) {
            movieList2[i] = replacementMovies[j];
            break; // stop searching for badMovies for the current movieList item
        }
    }
}
console.log(movieList2);

//STEP 13
let moviesRank = [['The Dark Knight', 1],
                  ['Joker', 2],
                  ['Nope', 3], 
                  ['Tenet', 4], 
                  ['Voyers', 5]]


let filteredMovies = moviesRank.filter((movie) => {
    return typeof movie[0] === 'string'
}).map((movie) => {
    return movie[0]
})

console.log(filteredMovies)
//STEP 14
let employees = ['David', 'Alex', 'Velli', 'Jake', 'Sam']

const showEmployee = function(employees) {
    employees.forEach((employee) => {
        console.log(employee)
    })
}
console.log('\nEmployees:\n')
showEmployee(employees)
//STEP 15
const filteredArray = function(array) {
    return array.filter((element) => {
        return element !== false && element !== null && element !== 0 && element !== ''
    })
}
let items = [1, 'David', null, true, false, 'abcd', '', 7, 0]
console.log(filteredArray(items))
//STEP 16
function randomElement(array) {
    let randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}
//STEP 17
function getMaxNumber(array) {
    let max = array[0]
    for (i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    console.log(max)
    return max
}