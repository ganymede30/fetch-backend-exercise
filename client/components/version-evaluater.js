import React, {useState} from 'react'
import Axios from 'axios'

export default function VersionEvaluater() {
  const [versionNumber1, setVersionNumber1] = useState('')
  const [versionNumber2, setVersionNumber2] = useState('')
  const [finalString, setFinalString] = useState([])
  const [evaluaters, setEvaluaters] = useState(null)

  const evaluater = (string1, string2) => {
    let array1 = string1.split('.')
    let array2 = string2.split('.')
    let length

    if (array1.length > array2.length) {
      length = array1.length
    } else {
      length = array2.length
    }

    for (let i = 0; i < length; i++) {
      if (array1[i] > array2[i]) {
        setEvaluaters('after')
        break
      } else if (array1[i] < array2[i]) {
        setEvaluaters('before')
        break
      }
      setEvaluaters('equal to')
    }
    setFinalString([string1, string2])
  }

  const onSubmit = async event => {
    event.preventDefault()
    await Axios.post(`/api/versions`, {
      versionNumber1: versionNumber1,
      versionNumber2: versionNumber2
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const retrieveVersions = async () => {
    const response = await Axios.get(`/api/versions/`)
    evaluater(response.data[0].versionNumber1, response.data[0].versionNumber2)
    await Axios.delete(`/api/versions/${response.data[0].id}`)
  }

  return (
    <div>
      <h1>Version Evaluater</h1>
      <div>
        <form onSubmit={onSubmit}>
          <label>Add Version:</label>

          <h2> Input Versions </h2>
          <p>
            Fill in the versions below and then submit to add them to our data
            base
          </p>
          <label>Add Version 1:</label>
          <input
            name="versionNumber1"
            onChange={() => setVersionNumber1(event.target.value)}
            value={versionNumber1}
          />
          <label>Add Version 2:</label>
          <input
            name="versionNumber2"
            onChange={() => setVersionNumber2(event.target.value)}
            value={versionNumber2}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
      <br />
      <div>
        <h2> Click 'Compare!' to see which version is most recent </h2>
        <button onClick={retrieveVersions}> Compare! </button>
      </div>
      {!evaluaters ? (
        <div />
      ) : (
        <div>
          <h2>
            {' '}
            {finalString[0]} is {evaluaters} {finalString[1]}{' '}
          </h2>
        </div>
      )}
    </div>
  )
}
