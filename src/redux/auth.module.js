// ------------------------------------
// Constants
// ------------------------------------

const SAVE_ME = 'SAVE_ME'
const AUTH_CHANGE = 'AUTH_CHANGE'

const initialState = {
  checked: false,
  isLoggedIn: false,
  me: {},
}

// ------------------------------------
// Actions
// ------------------------------------

// TODO: check the user's login state
export const authenticate = () => dispatch => dispatch({
  type: AUTH_CHANGE,
  isLoggedIn: true,
  checked: true
})

export const unauthenticate = () => dispatch => dispatch({
  type: AUTH_CHANGE,
  isLoggedIn: false,
  checked: true
})

export const saveMe = me => dispatch => dispatch({
  type: SAVE_ME,
  me
})

export const actions = {
  saveMe,
  authenticate,
  unauthenticate
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [AUTH_CHANGE]: (state, { isLoggedIn, checked }) => ({
    ...state,
    isLoggedIn,
    checked,
  }),
  [SAVE_ME]: (state, { me }) => ({
    ...state,
    me,
  }),
}

// ------------------------------------
// Reducer
// ------------------------------------

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
