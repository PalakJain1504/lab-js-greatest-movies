// Iteration 1: All directors? - Get the array of all directors.


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}


function getAllDirectorsClean(movies) {
  return [...new Set(movies.map(movie => movie.director))];
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  const totalScore = moviesArray.reduce((acc, movie) => {
    return acc + (movie.score || 0);
  }, 0);
  return parseFloat((totalScore / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return [...moviesArray].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray.map(movie => movie.title).sort().slice(0, 20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {return moviesArray.map(movie => {
  const durationArr = movie.duration.split(" ");
  let minutes = 0;
  durationArr.forEach(time => {
    if (time.includes('h')) minutes += parseInt(time) * 60;
    if (time.includes('min')) minutes += parseInt(time);
  });
  return { ...movie, duration: minutes };
});}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;
  
  const years = {};
  moviesArray.forEach(movie => {
    if (!years[movie.year]) years[movie.year] = [];
    years[movie.year].push(movie.score);
  });

  let bestYear = null;
  let bestAvg = 0;
  
  for (let year in years) {
    const avg = years[year].reduce((acc, score) => acc + score, 0) / years[year].length;
    if (avg > bestAvg || (avg === bestAvg && year < bestYear)) {
      bestYear = year;
      bestAvg = avg;
    }
  }
  
  // Format the average score conditionally
  const avgFormatted = (Math.round(bestAvg * 10) / 10).toString(); // Round to 1 decimal place and remove trailing zeroes
  
  return `The best year was ${bestYear} with an average score of ${avgFormatted}`;
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
