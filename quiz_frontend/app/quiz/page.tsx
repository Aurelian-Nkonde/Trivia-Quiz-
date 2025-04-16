"use client"

import { useEffect, useState } from "react";
import Navigation from "../components/header";
import { apiRequest } from "../api";
import { HTTP_Methods } from "../constants/http_methods";
import { APIRoutes } from "../constants/api_routes";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface IQuestion {
    _id: string,
    questionText: string,
    possibleAnswers: {id: string, answer: string}[],
    correctAnswerId: string
}

export default function Quiz(){
    const [renderUserName, SetRenderUserName] = useState<boolean>(true);
    const [username, setUsername] = useState<string>("")
    const [questions, setQuestions] = useState<IQuestion[]>([])
    const [score, setScore] = useState<number>(0)
    const [showResults, setShowResults] = useState<boolean>(false)
    const [questionIndex, setQuestionIndex] = useState<number>(0)
    const [selectedAnswerID, setSlectedAnswerID] = useState<string | null>()

    const router = useRouter();

    const getUserName = () => {
        if(username == ""){
            toast.error('Oops, The username must not be empty!.')
            return
        }
        SetRenderUserName(false)
    }

    const nextQuestion = () => {
        
        if(questionIndex == (questions.length)-1){
            console.log("end of questions!")
            apiRequest(HTTP_Methods.POST, APIRoutes.API.SCORE, {username: username, scorenumber: score})
                .then(data => {
                    console.log(data)
                    console.log("score is saved!")
                })
                .catch(e => {   
                    console.log(e)
                })
            setShowResults(true)
            return
        }

        if(!selectedAnswerID){
            toast.warning("Please select an answer!")
            return
        }

        if(selectedAnswerID == questions[questionIndex].correctAnswerId){
            setScore(sc => sc +1)
            setSlectedAnswerID(null)
            setQuestionIndex(i => i+1)
            return

        }else {
            setSlectedAnswerID(null)
            setQuestionIndex(i => i+1)
    }
    }

    useEffect(() => {
        getQuestions();
    }, [])

    const getQuestions = () => {
        apiRequest(HTTP_Methods.GET, APIRoutes.API.QUESTIONS, {})
        .then(data => {
            console.log(data)
            setQuestions(data)
        })
        .catch(e => {
            console.log(e)
        })
    } 

    const selectAnswer = (possibleAnswerId: string) => {
        console.log(possibleAnswerId)
        setSlectedAnswerID(possibleAnswerId)
    }


    return (
        <div>
            <Navigation />
            <div className="max-w-2xl mx-auto mt-12">
                {renderUserName ? (
                    <div style={{height: "300px"}} className="border-2 px-4 rounded-xl border-gray-500 flex flex-col justify-center">
                        <h1 className="text-3xl font-bold">Before starting the game, Please give us your name..</h1>
                        <div className="mt-4">
                            <h1>Your Name:</h1>
                            <input onChange={(e) => setUsername(e.target.value)} className="border-2 border-black py-2 px-4 w-full mb-2"/>
                        </div>
                        <button onClick={getUserName}  className="bg-green-800 text-white py-3 px-4 shadow-2xl cursor-pointer">Submit</button>
                    </div>
                ): (
                    <div className="">
                        {showResults ? (
                            <div className="">
                                <h1 className="text-4xl mb-4">Results from the test!</h1>
                                <h1 className="text-2xl underline">Answers got right: {score}</h1>
                                <h1 className="text-2xl underline">Answers got wrong: {questions.length-score}</h1>
                                <div className=" mt-8">
                                    <button onClick={() => router.push("/leaderboard")} className=" border-black border-2 py-2 cursor-pointer px-5">View Scoreboard</button>
                                </div>
                            </div>
                        )
                         : (
                        <div className="border-2 py-5 p px-4 rounded-xl border-black ">
                            <h1 className="text-2xl font-bold pb-2">Question: </h1>
                            <h2 className="text-xl mb-4">{questions[questionIndex].questionText}</h2>
                            <div className="mt-4 max-w-xl">
                                <fieldset>
                                    <div className= {selectedAnswerID == questions[questionIndex].possibleAnswers[0].id? "flex gap-4 justify-between items-center border-orange-400 border-2 py-4 px-4 mb-2 shadow-2xl":"mb-2 flex gap-4 justify-between items-center border-gray-600 border-2 py-4 px-4"}>
                                        <div className="flex gap-3 items-center">
                                            <h1 className="font-bold text-xl">A: </h1>
                                            <h1 className="text-gray-800 text-xl">{questions[questionIndex].possibleAnswers[0].answer}</h1>
                                        </div>
                                        <input  onChange={() => selectAnswer(questions[questionIndex].possibleAnswers[0].id)} type="radio" id="first" name="drone" value={questions[questionIndex].possibleAnswers[0].id}/>
                                    </div>
                                    <div className= {selectedAnswerID == questions[questionIndex].possibleAnswers[1].id? "flex gap-4 justify-between items-center border-orange-400 border-2 py-4 px-4 mb-2 shadow-2xl":"mb-2 flex gap-4 justify-between items-center border-gray-600 border-2 py-4 px-4"}>
                                        <div className="flex gap-3 items-center">
                                            <h1 className="font-bold text-xl">B: </h1>
                                            <h1 className="text-gray-800 text-xl">{questions[questionIndex].possibleAnswers[1].answer}</h1>
                                        </div>
                                        <input onChange={() => selectAnswer(questions[questionIndex].possibleAnswers[1].id)} type="radio" id="second" name="drone" value={questions[questionIndex].possibleAnswers[1].id}/>
                                    </div>
                                    <div className= {selectedAnswerID == questions[questionIndex].possibleAnswers[2].id? "flex gap-4 justify-between items-center border-orange-400 border-2 py-4 px-4 shadow-2xl":"flex gap-4 justify-between items-center border-gray-600 border-2 py-4 px-4"}>
                                        <div className="flex gap-3 items-center">
                                            <h1 className="font-bold text-xl">C: </h1>
                                            <h1 className="text-gray-800 text-xl">{questions[questionIndex].possibleAnswers[2].answer}</h1>
                                        </div>
                                        <input onChange={() => selectAnswer(questions[questionIndex].possibleAnswers[2].id)} type="radio" id="third" name="drone" value={questions[questionIndex].possibleAnswers[2].id}/>
                                    </div>
                                </fieldset>
                                <div className="flex justify-center mt-6">
                                    <button  onClick={nextQuestion} className=" border-black border-2 py-2 px-5 cursor-pointer">Next Question</button>
                                </div>
                            </div>
                        </div>
                         )}
                    </div>
                )}
            </div>
        </div>
    )
}