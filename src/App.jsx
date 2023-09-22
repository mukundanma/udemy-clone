import { useEffect, useState } from "react";
import Customers from "./components/Customers";
import { Header } from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import TopCourses from "./components/TopCourses";
import Testimonials from "./components/Testimonials";

const customers = [
    {
        name: "Volkswagen",
        imageUrl: "https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg",
    },
    {
        name: "Samsung",
        imageUrl: "https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg",
    },
    {
        name: "Cisco",
        imageUrl: "https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg",
    },
    {
        name: "AT&T",
        imageUrl: "https://s.udemycdn.com/partner-logos/ou-v1/att.svg",
    },
    {
        name: "P&G",
        imageUrl:
            "https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg",
    },
    {
        name: "HP",
        imageUrl:
            "https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg",
    },
    {
        name: "Citibank",
        imageUrl: "https://s.udemycdn.com/partner-logos/ou-v1/citi.svg",
    },
    {
        name: "Ericsson",
        imageUrl: "https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg",
    },
];

const categoriesInfo = [
    {
        label: "Python",
        value: "python",
        title: "Expand your career opportunities with Python",
        desc: `Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to`,
        url: "https://mocki.io/v1/f1ce2bf1-ae83-4aef-9751-0319c16d0f55",
    },
    {
        label: "Excel",
        value: "excel",
        title: "Analyze and visualize data with Excel",
        desc: `Take a Microsoft Excel course from Udemy, and learn how to use this industry-standard software. Real-world experts will show you the basics like how to organize data into sheets, rows and columns, and advanced techniques like creating complex dynamic formulas. Both small businesses and large companies use Excel to turn their raw data into actionable insights.`,
        url: "https://mocki.io/v1/7523b6eb-0002-4538-bcca-0d3d31325021",
    },
    {
        label: "Web Development",
        value: "web",
        title: "Build websites and applications with Web Development",
        desc: `The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on`,
        url: "https://mocki.io/v1/c1d312c3-2235-47b3-b8e5-0f2309cc91fe",
    },
    {
        label: "Javascript",
        value: "javascript",
        title: "Grow your software development skills with JavaScript",
        desc: `JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage. With JavaScript online classes, you can learn to build`,
        url: "https://mocki.io/v1/5f7444c6-b0ec-4c6e-81cf-0c5413611961",
    },
    {
        label: "Data Science",
        value: "datascience",
        title: "Lead data-driven decisions with Data Science",
        desc: `Data science application is an in-demand skill in many industries worldwide — including finance, transportation, education, manufacturing, human resources, and banking. Explore data science courses with Python, statistics, machine learning, and more to grow your knowledge. Get data science training if you’re into research, statistics, and analytics.`,
        url: "https://mocki.io/v1/32c5f265-9404-4a7e-b969-ac39affe59ac",
    },
    {
        label: "Amazon AWS",
        value: "aws",
        title: "Become an expert in cloud computing with AWS Certification",
        desc: `Amazon Web Services (AWS) is a cloud computing platform with more than 200 featured services. Whether or not you aim for certification, an AWS course offers the theory and practical skills you need to land a job in cloud development, sales, engineering, networking, and more. The better you become at cloud computing, the more you can earn. Anyone can learn AWS skills, and with AWS online training, you can move at your own pace.`,
        url: "https://mocki.io/v1/b99f7543-ff3a-4cc3-afa2-5dad0ca67ee5",
    },
    {
        label: "Drawing",
        value: "drawing",
        title: "Expand your creative skillset with Drawing",
        desc: `Want to start drawing for fun or take your craft to the next level? Explore our online drawing classes and learn pencil drawing, figure drawing, cartoon drawing, character drawing for cartoons and anime, illustration, sketching, shading and more. Take an overview course on the fundamentals of drawing or zero in on an area`,
        url: "https://mocki.io/v1/011aae42-9dea-4468-a283-64e241e7ce32",
    },
];

function App() {
    const [coursesInCategory, setCoursesInCategory] = useState({});

    useEffect(() => {
        console.log("before setState: ");
        categoriesInfo.map(async (categoryInfo) => {
            console.log(categoryInfo.value);
            let value = categoryInfo.value;
            let resp = await fetch(categoryInfo.url);
            let courseInfo = await resp.json();
            setCoursesInCategory((prevState) => {
                return {
                    ...prevState,
                    [value]: courseInfo.unit.items,
                };
            });
        });
    }, []);

    return (
        <div className="w-full h-screen">
            <div className="px-10"></div>
            <Header />
            <HeroCarousel className="pt-6" />
            <Customers customers={customers} />
            <TopCourses
                categoriesInfo={categoriesInfo}
                coursesInCategory={coursesInCategory}
            />
            <Testimonials />
            <div className="mt-48 text-center">End</div>
        </div>
    );
}

export default App;
