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
        color: "#153131",
        days: ["mon", "tue", "wed"],
        startTime: 15, duration: 1
    },
    {
        id: '123',
        code: "CS 2401-01",
        name: "Software Engineering 1",
        img: "https://my.uopeople.edu/pluginfile.php/1808190/course/overviewfiles/CS2041.jpg",
        color: "#6A7FDB",
        days: ["mon", "tue", "wed"],
        startTime: 15, duration: 1
    },
    {
        id: '123',
        code: "CS 2401-01",
        name: "Software Engineering 1",
        img: "https://my.uopeople.edu/pluginfile.php/1808190/course/overviewfiles/CS2041.jpg",
        color: "#45CB85",
        days: ["mon", "tue", "wed"],
        startTime: 15, duration: 1
    },
    {
        id: '123',
        code: "CS 2401-01",
        name: "Software Engineering 1",
        img: "https://my.uopeople.edu/pluginfile.php/1808190/course/overviewfiles/CS2041.jpg",
        color: "#6A7FDB",
        days: ["mon", "tue", "wed"],
        startTime: 15, duration: 1
    },
    {
        id: '123',
        code: "CS 2401-01",
        name: "Software Engineering 1",
        img: "https://my.uopeople.edu/pluginfile.php/1808190/course/overviewfiles/CS2041.jpg",
        color: "#45CB85",
        days: ["mon", "tue", "wed"],
        startTime: 15, duration: 1
    },
]

export const mockLiveSessionList = [
    {
        id: '123',
        code: "CS 2401-01",
        name: "Software Engineering 1",
        color: "#6A7FDB",
        startTime: 15, duration: 1
    },
    {
        id: '123',
        code: "CS 2401-01",
        name: "Software Engineering 1",
        color: "#57E2E5",
        startTime: 15, duration: 1
    },
    {
        id: '123',
        code: "CS 2401-01",
        name: "Software Engineering 1",
        color: "#45CB85",
        startTime: 15, duration: 1
    },
]

export const mockClassData = {
    id: 'c123',
    title: 'CS12345',
    color: '#45CB85',
    units: [
        {
            id: 'u123',
            title: 'Introduction',
            sections: [
                {
                    id: 's12345',
                    title: 'Discussion',
                    content: '<p>LoremIpsum <a>Link</a></p><p>LoremIpsum <a>Link</a></p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium non qui laborum fugiat, voluptatibus quam labore. Ipsam voluptas sit debitis alias ex a voluptatibus libero soluta quo porro ratione assumenda aliquid mollitia modi atque, eaque incidunt molestiae consequatur nulla, animi obcaecati eligendi tempora. Repudiandae deleniti eum omnis incidunt atque velit culpa recusandae quas quis, unde dolorem sit rerum perferendis est quia veritatis molestiae corrupti molestias commodi. Ea, nemo laudantium sequi optio asperiores cumque natus inventore, veniam tempora consequatur illum, dolore nihil corporis quam id soluta doloremque voluptatum reprehenderit fugiat! Molestiae corrupti nobis repellat necessitatibus quod, dignissimos maxime nam inventore. <a>Link</a></p>'
                },
                {
                    id: 's12345',
                    title: 'Discussion',
                    content: '<p>LoremIpsum <a>Link</a></p>'
                },
            ]
        }, {
            id: 'u123',
            title: 'Introduction',
            sections: [
                {
                    id: 's12345',
                    title: 'Discussion',
                    content: '<p>LoremIpsum <a>Link</a></p>'
                },
                {
                    id: 's12345',
                    title: 'Discussion',
                    content: '<p>LoremIpsum <a>Link</a></p>'
                },
            ]
        }, {
            id: 'u123',
            title: 'Introduction',
            sections: [
                {
                    id: 's12345',
                    title: 'Discussion',
                    content: '<p>LoremIpsum <a>Link</a></p>'
                },
                {
                    id: 's12345',
                    title: 'Discussion',
                    content: '<p>LoremIpsum <a>Link</a></p>'
                },
            ]
        }
    ]
}