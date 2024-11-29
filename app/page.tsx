import {FaCheck, FaMoon} from "react-icons/fa";
import {PiCheckCircleThin, PiCheckThin, PiCircleThin} from "react-icons/pi";

export default function Home() {
    return (
        <>
            <header className={'container mb-12'}>
                <div className={'flex justify-between items-center'}>
                    <h1 className={`text-white text-[40px] font-bold font-['Josefin Sans'] tracking-[15px]`}>
                        TODO
                    </h1>
                    <FaMoon size={26} color={'white'}/>
                </div>
            </header>
            <main className={'mb-12'}>
                <form action={''} className={'container bg-white px-6 py-5 flex items-center gap-6 mb-6 rounded-lg'}>
                    <label htmlFor="new-task">
                        <PiCircleThin size={24} color={'gray'}/>
                    </label>
                    <input type={'text'} name={'new-task'} id={'new-task'} placeholder={'Create a new todo...'}
                           className={'focus:outline-none focus:border-none text-gray-500 w-full h-full'}/>
                </form>
                <div
                    className={'max-h-[439px] min-w-[540px] bg-white rounded-lg border border-gray-200 drop-shadow-2xl shadow-2xl shadow-gray-300'}>
                    <ul className={`min-h-14 text-lg text-[#494C6B]`}>
                        <li className={'px-6 py-5 flex items-center gap-3.5 border-b text-[#D1D2DA] line-through'}>
                            <FaCheck size={20} color={'white'} className={'bg-gradient-to-br from-blue-400 to-purple-500 rounded-full p-1'}/>
                            Complete online JavaScript course
                        </li>
                        <li className={'px-6 py-5 flex items-center gap-3.5 border-b'}>
                            <PiCircleThin size={24} color={'gray'}/>
                            Jog around the park 3x
                        </li>
                    </ul>
                    <div className={'flex px-6 py-5 justify-between text-gray-500 text-sm'}>
                        <p>
                            5 items left
                        </p>
                        <ul className={'flex gap-5'}>
                            <li className={"text-blue-700"}>
                                All
                            </li>
                            <li>
                                Active
                            </li>
                            <li>
                                Completed
                            </li>
                        </ul>
                        <button>
                            Clear Completed
                        </button>
                    </div>
                </div>

            </main>
            <footer className={'container text-gray-800 text-center gap-5 grid'}>
                <h3>
                    Drag and drop to reorder list
                </h3>
                <p>
                    All Rights Reserved By MEHRSHADIY
                </p>
            </footer>
        </>

    )
}
