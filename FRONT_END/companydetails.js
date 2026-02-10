// All companies with full details
const companies = [
    {
        name: "Amazon",
        role: "SDE-1",
        ctc: "18 – 28 LPA",
        cgpa: 7,
        skills: "DSA, Java, System Design",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        applyLink: "https://www.amazon.jobs/",
        location: "Bangalore, Hyderabad, Noida",
        rounds: ["Aptitude Test", "Technical Interview 1", "Technical Interview 2", "HR Interview"],
        bond: "No bond",
        eligibility: "B.Tech/B.E/Any relevant degree",
        website: "https://www.amazon.jobs/en/"
    },
    {
        name: "Google",
        role: "Software Engineer",
        ctc: "20 – 35 LPA",
        cgpa: 7.5,
        skills: "DSA, Algorithms, Python/Java",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        applyLink: "https://careers.google.com/jobs/results/",
        location: "Bangalore, Hyderabad, Gurgaon",
        rounds: ["Online Assessment", "Technical Interview", "HR Interview"],
        bond: "No bond",
        eligibility: "B.Tech/B.E/M.Tech/MS",
        website: "https://careers.google.com/"
    },
    {
        name: "Microsoft",
        role: "Software Engineer",
        ctc: "18 – 30 LPA",
        cgpa: 7,
        skills: "DSA, OOPS, System Design",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_(2012).svg",
        applyLink: "https://careers.microsoft.com/us/en/search-results",
        location: "Hyderabad, Bangalore, Noida",
        rounds: ["Aptitude Test", "Technical Interview", "Managerial Interview"],
        bond: "No bond",
        eligibility: "B.Tech/B.E",
        website: "https://careers.microsoft.com/"
    },
    {
        name: "Flipkart",
        role: "Software Engineer",
        ctc: "15 – 25 LPA",
        cgpa: 7,
        skills: "DSA, Java, Backend Basics",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flipkart_logo.png",
        applyLink: "https://www.flipkartcareers.com/",
        location: "Bangalore, Hyderabad",
        rounds: ["Online Test", "Technical Round 1", "Technical Round 2", "HR Round"],
        bond: "No bond",
        eligibility: "B.Tech/B.E",
        website: "https://www.flipkartcareers.com/"
    },
    {
        name: "Infosys",
        role: "System Engineer",
        ctc: "3.6 LPA",
        cgpa: 6,
        skills: "Java, SQL, OOPS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
        applyLink: "https://www.infosys.com/careers.html",
        location: "Multiple cities",
        rounds: ["Written Test", "Technical Interview", "HR Interview"],
        bond: "1-year bond for certain roles",
        eligibility: "B.Tech/B.E/MCA",
        website: "https://www.infosys.com/careers.html"
    },
    {
        name: "TCS",
        role: "Assistant System Engineer",
        ctc: "3.36 – 7 LPA",
        cgpa: 6,
        skills: "Java, Python, Basics of DSA",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
        applyLink: "https://www.tcs.com/careers",
        location: "Pan India",
        rounds: ["Written Test", "Technical Interview", "Managerial Interview", "HR Interview"],
        bond: "1-year bond in some programs",
        eligibility: "B.Tech/B.E/MCA",
        website: "https://www.tcs.com/careers"
    },
    {
        name: "Wipro",
        role: "Project Engineer",
        ctc: "3.5 – 6.5 LPA",
        cgpa: 6,
        skills: "Java, SQL, Communication",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
        applyLink: "https://careers.wipro.com/",
        location: "Bangalore, Hyderabad, Pune",
        rounds: ["Written Test", "Technical Interview", "HR Interview"],
        bond: "No bond",
        eligibility: "B.Tech/B.E",
        website: "https://careers.wipro.com/"
    },
    {
        name: "Cognizant",
        role: "Programmer Analyst",
        ctc: "4 – 6.75 LPA",
        cgpa: 6.5,
        skills: "Java, Python, SQL",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Cognizant_logo_2022.svg",
        applyLink: "https://careers.cognizant.com/",
        location: "Multiple cities",
        rounds: ["Aptitude Test", "Technical Round", "HR Round"],
        bond: "No bond",
        eligibility: "B.Tech/B.E",
        website: "https://careers.cognizant.com/"
    },
    {
        name: "Accenture",
        role: "Associate Software Engineer",
        ctc: "4.5 – 8 LPA",
        cgpa: 6.5,
        skills: "Java, Cloud Basics, SQL",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
        applyLink: "https://www.accenture.com/in-en/careers",
        location: "Pan India",
        rounds: ["Online Test", "Technical Interviews", "HR Interview"],
        bond: "No bond",
        eligibility: "B.Tech/B.E/MCA",
        website: "https://www.accenture.com/in-en/careers"
    },
    {
        name: "Capgemini",
        role: "Software Engineer",
        ctc: "4 – 7.5 LPA",
        cgpa: 6,
        skills: "Java, Python, Aptitude",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg",
        applyLink: "https://www.capgemini.com/careers/",
        location: "Pan India",
        rounds: ["Online Test", "Technical Interview", "Managerial Round", "HR Interview"],
        bond: "No bond",
        eligibility: "B.Tech/B.E",
        website: "https://www.capgemini.com/careers/"
    },
    {
        name: "LTIMindtree",
        role: "Graduate Engineer Trainee",
        ctc: "4 – 6.5 LPA",
        cgpa: 6.5,
        skills: "Java, SQL, Problem Solving",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/LTIMindtree_Logo.svg",
        applyLink: "https://www.ltimindtree.com/careers/",
        location: "Multiple cities",
        rounds: ["Written Test", "Technical Interview", "HR Interview"],
        bond: "No bond",
        eligibility: "B.Tech/B.E",
        website: "https://www.ltimindtree.com/careers/"
    },
    {
        name: "HCL",
        role: "Software Engineer",
        ctc: "4 – 6 LPA",
        cgpa: 6,
        skills: "Java, Linux, SQL",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/HCLTech_Logo.svg",
        applyLink: "https://www.hcltech.com/careers",
        location: "Pan India",
        rounds: ["Written Test", "Technical Interview", "HR Interview"],
        bond: "No bond",
        eligibility: "B.Tech/B.E",
        website: "https://www.hcltech.com/careers"
    },
    {
        name: "Zoho",
        role: "Software Developer",
        ctc: "6 – 10 LPA",
        cgpa: 7,
        skills: "DSA, C++, Java, Problem Solving",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Zoho-logo.png",
        applyLink: "https://careers.zohocorp.com/",
        location: "Chennai, Bangalore",
        rounds: ["Online Test", "Technical Interview", "HR Interview"],
        bond: "No bond",
        eligibility: "B.Tech/B.E/MCA",
        website: "https://careers.zohocorp.com/"
    },
    {
        name: "Paytm",
        role: "Software Engineer",
        ctc: "8 – 15 LPA",
        cgpa: 6.5,
        skills: "Java, Spring Boot, SQL",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Paytm_Logo.png",
        applyLink: "https://paytm.com/careers/",
        location: "Noida, Bangalore",
        rounds: ["Online Test", "Technical Round", "HR Round"],
        bond: "No bond",
        eligibility: "B.Tech/B.E",
        website: "https://paytm.com/careers/"
    }
];

const params = new URLSearchParams(window.location.search);
const companyName = params.get("name");

const company = companies.find(c => c.name === companyName);
const container = document.getElementById("companyDetails");

if(company){
    container.innerHTML = `
        <img src="${company.logo}" class="company-logo" alt="${company.name}">
        <h2>${company.name}</h2>
        <p><b>Role:</b> ${company.role}</p>
        <p><b>CTC:</b> ${company.ctc}</p>
        <p><b>Minimum CGPA:</b> ${company.cgpa}</p>
        <p><b>Skills:</b> ${company.skills}</p>
        <p><b>Location:</b> ${company.location}</p>
        <p><b>Recruitment Rounds:</b> ${company.rounds.join(", ")}</p>
        <p><b>Bond:</b> ${company.bond}</p>
        <p><b>Eligibility:</b> ${company.eligibility}</p>
        <a class="apply-btn" href="${company.applyLink}" target="_blank">Apply Now</a>
    `;
} else {
    container.innerHTML = "<p>Company not found</p>";
}
