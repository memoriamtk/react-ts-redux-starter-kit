// A mock function to mimic making an async request for data

export type SampleCoffeeProps = Array<{
  title: string
  description: string
  ingredients: Array<string>
  id: number
}>

const URL = 'https://api.sampleapis.com/coffee/hot'

export const fetchCoffee = (): Promise<SampleCoffeeProps> => {
  return new Promise<SampleCoffeeProps>((resolve, reject) => {
    fetch(`${URL}`)
      .then((response) => resolve(response.json()))
      .then((data) => reject(data))
  })
}
