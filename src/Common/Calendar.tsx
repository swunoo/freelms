import { useEffect, useRef, useState } from 'react';

interface CalInfo {
    totalDays: number;
    firstDay:number;
    curDay:number;
    curMonth:string;
}

export default function Calendar () {

    const isCurrent = (i: number) => {
        return (
            curDate.getMonth() === (new Date()).getMonth()
            && i+1 === curDate.getDate())}

    const [curDate, setCurDate] = useState(new Date());
    const [calInfo, setCalInfo] = useState<CalInfo>();
    

    useEffect(() => {
        const totalDays = new Date(curDate.getFullYear(), curDate.getMonth() + 1, 0).getDate();
        const curDay = curDate.getDate();
        
        setCalInfo({
            totalDays: totalDays,
            firstDay: new Date(curDate.getFullYear(), curDate.getMonth(), 1).getDay(),
            curDay: curDay,
            curMonth: curDate.toLocaleDateString('en-US', { month: 'long' })
        }) 

    }, [curDate])

  return (
    <div className="">
            <div className="flex items-center justify-center">
                <div className="w-full">
                    <div className="py-6 p-3 dark:bg-gray-800 bg-white  w-full">
                        <div className="px-1 flex items-center justify-between">
                            <h1 className="text-base font-light dark:text-gray-100 text-gray-800">
                            {curDate.getFullYear() +' '+ calInfo?.curMonth.substring(0,3)}
                            </h1>
                            <div className="flex items-center text-gray-800 dark:text-gray-100">
                                <svg onClick={
                                    ()=>{       
                                        setCurDate(()=>new Date(curDate.getFullYear(), curDate.getMonth() - 1))
                                    }
                                }
                                xmlns="http://www.w3.org/2000/svg" className="cursor-pointer icon icon-tabler icon-tabler-chevron-left" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                                <svg onClick={
                                    ()=>{
                                        setCurDate(()=>new Date(curDate.getFullYear(), curDate.getMonth() + 1))}
                                }
                                xmlns="http://www.w3.org/2000/svg" className="cursor-pointer icon icon-tabler ml-3 icon-tabler-chevron-right" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="9 6 15 12 9 18" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-12">
                            <table className="w-full">
                                <tbody className='grid grid-cols-7'>
                                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(
                                        day => <th>
                                                    <div className="w-full flex justify-center">
                                                        <p className="text-xs font-semibold text-center text-gray-100">{day}</p>
                                                    </div>
                                                </th>
                                    )}
                                        {/* Blank Cells */}
                                        {
                                            Array.from({ length: calInfo?.firstDay as number }).map(() => (
                                                <td className="pt-6">
                                                <div className="px-2 py-1 flex w-full justify-center" />
                                                </td>
                                            ))
                                        }
                                        {/* Dated Cells */}
                                        {
                                            Array.from({ length: calInfo?.totalDays as number }).map((_, index) => (
                                                <td className="pt-6">
                                                <div className="px-2 py-1 flex w-full justify-center">
                                                    <p className="text-xs text-gray-500 dark:text-gray-100 font-medium">{index+1}</p>
                                                </div>
                                            </td>
                                            ))
                                        }
                                        </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="py-8 px-2 bg-gray-50 rounded-b">
                        <div className="px-2 flex gap-3">
                            <div className="flex gap-1 items-center">
                                <span className="w-2 h-2 bg-yellow-300"></span>
                                <p className="text-xs font-light text-neutral-600">Biology Class</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <span className="w-2 h-2 bg-blue-300"></span>
                                <p className="text-xs font-light text-neutral-600">Chemistry Class</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <span className="w-2 h-2 bg-green-300 rounded-xl"></span>
                                <p className="text-xs font-light text-neutral-600">Class B Exam</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

</div>

  );
};