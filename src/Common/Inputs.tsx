import { ChangeEvent, ChangeEventHandler, EventHandler, useState } from "react"

interface dropdown {
    label: string,
    name: string,
    options: {value: string, text:string}[],
    handleDropdown: (s: string)=>void
}
type searchBarType = { searchName?: string|undefined, handleSearch?: EventHandler<ChangeEvent>, dropdowns?: dropdown[]|undefined }

export default function SearchBar({searchName, handleSearch, dropdowns}: searchBarType) {

    return (
        <div className="md:flex gap-5 items-center mb-5 justify-end">
            
            {(searchName!==undefined) && 
                <SearchInput name={searchName} onInput={handleSearch || (e=>{})}/>}

            {   dropdowns &&
                dropdowns.map(d => (
                    <Dropdown label={d.label} name={d.name} options={d.options} handler={d.handleDropdown} />    
                )
                )
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

export function Input({label, name, value, styling}: {label: string, name: string, value?:string|undefined, styling?: {label: string, input: string}}){

    const [inputValue, setInputValue] = useState(value);

    return (
        <label className={"md:grid grid-cols-5 items-center rounded " + (styling?styling.label:'')}>
            <p className="w-full md:text-center mb-2 md:mb-0">{label}</p>
            <input name={name} onChange={(e)=>setInputValue(e.target.value)} value={inputValue} type="text" className={"w-full py-2 pl-3 col-start-2 col-end-6 " + (styling?styling.input:'')} />
        </label>
    )
}

export function Textarea({label, name, value, styling}: {label: string, name: string, value?:string|undefined, styling?: {label: string, input: string}}){

    const [inputValue, setInputValue] = useState(value);

    return (
        <label className={"md:grid grid-cols-5 items-start rounded " + (styling?styling.label:'')}>
            <p className="w-full md:text-center mb-2 md:mb-0">{label}</p>
            <textarea name={name} onChange={(e)=>setInputValue(e.target.value)} value={inputValue} className={"w-full py-2 pl-3 col-start-2 col-end-6 " + (styling?styling.input:'')} />
        </label>
    )
}

export function Dropdown({label, name, options, value, styling, handler}: {label?:string, value?:string, name:string, options:{value: string, text: string}[], styling?: string, handler?: (s: string)=>void}){

    const [selectValue, setSelectValue] = useState(value);

    const onDropdownChange = (e: any) => {
        const value = e.target.value;
        setSelectValue(value);
        if(handler) handler(value);
    }

    return (
        <label className="flex gap-3 items-center">
            {label??""}
            <select name={name} value={selectValue} onChange={onDropdownChange} className={"block w-40 h-10 rounded-lg border p-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 bg-neutral-100 " + (styling??"")}>
                {options.map(o => <option value={o.value}>{o.text}</option>)}
            </select>
        </label>
    )
}