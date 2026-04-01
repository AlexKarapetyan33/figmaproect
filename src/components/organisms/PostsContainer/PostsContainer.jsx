import axios from "axios"
import { useState, useEffect } from "react"
import { Post } from "../../molecules/Post/Post"

const instanse = axios.create({
    baseURL: 'https://cloud.codesupply.co/endpoint/react/data.json'
})

export const PostsContainer = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        instanse.get('')
        .then((res) => setData(res.data))
    }, [])

    return (
        <>
            {
                data.map((element) => {
                    return <div key={element.title}><Post element={element}/></div>
                })
            }
        </>
    )
}
