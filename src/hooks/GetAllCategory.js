import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function GetAllCategory() {
  const load_data = () => {
    return axios.get(`http://localhost:5000/get-category/v1`)
  }
  const { data, isLoading, refetch } = useQuery(['GetAllCategory'], load_data, {
    refetchOnWindowFocus: false,
  })
  const category = data?.data
  return { category, isLoading, refetch }
}

export default GetAllCategory

// const { category, isLoading, refetch }= GetAllCategory()
