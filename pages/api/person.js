// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const person = {
    name: "Joel Gornati",
    subtitle: "I'm a software developer from Rosario AR, specializing in building exceptional WebApps.",
    github: "https://github.com/jgornati",
    linkedin: "https://www.linkedin.com/in/joelgornati/",
    email: "joelgornati@gmail.com",
    aboutme: {
        text: "Currently, I'm working as Full-Stack developer at Exadec, a technology company dedicated to Custom Software Development. I add value in different areas from issues related to sales and customer acquisition to tasks related to programming and project development.",
        photo: "/joel-image.jpg",
        skills: [
            {
                name: "React",
                logoForDarkTheme: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
            },
            {
                name: "Next.js",
                logoForDarkTheme: "https://raw.githubusercontent.com/jgornati/devicon/master/icons/nextjs/nextjs-white.svg",
                logoForWhiteTheme: "https://raw.githubusercontent.com/jgornati/devicon/master/icons/nextjs/nextjs-original-wordmark.svg"
            },
            {
                name: "Redux",
                logoForDarkTheme: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
            },
            {
                name: "Laravel",
                logoForDarkTheme: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg",
            },
            {
                name: "Docker",
                logoForDarkTheme: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
            },
            {
                name: "Node.js",
                logoForDarkTheme: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg",
            },
            {
                name: "Linux",
                logoForDarkTheme: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
            },
            {
                name: "Python",
                logoForDarkTheme: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
            },
            {
                name: "Flask",
                logoForDarkTheme: "https://raw.githubusercontent.com/jgornati/devicon/master/icons/flask/flask-white.svg",
                logoForWhiteTheme: "https://raw.githubusercontent.com/jgornati/devicon/master/icons/flask/flask-original-wordmark.svg",
            },
        ]
    },
    projects: [
        {
            name: "Real Estate Platform",
            techList: "Next.js | Laravel | MySQL",
            description: "My goal is to develop a strategy that would cover up the real problems, user expectations, and other essential insights in the Real Estate world. I add value in the next areas of projects: full stack developer for make a very scalable Saas project",
            image: "/projects/realestate.png",
            githubLink: null,
            link: "https://jgrealestate.netlify.app/",
        },
        {
            name: "EHR Software - Faculty of Dentistry (UNR)",
            techList: "React | Java | PostgreSQL",
            description: "At Exadec, to develop this project, we immersed ourselves within the university environment and discovered their concerns, problems, and requirements. We also take care of the purchase, setup of a suitable server and the installation of the necessary network equipment so that the system is available on all floors of the building. I added value as Frontend developer and SRE",
            image: "/projects/for.png",
            githubLink: null,
            link: "https://sigu.duckdns.org/",
        },
        {
            name: "Appointment Web Site & EHR Software",
            techList: "React | Laravel | MySQL",
            description: "The developed system allows providers to be uploaded with their service hours, places and areas they serve. Then, it generates the available appointments so that citizens can apply from the comfort of their homes and attend at the agreed time, preventing delays in service. Due to the pandemic context, it also allows the acquisition of shifts for the COVID-19 vaccination, with the generation of the digital vaccination certificate so that it can be viewed on the phones. I added value as full stack developer",
            image: "/projects/turnos.png",
            githubLink: null,
        },
        {
            name: "E-Commerce & Tools for integrators",
            techList: "React | Laravel | MySQL | Python",
            description: "Development of a comprehensive system whose main objective is the integration of all the actors involved in the theme \"Security Systems\" in the same environment. When we speak of actors we refer to distributors/integrators, customers and end users. This environment proposes solving or facilitating tasks that they carry out on a daily basis, in addition to promoting a direct relationship between \"Kit Experto\" and distributors/integrators, which allows creating new business relationships and strengthening and increasing existing ones. About my functions in this project are: full stack developer and SRE",
            image: "/projects/mundoKit.png",
            githubLink: null,
            link: "https://kitexperto.com/",
        },
        {
            name: "Wholesaler E-Commerce",
            techList: "React | Laravel | MySQL",
            description: "Mercadeando is an E-Commerce developed to be integrated into any ERP on the market. We work side by side with companies to achieve a solution that completely adapts to their needs and we help them to make that solution successful. In this project I worked as fullstack developer and SRE",
            image: "/projects/mercadeando.png",
            githubLink: null,
            link: "https://almacenfamily.com/",
        }
    ]
}

export default function handler(req, res) {
    res.status(200).json(person)
}
