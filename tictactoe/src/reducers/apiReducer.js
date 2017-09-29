const initialState = {
    username: '',
    password: '',
}

export default (state = initialState, actions) => {
  switch (actions.type) {
    case 'INPUT_NAME':
      return {...state, username: actions.payload.username, password: actions.payload.password }
    default:
      return state
  }
}