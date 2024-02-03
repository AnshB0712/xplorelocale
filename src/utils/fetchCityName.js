import axios from 'axios'

export const fetchCityName = async (lat,long) => {
  try {
  const {data:{location,current:{condition}}} = await axios.get(
    `https://api.weatherapi.com/v1/current.json?q=${lat},${long}&key=${import.meta.env.VITE_GEO_KEY}`
    )
    return {...location,...condition}
  } catch (e) {
    throw new Error(e)
  }
}