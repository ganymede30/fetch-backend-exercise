import axios from 'axios'

const VERSION = 'VERSION'
const VERSIONS = 'VERSIONS'
const ADD_VERSION = 'ADD_VERSION'

const initialState = {
  version: {},
  versions: []
}

export const getSingleVersion = version => ({
  type: VERSION,
  version
})

export const getMultipleVersions = versions => ({
  type: VERSIONS,
  versions
})

export const addVersion = version => ({
  type: ADD_VERSION,
  version
})

export const gotSingleVersion = version => async dispatch => {
  try {
    const {data} = await axios.get(`/api/versions/${version}`)
    dispatch(getSingleVersion(data))
  } catch (error) {
    console.error(error)
  }
}

export const addedVersion = version => async dispatch => {
  try {
    const {data} = await axios.post(`/api/versions`, version)
    dispatch(addVersion(data))
  } catch (error) {
    console.error(error)
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_VERSION:
      return {...state, version: [...state.version, action.version]}

    case VERSION:
      return {...state, version: action.version}
    default:
      return state
  }
}
