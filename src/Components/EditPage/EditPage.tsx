import React from 'react'
import './EditPage.scss'

const EditPage = () => {
  // useEffect((): void => {
  //   if (params.id) {
  //     getStoryInfo()
  //   }
  // }, [])

  // const setWritingInfo = (storyInfo: IStoryData) => {
  //   setTextBody(storyInfo.bodyText)
  //   setTitle(storyInfo.title)
  //   setWord(storyInfo.word)
  //   setImage(storyInfo.image)
  //   setSound(storyInfo.sound)
  //   setTime(storyInfo.totalTimeInSeconds)
  // }


  // const getStoryInfo = async () => {
  //   try {
  //     const response = await getStory()
  //     if (response) {
  //       // setWritingInfo(response.fetchStory)
  //     }
  //   }
  //   catch (error) {
  //     console.log(error)
  //   }
  // }

  // const [ updateStory, {
  //   data: updateData,
  //   loading: updateLoading,
  //   error: updateError
  // }] = useMutation(UPDATE_STORY)

  // const [ getStory, { data, loading, error } ] = useLazyQuery(GET_STORY, {
  //   fetchPolicy: "no-cache",
  //   variables: {id: params.id},
  // })

        // updateStory({variables: updateVariables})

  // const updateWriting = () => {
  //   const updateVariables = {
  //     id: params.id,
  //     userId: 1,
  //     title: title,
  //     bodyText: textBody,
  //     word: word,
  //     image: image,
  //     sound: sound,
  //     totalTimeInSeconds: time
  //   }
  // }

  return (
    <div>

    </div>
  )
}

export default EditPage