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
        gpa: '4.0/4.0',
        gradDate: 'Expected Spring 2022'
    },
    technicalSkills: {
        proficient: ['C/C++', 'Swift/iOS', 'Python', 'Assembly', 'Linux', 'Github'],
        basic: ['Docker', 'Django', 'SQL', 'Javascript', 'HTML/CSS', 'ReactJS']  
    },
    softSkills: [
        'Team player', 'Communicator', 'Problem-solver', 'Decision-maker'
    ],
    workExperience: [
        {
            company: 'Purdue CS TA',
            location: null,
            date: 'Summer 2020 and Spring 2021',
            desc: 'Coordinated labs and study sessions to create a positive course experience.'
        },
        {
            company: 'Intuit',
            location: 'San Diego, California',
            date: 'Summer 2021',
            desc: 'Software Engineer Intern in Mobile Role'
        }
    ],
    objective: "CS student with great attention to detail, communication skills, and desire to learn seeking " +
                "an internship to gain experience working in a professional production environment while " +
                "contributing to meaningful and enriching projects.",
    // objective: "CS student with great attention to detail, communication skills, and desire to learn seeking " +
    //             "admission into the Purdue CS graduate program to support continued education in computer systems and security " +
    //             "topics through interactions with faculty and experts in those fields.",
    coursework: "Object-Oriented Programming, Data Structures " +
                "and Algorithms, Computer Architecture, Systems Programming," +
                " Data Mining & Machine Learning, iOS Development, " +
                "Operating Systems, Analysis of Algorithms, " +
                "Computer Networks (in progress), Computer Security (in progress)",
    projects: [
        {
            title: 'Data Sphere',
            link: 'https://datasphere.space',
            github: 'https://github.com/KritR/DataSphere',
            type: 'BoilerMake Hackathon Winning Project',
            date: '2020',
            info: [
                'Website that allows users to visualize historical events across space and time.',
                'Data loaded into MongoDB Atlas from Google Cloud BigQuery',
                'Utilized a backend built with Phoenix for Elixir and a HTML/JS frontend.',
                'Used natural language processing (NLP) packages in Python',
                'Project involved quickly learning and adapting to new frameworks and technologies.'
            ],
            keywords: [
                'MongoDB', 'Atlas', 'Google', 'Cloud', 'BigQuery', 'Elixir', 'Phoenix', 'Python', '(NLP)'
            ]
        },
        {
            title: 'Remote File Systems in Xinu',
            link: null,
            github: 'https://github.com/andersondav/RFSResearch',
            type: 'Undergrad Research',
            date: 'Spring 2021',
            info: [
                'Undergraduate Research Project under Professor Douglas Comer',
                'Aims to explore how Remote File Systems are implemented, by studying the Xinu operating system\'s remote file interactions with a Linux server',
                'Additionally aims to make improvements to RFS implementation and add features such as local file caching',
            ],
            keywords: [
                'Xinu', 'syscalls', 'caching', 'Linux', 'operating', 'system\'s', 'Remote', 'File', 'Systems', 'Linux', 'local', 'file'
            ]
        }
    ],
    activities: [
        {
            name: "Purdue iOS Dev Club",
            dates: "Sep 2018 - Present"
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