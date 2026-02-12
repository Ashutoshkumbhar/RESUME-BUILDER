// store companies info here
// store companies info here
const companies = [
    {
        name: "Amazon",
        role: "SDE-1",
        cgpa: 7,
        skills: "DSA, Java, System Design",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        applyLink: "https://www.amazon.jobs/"
    },
    {
        name: "Google",
        role: "Software Engineer",
        cgpa: 7.5,
        skills: "DSA, Algorithms, Python/Java",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        applyLink: "https://careers.google.com/jobs/results/"
    },
    {
        name: "Microsoft",
        role: "Software Engineer",
        cgpa: 7,
        skills: "DSA, OOPS, System Design",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_(2012).svg",
        applyLink: "https://careers.microsoft.com/us/en/search-results"
    },
    {
        name: "Flipkart",
        role: "Software Engineer",
        cgpa: 7,
        skills: "DSA, Java, Backend Basics",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flipkart_logo.png",
        applyLink: "https://www.flipkartcareers.com/"
    },
    {
        name: "Infosys",
        role: "System Engineer",
        cgpa: 6,
        skills: "Java, SQL, OOPS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
        applyLink: "https://www.infosys.com/careers.html"
    },
    {
        name: "TCS",
        role: "Assistant System Engineer",
        cgpa: 6,
        skills: "Java, Python, Basics of DSA",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
        applyLink: "https://www.tcs.com/careers"
    },
    {
        name: "Wipro",
        role: "Project Engineer",
        cgpa: 6,
        skills: "Java, SQL, Communication",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
        applyLink: "https://careers.wipro.com/"
    },
    {
        name: "Cognizant",
        role: "Programmer Analyst",
        cgpa: 6.5,
        skills: "Java, Python, SQL",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Cognizant_logo_2022.svg",
        applyLink: "https://careers.cognizant.com/"
    },
    {
        name: "Accenture",
        role: "Associate Software Engineer",
        cgpa: 6.5,
        skills: "Java, Cloud Basics, SQL",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
        applyLink: "https://www.accenture.com/in-en/careers"
    },
    {
        name: "Capgemini",
        role: "Software Engineer",
        cgpa: 6,
        skills: "Java, Python, Aptitude",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg",
        applyLink: "https://www.capgemini.com/careers/"
    },
    {
        name: "LTIMindtree",
        role: "Graduate Engineer Trainee",
        cgpa: 6.5,
        skills: "Java, SQL, Problem Solving",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/LTIMindtree_Logo.svg",
        applyLink: "https://www.ltimindtree.com/careers/"
    },
    {
        name: "HCL",
        role: "Software Engineer",
        cgpa: 6,
        skills: "Java, Linux, SQL",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/HCLTech_Logo.svg",
        applyLink: "https://www.hcltech.com/careers"
    },
    {
        name: "Zoho",
        role: "Software Developer",
        cgpa: 7,
        skills: "DSA, C++, Java, Problem Solving",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Zoho-logo.png",
        applyLink: "https://careers.zohocorp.com/"
    },
    {
        name: "Paytm",
        role: "Software Engineer",
        cgpa: 6.5,
        skills: "Java, Spring Boot, SQL",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Paytm_Logo.png",
        applyLink: "https://paytm.com/careers/"
    }
];


// generate cards

const container = document.getElementById("companies");
companies.forEach(c => {
    container.innerHTML += `
        <div class="company-card">
            <img src="${c.logo}" class="company-logo">
            <h3>${c.name}</h3>
            <p><b>Role:</b> ${c.role}</p>
            <p><b>Eligibility:</b> CGPA ≥ ${c.cgpa}</p>
            <p><b>Skills:</b> ${c.skills}</p>
            <a href="companydetails.html?name=${c.name}" target="_blank">
                <button class="apply-btn">View Details</button>
            </a>
        </div>
    `;
});


