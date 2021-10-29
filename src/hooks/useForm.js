// write your custom hook here to control your checkout form
import { useState } from "react";



export const useForm = ( key, value) => {
    const [data, setData] = useState(value)
    if(key === 0) {
        const handleChanges = (e) => {
            setData({ ...data, [e.target.name]: e.target.value });
          };
          return [data, handleChanges]
    }
    else {
        const handleSubmit = (bool) => {
            setData(bool)
        } 
        return [data, handleSubmit]
    }
    
  };