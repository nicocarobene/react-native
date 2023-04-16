// import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const UseRepositories = () => {
  const { data = {}, loading, refetch } = useQuery(GET_REPOSITORIES)
  const { repositories = null } = data

  // const [repositories, setRepositories] = useState(null)
  // const fetchRepositories = async () => {
  //   const response = await globalThis.fetch('http://192.168.1.131:5000/api/repositories')
  //   const json = await response.json()
  //   console.log(json)
  //   setRepositories(json)
  // }
  // useEffect(() => {
  //   fetchRepositories()
  // }, [])
  // para usar la FETCH

  const repositoriesNode = repositories
    ? repositories.edges.map(res => res.node)
    : []

  return { repositories: repositoriesNode, loading, refetch }
}

export default UseRepositories
