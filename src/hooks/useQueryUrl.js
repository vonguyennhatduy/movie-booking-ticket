import { useState } from 'react'
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom'
import { stringify } from 'qs'

// custome hooks
export const useQueryUrl = () => {
    // Có thể sử dụng 1 hook # ở trong 1 hook

    // Lấy query từ url thông qua useSearchParams
    const [searchParams, setSearchParams] = useSearchParams()

    const queryUrl = Object.fromEntries(searchParams)

    // Tạo hàm đưa query lên URL thay cho setSearchParams
    const location = useLocation()
    console.log('location: ', location)
    const navigate = useNavigate()

    const setQueryUrl = (param) => {
        const queryString = stringify(param, {
            addQueryPrefix: true,
        })
        // ?name=abc&age=20

        navigate(location.pathname + queryString)
    }

    return [queryUrl, setQueryUrl]
}

// export const demo = () => {
//     const [state, setState] = useState()
// }
