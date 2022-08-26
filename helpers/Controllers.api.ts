import axios, { AxiosRequestConfig } from "axios"

export const getSongsByArtist: any = async(mbid: string) => {

    const config: AxiosRequestConfig = {
        method: 'get',
        url: `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&mbid=${mbid}&limit=20&&api_key=cef240c04a419e061d0f317d47b7269f&format=json`,
    };
    const response = await axios(config)
        .then(res => { return res.data })
        .catch(err => { return err })
    return response;
}