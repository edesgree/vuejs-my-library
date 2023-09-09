import { defineStore } from 'pinia'

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    myWatchList: JSON.parse(localStorage.getItem('watchlist')) || [],
    moviesResult: [],
    searchError: '',
    loading: false,
    posterURL: 'https://image.tmdb.org/t/p/w500',
    inWatchlist: false
  }),
  getters: {
    getMyWatchList(state) {
      return state.myWatchList
    }
  },
  actions: {
    addToWatchlist(movie) {
      // add only if not already in list
      if (!this.myWatchList.some((m) => m.id === movie.id)) {
        this.myWatchList.unshift(movie)
        localStorage.setItem('watchlist', JSON.stringify(this.myWatchList))
        console.log('movie added')

        // set inWatchlist to true
        const currentSelection = this.moviesResult.find((m) => m.id === movie.id)
        console.log('currentSelection', currentSelection)

        if (currentSelection) {
          currentSelection.inWatchlist = true
        }
        // Update inWatchlist
        this.inWatchlist = true
        console.log('movie resulst', this.moviesResult)
      } else {
        console.log('movie already in list')
      }
    },
    removeFromWatchlist(movie) {
      const index = this.myWatchList.findIndex((m) => m.id === movie.id)
      this.myWatchList.splice(index, 1)
      localStorage.setItem('watchlist', JSON.stringify(this.myWatchList))
      console.log('movie removed', movie)

      // set inWatchlist to false
      const currentSelection = this.moviesResult.find((m) => m.id === movie.id)
      console.log('currentSelection', currentSelection)

      if (currentSelection) {
        currentSelection.inWatchlist = false
      }
      // Update inWatchlist
      this.inWatchlist = false
    },
    markAsWatched(movie) {
      const currentSelection = this.myWatchList.find((m) => m.id === movie.id)
      if (currentSelection) {
        currentSelection.isWatched = !currentSelection.isWatched
        localStorage.setItem('watchlist', JSON.stringify(this.myWatchList))
      }

      console.log(`movie ${movie.title} marked as watched ${currentSelection.isWatched}`)
      console.log('movie resulst', this.moviesResult)
    },
    isInWatchlist(movie) {
      return this.myWatchList.some((m) => m.id === movie.id)
    },
    isWatched(movie) {
      return this.myWatchList.some((m) => m.id === movie.id).isWatched
    }
  }
})
