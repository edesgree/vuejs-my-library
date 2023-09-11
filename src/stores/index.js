import { defineStore } from 'pinia'

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    myWatchList: JSON.parse(localStorage.getItem('watchlist')) || [],
    moviesResult: [],
    searchError: '',
    loading: false,
    posterURL: 'https://image.tmdb.org/t/p/w500'
  }),
  getters: {
    getMyWatchList(state) {
      return state.myWatchList
    },
    isInWatchlist(state) {
      return (movie) => state.myWatchList.some((m) => m.id === movie.id)
    },
    isWatched(state) {
      return (movie) => {
        const foundMovie = state.myWatchList.find((m) => m.id === movie.id)
        return foundMovie && foundMovie.isWatched === true
      }
    }
  },
  actions: {
    addToWatchlist(movie) {
      // add only if not already in list

      if (!this.isInWatchlist(movie)) {
        movie = {
          ...movie,
          inWatchlist: true,
          isWatched: false
        }

        this.myWatchList.unshift(movie)
        localStorage.setItem('watchlist', JSON.stringify(this.myWatchList))
        console.log('movie added', movie)

        console.log('movie resulst', this.moviesResult)
      } else {
        console.log('movie already in list')
      }
    },
    removeFromWatchlist(movie) {
      const index = this.myWatchList.findIndex((m) => m.id === movie.id)
      this.myWatchList.splice(index, 1)
      localStorage.setItem('watchlist', JSON.stringify(this.myWatchList))
      // set inWatchlist to false
      movie.inWatchlist = false
      console.log('movie removed', movie)
    },
    markAsWatched(movie) {
      if (this.isInWatchlist(movie)) {
        const index = this.myWatchList.findIndex((m) => m.id === movie.id)
        this.myWatchList[index].isWatched = !this.myWatchList[index].isWatched

        localStorage.setItem('watchlist', JSON.stringify(this.myWatchList))
        console.log('movie marked as watched', movie)
      } else {
        console.log('movie not in watchlist')
      }
    }
    // Add a mutation/action to set isInWatchlist value

    /*
    isInWatchlist(movie) {
      return this.myWatchList.some((m) => m.id === movie.id)
    },*/
  }
})
