export const navStyle = {
    nav_container: "text-base shadow-sm bg-vanilla ",
    nav_link: "text-gray-600 hover:underline hover:-translate-y-1 ",
    active_link: "font-bold underline ",
    nav_tab: "rounded-full hover:-translate-y-1 ",
    active_tab: "bg-dutch "
}

export const sideBarStyle = {
    wrapper: "min-h-screen flex bg-eggshell",
    container: "border-2 rounded-xl overflow-hidden bg-dutch",
    calendar: {
        container: "py-6 p-3 bg-parchment w-full",
        header: "text-lg font-light text-gray-800",
        days: "text-xs font-medium text-center text-gray-800",
        weekend: "text-rose-600 ",
        date: "text-center text-xs text-gray-800 font-medium",

    },
    liveSession: {
        container: "text-gray-800 hover:brightness-110 bg-parchment rounded",
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


export const deskStyle = {
    container: "bg-eggshell",
    header: "md:mt-20 my-10 pb-5 border-b border-black text-5xl font-thin",
    card: "w-full flex rounded-lg shadow text-left overflow-hidden cursor-pointer bg-btn-confirm text-white hover:brightness-110",
    class_title: "text-lg font-bold w-full",
    class_schedule: "uppercase text-xs"
}

export const classStyle = {
    container: "bg-eggshell",
    menu: {
        container: "md:border-r border-b border-gray-300 md:min-h-screen w-full md:max-w-80 mb-10 py-5 md:mb-0 md:py-0",
        classTitle: "md:font-thin text-lg uppercase",
        unitTitle: "mt-5 cursor-pointer text-lg font-light",
        sectionTitle: "list-decimal my-3 cursor-pointer",
        btnBack: "bg-btn-cancel text-white ",
        btnEditMeta: "bg-btn-update ",
    },
    contentDisplay: {
        sectionTitle: "text-bold text-3xl mb-10",
        quizContainer: "text-base my-5 py-3 border-b border-gray-300 list-decimal",
        quizInput: "",
        scoreContainer: "flex gap-5 items-center justify-between",
        scoreText: "font-medium",
        lectureContainer: "my-10",
        btnEdit: "bg-btn-update ",
        btnRetry: "bg-btn-cancel text-white ",
        btnScore: "bg-btn-confirm font-medium text-white "
    },
    contentEdit: {
        sectionTitle: {
            label: "font-medium bg-vanilla border-neutral-300 border",
            input: "text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
        },
        quillComponent: "bg-parchment my-5",
        quizContainer: "my-5 pb-5 border-b gap-x-5 gap-y-1",
        quizTitle: "text-lg",
        quizId: "font-thin mx-5",
        quizQ: {
            label:"block",
            input: "block"
        },
        quizA: {
            label: "md:mt-3",
            input: ""
        },
        quizCorrectAns: "w-7 h-7 md:w-5 md:h-5 cursor-pointer",
        btnAddQuiz: "bg-btn-add font-medium text-white ",
        btnDeleteQuiz: "bg-btn-delete text-white ",
        btnAddAns: "bg-btn-add font-medium text-white ",
        btnDeleteAns: "hover:bg-red-300 bg-vanilla",
        btnCancel: "bg-btn-cancel text-white ",
        btnConfirm: "bg-btn-confirm font-medium text-white "
    },
    metaEdit: {
        courseTitle: "text-xs md:text-sm",
        unitContainer: " py-3 px-5 bg-gray-200 shadow my-5 text-xs md:text-sm",
        unitTitle: {
            label: "text-xs md:text-sm",
            input: "ml-1"
        },
        sectionContainer: "list-decimal my-3 grid grid-cols-2 md:flex justify-between items-center",
        sectionTitle: "col-start-1 col-end-3 mt-3 mb-1 text-sm font-semibold",
        sectionType: "",
        btnAddUnit: "bg-btn-add text-white",
        btnDeleteUnit: "bg-btn-delete text-white",
        btnAddSection: "bg-btn-add text-white",
        btnDeleteSection: "bg-gray-300",
        btnCancel: "bg-btn-cancel text-white ",
        btnConfirm: "bg-btn-confirm font-medium text-white "
    }
}