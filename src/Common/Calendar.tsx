import { useEffect, useState } from 'react';

/* Data to build the calendar */
interface CalInfo {
    totalDays: number;
    firstDay:number;
    curDay:number;
    curMonth:string;
}

export default function Calendar ({styling}: {styling: any}) {


    const [curDate, setCurDate] = useState(new Date());
    const [calInfo, setCalInfo] = useState<CalInfo>();

    // Util to display weekends in red.
    let dayCount = 0;

    useEffect(() => {

        setCalInfo({
            totalDays: new Date(curDate.getFullYear(), curDate.getMonth() + 1, 0).getDate(),
            firstDay: new Date(curDate.getFullYear(), curDate.getMonth(), 1).getDay(),
            curDay: curDate.getDate(),
            curMonth: curDate.toLocaleDateString('en-US', { month: 'long' })
        }) 

    }, [curDate])

  return (
    <div>
            <div className="flex items-center justify-center">
                <div className="w-full">
                    <div className={styling.container}>
                        <div className="px-1 flex items-center justify-between">
                            <h1 className={styling.header}>
                            {curDate.getFullYear() +' '+ calInfo?.curMonth.substring(0,3)}
                            </h1>
                            <div className="flex items-center">
                                <svg onClick={
                                    ()=>{       
                                        setCurDate(()=>new Date(curDate.getFullYear(), curDate.getMonth() - 1))
                                    }
                                }
                                xmlns="http://www.w3.org/2000/svg" className="cursor-pointer icon icon-tabler icon-tabler-chevron-left hover:bg-dutch rounded" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                                <svg onClick={
                                    ()=>{
                                        setCurDate(()=>new Date(curDate.getFullYear(), curDate.getMonth() + 1))}
                                }
                                xmlns="http://www.w3.org/2000/svg" className="cursor-pointer icon icon-tabler ml-3 icon-tabler-chevron-right hover:bg-dutch rounded" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="9 6 15 12 9 18" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-12">
                            <table className="w-full">
                                <tbody className='grid grid-cols-7'>
                                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(
                                        (day, i) => <th>
                                                    <div className="w-full flex justify-center">
                                                        <p className={
                                                            ((i===0||i===6)? styling['weekend'] : "")
                                                            + styling['days']}>{day}</p>
                                                    </div>
                                                </th>
                                    )}
                                        {/* Blank Cells */}
                                        {
                                            Array.from({ length: calInfo?.firstDay as number }).map(() => {
                                                dayCount++;
                                                return(
                                                    <td className="pt-6">
                                                    <div className="px-2 py-1 flex w-full justify-center" />
                                                    </td>
                                                )})
                                        }
                                        {/* Dated Cells */}
                                        {
                                            Array.from({ length: calInfo?.totalDays as number }).map((_, index) => {
                                                dayCount++;
                                                return(
                                                    <td className="pt-6">
                                                    <div className="px-2 py-1 flex flex-col w-full justify-center">
                                                        <p className={((dayCount%7==0 || (dayCount-1)%7==0 )? styling['weekend'] : '')+styling['date']}>{index+1}</p>
                                                        {/* <DateInfo data={'random'}/> */}
                                                    </div>
                                                </td>
                                                )})
                                        }
                                        </tbody>
                            </table>
                        </div>
                    </div>
                    {/* <ClassInfo data={'random'} /> */}
                </div>
            </div>

</div>

  );
};