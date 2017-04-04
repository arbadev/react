/*
 * CONSTANTS
*/

export const DISPLAY_TWEET_INPUT = 'DISPLAY_TWEET_INPUT'

/*
 * ACTIONS CREATORS
*/

export const displayTweetInput = (tweet) => {
  console.log('un tweet', tweet)
  return {
    type: DISPLAY_TWEET_INPUT,
    tweet,
  }
}
