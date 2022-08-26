import React, { FC } from 'react'
import { ITopSongs } from '../../models/TopSongs.model'

export const TopSongs: FC<ITopSongs> = ({ titulo, children }) => {
    return (
        <div className='experiences-detail__accordeon check mt-4 items-center'>
            <div className={`ml-2 mb-4`}>
                <div className='w-full'>
                    <label
                        htmlFor={titulo}
                        className='cursor-pointer font-bold flex justify-between items-center experiences-detail__accordeon-titulo'>
                        Top 20 artist tracks
                    </label>
                </div>
                <input
                    type="checkbox"
                    id={titulo}
                    className={"experiences-detail__accordeon_check"} />
                <div
                    className="experiences-detail__accordeon--panel">
                    <div
                        className='my-2'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
