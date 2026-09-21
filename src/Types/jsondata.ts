export interface IAppData {
  id: number
  name: string
  shortDescription: string
  longDescription: string
  ratings: number
  category: string
  company: string
  image: string
  icon: string
  reviews: Reviews
  popular: boolean
}

export interface Reviews {
  rating: number
  reviewCount: string
  source: string
}
