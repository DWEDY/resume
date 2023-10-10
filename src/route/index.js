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
        layout: 'person',

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

// Підключаємо роутер до бек-енду
module.exports = router
