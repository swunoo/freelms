export default function SearchBar() {
    return (
        <div className="md:flex gap-5 items-center mb-5 justify-end">
            <div className="relative h-10">
                <label htmlFor="inputSearch" className="sr-only">Search </label>
                <input id="inputSearch" type="text" placeholder="Search..." className="block w-64 rounded-lg border py-2 pl-10 pr-4 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400" />
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4 text-neutral-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </span>
            </div>

            <div className="relative block">
                <label htmlFor="inputFilter" className="sr-only">Filter</label>
                <select id="inputFilter" className="block w-40 h-10 rounded-lg border p-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400">
                    <option value="1" selected>Last week</option>
                    <option value="2">Last month</option>
                    <option value="3">Yesterday</option>
                    <option value="4">Last 7 days</option>
                    <option value="5">Last 30 days</option>
                </select>
            </div>
        </div>
    )
}