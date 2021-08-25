var myInfo = {
    name: 'Anderson David',
    phoneNum: '317-900-6111',
    email: 'david25@purdue.edu',
    campusAddress: '1016 W Stadium Ave, West Lafayette, IN 47907, Rm. SW419',
    homeAddress: '3437 Wexley Ct., Carmel, IN 46032',
    linkedIn: 'www.linkedin.com/in/anderson-david',
    github: 'www.github.com/andersondav',
    education: {
        school: 'Purdue University',
        location: 'West Lafayette, IN',
        degree: 'Bachelor of Science in Computer Science',
        degree2: 'Minor in Mathematics',
        degree3: 'Minor in Management',
        gpa: '4.0/4.0',
        gradDate: 'Expected Spring 2022'
    },
    technicalSkills: {
        proficient: ['C/C++', 'Swift/iOS', 'TypeScript', 'ReactJS', 'Python', 'Assembly', 'Linux', 'Github'],
        basic: ['Docker', 'Django', 'SQL']  
    },
    softSkills: [
        'Team player', 'Communicator', 'Problem-solver', 'Decision-maker'
    ],
    workExperience: [
        {
            company: 'Intuit',
            location: 'San Diego, CA (Remote)',
            date: 'Summer 2021',
            desc: ['Software Engineering Intern on the UIPlatform team', 
                    'Worked in agile environment to develop scalable UI for TTO (TurboTax Online)',
                    'Utilized various platforms such as React, TypeScript, Jira',
                    'Contributed to team and company objectives']
        },
    ],
    objective: "CS student with great attention to detail, communication skills, and desire to learn seeking " +
                "employment in a professional production environment while " +
                "contributing to meaningful projects.",
    // objective: "CS student with great attention to detail, communication skills, and desire to help others seeking " +
    //             "a position as a TA for CodePath's interview prep course. I am a former alum of the course who " +
    //             "would like to give back by contributing to a smooth course run this Fall.",
    coursework: "Computer Architecture, Systems Programming," +
                " Data Mining & Machine Learning, iOS Development, " +
                "Operating Systems, Analysis of Algorithms, " +
                "Computer Networks, Computer Security, Compilers",
    projects: [
        {
            title: 'Remote File Systems in Xinu OS',
            link: null,
            github: 'https://github.com/real-xinu/xinu-galileo/tree/rfs-cache',
            type: 'Research',
            date: 'Spring 2021',
            info: [
                'Undergrad Research Project under Professor Douglas Comer',
                'Aimed to explore and improve Remote File System implementation in the Xinu OS',
                'Investigated how the Remote File System interacts with Xinu kernel\'s networking interface and device switch table',
                'Made multiple improvements to existing system, most notably implementing a local cache for remote files into kernel',
                'Tested performance gain from caching, which revealed up to 80% faster file access speeds'
            ],
            keywords: [
                'Xinu', 'syscalls', 'Linux', 'OS', 'Remote', 'File', 'System', 'Linux', 'local', 'kernel', 'kernel\'s', 'cache', 'device', 'switch', 'table', '80%', 'faster', 'file', 'access', 'speeds'
            ]
        },
        {
            title: 'Data Sphere',
            link: 'https://datasphere.space',
            github: 'https://github.com/KritR/DataSphere',
            type: 'BoilerMake Hackathon Winning Project',
            date: '2020',
            info: [
                'Website that allows users to visualize historical events across space and time.',
                'Data loaded into MongoDB Atlas from Google Cloud BigQuery',
                'Used natural language processing (NLP) packages in Python',
                'Project involved quickly learning and adapting to new frameworks and technologies.'
            ],
            keywords: [
                'MongoDB', 'Atlas', 'Google', 'Cloud', 'BigQuery', 'Elixir', 'Phoenix', 'Python', '(NLP)'
            ]
        }
    ],
    activities: [
        {
            name: "President of the Purdue iOS Dev Club",
            dates: "Sep 2018 - Present, President since May 2021"
        },
        {
            name: "Hello World Hackathon Executive Team",
            dates: "Summer/Fall 2019"
        },
        {
            name: "CodePath iOS Tech Fellow",
            dates: 'Spring 2020, 2021'
        }
    ]
}

export default myInfo