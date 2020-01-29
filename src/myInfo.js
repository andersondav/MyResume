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
        proficient: ['Java', 'C', 'Swift/iOS Development', 'ReactJS', 'Github', 'HTML/CSS', 'Javascript', 'NodeJS', 'AngularJS', 'Python'],
        basic: ['Linux', 'Elixir', 'Firebase', 'C++', 'R']  
    },
    softSkills: [
        'Team player', 'Communicator', 'Problem-solver', 'Decision-maker'
    ],
    workExperience: {
        company: 'DK Dwellings, LLC',
        location: 'Carmel, IN',
        date: 'Jun-Aug 2018 & 2019',
        desc: 'Worked on a team to complete various assignments for company\'s work with clients.'
    },
    objective: "CS student with great attention to detail, communication skills, and desire to learn seeking " +
                "an internship to gain experience working in a professional production environment while " +
                "contributing to meaningful and enriching projects.",
    // objective: "CS student with great enjoyment of creating seeking " +
    //              "admission into Hacktech 2020 to gain additional experience contributing to meaningful and enriching projects, and " +
    //              "participating in the nationwide CS community through large-scale hackathons.",
    coursework: "Problem Solving and Object-Oriented Programming (Java), Programming in C, Data Structures " +
                "and Algorithms, Computer Architecture, Foundations of Computer Science, Systems Programming," +
                " Data Mining & Machine Learning, Codepath iOS Development Course",
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
            title: 'Purdue Nutrition Calculator',
            link: null,
            github: 'https://github.com/purduenutritioncalculator/PurdueNutritionCalc',
            type: 'Team Project',
            date: 'Mar-May 2019',
            info: [
                'iOS Application for Purdue students to track daily nutritional intake from Purdue dining courts.',
                'Built using Swift and Xcode and utilizes a RESTful API to retrieve food item data.',
                'Stores user information on device using Xcode UserDefaults and Core Data.',
                'Project involved applying skills regarding team collaboration and the product development cycle.'
            ],
            keywords: [
                'Xcode', 'Swift', 'RESTful', 'API', 'Core', 'Data'
            ]
        }
    ],
    activities: [
        {
            name: "iOS Dev Club",
            dates: "Sep 2018 - Present"
        },
        {
            name: "Hello World Hackathon 2019 Executive Team",
            dates: "Mar - Sep 2019"
        },
        {
            name: "Purdue EPICS EVEI Team",
            dates: "Aug - Dec 2018"
        },
        {
            name: "CodePath iOS Tech Fellow/TA",
            dates: 'Jan 2020 - Present'
        }
    ]
}

export default myInfo