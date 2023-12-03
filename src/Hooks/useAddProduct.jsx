// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAddProduct = () => {
    const axiosPublic = useAxiosPublic();

    const {data: addProduct = [], isPending: loading, refetch} = useQuery({
        queryKey: ['addProduct'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/addProduct');
            return res.data;
        }
    })


    return [addProduct, loading, refetch]
}

export default useAddProduct;