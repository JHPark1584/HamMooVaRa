const HOST = 'http://localhost:8000/api/v1/'
const BASE_HOST = 'http://localhost:8000/'

const ACCOUNTS = 'accounts/'
const COMMENTS = 'comments/'
const COMMUNITY = 'community/'
const MOVIES = 'movies/'
export default {
  accounts: {
    login: () => HOST + ACCOUNTS + 'login/',
    logout: () => HOST + ACCOUNTS + 'logout/',
    signup: () => HOST + ACCOUNTS + 'signup/',
    // Token 으로 현재 user 판단
    // currentUserInfo: () => HOST + ACCOUNTS + 'user/',
    currentUserInfo: () => HOST + ACCOUNTS + 'user/',
    // username으로 프로필 제공
    profile: (username) => HOST + ACCOUNTS + 'profile/' + username +'/',
    follow: userPk => HOST + ACCOUNTS + userPk +'/' + 'follow/',
    followMovies: moviePk => BASE_HOST + MOVIES + moviePk + '/' + 'moviefollow/',
    reviews: moviePk => BASE_HOST + MOVIES + moviePk + '/' + 'reviews/', // create 리뷰
    review: (moviePk, reviewPk) => BASE_HOST + MOVIES + moviePk + '/' + 'reviews/'+reviewPk + '/', // delete 리뷰
    likeReview: (moviePk, reviewPk) => BASE_HOST + MOVIES + moviePk + '/' + 'reviews/'+reviewPk + '/'+'like/', // review 좋아요

  },
  articles: {
    // /articles/
    articles: () => BASE_HOST + COMMUNITY,
    // /articles/1/
    article: articlePk => BASE_HOST + COMMUNITY + `${articlePk}/`,
    likeArticle: articlePk => BASE_HOST + COMMUNITY + `${articlePk}/` + 'like/',
    comments: articlePk => BASE_HOST + COMMUNITY + `${articlePk}/` + COMMENTS,
    comment: (articlePk, commentPk) =>
    BASE_HOST + COMMUNITY + `${articlePk}/` + COMMENTS + `${commentPk}/`,
  }
}