import './Components/Inspirations/Inspirations.scss'

export const getImages = () => {
  return fetch('https://picsum.photos/v2/list')
    .then(response => {
      if(response.ok) {
        return response.json()
    }
  })
}  
  
  

