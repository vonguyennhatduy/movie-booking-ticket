// rafc

import React, { useEffect } from 'react'

export const Child = () => {
    useEffect(() => {
        console.log('useEffect Child')
    }, [])

    useEffect(() => {
        console.log('useEffect Child')
    }, [])
    return <div>Child</div>
}
