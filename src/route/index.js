// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
    name: {
        firstname: 'John',
        lastname: 'Marston',
        address: '151 Marstons Ln, Williamsburg, VA 23188'
    },
    position: 'Junior Fullstack JS Developer',
    salary: '600$ в місяць',
};

var footer = {
    social: {
        email: {
            text: 'John@mail.com',
            href: 'mailto:John@mail.com',
        },
        phone: {
            text: '+380670000123',
            href: 'tel:+380670000123',
        },
        linkedin: {
            text: 'linkedIn',
            href: 'https://www.linkedin.com/in/dmytro-test',
        },
    },
};

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
    // res.render генерує нам HTML сторінку

    //            ↙ cюди вводимо назву файлу з сontainer
    res.render('index', {})
    //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('summary', {
        // ↙ сюди вводимо JSON дані

        page: {
            title: 'Resume | Summary',
        },

        header,

        main: {
            summary: {
                title: 'Summary',
                text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
            },

            experience: {
                title: 'Other experience',
                text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
            },
        },

        footer,

    })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('skills', {
        // ↙ сюди вводимо JSON дані

        page: {
            title: 'Resume | Skills',
        },

        header,

        main: {
            skills: [
                {
                    name: 'HTML',
                    point: 7,
                    isTop: true,
                },
                {
                    name: 'Handlebars',
                    point: 8,
                    isTop: true,
                },
                {
                    name: 'VS Code & NPM',
                    point: 7,
                    isTop: false,
                },
                {
                    name: 'Git & Terminal',
                    point: 9,
                },
                {
                    name: 'React.js',
                    point: 0,
                },
                {
                    name: 'PHP',
                    point: null,
                },
            ],

            hobbies: [
                {
                    name: 'Board games and role-playing games',
                    isMain: true,
                },
                {
                    name: 'Blogging',
                    isMain: false,
                },
                {
                    name: 'Video game modding',
                    isMain: true,
                },
            ],
        },

        footer,

    })
})

// ================================================================

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
    // res.render генерує нам HTML сторінку

    //            ↙ cюди вводимо назву файлу з сontainer
    res.render('education', {
        page: {
            title: 'Resume | Education',
        },

        header,

        main: {
            educations: [
                {
                    name: 'Donetsk National Technical University',
                    isEnd: true,
                },
                {
                    name: 'Kharkiv National University of Radioelectronics',
                    isEnd: false,
                },
                {
                    name: 'Kharkiv Polytechnic Institute',
                    isEnd: true,
                },
                {
                    name: 'Kherson State University',
                    isEnd: true,
                },
                {
                    name: 'Kyiv Polytechnic Institute',
                    isEnd: false,
                },
                {
                    name: 'International European University',
                    isEnd: false,
                },
                {
                    name: 'Luhansk National University',
                    isEnd: true,
                },
                {
                    name: 'Lviv Polytechnic',
                    isEnd: false,
                },
                {
                    name: 'Odesa National Polytechnic University',
                    isEnd: true,
                },
                {
                    name: '"Strategy" Institute for Entrepreneurship',
                    isEnd: true,
                },
                {
                    name: 'Ternopil National Economic University',
                    isEnd: false,
                },
                {
                    name: 'Ternopil National Technical University',
                    isEnd: true,
                },
                {
                    name: 'Zaporizhzhia National University',
                    isEnd: false,
                },
                {
                    name: 'Zaporizhzhia National Technical University',
                    isEnd: true,
                },
            ],

            certificates: [
                {
                    name: 'Web Developer',
                    id: 1000786,
                },
                {
                    name: 'Data Analyst',
                    id: 1000787,
                },
                {
                    name: 'Database Architect',
                    id: 1000788,
                },
            ],
        },

        footer,
    })
})


// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
    // res.render генерує нам HTML сторінку

    //            ↙ cюди вводимо назву файлу з сontainer
    res.render('work', {

        layout: 'big_content',

        page: {
            title: 'Resume | Work',
        },

        header,

        main: {
            works: [
                {
                    position: 'Junior Fullstack Delveloper',
                    company: {
                        name: 'IT Brains',
                        url: null,
                        // 'https://it-brains.com.ua/',
                    },
                    duration: {
                        from: '10.10.2023',
                        to: null,
                        // '22.03.2024'
                    },

                    projectAmount: 3,

                    projects: [
                        {
                            name: 'Resume',
                            url: 'https://resume.com.ua/',
                            about: 'Airbnb competitor. High-load application for searching apartments',

                            stacks: [
                                {
                                    name: 'React.js',
                                },
                                {
                                    name: 'HTML / CSS',
                                },
                                {
                                    name: 'Nodejs',
                                },
                            ],

                            awards: [
                                {
                                    name: 'Background verification - is a feature that provides users to prove that they are real persons.',
                                },
                                {
                                    name: 'Preparing SEO optimized pages. The automated process of getting data for the app from documents.',
                                },

                            ],

                            stackAmount: 32,

                            awardAmount: 9,

                        },
                    ],
                },
            ],
        },

        footer,
    })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('person', {
        layout: 'basic',

        person: {
            name: 'Emma Johnson',
            age: 32,
            gender: 'Female',
            address: {
                street: '123 Main St',
                city: 'New York',
                state: 'NY',
                zip: '10001',
                country: 'USA',
            },
            education: [
                {
                    degree: 'Bachelor of Science',
                    major: 'Computer Science',
                    university: 'Massachusetts Institute of Technology',
                    graduationYear: 2012,
                },
            ],
            workExperience: [
                {
                    company: 'Google',
                    title: 'Software Engineer',
                    startDate: '2012-06-01',
                    endDate: '2016-12-31',
                    responsibilities: [
                        'Developed new features for Google Maps',
                        'Worked on improving search algorithms',
                    ],
                    year_founded: 1990,
                    industry: 'Technology',
                    employees: [
                        {
                            name: 'John Smith',
                            position: 'CEO',
                            department: 'Executive',
                            projects: [
                                {
                                    name: 'Project Alpha',
                                    description:
                                        'Developing new software platform',
                                    status: 'In Progress',
                                    teams: [
                                        {
                                            team_name: 'Awesome Team',
                                            team_leader: {
                                                name: 'John Smith',
                                                title: 'Team Leader',
                                                email: 'john.smith@example.com',
                                            },
                                            team_members: [
                                                {
                                                    name: 'Alice Johnson',
                                                    title: 'Software Engineer',
                                                    email:
                                                        'alice.johnson@example.com',
                                                    skills: ['Java', 'Python', 'SQL'],
                                                    projects: [
                                                        {
                                                            name: 'Project A',
                                                            description: 'Lorem ipsum dolor sit amet',
                                                            technologies: [
                                                                'Java',
                                                                'Spring Framework',
                                                            ],
                                                            team_members: [
                                                                {
                                                                    name: 'Bob Lee',
                                                                    title:
                                                                        'Software Engineer',
                                                                },
                                                                {
                                                                    name: 'Cindy Chen',
                                                                    title: 'UI Designer',
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/bio', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('bio', {
        layout: "basic",

        name: 'Albert Einstein',
        birthdate: 'March 14, 1879',
        birthplace:
            'Ulm, Kingdom of Württemberg, German Empire',
        deathdate: 'April 18, 1955',
        deathplace: 'Princeton, New Jersey, United States',
        nationality: 'Swiss, German, American',
        occupation: 'Theoretical Physicist',
        known_for: [
            'Theory of Relativity',
            'E=mc²',
            'Photoelectric Effect',
            'Brownian Motion',
        ],
        education: [
            {
                degree: 'Doctor of Philosophy',
                field: 'Physics',
                institution: 'University of Zurich',
                year: 1905,
            },
        ],
        notable_publications: [
            {
                title: 'On the Electrodynamics of Moving Bodies',
                year: 1905,
                publisher: 'Annalen der Physik',
            },
            {
                title:
                    'Does the Inertia of a Body Depend Upon Its Energy Content?',
                year: 1905,
                publisher: 'Annalen der Physik',
            },
        ],
        partners: [
            {
                name: 'Mileva Marić',
                relationship: 'First wife',
                years: '1903-1919',
            },
            {
                name: 'Elsa Einstein',
                relationship:
                    "Second wife, also Einstein's first cousin",
                years: '1919-1936',
            },
        ],
        awards: [
            {
                title: 'Nobel Prize in Physics',
                year: 1921,
                description:
                    'Awarded for his explanation of the photoelectric effect',
            },
        ],
        influences: [
            'Isaac Newton',
            'James Clerk Maxwell',
            'Hermann Minkowski',
        ],
        influenced: [
            'Niels Bohr',
            'Erwin Schrödinger',
            'Werner Heisenberg',
            'Richard Feynman',
        ],
        quotes: [
            'Imagination is more important than knowledge.',
            'I have no special talent. I am only passionately curious.',
            'The important thing is not to stop questioning.',
            'The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science.',
        ],
        major_discoveries: [
            {
                title: 'Photoelectric Effect',
                year: 1905,
                description:
                    'Einstein explained the photoelectric effect, where electrons are emitted from a metal surface when it is illuminated by light.',
            },
        ],
        contributions: {
            title: 'Inventions',
            description:
                'Leonardo designed and invented a wide variety of machines and devices, including a helicopter, a diving suit, and a self-propelled cart. Many of his inventions were centuries ahead of their time.',
            year: 'Late 15th to early 16th century',
            field: 'Invention',
        },
    })
})

// ================================================================

router.get('/program', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('program', {
        layout: "basic",

        program: {
            excursion: {
                name: 'Cultural Tour',
                location: {
                    city: 'Paris',
                    country: 'France',
                },
                date: '2023-06-15',
                program: [
                    {
                        name: 'Museum Visit',
                        type: 'Art',
                        duration: 3,
                        details: {
                            museum: {
                                name: 'The Louvre',
                                location: {
                                    address: 'Rue de Rivoli',
                                    city: 'Paris',
                                    country: 'France',
                                },
                                exhibits: [
                                    {
                                        name: 'Mona Lisa',
                                        artist: 'Leonardo da Vinci',
                                        description: 'Iconic portrait painting',
                                        audio_guide: true,
                                    },
                                    {
                                        name: 'Winged Victory of Samothrace',
                                        artist: null,
                                        description:
                                            'Ancient Greek statue of Nike, the goddess of victory',
                                        audio_guide: true,
                                    },
                                ],
                            },
                            guide: {
                                name: 'Francois',
                                language: 'French',
                                rating: 4.8,
                            },
                        },
                    },
                    {
                        name: 'Cultural Show',
                        type: 'Music and Dance',
                        duration: 2,
                        details: {
                            venue: {
                                name: 'Moulin Rouge',
                                location: {
                                    address: '82 Boulevard de Clichy',
                                    city: 'Paris',
                                    country: 'France',
                                },
                            },
                            performers: [
                                {
                                    name: 'Mireille Mathieu',
                                    type: 'Chanson singer',
                                },
                                {
                                    name: "Ballet de l'Opéra National de Paris",
                                    type: 'Classical ballet company',
                                },
                            ],
                            guide: {
                                name: 'Sophie',
                                language: 'English',
                                rating: 4.6,
                            },
                        },
                    },
                ],
            },
        },
    })
})

// ================================================================

router.get('/web', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('web', {
        layout: "basic",

        web: {
            languages: [
                {
                    name: 'HTML',
                    version: 'HTML5',
                    description:
                        'Hypertext Markup Language is the standard markup language for creating web pages and web applications.',
                    elements: [
                        {
                            name: 'div',
                            description:
                                'Defines a division or a section in an HTML document.',
                            attributes: [
                                {
                                    name: 'id',
                                    description:
                                        'Specifies a unique id for an HTML element.',
                                },
                                {
                                    name: 'class',
                                    description:
                                        'Specifies one or more class names for an HTML element.',
                                },
                            ],
                        },
                        {
                            name: 'p',
                            description:
                                'Defines a paragraph in an HTML document.',
                            attributes: [
                                {
                                    name: 'id',
                                    description:
                                        'Specifies a unique id for an HTML element.',
                                },
                                {
                                    name: 'class',
                                    description:
                                        'Specifies one or more class names for an HTML element.',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'CSS',
                    version: 'CSS3',
                    description:
                        'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML or XML.',
                    properties: [
                        {
                            name: 'color',
                            description: 'Sets the color of the text.',
                            values: [
                                {
                                    value: 'red',
                                    description:
                                        'Sets the text color to red.',
                                },
                                {
                                    value: 'blue',
                                    description:
                                        'Sets the text color to blue.',
                                },
                            ],
                        },
                        {
                            name: 'background-color',
                            description:
                                'Sets the background color of an element.',
                            values: [
                                {
                                    value: 'white',
                                    description:
                                        'Sets the background color to white.',
                                },
                                {
                                    value: 'black',
                                    description:
                                        'Sets the background color to black.',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'JavaScript',
                    version: 'ES6',
                    description:
                        'JavaScript is a programming language used to create interactive effects within web browsers.',
                    functions: [
                        {
                            name: 'alert()',
                            description:
                                'Displays an alert box with a specified message and an OK button.',
                            parameters: [
                                {
                                    name: 'message',
                                    type: 'string',
                                    description:
                                        'The message to display in the alert box.',
                                },
                            ],
                        },
                        {
                            name: 'getElementById()',
                            description:
                                'Returns the element with the specified ID.',
                            parameters: [
                                {
                                    name: 'id',
                                    type: 'string',
                                    description:
                                        'The ID of the element to find.',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    })
})

// ================================================================


// Підключаємо роутер до бек-енду
module.exports = router
