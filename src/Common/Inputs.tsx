import { ChangeEvent, ChangeEventHandler, EventHandler } from "react"

interface dropdown {
    label: string,
    name: string,
    options: {value: string, text:string}[],
    handleDropdown: EventHandler<ChangeEvent>
}
type searchBarType = { searchName?: string|undefined, handleSearch?: EventHandler<ChangeEvent>, dropdowns?: dropdown[]|undefined }

export default function SearchBar({searchName, handleSearch, dropdowns}: searchBarType) {

    return (
        <div className="md:flex gap-5 items-center mb-5 justify-end">
            
            {(searchName!==undefined) && 
                <SearchInput name={searchName} onInput={handleSearch || (e=>{})}/>}

            {   dropdowns &&
                dropdowns.map(d => {
                    return (
                        <div className="relative block ml-5">
                            <label className="flex gap-3 items-center">
                                {d.label}
                                <select onChange={d.handleDropdown} name={d.name} className="block w-40 h-10 rounded-lg border p-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400">
                                    {d.options.map(o => <option value={o.value}>{o.text}</option>)}
                                </select>
                            </label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export function SearchInput({name, onInput}: {name: string, onInput: ChangeEventHandler}){
    return (
        <div className="relative h-10">
            <input name={name} type="text" placeholder="Search..." onChange={onInput}
            className="block w-64 rounded-lg border py-2 pl-10 pr-4 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400" />
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4 text-neutral-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </span>
        </div>
    )
}

export function Input({label, name, value}: {label: string, name: string, value?:string|undefined}){
    return (
        <label className="grid grid-cols-5 items-center  rounded text-neutral-800 bg-gray-100 border-neutral-300 border">
            <p className="w-full text-center">{label}</p>
            <input name={name} value={value??""} type="text" className="w-full py-2 pl-3 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 col-start-2 col-end-6" />
        </label>
    )
}