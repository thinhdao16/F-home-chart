import React, { useEffect } from "react";
import { UserAuth } from "./AuthContext";
import axios from "axios"
import { async } from "@firebase/util";
export default function ListOfTodo() {
    const { token } = UserAuth()
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const res = await axios.get("http://localhost:5000/api/todos")
        console.log('res.data,50000',token)
    }

}