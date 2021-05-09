import { ref } from 'vue'
import axios from 'axios'

export const searchName = ref('')
const data = ref()

export const quote = ref()

const api = axios.create ({
    baseURL: 'https://www.breakingbadapi.com/api/quote',
})

export const getQuote = async () => {
    const resource = searchName.value ? 'name' : 'random'
    const response = await api(resource)
    quote.value = response.data
}