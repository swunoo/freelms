
export const deskStyle = {
    header: "border-b text-5xl font-thin",
    class_title: "text-lg font-bold w-full",
    class_schedule: "uppercase text-xs"
}

export const classStyle = {
    menu: {
        container: "border-r border-gray-300 min-h-screen max-w-80",
        classTitle: "font-thin text-lg uppercase",
        unitTitle: "mt-5 cursor-pointer text-lg font-light",
        sectionTitle: "list-decimal my-3 cursor-pointer",
        btnBack: "",
        btnEditMeta: "",
    },
    contentDisplay: {
        sectionTitle: "text-bold text-3xl mb-10",
        quizContainer: "text-base my-5 py-3 border-b border-gray-300 list-decimal",
        quizInput: "",
        scoreContainer: "flex gap-5 items-center justify-between",
        scoreText: "font-medium",
        lectureContainer: "my-10",
        btnEdit: "",
        btnRetry: "",
        btnScore: ""
    },
    contentEdit: {
        sectionTitle: {
            label: "",
            input: ""
        },
        quillComponent: "bg-white my-5",
        quizContainer: "my-5 pb-5 border-b gap-x-5 gap-y-1",
        quizTitle: "text-lg",
        quizId: "font-thin mx-5",
        quizQ: {
            label:"",
            input: ""
        },
        quizA: {
            label: "",
            input: ""
        },
        quizCorrectAns: "w-5 cursor-pointer",
        btnAddQuiz: "",
        btnDeleteQuiz: "",
        btnAddAns: "",
        btnDeleteAns: "",
        btnCancel: "",
        btnConfirm: ""
    },
    metaEdit: {
        courseTitle: "",
        unitContainer: "rounded-xl py-3 px-5 bg-gray-200 shadow my-5",
        unitTitle: {
            label: "",
            input: ""
        },
        sectionContainer: "list-decimal my-3 flex justify-between",
        sectionTitle: "",
        sectionType: "",
        btnAddUnit: "",
        btnDeleteUnit: "",
        btnAddSection: "",
        DeleteSection: "",
        btnCancel: "",
        btnConfirm: ""
    }
}