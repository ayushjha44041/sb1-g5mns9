export interface Market {
  id: number
  name: string
  location: string
  products: string[]
  prices: { [key: string]: number }
}