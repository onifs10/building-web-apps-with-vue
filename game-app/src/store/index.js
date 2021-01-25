import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    character : '',
    gameState : 'start',
    questionIndex : 0,
    characterChoices : ['baker','artist','mechanic'],
    score : 0,
    questions : [
  {
    question: `What's your dog's name?`,
    baker: "Woofgang Puck",
    mechanic: "Alf",
    artist: "Salvador Dogi",
  },
  {
    question: `What's your favorite hobby?`,
    baker: "Extreme ironing",
    mechanic: "Bacon santa cosplay",
    artist: "Mimosas",
  },
  {
    question: `What's your favorite color?`,
    baker: "turquoise",
    mechanic: "yellow",
    artist: "transparent",
  },
  {
    question: `Is cereal soup?`,
    baker: "You can't be serieal",
    mechanic: "Yes, I am Jason Lengstorf",
    artist: "wut",
  },
  {
    question: `What’s the most imaginative insult you can come up with?`,
    baker: "You're a substitute teacher with no lesson plan",
    mechanic: "Yer face is a melted welly",
    artist: "You eat buttons off the remote",
  },
  {
    question: `If peanut butter wasn’t called peanut butter, what would it be called?`,
    baker: "legoome",
    mechanic: "brown paste",
    artist: "groundnut smoosh",
  },
]
  },
  mutations: {
    setCharacter(state, character){
      state.character = character;
    },
    setGameState(state, gameState){
        state.gameState = gameState;
    },
    selectAns(state, ans){
      state.score = state.character == ans ? state.score += 10 : state.score -= 10;
      if(state.questionIndex < (state.questions.length - 1)){
        state.questionIndex++
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
