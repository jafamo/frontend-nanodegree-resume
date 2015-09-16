/*
This is empty on purpose! Your code to build the resume will go here.


 $("#main").append([javier]);

 var firstName = "Javier Farinos";
 var age = 32;
 console.log(firstName);
 var awesomeThoughts = "I am "+firstName+ " I am AWESOME";
 console.log(awesomeThoughts);
 var funThoughs = awesomeThoughts.replace("AWESOME","FUN");
 $("#main").append(funThoughs);
 console.log(awesomeThoughts);

*/

//$("#main").append(skills.length);
var bio = {"name":"Javier Farinos",
  "role": "Web Developer",
  "contact": {
    "mobile": "07562896312",
    "email": "jafamo@gmail.com",
    "github": "jafamo",
    "twitter":"@java407",
    "location":"Chelmsford"
  },
  "picture": "images/fry.jpg",
  "welcome": "Hello !",
  "skills" : ["java","javascript","HTML","CSS","MySQL","linux","Git"]

};

//NAME and ROLE
var formattedRule = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRule);
var formattedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(formattedName);


//CONTACT

var formattedContactMobile = HTMLmobile.replace("%data%",bio.contact.mobile);
  $('#topContacts').append(formattedContactMobile);
  //EMAIL
  var formattedBioEmail = HTMLemail.replace("%data%",bio.contact.email);
  $('#topContacts').append(formattedBioEmail);
  //GITHUB
  var formattedBioGithub = HTMLgithub.replace("%data%",bio.contact.github);
  $('#topContacts').append(formattedBioGithub);
  //TWITTER
  var formattedBioTwitter = HTMLtwitter.replace("%data%",bio.contact.twitter);
  $('#topContacts').append(formattedBioTwitter);
  //LOCATION
  var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location);
  $('#topContacts').append(formattedLocation);

//PICTURE
  var formattedBioPic = HTMLbioPic.replace("%data%",bio.picture);
  $("#header").append(formattedBioPic);

//MESSAGE
  var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcome);
  $("#header").append(formattedMessage);

//SKILL MESSAGE
  $("#header").append(HTMLskillsStart.replace("%data%",bio.welcome));

//SKILLS
  var formattedSkills = HTMLskills.replace('%data%',bio.skills);
  $("#header").append(formattedSkills);

//-WORK--------------------------------------------------------------

var work = {
  "currentJob": "HelpDesk",
  "employer": "Tisssat",
  "dateWork":"2015",
  "city":"Valencia",
  "description": "HelpDesk with differents Systems (Linux, Windows).Programming sripts in shell and Batch for windows."
};

var workStart = HTMLworkStart.replace("%data%","Working");
$('#workExperience').append(workStart);

var workEmployer = HTMLworkEmployer.replace("%data%",work.employer);
$('#workExperience').append(workEmployer);

var workTitle = HTMLworkTitle.replace("%data%",work.currentJob);
$('#workExperience').append(workTitle);

var workTitle = HTMLworkDates.replace("%data%",work.dateWork);
$('#workExperience').append(workTitle);

var workLocation = HTMLworkLocation.replace("%data%",work.city);
$('#workExperience').append(workLocation);

var workDescription = HTMLworkDescription.replace("%data%",work.description);
$('#workExperience').append(workDescription);




var work1 = {
  "currentJob": "SysAdmin",
  "employer": "Dimension Informatica",
  "dateWork":"2006",
  "city":"Valencia",
  "description": "Install and configure laptops and workstation, Install servers (Apache,VSFT,TOMCAT)"
};

var workEmployer = HTMLworkEmployer.replace("%data%",work1.employer);
$('#workExperience').append(workEmployer);

var workTitle = HTMLworkTitle.replace("%data%",work1.currentJob);
$('#workExperience').append(workTitle);

var workTitle = HTMLworkDates.replace("%data%",work1.dateWork);
$('#workExperience').append(workTitle);

var workLocation = HTMLworkLocation.replace("%data%",work1.city);
$('#workExperience').append(workLocation);

var workDescription = HTMLworkDescription.replace("%data%",work1.description);
$('#workExperience').append(workDescription);


/*------------EDUCATION-----------------*/


var Education = [
  {
      "schoolName" : "Universidad Politecnica de Valencia",
      "schoolDegree" : "Bachelor of IT Engienering (B.A.Sc.)",
      "schoolDates" : "2006 - 2015",
      "schoolLocation" : "Valencia - Valencia  (Spain)",
      "schoolMajor" : "http://www.upv.es/en/"
    },
    {
      "schoolName" : "Politecnico di Milano",
      "schoolDegree" : "Bachelor of Applied Science (B.A.Sc.) ERASMUS student",
      "schoolDates" : "2012 - 2013",
      "schoolLocation" : "Como - Milano (Italy)",
      "schoolMajor" : "http://www.polo-como.polimi.it/en/"
    },
    {
      "schoolName" : "Florida University",
      "schoolDegree" : "FP2, Computer Systems Networking and Telecommunications",
      "schoolDates" : "2004 - 2006",
      "schoolLocation" : "Catarroja - Valencia (Spain)",
      "schoolMajor" : "http://www.florida-uni.es/web_en/home.php"
    }
  ]

  var schoolStart = HTMLschoolStart.replace("%data%","Education");
  $('#education').append(schoolStart);

  for(var i =0; i < Education.length; i++){

    var schoolName = HTMLschoolName.replace("%data%",Education[i].schoolName);
    $('#education').append(schoolName);

    var schoolDegree = HTMLschoolDegree.replace("%data%",Education[i].schoolDegree);
    $('#education').append(schoolDegree);

    var schoolDates = HTMLschoolDates.replace("%data%",Education[i].schoolDates);
    $('#education').append(schoolDates);

    var schoolLocation = HTMLschoolLocation.replace("%data%",Education[i].schoolLocation);
    $('#education').append(schoolLocation);

    var schoolMajor = HTMLschoolMajor.replace("%data%",Education[i].schoolMajor);
    $('#education').append(schoolMajor);
  }
