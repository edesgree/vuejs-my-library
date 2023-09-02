import { defineStore } from 'pinia'
export const useMoviesStore = defineStore('movies', {
  state: () => ({
    myWatchList: JSON.parse(localStorage.getItem('watchlist')) || [],
    moviesResult: [],
    searchError: '',
    loading: false
  }),
  getters: {
    getMyWatchList(state) {
      return state.myWatchList
    }
  },
  actions: {
    addToWatchlist(movie) {
      // add only if not already in list
      if (!this.myWatchList.find((m) => m.imdbID === movie.imdbID)) {
        this.myWatchList.unshift(movie)
        localStorage.setItem('watchlist', JSON.stringify(this.myWatchList))
        console.log('movie added')

        // set selected to true
        const currentSelection = this.moviesResult.find((m) => m.imdbID === movie.imdbID)
        console.log('currentSelection', currentSelection)
        currentSelection.selected = true
      } else {
        console.log('movie already in list')
      }
    },
    removeFromWatchlist(movie) {
      const index = this.myWatchList.findIndex((m) => m.imdbID === movie.imdbID)
      this.myWatchList.splice(index, 1)
      localStorage.setItem('watchlist', JSON.stringify(this.myWatchList))
    },
    markAsWatched(movie) {
      const currentSelection = this.myWatchList.find((m) => m.imdbID === movie.imdbID)
      currentSelection.isWatched = true
      localStorage.setItem('watchlist', JSON.stringify(this.myWatchList))
      console.log('movie marked as watched', movie.isWatched)
    }
  }
})
