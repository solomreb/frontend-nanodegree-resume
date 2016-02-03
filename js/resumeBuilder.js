

var bio = {
	"name": "Becky Solomon",
	"role": "Web Developer",
	"contacts": {
		"mobile" : "555-555-5555",
		"email" : "beckycsolomon@gmail.com", 
		"github" : "solomreb",
		"twitter" : "@beckycsolomon1",
		"location" : "Portland, OR"
	},
	"bioPic" : "images/me.jpg",
	"welcomeMessage" : "Hello and welcome!",
	"skills": [
		"Object-Oriented Design", 
		"Agile",
		"Test-Driven Design",
		"MVC"
	]
};


var work = {
	"jobs": [
		{
			"position": "QA Specialist",
			"employer": "Scan One",
			"dates" : "May 2012 - April 2014",
			"location" : "Portland, OR",
			"description" : "Performed quality assurance and data entry for Scan One, a tech company that offers solutions for automating paper-intensive transactions in the financial and healthcare fields. Researched and corrected production errors using SQL queries, ensuring a superior end-user product. Merit recognized and rewarded with leadership position. Successfully trained and oversaw team of 10 - 15 capture center specialists. Collaborated with software developers to improve capture center user experience resulting in higher productivity."
		},
		{
			"position": "QA/Content Specialist",
			"employer": "Naviant",
			"dates" : "September 2011 - March 2012",
			"location" : "Verona, WI",
			"description" : "Converted hard copy classified medical documents in digital form, ensuring secure file transfer. Position required self disciplined work ethic to meet strict hourly deadlines. Comfortable tackling new projects independently."
		}

	]
};

var projects = {
	"projects": [
		{
			"title": "Curses-Based Database Interface",
			"dates" : "2015",
			"description" : "A database creater, viewer, and editor implemented in Python's Curses library. This was a team project for my Senior Projects course."
		},
		{
			"title": "OTP Encrypter/Decrypter",
			"dates" : "2014",
			"description" : "Implementation of a One Time Pad (OTP). It encrypts and decrypts plaintext into ciphertext using a randomized key."
		}
	]
};
	

var education = {
	"schools" : [
		{
			"name" :"Oregon State University",
			"dates" : "Mar 2014 - Dec 2015",
			"location" : "Corvallis, OR",
			"major" : "Computer Science",
			"degree" : "B.S."
		},
		{
			"name" :"University of Wisconsin - Madison",
			"dates" : "Aug 2004 - May 2008",
			"location" : "Madison, WI",
			"major" : "Psychology",
			"degree" : "B.A."
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates" : "January 2016",
			"url": "http://www.udacity.com/course/ud804"
		}
	]
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").append(formattedName + formattedRole);


	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);

	$("#header").append(formattedMobile + formattedEmail + formattedTwitter 
		+ formattedGithub + formattedLocation + formattedPic);
}

work.display = function(){
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer)
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position)
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLoc);
		$(".work-entry:last").append(formattedDesc);

	}
}


//$("#main").append(internationalizeButton);

function inName(name) {
	name = name.trim().split(" ");

	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
			name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title)
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		
		$(".project-entry:last").append(formattedTitle + formattedDates + formattedDesc);
	}

}

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var sch = education.schools[school];
        var formattedName = HTMLschoolName.replace("%data%", sch["name"]);
        var formattedDegree = HTMLschoolDegree.replace("%data%", sch["degree"]);
        var formattedDates = HTMLschoolDates.replace("%data%", sch["dates"]);
        var formattedLocation = HTMLschoolLocation.replace("%data%", sch["location"]);
        var formattedMajor = HTMLschoolMajor.replace("%data%", sch["major"]);

		$(".education-entry:last").append(formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor);
	}

}

bio.display();
work.display();
projects.display();
education.display();



if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	for (item in bio.skills){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[item]);
		$("#skills").append(formattedSkill);
	}
}



$("#mapDiv").append(googleMap);