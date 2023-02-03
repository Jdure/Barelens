import { MdOutlineEmail } from "react-icons/md"

export function Contact() {
    return (
        <div className="flex flex-col bg-gray-100 h-36 sm:h-64">
            <div className="flex flex-col items-center space-y-6 sm:space-y-14">
                <h2 className="text-xl sm:text-5xl pt-6 lowercase">
                    Let&apos;s capture your memories today!
                </h2>
                <div className="flex items-center space-x-2">
                    <MdOutlineEmail className="text-xl sm:text-3xl" />
                    <p className="text-xl sm:text-3xl ">Barelens@example.com</p>
                </div>
            </div>
        </div>
    )
}
