import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
  getSingleVersion,
  getMultipleVersions,
  addVersion
} from '../store/version'
import {useForm} from 'react-hook-form'
import Axios from 'axios'

// const useFetchData = ({url, headers, payload}) => {
//   const [res, setRes] = useState({data: null, error: null, isLoading: false});
//   const [error, setError]
//   // You POST method here
//   const callAPI = useCallback(() => {
//        setRes(prevState => ({...prevState, isLoading: true}));
//        axios.post(url, headers, payload).then(res => {
//           setRes({data: res.data, isLoading: false, error: null});
//        }).catch((error) => {
//           setRes({data: null, isLoading: false, error});
//        })
//   }, [url, headers, payload])
//   return [res, callAPI];
// }

export default function VersionEvaluater() {
  const dispatch = useDispatch()
  // const { register, handleSubmit }= useForm()
  const [versionNumber, setVersionNumber] = useState('')
  const [evaluaters, setEvaluaters] = useState('undetermined')
  // const [res, apiMethod] = useFetchData({url: '/api/versions', headers: {ContentType: 'text/plain'}, payload: string1});

  const onSubmit = async event => {
    event.preventDefault()
    console.log(versionNumber)
    await Axios.post(`/api/versions`, {versionNumber: versionNumber})
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    // dispatch(addVersion(data))
  }

  const retrieveVersions = async () => {
    const data = await Axios.get(`/api/versions/${1}`)
    console.log(data)
  }

  const handleChange = event => {
    setVersionNumber(event.target.value)
    console.log(versionNumber)
  }

  return (
    <div>
      <h1>Version Evaluater</h1>
      <div>
        <form onSubmit={onSubmit}>
          <label>Add Version:</label>
          <input
            name="versionNumber"
            onChange={handleChange}
            value={versionNumber}
          />

          <input type="submit" />
        </form>
        <button onClick={retrieveVersions}> CLick Me</button>
      </div>
      {/* <h2> {string1} is {evaluaters} {string2} </h2> */}
    </div>
  )
}

// import React from 'react'
// import { BrowserRouter as Router, Switch, useParams, Route, Link } from 'react-router-dom'
// import { connect } from 'react-redux';
// import {getSingleVersion, getMultipleVersions, addVersion} from '../store/version'

// class VersionEvaluater extends React.Component {

//   componentDidMount() {
//     this.props.addVersion()
//     this.props.getSingleVersion()
//   }
// }
