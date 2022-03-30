import './Inspirations.scss'


const checkForError = (response: Response) => {
  if (response.status === 404) {
    throw (`${response.status} Error. Sorry, the image you're looking for doesn't exist.`)
  } else if ((!response.ok && response.status >= 400) && response.status < 500) {
    throw (`${response.status} Error. Sorry, the image you're looking for doesn't exist.`)
  } else if (!response.ok && response.status >= 500) {
    throw (`${response.status} Error. Something went wrong. Please try again!`)
  } else if (!response.ok){
    throw (`${response.status} Error. Something went wrong! We're not sure either, sorry!!`)
  } else {
    return response.json()
  }
}

export const getImages = () => {
  return fetch('https://picsum.photos/v2/list')
    .then(response => checkForError(response))
  }

  
  

