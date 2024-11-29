import {FaMoon} from "react-icons/fa";
import {PiCircleThin} from "react-icons/pi";

export default function Home() {
    return (
        <>
            <header className={'container mb-12'}>
                <div className={'flex justify-between items-center'}>
                    <h1 className={`text-white text-[40px] font-bold font-['Josefin Sans'] tracking-[15px]`}>
                        TODO
                    </h1>
                    <FaMoon size={26} color={'white'} />
                </div>
            </header>
            <main>
                <form action={''} className={' container bg-white px-6 py-5 flex items-center gap-6 mb-6'}>
                    <label htmlFor="new-task">
                        <PiCircleThin size={24} color={'gray'}/>
                    </label>
                    <input type={'text'} name={'new-task'} id={'new-task'} placeholder={'Create a new todo...'} className={'focus:outline-none focus:border-none text-gray-500 w-full h-full'} />
                </form>
            </main>
            <footer className={'container text-gray-700 text-center gap-5 grid '}>
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
