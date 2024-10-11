import { type Doc, type APISpacexResponse } from '../types/api';

export const getSpacexLaunches = async ()=>{
    const res = await fetch('https://api.spacexdata.com/latest/launches/query', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: "asc"
                },
                limit: 20
            }
        })
    })
    const { docs: launches } = await res.json() as APISpacexResponse;
    return launches;
}

export const getSpacexLaunchById = async (id: string)=>{
    const res = await fetch(`https://api.spacexdata.com/latest/launches/${id}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    const launch = await res.json() as Doc;
    console.log(launch)
    return launch;
}