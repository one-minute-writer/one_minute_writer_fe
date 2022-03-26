export interface IUserData {
  data: {
    id: number,
    type: string,
    attributes: {
      username: string,
      email: string,
      stories: {
        id: number, 
        user_id: number,
        total_time_in_seconds: number,
        body_text: string,
        image: string,
        word: string,
        sound: string
      }[]
    }
  }
} 