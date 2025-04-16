import Link from "next/link";

export default function Navigation(){
    return (
        <div className="bg-green-700 text-white">
            <div className="max-w-6xl mx-auto py-6 px-4 flex items-center justify-around">
                <h1 className="text-2xl md:text-4xl cursor-pointer font-bold">
                    <Link href="/">Trivia_quiz!</Link>
                </h1>
                <ul className="flex items-center gap-5 md:gap-10">
                    <li className="cursor-pointer">
                        <Link href="/">HomePage</Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link href="/leaderboard">Leaderboard</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}