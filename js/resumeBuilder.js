var bio = {
    "name" : "Dustin Adkins",
    "role" : "Front-End Web Developer",
    "contacts": [{
        "mobile": "E-mail for #",
        "email": "duadkins@fastmail.fm",
        "github": "https://github.com/dust1081",
        "location": "Lucasville, OH"
    }],
    "welcomeMessage": "I am currently working as a freelance front-end developer.",
    "skills": ["HTML", "CSS", "JavaScript", "jQuery", "C#/.NET", "Bootstrap", "SEO"],
    "biopic": "images/d1.png"
    };

var education = {
    "schools": [
        {
         "name": "Shawnee State University",
         "location": "Portsmouth, OH",
         "degree": "Bachelor's",
         "majors": ["Management Information Systems"],
         "dates": 2005,
         "url": "http//:www.shawnee.edu"
        }
    ],
}
  
var work = {
    "jobs" :[
        {
            "employer": "Self-Employed",
            "title": "Front-End Web Developer/Content Specialist",
            "location": "Lucasville, OH",
            "dates": "May 2006 - Present",
            "description":  "<ul><li>Build and maintain websites with HTML, CSS</li>"  +
                            "<li>Create websites using the Wordpress content management system</li> " +
                            "<li>Analyze traffic data and click through rates for websites</li> " +
                            "<li>Research and create website content</li></ul>"
            
        },

        {
            "employer": "Leapforce, Inc.",
            "title": "Search Engine Consultant",
            "location": "Lucasville, OH",
            "dates": "Sep 2013 - Sep 2016",
            "description": "<ul><li>Performed comparative analysis of search engine results</li>" +
                            "<li> Provided quality analysis on web pages and websites</li>" +
                        "<li> Measured adaptiveness and responsiveness of web pages with mobile devices and tablets</li>" +
                        "<li> Kept up to date on guidelines that changed frequently to maintain high quality</li></ul>"

        },
        
        {
            "employer": "Kroger",
            "title": "Pharmacy Technician",
            "location": "Waverly, OH",
            "dates": "Sep 2002 - May 2006",
            "description": "<ul><li>Entered data for prescription orders and payments</li>" +
                        "<li>Prepared, counted, and bottled medications</li>" +
                        "<li>Provided excellent customer service to customers</li>" +
                        "<li>Maintained computer records for drug inventories</li></ul>"
        }
    ],

};

var projects = {
    "projects": [
        {
        "title" : "Portfolio Page",
        "dates" : "June, 2016",
        "description": "Created an Online Portfolio of projects.",
        "images": ["images/p1.png"],
        "url": "https://dust1081.github.io/FR-Projects"
        },
        {
            "title" : "Javascript Calculator",
            "dates" : "July, 2016",
            "description" : " Created a calculator using Javascript",
            "images" : ["images/calc.png"],
            "url": "http://dust1081.github.io/JS-Calculator"
        },
        {
            "title" : "Canvas/Javascript Game",
            "dates" : "August, 2016",
            "description" : "Created an arcade Game clone using Javascript and HTML 5 canvas",
            "images" : ["images/p32.png"],
            "url" : "http://dust1081.github.io/p3"
        }
    ]
};
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
    $("#header").append(HTMLskillsStart);
};

bio.display();
for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};

	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts[contact].github);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts[contact].location);
        $("#topContacts").append(formattedMobile,formattedEmail,formattedGithub, formattedLocation);
        $("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);
	};

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
        $(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
    }
};
education.display();

work.display = function() {
    for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }

};
work.display();

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#",projects.projects[project].url);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();

$("#mapDiv").append(googleMap);
