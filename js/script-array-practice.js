//STEP 1
let favMovies = ['Nope', 'Tenet', 'Alice Through The Looking Glass', 'Voyers', 'Joker']
console.log(favMovies[1])
//STEP 2
let movies = new Array(5);
movies[0] = 'Nope'
movies[1] = 'Tenet'
movies[2] = 'Alice Through The Looking Glass'
movies[3] = 'Voyers'
movies[4] = 'Joker'
console.log(movies[0])
//STEP 3
let movies2 = new Array(5);
movies2[0] = 'Nope'
movies2[1] = 'Tenet'
movies2[2] = 'The Woman King'
movies2[3] = 'Alice Through The Looking Glass'
movies2[4] = 'Voyers'
movies2[5] = 'Joker'
//STEP 4
let moviesArray = []
moviesArray[0] = 'Nope' 
moviesArray[1] = 'Tenet' 
moviesArray[2] = 'ATTLG' 
moviesArray[3] = 'Voyers' 
moviesArray[4] = 'Joker'
delete moviesArray[0]
console.log(moviesArray)
//STEP 5
let movies5 = []
movies5[0] = 'Nope'
movies5[1] = 'Tenet'
movies5[2] = 'ATTLG'
movies5[3] = 'Voyers'
movies5[4] = 'Joker'
movies5[5] = 'TWK'
movies5[6] = 'HOG'
for (index in movies5) {
    console.log(movies5[index])
}
//STEP 6
let movies6 = []
movies6[0] = 'Nope'
movies6[1] = 'Tenet'
movies6[2] = 'ATTLG'
movies6[3] = 'Voyers'
movies6[4] = 'Joker'
movies6[5] = 'TWK'
movies6[6] = 'HOG'
for (movie of movies6) {
    console.log(movie)
}
//STEP 7
let movies7 = []
movies7[0] = 'Nope'
movies7[1] = 'Tenet'
movies7[2] = 'ATTLG'
movies7[3] = 'Voyers'
movies7[4] = 'Joker'
movies7[5] = 'TWK'
movies7[6] = 'HOG'
console.log(movies7.sort())

//STEP 8
let movies8 = []
movies8[0] = 'Nope'
movies8[1] = 'Tenet'
movies8[2] = 'ATTLG'
movies8[3] = 'Voyers'
movies8[4] = 'Joker'
movies8[5] = 'TWK'
movies8[6] = 'HOG'
console.log('Movies I like:\n')
for (index in movies8) {
    console.log(movies8[index])
}

let leastFavMovies = ['Scary Movie 1', 'Scary Movie 2', 'Scary Movie 3']
console.log('\nMovies I regret watching:\n')
for (movie of leastFavMovies) {
    console.log(movie)
}
//STEP 9
let movies9 = movies8
allMovies = leastFavMovies.concat(movies9)
console.log(allMovies.sort().reverse())
//STEP 10
console.log(allMovies.pop())

//STEP 11
console.log(allMovies.shift())

//STEP 12
let leastFavIndices = []
for (i = 0; i < leastFavMovies.length; i++) {
    let index = leastFavMovies.indexOf(leastFavMovies[i])
    if (index !== -1) {
        leastFavIndices.push(index)
    }
}
console.log(leastFavIndices)


let goodMovies = ['The Godfather', 'Rambo', 'The Dark Knight']
for (let i = 0; i < leastFavIndices.length; i++) {
    leastFavMovies[leastFavIndices[i]] = goodMovies[i];
  }
console.log(leastFavMovies)
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