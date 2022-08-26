import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react'
import { getSongsByArtist } from '../../helpers/Controllers.api';
import { IArtistCards } from '../../models/ArtistCards.model';
import { TopSongs } from '../TopSongs/TopSongs';

export const ArtistCards: FC<IArtistCards> = ({ name, rankNumber, imageUrl, mbid, setShowModal }) => {

    const [topSongs, setTopSongs] = useState<any>(null);

    const getTopSongs = async () => {
        const response = await getSongsByArtist(mbid);
        setTopSongs(response)
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowModal(true);
    }

    useEffect(() => {
        getTopSongs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
            <h2 className="text-lg text-gray-700">{name}</h2>
            <p className="text-sm text-gray-600">{`Rank #${rankNumber}`}</p>
            <div className='justify-center'>
                <Image src={imageUrl} alt={`img-${name}`} width={100} height={100} />
            </div>
            {topSongs !== null &&
                <>
                    <TopSongs titulo={`songs-${name}`}>
                        <ul>
                            {topSongs.toptracks.track.map((e: any, idx: number) => (
                                <li key={`song-${name}-${idx}`}>
                                    <p><strong>{idx + 1}.</strong>{e.name} - <button onClick={(e) => { handleClick(e) }} className={"text-blue-800 hover:text-blue-500"}>Buy it!</button></p>
                                </li>
                            ))}
                        </ul>
                    </TopSongs>
                </>
            }
        </section>
    )
}
