import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useProduct = () => {
    const axiosSecure = useAxiosSecure();
    const { user} = useAuth();
    const {  data: product = [], refetch } = useQuery({
        queryKey: ['product', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/addProduct?email=${user.email}`);
            return res.data;
        }
    })

    return [product, refetch]
};

export default useProduct;