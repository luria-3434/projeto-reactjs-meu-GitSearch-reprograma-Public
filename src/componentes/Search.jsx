import { useState, useEffect} from 'react'
import Axios from 'axios'
import { GithubLogo} from 'phosphor-react'

export function Search(){
    const [inputValue, setInputValue] = useState("")
    const [dataFromApi, setDataFromApi]= useState([])
    const [listFiltered, setListFiltered] = useState([])


function handleInput(event){
    setInputValue(event.target.value)
}

console.log('valor dentro do estado input value:', inputValue)

useEffect (()=> {
    async function getData() {
        const response = await Axios.get('https://api.github.com/users/luria-3434/repos')
        setDataFromApi(response.data)
    }

    getData()
}, [])

console.log('valor dentro do estado da lista que veio da API: ', dataFromApi)

useEffect(()=> {
    const dataFiltered = dataFromApi.filter(item => {
        return item.name.includes(inputValue)
    })

    setListFiltered(dataFiltered)
}, [inputValue, dataFromApi])

console.log('lista filtrada: ', listFiltered)
    return(
        <>
            <input placeholder=" Digite sua busca" onChange= {handleInput} />
            {inputValue && listFiltered.map(item => {
                return(
                    <div>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <a href={item.html_url} target="_blank">
                            <GithubLogo size={42} weight="thin"/>
                            Veja
                        </a>
                    </div>
                )
            })}
        </>
    )
}
