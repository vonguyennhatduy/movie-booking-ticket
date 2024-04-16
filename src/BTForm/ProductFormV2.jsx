//rafc
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { btFormActions } from '../store/BTFormReducer/slice'

export const ProductFormV2 = () => {
    const {
        handleSubmit, // submit form
        register, // register field
        formState: { errors }, // validate
        setValue,
        getValues,
        reset, // reset form
    } = useForm({
        mode: 'onChange',
    })

    const { productEdit } = useSelector((state) => state.btFormReducer)

    console.log('errors: ', errors)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!productEdit) {
            reset({
                id: '',
                image: '',
                name: '',
                productType: 'mobile',
                price: '',
                description: '',
            })

            return
        }

        reset(productEdit)
    }, [productEdit])

    return (
        <form
            onSubmit={handleSubmit((values) => {
                // chỉ thực thi khi form ko có errors
                console.log('values: ', values)

                if (!productEdit) {
                    dispatch(btFormActions.addProduct(values))
                    return
                }

                dispatch(btFormActions.updateProduct(values))
            })}
        >
            <h2 className="bg-dark text-warning p-3">Product Info</h2>
            <button
                type="button"
                className="btn btn-info"
                onClick={() => {
                    setValue('id', '123', {
                        shouldValidate: true,
                    })

                    const values = getValues()
                    console.log('values: ', values)
                }}
            >
                Set value
            </button>
            <div className="row">
                <div className="col-6">
                    <p>ID</p>
                    <input
                        className="form-control"
                        {...register('id', {
                            required: 'Vui lòng nhập ID',
                            minLength: {
                                value: 3,
                                message: 'ID phải từ 3 ký tự',
                            },
                            maxLength: {
                                value: 6,
                                message: 'ID tối đa 6 ký tự',
                            },
                        })}
                    />
                    {errors?.id && <p className="text-danger">{errors?.id?.message}</p>}
                </div>
                <div className="col-6">
                    <p>IMAGE</p>
                    <input
                        className="form-control"
                        {...register('image', {
                            required: 'Vui lòng nhập IMAGE',
                            pattern: {
                                value: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
                                message: 'Vui lòng nhập đúng định dạng URL',
                            },
                        })}
                    />
                    {errors?.image && <p className="text-danger">{errors?.image.message}</p>}
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <p>NAME</p>
                    <input className="form-control" {...register('name')} />
                </div>
                <div className="col-6">
                    <p>PRODUCT TYPE</p>
                    <select className="form-control" {...register('productType')}>
                        <option value="mobile">Mobile</option>
                        <option value="laptop">Laptop</option>
                    </select>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <p>PRICE</p>
                    <input className="form-control" {...register('price')} />
                </div>
                <div className="col-6">
                    <p>DESCRIPTION</p>
                    <textarea rows={3} className="form-control" {...register('description')} />
                </div>
            </div>
            <div>
                <button className="btn btn-success">Thêm Mới</button>
            </div>
        </form>
    )
}
