import { Dispatch, SetStateAction } from "react";

export interface IArtistCards {
    name: string,
    rankNumber: string,
    mbid: string,
    imageUrl: string,
    setShowModal: Dispatch<SetStateAction<boolean>>
}