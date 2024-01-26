export const navStyle = {
    nav_container: "text-base shadow-sm bg-white ",
    nav_link: "text-gray-600 hover:underline hover:-translate-y-1 ",
    active_link: "font-bold underline ",
    nav_tab: "rounded-full hover:-translate-y-1 ",
    active_tab: "bg-gray-100 "
}

export const sideBarStyle = {
    wrapper: "min-h-screen flex bg-eggshell",
    container: "border-2 rounded-xl overflow-hidden bg-gray-100",
    calendar: {
        container: "py-6 p-3 bg-gray-100 w-full",
        header: "text-lg font-light text-gray-800",
        days: "text-xs font-medium text-center text-gray-800",
        weekend: "text-rose-600 ",
        date: "text-center text-xs text-gray-800 font-medium",

    },
    liveSession: {
        container: "text-gray-800 hover:brightness-110 bg-white rounded",
        code: "py-1 px-2 rounded-md text-gray-100",

    },
    chat: {
        container: "border-b border-vanilla hover:bg-dutch bg-parchment",
        header: "border-b-2 border-vanilla bg-vanilla",
        headerIcon: "",
        headerText: "font-bold text-base",
        chatBackground: "bg-parchment",
        chatReceived: "bg-white",
        chatSent: "ml-auto bg-eggshell"
    },
    noti: {
        container: "p-3 border-b border-vanilla hover:bg-dutch bg-parchment",
    }
}