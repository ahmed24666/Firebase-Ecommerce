import { onSnapshot, collection } from 'firebase/firestore'
import { useEffect } from 'react'
import { useState } from 'react'
import {db} from '../firebase.config'
const useGetData = collectionName => {
    const [data, setdata] = useState([])
    const collectionRef=collection(db,collectionName)
    const [dataLoading, setdataLoading] = useState(true)

    useEffect(() => {
        setdataLoading(true)
        const getData=async()=>{
            // firebase firestore realtime data update 
            await onSnapshot(collectionRef,(snapshot)=>{
                setdata(snapshot.docs.map(doc=>({ ...doc.data(), id:doc.id})))
                setdataLoading(false)
            })
        }
        getData()

    }, [])
    return {data,dataLoading}
}

export default useGetData
