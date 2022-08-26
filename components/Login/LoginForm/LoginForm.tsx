import React, { FC, useState } from 'react'
import { loginUser } from '../../../helpers/Controllers.login';

export const LoginForm: FC = () => {

    const [dataUser, setDataUser] = useState<any>({});

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDataUser({ ...dataUser, [e.target.id]: e.target.value });
    }

    const onSubmit = async (e: any) => {
        e.preventDefault()
        const p1 = await loginUser();
        console.log(p1)
    }


    return (
        <div>
            <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
                <h2 className="text-lg text-gray-700 font-bold text-center">{"Login"}</h2>
                <div className='justify-center'>
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"
                                onChange={handleInput} value={dataUser.username} required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="xxxxxxxxxxxxxxxx" />
                        </div>
                        <div className="flex items-center w-full justify-center">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
