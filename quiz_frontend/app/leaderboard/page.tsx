"use client"

import { useEffect, useState } from "react";
import Navigation from "../components/header";
import { apiRequest } from "../api";
import { HTTP_Methods } from "../constants/http_methods";
import { APIRoutes } from "../constants/api_routes";
import moment from "moment";

interface IScore {
    _id: string,
    username: string,
    scorenumber: number,
    createdAt: string,
}

export default function Leaderboard(){
    const [scores, setScores] = useState<IScore[]>([])
    const [loadingData, setLoadingData] = useState<boolean>(true)

    const getScores = () => {
        apiRequest(HTTP_Methods.GET, APIRoutes.API.LEADERBOARD, {})
        .then(data => {
            setScores(data)
            setLoadingData(false)
        })
        .catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        getScores();
    }, [])

    return (
        <div className="">
            <Navigation />
            <div className="max-w-4xl mx-auto mt-12 px-6">
                <h1 className="text-2xl font-bold text-center">The game plays scoreboard!</h1>
                <table className="shadow-lg bg-white mx-auto w-full mt-4">
                <thead>
                    <tr>
                    <th className="bg-blue-100 border text-left px-8 py-4">User</th>
                    <th className="bg-blue-100 border text-left px-8 py-4">Score</th>
                    <th className="bg-blue-100 border text-left px-8 py-4">Played At</th>
                    </tr>
                </thead>
                <tbody>
                    {scores.map((score) => (
                    <tr key={score._id}>
                        <td className="border px-8 py-4">{score.username}</td>
                        <td className="border px-8 py-4">{score.scorenumber}</td>
                        <td className="border px-8 py-4">
                        {moment(score.createdAt).fromNow()}
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    )
}