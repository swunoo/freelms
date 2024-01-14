export const sampleClasses = [
    {
        id: 'c01',
        code: "CS 1203",
        title: "HTML Fundamentals",
        img: "https://my.uopeople.edu/pluginfile.php/1808190/course/overviewfiles/CS2041.jpg",
        color: "#0F0326",
        days: ["mon", "tue", "wed"],
        startTime: 15, duration: 1,
        progress: "100%",
        isCompleted: true,
        units: [
            {
                id: 'u0101',
                title: 'Introduction to Web Development',
                sections: [
                    { 
                        isCompleted: true,
                        id: 's010101',
                        type: 'lecture',
                        title: 'Understanding the Basics',
                        content: `In the vast world of web development, we embark on a journey to create and maintain digital experiences. Web development involves the intricate process of building websites and web applications, combining creativity, design, and programming. As beginners, it's crucial to grasp the fundamental technologies that power the web.
                        
                        <br/><br/><strong> Overview of Web Development </strong><br/>
                        
                        Web development is the craft of bringing ideas to life on the World Wide Web. It encompasses a variety of tasks and processes that result in the creation of websites or web applications. These digital spaces can be static or dynamic, offering diverse content and interactive features. Understanding the history and purpose of web development sets the stage for our exploration.
                        
                        <br/><br/><strong> Evolution of Web Technologies </strong><br/>
                        
                        The evolution of web technologies has shaped the internet we know today. Initially, websites were static, displaying fixed content without much interactivity. The demand for dynamic and interactive experiences led to the development of client-side and server-side technologies. This unit delves into this evolution, providing context for the tools and techniques we use in modern web development.
                        
                        <br/><br/><strong> Role of HTML, CSS, and JavaScript </strong><br/>
                        
                        To comprehend web development, we must grasp the collaborative role of three essential technologies: HTML, CSS, and JavaScript.
                        <ul>
                        <br/><li> <i>HTML (Hypertext Markup Language):</i><br/> HTML acts as the foundational markup language, defining the structure of web content. Through HTML, we structure text, embed images, create links, and establish the core elements of a webpage.</li>
                        
                        <br/><li> <i>CSS (Cascading Style Sheets):</i><br/> CSS takes the visual presentation to the next level. It's responsible for styling HTML elements, enabling us to control layout, colors, fonts, and overall aesthetics. CSS adds the visual appeal that makes websites engaging and user-friendly.</li>
                        
                        <br/><li> <i>JavaScript:</i><br/> JavaScript, a versatile programming language, brings interactivity and dynamic behavior to web pages. It allows us to create responsive and interactive user experiences, making web content more than just static information.</li>
                        </ul>
                        Understanding the roles of HTML, CSS, and JavaScript lays the foundation for our journey into web development. These technologies work collaboratively, each playing a crucial role in the creation of web experiences.`
                    },
                    {
                        id: 's010102',
                        type: 'lecture',
                        title: 'Setting Up Your Development Environment',
                        content: `Now that we have a conceptual understanding, let's prepare our toolkit for hands-on development.
                        
                        <br/><br/><strong> Installing a Text Editor </strong><br/>
                        
                        The text editor is our workspace, where we craft and organize code. Visual Studio Code, a widely-used and beginner-friendly choice, will be our focus. Installation is a straightforward process, and this unit will guide you through it, ensuring you have the necessary tools for coding.
                        
                        <br/><br/><strong> Introduction to Browsers and Developer Tools </strong><br/>
                        
                        Web browsers are our portals to the internet, and understanding their tools is pivotal for a developer. This unit introduces you to browsers and their developer tools. Regardless of your preferred browser, we'll explore the tools that facilitate debugging and inspecting web pages, essential skills for any web developer.`
                    },
                    {
                        id: 's010103',
                        type: 'lecture',
                        title: 'Creating Your First HTML File',
                        content: `Now, let's dive into the practical aspect of web development by creating your first HTML file. This hands-on experience will help you understand the fundamental structure of an HTML document and how to set up a simple webpage.
                        
                        <br/><br/><strong> Anatomy of an HTML Document </strong><br/>
                        
                        An HTML document is structured using various elements, each serving a specific purpose. Here's a breakdown of the key components:
                        
                        - <code><!DOCTYPE html>:</code> This declaration defines the document type and version of HTML. It ensures that the browser interprets the document correctly.
                        
                        - <code>&lt;html&gt;:</code> The root element of an HTML document, encapsulating all content on the page.
                        
                        - <code>&lt;head&gt;:</code> This section contains meta-information about the HTML document, such as the title, character set, and links to external resources.
                        
                        - <code>&lt;body&gt;:</code> The main content of the HTML document resides within this element. It includes text, images, links, and other elements that make up the visible part of the webpage.
                        
                        <br/><br/><strong> Basic HTML Structure</strong><br/>
                        
                        Let's put this structure into action. Open your text editor, and type the following code:
                        
                        <code>
                        <br/> &lt;!DOCTYPE html&gt;
                        <br/> &lt;html&gt;
                          <br/> &lt;head&gt;
                          <br/> &lt;title>My First Web Page&lt;/title&gt;
                          <br/> &lt;/head&gt;
                          <br/> &lt;body&gt;
                            <br/> &lt;h1&gt;Hello, World!&lt;/h1&gt;
                            <br/> &lt;p&gt;This is my first HTML page. Welcome!&lt;/p&gt;
                            <br/> &lt;/body&gt;
                            <br/> &lt;/html&gt;
                        </code>
                        
                        <br/>In this example:
                        <ul>
                        <li> We declare the document type (<code>&lt;!DOCTYPE html></code>).</li>
                        <li> The HTML document starts with <code>&lt;html&gt;</code>and ends with <code>&lt;/html&gt;</code>.</li>
                        <li> The &lt;head&gt; section contains the page title, which appears in the browser tab.</li>
                        <li> The main content is within the <code>&lt;body&gt;</code> section, featuring a heading (<code>&lt;h1&gt;</code>) and a paragraph (&lt;p&gt;).</li>
                        </ul>
                        
                        <br/><br/><strong> Writing and Saving Your First HTML File </strong><br/>
                        
                        1. Copy the HTML code above.
                        2. Open your text editor (Visual Studio Code, for example).
                        3. Paste the code into a new file.
                        4. Save the file with a ".html" extension (e.g., "index.html").
                        
                        Congratulations! You've just created your first HTML file.
                        
                        <br/><br/><strong> Viewing the HTML File in a Web Browser </strong><br/>
                        
                        To see your creation in action:
                        
                        1. Locate the saved HTML file on your computer.
                        2. Right-click on the file and choose "Open with" and select your preferred web browser (e.g., Chrome, Firefox).
                        3. Your browser will render the HTML, displaying the "Hello, World!" heading and accompanying paragraph.
                        
                        By following these steps, you've not only learned the basic structure of an HTML document but also successfully created and viewed your first webpage. This hands-on experience sets the stage for more complex web development tasks in the upcoming units. Feel free to experiment with the code and explore how changes impact the webpage.`
                    },
                    {
                        id: 's010104',
                        type: 'quiz',
                        title: 'Quiz',
                        quizzes: [
                        {
                            id: 'q01010401',
                            question: 'What is the purpose of <!DOCTYPE html> declaration in an HTML document?',
                            answers: [
                            'It defines the document type and version of HTML.',
                            'It creates a new HTML document.',
                            'It specifies the language of the document.'
                            ],
                            correctAnsIndex: 0
                        },
                        {
                            id: 'q01010402',
                            question: 'Which HTML element is the root element of an HTML document?',
                            answers: [
                            '<body>',
                            '<html>',
                            '<head>'
                            ],
                            correctAnsIndex: 1
                        },
                        {
                            id: 'q01010403',
                            question: 'What type of information is typically placed in the &lt;head&gt; section of an HTML document?',
                            answers: [
                            'Main content of the webpage',
                            'Page title, character set, and links to external resources',
                            'Footer information'
                            ],
                            correctAnsIndex: 1
                        },
                        {
                            id: 'q01010404',
                            question: 'Which HTML tag is used to define the main content of a webpage?',
                            answers: [
                            '<main>',
                            '<section>',
                            '<body>'
                            ],
                            correctAnsIndex: 2
                        },
                        {
                            id: 'q01010405',
                            question: 'In HTML, what does the <h1> tag represent?',
                            answers: [
                            'Hyperlink',
                            'Header level 1 (main heading)',
                            'Horizontal line'
                            ],
                            correctAnsIndex: 1
                        }
                        ]

                    },
                ]
            },
            {
                id: 'u0102',
                title: 'HTML Essentials',
                sections: [
                    { 
                        isCompleted: false,
                        id: 's010201',
                        type: 'lecture',
                        title: 'HTML Structure and Elements',
                        content: `<br/><br/><strong> HTML Document Structure </strong><br/>
                        
                        The structure of an HTML document is fundamental to creating well-organized and semantic web pages. At its core, an HTML document consists of a series of nested elements, each serving a specific purpose. The document begins with a declaration specifying the document type and version, followed by the root <code>&lt;html&gt;</code> element encapsulating all content. Within this structure, the <code>&lt;head&gt;</code> section contains meta-information, while the <code>&lt;body&gt;</code> section houses the main content visible to users.
                        
                        <br/><br/><strong> Common HTML Elements (Headings, Paragraphs, Lists) </strong><br/>
                        
                        HTML provides a variety of elements to structure content. Headings (<code>&lt;h1&gt;</code>, <code><h2></code>, etc.) define the hierarchy of titles on a page, guiding readers through the information. Paragraphs (<code>&lt;p&gt;</code>) organize textual content, enhancing readability. Lists, both ordered (<code>&lt;ol&gt;</code>) and unordered (<code>&lt;ul&gt;</code>), aid in presenting information in a structured manner.
                        
                        <br/><br/><strong> Links and Anchors </strong><br/>
                        
                        Links play a crucial role in connecting web pages. The anchor (<code>&lt;a&gt;</code>) element facilitates the creation of hyperlinks, allowing users to navigate seamlessly between different pages or external resources. Understanding the syntax of links and the use of attributes like <code>href</code> is essential for effective navigation and resource referencing.
                        `
                    },
                    {
                        id: 's010102',
                        type: 'lecture',
                        title: 'Working with Forms and Multimedia',
                        content: `<br/><br/><strong> Creating Forms for User Input </strong><br/>
                        
                        Forms are interactive elements that enable users to submit data to a website. The <code><form></code> element encapsulates various input elements like text fields, checkboxes, and buttons. Understanding form structure, attributes, and submission mechanisms is crucial for implementing user-friendly interfaces and collecting information from visitors.
                        
                        <br/><br/><strong> Embedding Images and Videos </strong><br/>
                        
                        Multimedia elements enhance the visual appeal of web pages. HTML provides tags like <code>&lt;img&gt;</code> for images and <code>&lt;video&gt;</code> for videos, allowing seamless integration of multimedia content. Learning how to embed media, set attributes like <code>src</code>, and ensure responsiveness contributes to creating engaging and dynamic web experiences.
                        
                        <br/><br/><strong> Accessibility Considerations in HTML </strong><br/>
                        
                        Web accessibility is a key consideration in modern web development. Ensuring that web content is accessible to all users, including those with disabilities, is both ethical and often required by regulations. HTML offers semantic elements and attributes (such as ARIA roles) that enhance accessibility. Understanding how to use these features ensures a more inclusive web experience for all users.
                        
                        Mastering these aspects of HTML structure and elements, as well as working with forms and multimedia, empowers web developers to create well-organized, accessible, and visually appealing websites.`
                    },
                    {
                        id: 's010204',
                        type: 'quiz',
                        title: 'Quiz',
                        quizzes: [
                            {
                              id: 'q01020411',
                              question: 'What is the purpose of the HTML <head> element?',
                              answers: [
                                'To define the main content of the webpage',
                                'To contain meta-information about the HTML document',
                                'To create links and anchors'
                              ],
                              correctAnsIndex: 1
                            },
                            {
                              id: 'q01020412',
                              question: 'Which HTML element is used to define the hierarchy of titles on a page?',
                              answers: [
                                '<p>',
                                '<h1>',
                                '<ul>'
                              ],
                              correctAnsIndex: 1
                            },
                            {
                              id: 'q01020413',
                              question: 'What type of content does the HTML <p> element represent?',
                              answers: [
                                'Multimedia content',
                                'Headings',
                                'Text paragraphs'
                              ],
                              correctAnsIndex: 2
                            },
                            {
                              id: 'q01020414',
                              question: 'Which HTML element is used to create an ordered list?',
                              answers: [
                                '<ul>',
                                '<li>',
                                '<ol>'
                              ],
                              correctAnsIndex: 2
                            },
                            {
                              id: 'q01020415',
                              question: 'What is the purpose of the HTML </li><a> element?',
                              answers: [
                                'To embed images',
                                'To create forms',
                                'To define hyperlinks and anchors'
                              ],
                              correctAnsIndex: 2
                            },
                            {
                              id: 'q01020416',
                              question: 'Which HTML attribute is commonly used in the <a> element to specify the destination URL?',
                              answers: [
                                'src',
                                'alt',
                                'href'
                              ],
                              correctAnsIndex: 2
                            },
                            {
                              id: 'q01020417',
                              question: 'What is the main purpose of HTML forms?',
                              answers: [
                                'To display multimedia content',
                                'To create ordered lists',
                                'To collect user input and submit data'
                              ],
                              correctAnsIndex: 2
                            },
                            {
                              id: 'q01020418',
                              question: 'Which HTML element is used to embed images?',
                              answers: [
                                '<img>',
                                '<video>',
                                '<form>'
                              ],
                              correctAnsIndex: 0
                            },
                            {
                              id: 'q01020419',
                              question: 'What does ARIA stand for in the context of web accessibility?',
                              answers: [
                                'Accessible Resource Integration and Application',
                                'Aesthetic Rendering for Internet Audiences',
                                'Accessible Rich Internet Applications'
                              ],
                              correctAnsIndex: 2
                            },
                            {
                              id: 'q01020420',
                              question: 'Why is web accessibility important in HTML?',
                              answers: [
                                'It increases website loading speed',
                                'It enhances visual aesthetics',
                                'It ensures inclusivity for users with disabilities'
                              ],
                              correctAnsIndex: 2
                            }
                          ]
                    },
                ]
            },
            {
                id: 'u0103',
                title: 'Conclusion',
                sections: [
                    { 
                        isCompleted: false,
                        id: 's010301',
                        type: 'lecture',
                        title: 'Further Learning',
                        content: `<br/><br/><strong>Online Resources on Fundamental Web Development</strong><br/>

                        Continuing your journey in web development involves tapping into a wealth of online resources that can deepen your understanding and hone your skills. Below, we've compiled a list of valuable online resources that cover fundamental web development topics. These resources encompass tutorials, documentation, and interactive platforms designed to support learners at various stages of their web development journey.
                        <ol>
                        <br/><li> <i>Mozilla Developer Network (MDN)</i><br/>
                        - <a href="https://developer.mozilla.org"> Mozilla Developer Network </a>
                        - MDN is a comprehensive resource that covers HTML, CSS, JavaScript, and other web technologies. It provides detailed documentation, guides, and interactive examples, making it an excellent companion for beginners and advanced learners alike.
                        </li>
                        <br/><li> <i>freeCodeCamp</i><br/>
                        - <a href="https://www.freecodecamp.org"> freeCodeCamp </a>
                        - freeCodeCamp is an interactive learning platform that covers full-stack web development. It offers a hands-on coding curriculum, projects, and a supportive community. Completing their certifications can solidify your understanding of key web development concepts.</li>

                        <br/><li> <i>Coursera Web Development Courses</i><br/>
                        - <a href="https://www.coursera.org"> Coursera </a>
                        - Coursera offers a range of web development courses from top universities and institutions. These courses cover everything from the basics to advanced topics, providing a structured learning path with video lectures and assignments.</li>

                        These resources offer a mix of documentation, interactive coding practice, and community engagement. As you progress, consider exploring additional resources tailored to your specific interests within web development. Remember, continuous learning and hands-on practice are key to mastering the art of web development.
                        `
                    },
                    {
                        id: 's010302',
                        type: 'quiz',
                        title: 'Final Test',
                        quizzes: [
                                {
                                    id: 'q01010406',
                                    question: 'What does CSS stand for in web development?',
                                    answers: [
                                    'Cascading Style Sheets',
                                    'Creative Style Syntax',
                                    'Computer Style System'
                                    ],
                                    correctAnsIndex: 0
                                },
                                {
                                    id: 'q01010407',
                                    question: 'Which CSS property is used to control the layout and spacing of elements?',
                                    answers: [
                                    'color',
                                    'margin',
                                    'font-size'
                                    ],
                                    correctAnsIndex: 1
                                },
                                {
                                    id: 'q01010408',
                                    question: 'What is the role of JavaScript in web development?',
                                    answers: [
                                    'Styling web pages',
                                    'Adding interactivity and dynamic behavior',
                                    'Defining document structure'
                                    ],
                                    correctAnsIndex: 1
                                },
                                {
                                    id: 'q01010409',
                                    question: 'Which programming language is used for server-side web development?',
                                    answers: [
                                    'HTML',
                                    'CSS',
                                    'JavaScript'
                                    ],
                                    correctAnsIndex: 2
                                },
                                {
                                    id: 'q01010410',
                                    question: 'What is the purpose of the <DOCTYPE html> declaration?',
                                    answers: [
                                    'It defines the document structure.',
                                    'It specifies the language of the document.',
                                    'It ensures correct interpretation by the browser.'
                                    ],
                                    correctAnsIndex: 2
                                },
                            {
                              id: 'q01020411',
                              question: 'What is the purpose of the HTML &lt;head&gt; element?',
                              answers: [
                                'To define the main content of the webpage',
                                'To contain meta-information about the HTML document',
                                'To create links and anchors'
                              ],
                              correctAnsIndex: 1
                            },
                            {
                              id: 'q01020412',
                              question: 'Which HTML element is used to define the hierarchy of titles on a page?',
                              answers: [
                                '&lt;p&gt;',
                                '&lt;h1&gt;',
                                '<ul>'
                              ],
                              correctAnsIndex: 1
                            },
                            {
                              id: 'q01020413',
                              question: 'What type of content does the HTML &lt;p&gt; element represent?',
                              answers: [
                                'Multimedia content',
                                'Headings',
                                'Text paragraphs'
                              ],
                              correctAnsIndex: 2
                            },
                            {
                              id: 'q01020414',
                              question: 'Which HTML element is used to create an ordered list?',
                              answers: [
                                '<ul>',
                                '<li>',
                                '<ol>'
                              ],
                              correctAnsIndex: 2
                            },
                            {
                              id: 'q01020415',
                              question: 'What is the purpose of the HTML <a> element?',
                              answers: [
                                'To embed images',
                                'To create forms',
                                'To define hyperlinks and anchors'
                              ],
                              correctAnsIndex: 2
                            },
                            {
                              id: 'q01020416',
                              question: 'Which HTML attribute is commonly used in the <a> element to specify the destination URL?',
                              answers: [
                                'src',
                                'alt',
                                'href'
                              ],
                              correctAnsIndex: 2
                            },
                            {
                              id: 'q01020417',
                              question: 'What is the main purpose of HTML forms?',
                              answers: [
                                'To display multimedia content',
                                'To create ordered lists',
                                'To collect user input and submit data'
                              ],
                              correctAnsIndex: 2
                            },
                            {
                              id: 'q01020418',
                              question: 'Which HTML element is used to embed images?',
                              answers: [
                                '<img>',
                                '<video>',
                                '<form>'
                              ],
                              correctAnsIndex: 0
                            },
                            {
                              id: 'q01020419',
                              question: 'What does ARIA stand for in the context of web accessibility?',
                              answers: [
                                'Accessible Resource Integration and Application',
                                'Aesthetic Rendering for Internet Audiences',
                                'Accessible Rich Internet Applications'
                              ],
                              correctAnsIndex: 2
                            },
                            {
                              id: 'q01020420',
                              question: 'Why is web accessibility important in HTML?',
                              answers: [
                                'It increases website loading speed',
                                'It enhances visual aesthetics',
                                'It ensures inclusivity for users with disabilities'
                              ],
                              correctAnsIndex: 2
                            }
                          ]
                    },
                ]
            },
        ]
    },
    {
        id: 'c02',
        code: "BU 1502",
        title: "Basics of Digital Marketing",
        img: "https://my.uopeople.edu/pluginfile.php/1808190/course/overviewfiles/CS2041.jpg",
        color: "#0F0326",
        days: ["mon", "tue", "wed"],
        startTime: 15, duration: 1,
        progress: "100%",
        isCompleted: true,
        units: [
            {
                id: 'u0201',
                title: 'Introduction to Digital Marketing',
                sections: [
                    { 
                        isCompleted: false,
                        id: 's020101',
                        type: 'lecture',
                        title: 'Understanding Digital Marketing',
                        content: `In the opening unit, "Introduction to Digital Marketing," we delve into the core concepts that form the foundation of this dynamic field.
    
                        <h3>Definition and Scope of Digital Marketing</h3>
                        Digital marketing encompasses a vast array of online strategies and techniques used to promote products, services, or brands. This section provides a comprehensive definition, highlighting the diverse set of tools and platforms that fall under the umbrella of digital marketing.
                        
                        <h3>Evolution of Marketing in the Digital Age</h3>
                        Explore how marketing practices have evolved with the advent of the digital age. We'll journey through the transformation from traditional marketing methods to the sophisticated, data</li><li>driven approaches that define the modern era.
                        
                        <h3>Importance and Benefits of Digital Marketing</h3>
                        Delve into the reasons why digital marketing has become indispensable for businesses of all sizes. Understand the advantages it offers, such as targeted audience reach, real</li><li>time analytics, and the ability to adapt quickly to changing market trends.`
                    },
                    {
                        id: 's020102',
                        type: 'lecture',
                        title: 'Digital Marketing Channels Overview',
                        content: `<h3>Overview of Key Digital Marketing Channels</h3>
                        This section provides an in</li><li>depth exploration of the primary digital marketing channels that businesses leverage to connect with their audiences.
                        
                        <ul><li> <h3>Search Engine Optimization (SEO)</h3>
                          Understand the significance of SEO in enhancing a website's visibility on search engines. Learn the principles of optimizing content to rank higher in search engine results and drive organic traffic.
                        
                        </li><li> <h3>Social Media Marketing (SMM)</h3>
                          Explore the impact of social media on digital marketing. Gain insights into popular social media platforms, strategies for engagement, and how businesses use these channels to build brand awareness and connect with their audience.
                        
                        </li><li> <h3>Email Marketing</h3>
                          Discover the power of email marketing in fostering direct communication with potential and existing customers. Learn how to create effective email campaigns, build subscriber lists, and analyze metrics for campaign success.
                        
                        </li><li> <h3>Content Marketing</h3>
                          Delve into the art of content marketing and its role in providing valuable, relevant content to attract and engage a target audience. Explore strategies for creating compelling content that resonates with users and supports overall marketing objectives.
                        
                        </li><li> <h3>Pay-Per-Click (PPC) Advertising</h3>
                          Uncover the world of paid advertising through PPC campaigns. Understand how businesses can strategically place ads online, paying only when users interact with the content. Explore the nuances of ad platforms and effective bidding strategies.
                        </li></ul>
                        This unit serves as a comprehensive introduction, laying the groundwork for a deeper exploration of each digital marketing channel in subsequent units. As we progress, learners will gain a holistic understanding of the diverse strategies and tactics employed in the digital marketing landscape.`
                    },
                    {
                        id: 's020103',
                        type: 'quiz',
                        title: 'Quiz',
                        quizzes: [
                        {
                            id: 'q02010501',
                            question: 'What is the primary goal of digital marketing?',
                            answers: [
                            'To entertain users',
                            'To enhance website design',
                            'To promote products or services online'
                            ],
                            correctAnsIndex: 2
                        },
                        {
                            id: 'q02010502',
                            question: 'How has marketing evolved in the digital age?',
                            answers: [
                            'It has become less data-driven.',
                            'It has remained unchanged.',
                            'It has adopted sophisticated, data-driven approaches.'
                            ],
                            correctAnsIndex: 2
                        },
                        {
                            id: 'q02010503',
                            question: 'What is the significance of SEO in digital marketing?',
                            answers: [
                            'Increasing email open rates.',
                            'Enhancing website visibility on search engines.',
                            'Creating engaging social media content.'
                            ],
                            correctAnsIndex: 1
                        },
                        {
                            id: 'q02010504',
                            question: 'Which digital marketing channel focuses on building direct communication through messages?',
                            answers: [
                            'Content Marketing',
                            'Social Media Marketing',
                            'Email Marketing'
                            ],
                            correctAnsIndex: 2
                        },
                        {
                            id: 'q02010505',
                            question: 'What is the defining characteristic of PPC advertising?',
                            answers: [
                            'It is entirely free for businesses.',
                            'Advertisers pay only when users interact with the content.',
                            'It relies solely on organic traffic.'
                            ],
                            correctAnsIndex: 1
                        }
                        ]
    
                    },
                ]
            },
            {
                id: 'u0202',
                title: 'Putting it All Together',
                sections: [
                    { 
                        isCompleted: false,
                        id: 's020201',
                        type: 'lecture',
                        title: 'Integrated Digital Marketing Strategy',
                        content: `
                        <h3>Developing a Comprehensive Digital Marketing Strategy</h3>
                        Explore the process of crafting a holistic digital marketing strategy that aligns with organizational goals. Learn to identify target audiences, choose appropriate channels, and integrate various digital marketing elements for a cohesive approach.
                        
                        <h3>Integrating Various Channels for Maximum Impact</h3>
                        Understand the importance of channel integration in digital marketing. Explore how synergy between channels such as SEO, social media, email, and PPC can amplify the impact of a digital marketing strategy, ensuring a unified and effective campaign.
                        
                        <h3>Case Studies of Successful Digital Marketing Campaigns</h3>
                        Dive into real-world examples with case studies of successful digital marketing campaigns. Analyze strategies employed by businesses to achieve their objectives and learn from practical applications in the ever-evolving digital landscape.`
                    },
                    {
                        id: 's020302',
                        type: 'quiz',
                        title: 'Final Test',
                        quizzes: [
                            {
                              id: 'q01050701',
                              question: 'Why is developing a comprehensive digital marketing strategy important?',
                              answers: [
                                'To focus solely on individual channels.',
                                'To align with organizational goals and target audiences.',
                                'To ignore the integration of various channels.'
                              ],
                              correctAnsIndex: 1
                            },
                            {
                              id: 'q01050702',
                              question: 'What does channel integration in digital marketing refer to?',
                              answers: [
                                'Using a single channel for all marketing efforts.',
                                'Aligning various channels for maximum impact.',
                                'Avoiding the use of multiple channels.',
                              ],
                              correctAnsIndex: 1
                            },
                            {
                              id: 'q01050703',
                              question: 'Why are case studies important in digital marketing education?',
                              answers: [
                                'To focus solely on theoretical concepts.',
                                'To analyze real-world examples and practical applications.',
                                'To ignore the impact of successful campaigns.',
                              ],
                              correctAnsIndex: 1
                            },
                            {
                              id: 'q01050704',
                              question: 'How can a unified digital marketing strategy benefit businesses?',
                              answers: [
                                'By focusing solely on individual channels.',
                                'By creating fragmented campaigns with no synergy.',
                                'By amplifying the impact through the integration of various channels.',
                              ],
                              correctAnsIndex: 2
                            },
                            {
                              id: 'q01050705',
                              question: 'What can businesses learn from case studies of successful digital marketing campaigns?',
                              answers: [
                                'To avoid real-world examples and practical applications.',
                                'To ignore the impact of successful campaigns.',
                                'To gain insights and apply effective strategies to their own campaigns.',
                              ],
                              correctAnsIndex: 2
                            },
                            {
                                id: 'q01050706',
                                question: 'What is the purpose of establishing key performance indicators (KPIs) in digital marketing?',
                                answers: [
                                  'To avoid evaluating campaign performance.',
                                  'To align with specific campaign goals and evaluate success.',
                                  'To focus solely on visual appeal.',
                                ],
                                correctAnsIndex: 1
                              },
                              {
                                id: 'q01050707',
                                question: 'What elements should be included in a digital marketing report?',
                                answers: [
                                  'Visual appeal only.',
                                  'Narrative that communicates the story of campaign performance.',
                                  'Ignoring the need for data representation.',
                                ],
                                correctAnsIndex: 1
                              },
                              {
                                id: 'q01050708',
                                question: 'Why is iterative improvement based on data analysis crucial in digital marketing?',
                                answers: [
                                  'To avoid making adjustments.',
                                  'To ignore evolving market conditions.',
                                  'To adapt campaigns based on insights and trends.',
                                ],
                                correctAnsIndex: 2
                              },
                              {
                                id: 'q01050709',
                                question: 'How does continuous data analysis contribute to digital marketing success?',
                                answers: [
                                  'By avoiding strategic adjustments.',
                                  'By preventing adaptation to market conditions.',
                                  'By informing strategic adjustments and adaptations based on insights.',
                                ],
                                correctAnsIndex: 2
                              },
                              {
                                id: 'q01050710',
                                question: 'What is the goal of creating a comprehensive digital marketing report?',
                                answers: [
                                  'To focus solely on visual appeal.',
                                  'To communicate the story of campaign performance to stakeholders.',
                                  'To avoid data representation.',
                                ],
                                correctAnsIndex: 1
                              }
                          ]
                    },
                ]
            },
        ]
    }

]