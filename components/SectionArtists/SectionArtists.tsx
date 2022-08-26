import axios, { AxiosRequestConfig } from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { ArtistCards } from '../ArtistCards/ArtistCards';
import { BuyModal } from '../BuyModal/BuyModal';
export const SectionArtists: FC = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [artists, setArtists] = useState<any>(null);
    const [showModal, setShowModal] = useState<boolean>(false);

    const configGetArtists: AxiosRequestConfig = {
        method: 'get',
        url: 'https://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=disco&limit=10&api_key=cef240c04a419e061d0f317d47b7269f&format=json',
    };
    useEffect(() => {
        setLoading(true);
        axios(configGetArtists)
            .then(res => {
                setArtists(res.data.topartists.artist);
                setLoading(false);
            })
            .catch(err => { console.log(err); setLoading(false) })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) return <div>Esta cargando su informacion...</div>


    return (
        <div>
            {showModal &&
                <BuyModal setShowModal={setShowModal}/>
            }
            {Array.isArray(artists) &&
                artists.map((a, idx) => (
                    <div key={`artist-${idx}`} className="my-6 text-center">
                        <ArtistCards name={a.name} rankNumber={a["@attr"].rank} imageUrl={a.image[4]["#text"]} mbid={a.mbid} setShowModal={setShowModal}/>
                    </div>
                ))
            }
        </div>
    )
}
