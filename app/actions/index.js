// ACTIONS---------------------------------------------------------------------------
import { createAction } from 'redux-act'


export const incrementBtn = createAction('INC_BUTTON_CLICKED')
export const decrementBtn = createAction('DEC_BUTTON_CLICKED')

export const increment = createAction('INC_APPLIED')
export const decrement = createAction('DEC_APPLIED')

export const coordsAdded = createAction('COORDS_ADDED')

export const err = createAction('ERROR')

// ACTIONS---------------------------------------------------------------------------
