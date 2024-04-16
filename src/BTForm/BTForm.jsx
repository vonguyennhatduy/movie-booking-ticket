// rafc

import React from 'react'
import { ProductForm } from './ProductForm'
import { ProductTable } from './ProductTable'
import { ProductFormV2 } from './ProductFormV2'

export const BTForm = () => {
    return (
        <div>
            <div>
                {/* <ProductForm /> */}
                <ProductFormV2 />
            </div>
            <div className="mt-4">
                <ProductTable />
            </div>
        </div>
    )
}
