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
    }
  },
  actions: {
    addToWatchlist(movie) {
      // add only if not already in list
      if (!this.myWatchList.find((m) => m.id === movie.id)) {
        this.myWatchList.unshift(movie)
        localStorage.setItem('watchlist', JSON.stringify(this.myWatchList))
        console.log('movie added')

        // set selected to true
        const currentSelection = this.moviesResult.find((m) => m.id === movie.id)
        console.log('currentSelection', currentSelection)
        currentSelection.selected = true
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

      // set selected to false
      const currentSelection = this.moviesResult.find((m) => m.id === movie.id)
      console.log('currentSelection', currentSelection)
      currentSelection.selected = false
    },
    markAsWatched(movie) {
      const currentSelection = this.myWatchList.find((m) => m.id === movie.id)
      currentSelection.isWatched = true
      localStorage.setItem('watchlist', JSON.stringify(this.myWatchList))
      console.log('movie marked as watched', movie)
      console.log('movie resulst', this.moviesResult)
    },
    isInWatchlist(movie) {
      return this.myWatchList.find((m) => m.id === movie.id)
    }
  }
})
