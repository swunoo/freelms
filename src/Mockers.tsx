import profile_pic from "./assets/images/profile.png";

export type mockUserType = { id: string, alias: string, gender: 'male' | 'female' | 'other', class: string };
export const mockUserList: mockUserType[] = [
        { id: '123', alias: 'jean doe', gender: 'male', class: 'biology' },
        { id: '343', alias: 'amelia black', gender: 'female', class: 'japanese' },
        { id: '453454', alias: 'yamada taro', gender: 'male', class: 'maths' },
        { id: '34534', alias: 'john doe', gender: 'female', class: 'english' },
        { id: '54345', alias: 'dupont doe', gender: 'male', class: 'biology' },
        { id: '55434', alias: 'john dupont', gender: 'female', class: 'chemistry' },
    ];

export const mockUser = {
    id: '123', alias: 'jean doe', gender: 'male', class: 'biology', age: 15, profilePic: profile_pic
};

export const mockClassList = [
    {
        id: '123',
        code: "CS 2401-01",
        name: "Software Engineering 1",
        img: "https://my.uopeople.edu/pluginfile.php/1808190/course/overviewfiles/CS2041.jpg",
        color: "#aa0000",
        days: ["mon", "tue", "wed"],
        startTime: 15, duration: 1
    },
    {
        id: '123',
        code: "CS 2401-01",
        name: "Software Engineering 1",
        img: "https://my.uopeople.edu/pluginfile.php/1808190/course/overviewfiles/CS2041.jpg",
        color: "#00ff00",
        days: ["mon", "tue", "wed"],
        startTime: 15, duration: 1
    },
    {
        id: '123',
        code: "CS 2401-01",
        name: "Software Engineering 1",
        img: "https://my.uopeople.edu/pluginfile.php/1808190/course/overviewfiles/CS2041.jpg",
        color: "#000000",
        days: ["mon", "tue", "wed"],
        startTime: 15, duration: 1
    },
]

export const mockLiveSessionList = [
    {
        id: '123',
        code: "CS 2401-01",
        name: "Software Engineering 1",
        color: "#1122FF",
        startTime: 15, duration: 1
    },
    {
        id: '123',
        code: "CS 2401-01",
        name: "Software Engineering 1",
        color: "#FF0000",
        startTime: 15, duration: 1
    },
    {
        id: '123',
        code: "CS 2401-01",
        name: "Software Engineering 1",
        color: "#00FFEE",
        startTime: 15, duration: 1
    },
]