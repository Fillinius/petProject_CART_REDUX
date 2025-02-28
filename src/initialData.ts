export interface InitialDataProp {
  img: string
  title: string
  id: string
  price: number
  count: number
  favorite: boolean
}

export const initialData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    id: '@bkristastucchio',
    price: 5,
    count: 0,
    favorite: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    id: '@rollelflex_graphy726',
    price: 5,
    count: 0,
    favorite: false,
  },

  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    id: '@nolanissac',
    price: 5,
    count: 0,
    favorite: false,
  },

  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    id: '@arwinneil',
    rows: 2,
    price: 5,
    count: 0,
    favorite: false,
  },
]
