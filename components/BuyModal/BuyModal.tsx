import React, { FC, useState } from 'react'
import { IBuyModal } from '../../models/BuyModal'

export const BuyModal: FC<IBuyModal> = ({ setShowModal }) => {

    const [dataPay, setDataPay] = useState<any>({});

    const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowModal(false);
    }

    const handleInputPay = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDataPay({ ...dataPay, [e.target.name]: e.target.value })
    }

    return (
        <form>
            <div className='bg-zinc-200 opacity-95 fixed inset-0 z-50'>
                <div className='flex h-screen justify-center items-center'>
                    <div className='flex-col justify-center bg-white py-12 px-24 border-4 border-sky-500 rounded-xl'>
                        <div className='flex text-lg text-zinc-600 mb-10  justify-center'><strong>Purchase Information</strong></div>
                        <div className='flex items-center mb-4'>
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name_booker">
                                    Name
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    required
                                    type="text"
                                    id={`name_booker`}
                                    name={`name_booker`}
                                    value={dataPay.name_booker}
                                    pattern="^[0-9+\s]+$"
                                    onChange={handleInputPay}
                                    minLength={10}
                                    maxLength={50}
                                    className={"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"}
                                />
                            </div>
                        </div>
                        <div className='flex items-center mb-4'>
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="card_number">
                                    Card Number
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    required
                                    type="text"
                                    id={`card_number`}
                                    name={`card_number`}
                                    placeholder="XXXX   XXXX   XXXX   XXXX"
                                    value={dataPay.card_number?.replace(/[^0-9]/g, '').replace(/(.{4})/g, '$1 ').trim()}
                                    pattern="^[0-9+\s]+$"
                                    onChange={handleInputPay}
                                    minLength={19}
                                    maxLength={19}
                                    className={"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"}
                                />
                            </div>
                        </div>
                        <div className='flex items-center mb-4'>
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="card-code">
                                    CVV
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    required
                                    type="text"
                                    id={`card_code`}
                                    name={`card_code`}
                                    placeholder="XXX"
                                    value={dataPay.card_code?.replace(/[^0-9]/g, '').replace(/(.{4})/g, '$1 ').trim()}
                                    pattern="^[0-9+\s]+$"
                                    onChange={handleInputPay}
                                    minLength={3}
                                    maxLength={3}
                                    className={"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"}
                                />
                            </div>
                        </div>
                        <div className='flex  justify-center'>
                            <button className='rounded px-4 py-2 text-white bg-green-400' type='submit'>Continue</button>
                            <button className='rounded px-4 py-2 text-white ml-4 bg-red-500' onClick={(e) => { handleClose(e) }}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
