import { ClassUnit, classType, sectionType } from "./Common/Classroom/Menu";
import profile_pic from "./assets/images/profile.png";

const MUST_REFRESH = true;


function readLocalStorage(key: string){
    const data = localStorage.getItem(key);
    if(!MUST_REFRESH && data){
        return JSON.parse(data);
    } 
    return undefined;
}

export type userType = { id: string, alias: string, gender: 'male' | 'female' | 'other', class: string };

export class UserData {

    private userList;

    constructor(){
        const data = readLocalStorage('userList');
        if(data){
            this.userList = data;
            
        } else {
            this.userList = [
                { id: '123', profilePic: profile_pic, alias: 'jean doe', gender: 'male', class: 'biology' },
                { id: '343', profilePic: profile_pic, alias: 'amelia black', gender: 'female', class: 'japanese' },
                { id: '453454', profilePic: profile_pic, alias: 'yamada taro', gender: 'male', class: 'maths' },
                { id: '34534', profilePic: profile_pic, alias: 'john doe', gender: 'female', class: 'english' },
                { id: '54345', profilePic: profile_pic, alias: 'dupont doe', gender: 'male', class: 'biology' },
                { id: '55434', profilePic: profile_pic, alias: 'john dupont', gender: 'female', class: 'chemistry' },
            ];
            localStorage.setItem('userList', JSON.stringify(this.userList));
        }
    }

    getUserList(){
        return this.userList;
    }

    getUser(id: string){
        const matchingUsers = this.userList.filter((u: userType) => u.id === id)
        return matchingUsers ? matchingUsers[0] : null;
    }
}

export class ClassData {

    private classList;

    constructor(){
        const data = readLocalStorage('classList');
        if(data){
            this.classList = data;
        } else {
            this.classList = [
                {
                    id: '123',
                    code: "CS 2401-01",
                    title: "Software Engineering 1",
                    img: "https://my.uopeople.edu/pluginfile.php/1808190/course/overviewfiles/CS2041.jpg",
                    color: "#0F0326",
                    days: ["mon", "tue", "wed"],
                    startTime: 15, duration: 1,
                    progress: "100%",
                    isCompleted: true,
                    units: [
                        {
                            id: '96124143',
                            title: 'Introduction',
                            sections: [
                                { 
                                    isCompleted: false,
                                    id: '96124140',
                                    type: 'lecture',
                                    title: 'Discussion',
                                    content: '<p><strong>BOLD</strong>LoremIpsum <a>Link</a></p><p><strong>BOLD</strong>LoremIpsum <a>Link</a></p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium non qui laborum fugiat, voluptatibus quam labore. Ipsam voluptas sit debitis alias ex a voluptatibus libero soluta quo porro ratione assumenda aliquid mollitia modi atque, eaque incidunt molestiae consequatur nulla, animi obcaecati eligendi tempora. Repudiandae deleniti eum omnis incidunt atque velit culpa recusandae quas quis, unde dolorem sit rerum perferendis est quia veritatis molestiae corrupti molestias commodi. Ea, nemo laudantium sequi optio asperiores cumque natus inventore, veniam tempora consequatur illum, dolore nihil corporis quam id soluta doloremque voluptatum reprehenderit fugiat! Molestiae corrupti nobis repellat necessitatibus quod, dignissimos maxime nam inventore. <a>Link</a></p>'
                                },
                                {
                                    id: '96124142',
                                    type: 'quiz',
                                    title: 'Quiz',
                                    quizzes: [
                                        {id: '96124143', question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium non qui laborum fugiat, voluptatibus quam labore.', answers: [
                                            'Dolores praesentium non qui laborum fugiat',
                                            'Repudiandae deleniti eum omnis incidunt atque velit',
                                            'Molestiae corrupti nobis repellat necessitatibus quod, dignissimos maxime nam inventore.'
                                        ], correctAnsIndex: 1},
                                        {id: '96124145', question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium non qui laborum fugiat, voluptatibus quam labore.', answers: [
                                            'Dolores praesentium non qui laborum fugiat',
                                            'Repudiandae deleniti eum omnis incidunt atque velit',
                                            'Molestiae corrupti nobis repellat necessitatibus quod, dignissimos maxime nam inventore.'
                                        ], correctAnsIndex: 2},
                                        {id: '96124147', question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium non qui laborum fugiat, voluptatibus quam labore.', answers: [
                                            'Dolores praesentium non qui laborum fugiat',
                                            'Repudiandae deleniti eum omnis incidunt atque velit',
                                            'Molestiae corrupti nobis repellat necessitatibus quod, dignissimos maxime nam inventore.'
                                        ], correctAnsIndex: 0}
                                    ]
                                },
                                {
                                    id: '96124143',
                                    type: 'assignment',
                                    title: 'Assignment',
                                    content: '<p><strong>BOLD</strong>LoremIpsum <a>Link</a><strong>BOLD</strong></p>'
                                },
                            ]
                        }, {
                            id: '96124167',
                            title: 'Introduction',
                            sections: [
                                { 
                                    isCompleted: false,
                                    id: '96124198',
                                    type: 'lecture',
                                    title: 'Discussion',
                                    content: '<p><strong>BOLD</strong>LoremIpsum <a>Link</a></p>'
                                },
                                {
                                    id: '96124197',
                                    type: 'lecture',
                                    title: 'Discussion',
                                    content: '<p><strong>BOLD</strong>LoremIpsum <a>Link</a></p>'
                                },
                            ]
                        }, {
                            id: '96124199',
                            title: 'Introduction',
                            sections: [
                                { 
                                    isCompleted: false,
                                    id: '96124104',
                                    type: 'lecture',
                                    title: 'Discussion',
                                    content: '<p><strong>BOLD</strong>LoremIpsum <a>Link</a></p>'
                                },
                                {
                                    id: '96124103',
                                    type: 'lecture',
                                    title: 'Discussion',
                                    content: '<p><strong>BOLD</strong>LoremIpsum <a>Link</a></p>'
                                },
                            ]
                        }
                    ]
                },
                {
                    id: '123',
                    code: "CS 2401-01",
                    title: "Software Engineering 1",
                    img: "https://my.uopeople.edu/pluginfile.php/1808190/course/overviewfiles/CS2041.jpg",
                    color: "#9B2915",
                    days: ["mon", "tue", "wed"],
                    startTime: 15, duration: 1,
                    progress: "10%",
                    isCompleted: false,
                    units: [
                        {
                            id: '96124143',
                            title: 'Introduction',
                            sections: [
                                { 
                                    isCompleted: false,
                                    id: '96124140',
                                    type: 'lecture',
                                    title: 'Discussion',
                                    content: '<p><strong>BOLD</strong>LoremIpsum <a>Link</a></p><p><strong>BOLD</strong>LoremIpsum <a>Link</a></p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium non qui laborum fugiat, voluptatibus quam labore. Ipsam voluptas sit debitis alias ex a voluptatibus libero soluta quo porro ratione assumenda aliquid mollitia modi atque, eaque incidunt molestiae consequatur nulla, animi obcaecati eligendi tempora. Repudiandae deleniti eum omnis incidunt atque velit culpa recusandae quas quis, unde dolorem sit rerum perferendis est quia veritatis molestiae corrupti molestias commodi. Ea, nemo laudantium sequi optio asperiores cumque natus inventore, veniam tempora consequatur illum, dolore nihil corporis quam id soluta doloremque voluptatum reprehenderit fugiat! Molestiae corrupti nobis repellat necessitatibus quod, dignissimos maxime nam inventore. <a>Link</a></p>'
                                },
                                {
                                    id: '96124142',
                                    type: 'quiz',
                                    title: 'Quiz',
                                    quizzes: [
                                        {id: '96124143', question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium non qui laborum fugiat, voluptatibus quam labore.', answers: [
                                            'Dolores praesentium non qui laborum fugiat',
                                            'Repudiandae deleniti eum omnis incidunt atque velit',
                                            'Molestiae corrupti nobis repellat necessitatibus quod, dignissimos maxime nam inventore.'
                                        ], correctAnsIndex: 1},
                                        {id: '96124145', question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium non qui laborum fugiat, voluptatibus quam labore.', answers: [
                                            'Dolores praesentium non qui laborum fugiat',
                                            'Repudiandae deleniti eum omnis incidunt atque velit',
                                            'Molestiae corrupti nobis repellat necessitatibus quod, dignissimos maxime nam inventore.'
                                        ], correctAnsIndex: 2},
                                        {id: '96124147', question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium non qui laborum fugiat, voluptatibus quam labore.', answers: [
                                            'Dolores praesentium non qui laborum fugiat',
                                            'Repudiandae deleniti eum omnis incidunt atque velit',
                                            'Molestiae corrupti nobis repellat necessitatibus quod, dignissimos maxime nam inventore.'
                                        ], correctAnsIndex: 0}
                                    ]
                                },
                                {
                                    id: '96124143',
                                    type: 'assignment',
                                    title: 'Assignment',
                                    content: '<p><strong>BOLD</strong>LoremIpsum <a>Link</a><strong>BOLD</strong></p>'
                                },
                            ]
                        }, {
                            id: '96124167',
                            title: 'Introduction',
                            sections: [
                                { 
                                    isCompleted: false,
                                    id: '96124198',
                                    type: 'lecture',
                                    title: 'Discussion',
                                    content: '<p><strong>BOLD</strong>LoremIpsum <a>Link</a></p>'
                                },
                                {
                                    id: '96124197',
                                    type: 'lecture',
                                    title: 'Discussion',
                                    content: '<p><strong>BOLD</strong>LoremIpsum <a>Link</a></p>'
                                },
                            ]
                        }, {
                            id: '96124199',
                            title: 'Introduction',
                            sections: [
                                { 
                                    isCompleted: false,
                                    id: '96124104',
                                    type: 'lecture',
                                    title: 'Discussion',
                                    content: '<p><strong>BOLD</strong>LoremIpsum <a>Link</a></p>'
                                },
                                {
                                    id: '96124103',
                                    type: 'lecture',
                                    title: 'Discussion',
                                    content: '<p><strong>BOLD</strong>LoremIpsum <a>Link</a></p>'
                                },
                            ]
                        }
                    ]
                },
                {
                    id: '123',
                    code: "CS 2401-01",
                    title: "Software Engineering 1",
                    img: "https://my.uopeople.edu/pluginfile.php/1808190/course/overviewfiles/CS2041.jpg",
                    color: "#2E2F2F",
                    days: ["mon", "tue", "wed"],
                    startTime: 15, duration: 1,
                    progress: "70%",
                    isCompleted: false,
                    units: [
                        {
                            id: '96124143',
                            title: 'Introduction',
                            sections: [
                                { 
                                    isCompleted: false,
                                    id: '96124140',
                                    type: 'lecture',
                                    title: 'Discussion',
                                    content: '<p><strong>BOLD</strong>LoremIpsum <a>Link</a></p><p><strong>BOLD</strong>LoremIpsum <a>Link</a></p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium non qui laborum fugiat, voluptatibus quam labore. Ipsam voluptas sit debitis alias ex a voluptatibus libero soluta quo porro ratione assumenda aliquid mollitia modi atque, eaque incidunt molestiae consequatur nulla, animi obcaecati eligendi tempora. Repudiandae deleniti eum omnis incidunt atque velit culpa recusandae quas quis, unde dolorem sit rerum perferendis est quia veritatis molestiae corrupti molestias commodi. Ea, nemo laudantium sequi optio asperiores cumque natus inventore, veniam tempora consequatur illum, dolore nihil corporis quam id soluta doloremque voluptatum reprehenderit fugiat! Molestiae corrupti nobis repellat necessitatibus quod, dignissimos maxime nam inventore. <a>Link</a></p>'
                                },
                                {
                                    id: '96124142',
                                    type: 'quiz',
                                    title: 'Quiz',
                                    quizzes: [
                                        {id: '96124143', question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium non qui laborum fugiat, voluptatibus quam labore.', answers: [
                                            'Dolores praesentium non qui laborum fugiat',
                                            'Repudiandae deleniti eum omnis incidunt atque velit',
                                            'Molestiae corrupti nobis repellat necessitatibus quod, dignissimos maxime nam inventore.'
                                        ], correctAnsIndex: 1},
                                        {id: '96124145', question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium non qui laborum fugiat, voluptatibus quam labore.', answers: [
                                            'Dolores praesentium non qui laborum fugiat',
                                            'Repudiandae deleniti eum omnis incidunt atque velit',
                                            'Molestiae corrupti nobis repellat necessitatibus quod, dignissimos maxime nam inventore.'
                                        ], correctAnsIndex: 2},
                                        {id: '96124147', question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium non qui laborum fugiat, voluptatibus quam labore.', answers: [
                                            'Dolores praesentium non qui laborum fugiat',
                                            'Repudiandae deleniti eum omnis incidunt atque velit',
                                            'Molestiae corrupti nobis repellat necessitatibus quod, dignissimos maxime nam inventore.'
                                        ], correctAnsIndex: 0}
                                    ]
                                },
                                {
                                    id: '96124143',
                                    type: 'assignment',
                                    title: 'Assignment',
                                    content: '<p><strong>BOLD</strong>LoremIpsum <a>Link</a><strong>BOLD</strong></p>'
                                },
                            ]
                        }, {
                            id: '96124167',
                            title: 'Introduction',
                            sections: [
                                { 
                                    isCompleted: false,
                                    id: '96124198',
                                    type: 'lecture',
                                    title: 'Discussion',
                                    content: '<p><strong>BOLD</strong>LoremIpsum <a>Link</a></p>'
                                },
                                {
                                    id: '96124197',
                                    type: 'lecture',
                                    title: 'Discussion',
                                    content: '<p><strong>BOLD</strong>LoremIpsum <a>Link</a></p>'
                                },
                            ]
                        }, {
                            id: '96124199',
                            title: 'Introduction',
                            sections: [
                                { 
                                    isCompleted: false,
                                    id: '96124104',
                                    type: 'lecture',
                                    title: 'Discussion',
                                    content: '<p><strong>BOLD</strong>LoremIpsum <a>Link</a></p>'
                                },
                                {
                                    id: '96124103',
                                    type: 'lecture',
                                    title: 'Discussion',
                                    content: '<p><strong>BOLD</strong>LoremIpsum <a>Link</a></p>'
                                },
                            ]
                        }
                    ]
                }
            ]
            localStorage.setItem('classList', JSON.stringify(this.classList));
        }
    }

    getClassList(){
        return this.classList;
    }

    getClass(id: string){
        const matchingClasses = this.classList.filter((c: classType) => c.id === id)
        return matchingClasses ? matchingClasses[0] : null;
    }

    getPreviousSection(curId: string){
        for(const clazz of this.classList){
            for(const unit of clazz.units){
                for(let i = 0; i<unit.sections.length; i++){
                    if(unit.sections[i].id === curId){
                        return (i===0 ? undefined : unit.sections[i-1]);
                    }
                }
            }
        }
    }

    getNextSection(curId: string){
        for(const clazz of this.classList){
            for(const unit of clazz.units){
                for(let i = 0; i<unit.sections.length; i++){
                    if(unit.sections[i].id === curId){
                        return (i===unit.sections.length-1 ? undefined : unit.sections[i+1]);
                    }
                }
            }
        }
    }

    toggleSectionCompletion(section: sectionType){

        const newSection = {...section, isCompleted: !section.isCompleted}
        this.updateSection(newSection);

        return newSection;
    }

    updateSection(section: sectionType){
        for(const clazz of this.classList){
            for(const unit of clazz.units){
                for(const curSection of unit.sections){
                    if(curSection.id === section.id){
                        const index = unit.sections.indexOf(curSection);
                        unit.sections[index] = section;
                        localStorage.setItem('classList', JSON.stringify(this.classList));
                        return;
                    }
                }
            }
        }
    }

    updateUnit (unit: ClassUnit){
        for(const clazz of this.classList){
            for(const curUnit of clazz.units){
                if(curUnit.id === unit.id){
                    const index = clazz.units.indexOf(curUnit);
                    clazz.units[index] = unit;
                    localStorage.setItem('classList', JSON.stringify(this.classList));
                    return;
                }
            }
        }
    }

    updateClass (clazz: classType){
        for(const curClazz of this.classList){
            if(curClazz.id === clazz.id){
                const index = this.classList.indexOf(curClazz);
                this.classList[index] = clazz
                localStorage.setItem('classList', JSON.stringify(this.classList));
                return;
            }
        }
    }
}

export class NotiData {

    private notiList;

    constructor(){
        const data = readLocalStorage('notiList');
        if(data){
            this.notiList = data;
        } else {
            this.notiList = [
                {
                    id: '123',
                    title: 'Lorem Ipsum',
                    content: 'Lorem Ipsum dolor sit amet',
                    datetime: '10:15'
                },
                {
                    id: '123',
                    title: 'Lorem Ipsum',
                    content: 'Lorem Ipsum dolor sit amet',
                    datetime: 'FRI 15:00'
                },
                {
                    id: '123',
                    title: 'Lorem Ipsum',
                    content: 'Lorem Ipsum dolor sit amet',
                    datetime: 'THU 13:30'
                },
            ]
            localStorage.setItem('notiList', JSON.stringify(this.notiList));
        }
    }

    getNotiList(){
        return this.notiList;
    }
}

type chatType = any; //TODO
export class ChatData {

    private chatList;
    private chatDetails;

    constructor(){
        const chatList = readLocalStorage('chatList');
        if(chatList){
            this.chatList = chatList;
        } else {
            this.chatList = [
                {
                    id: '123',
                    name: 'Joan Doe',
                    img: profile_pic,
                    msg: "Hello World",
                    datetime: '15:30'
                },
                {
                    id: '123',
                    name: 'Mark Dupont',
                    img: profile_pic,
                    msg: "Lorem ipsum dolor sit amet",
                    datetime: 'FRI 15:30'
                },
                {
                    id: '123',
                    name: 'Davide Doe',
                    img: profile_pic,
                    msg: "Dolores praesentium non qui laborum fugiat, voluptatibus quam labore. Ipsam voluptas sit debitis alias ex a voluptatibus libero soluta quo porro ratione assumenda aliquid mollitia modi atque, eaque incidunt molestiae consequatur nulla, animi obcaecati eligendi tempora. Repudiandae deleniti eum omnis incidunt atque velit culpa recusandae quas quis, unde dolorem sit rerum perferendis est quia veritatis molestiae corrupti molestias commodi. Ea, nemo laudantium sequi optio asperiores cumque natus inventore, veniam tempora consequatur illum, dolore nihil corporis quam id soluta doloremque voluptatum reprehenderit fugiat! Molestiae corrupti nobis repellat necessitatibus quod, dignissimos maxime nam inventore.",
                    datetime: 'FRI 16:30'
                },
            ]
            localStorage.setItem('chatList', JSON.stringify(this.chatList));
        }

        const chatDetails = readLocalStorage('chatDetails');
        if(chatDetails){
            this.chatDetails = chatDetails;
        } else {
            this.chatDetails = [
                {
                    isReceived: true,
                    msg: "Hello World",
                    datetime: '15:30'
                },{
                    isReceived: false,
                    msg: "Hello World",
                    datetime: 'THU 15:30'
                }, {
                    isReceived: true,
                    msg: "Hello World",
                    datetime: 'TUE 15:30'
                }, {
                    isReceived: true,
                    msg: "Hello World",
                    datetime: '15:30'
                }, {
                    isReceived: false,
                    msg: "Hello World",
                    datetime: 'THU 15:30'
                }, {
                    isReceived: true,
                    msg: "Hello World",
                    datetime: 'TUE 15:30'
                }, {
                    isReceived: true,
                    msg: "Hello World",
                    datetime: '15:30'
                }, {
                    isReceived: false,
                    msg: "Hello World",
                    datetime: 'THU 15:30'
                }, {
                    isReceived: true,
                    msg: "Hello World",
                    datetime: 'TUE 15:30'
                },
            ];
            localStorage.setItem('chatDetails', JSON.stringify(this.chatDetails));
        }
    }

    getChatList(){
        return this.chatList;
    }

    getChatDetails(id: string) {
        const chat = this.chatList.filter((c: chatType) => c.id === id);
        if(chat) return this.chatDetails;
        else return null;
    }
}

export type liveSessionType = any; //TODO
export class LiveData {
    private liveSessionList;

    constructor(){
        const data = readLocalStorage('liveSessionList');
        if(data){
            this.liveSessionList = data;
        } else {
            this.liveSessionList = [
                {
                    id: '123',
                    code: "CS 2401-01",
                    name: "Software Engineering 1",
                    color: "#0F0326",
                    startTime: 15, duration: 1
                },
                {
                    id: '123',
                    code: "CS 2401-01",
                    name: "Software Engineering 1",
                    color: "#9B2915",
                    startTime: 15, duration: 1
                },
                {
                    id: '123',
                    code: "CS 2401-01",
                    name: "Software Engineering 1",
                    color: "#284B63",
                    startTime: 15, duration: 1
                },
            ]
            localStorage.setItem('liveSessionList', JSON.stringify(this.liveSessionList));
        }
    }

    getLiveSessionList(){
        return this.liveSessionList;
    }
}