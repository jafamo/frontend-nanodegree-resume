/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append([javier]);

 /*var firstName = "Javier Farinos";
 var age = 32;
 console.log(firstName);
 var awesomeThoughts = "I am "+firstName+ " I am AWESOME";
 console.log(awesomeThoughts);
 var funThoughs = awesomeThoughts.replace("AWESOME","FUN");
 $("#main").append(funThoughs);
 console.log(awesomeThoughts);
*/
 // otro
var firstName = "Javier Farinos";
var rule = "Web Developer";





var bio={
  "name": "Javier Farinos",
  "role": "Web Developer",
  "contact": {
    "mobile": "07562896312",
    "email": "jafamo@gmail.com",
    "github": "jafamo",
    "twitter":"",
    "location":"Chelmsford",
  },
  "picture": "images/fry.jpg",
  "welcome": "Hello !",
  "skills" : ["java","javascript","HTML","CSS","MySQL","linux","Git"]

};




//$("#main").append(skills.length);
//NAME and ROLE
 var formattedName = HTMLheaderName.replace("%data%",firstName);
 $("#header").append(formattedName);
 var formattedRule = HTMLheaderRole.replace("%data%",rule);
$("#header").append(formattedRule);

//PICTURE
var formattedBioPic = HTMLbioPic.replace("%data%",bio.picture);
$("#header").append(formattedBioPic);


//var formattedBioMobile = HTMLmobile.replace("%data%",bio.contact.mobile);
//$("#footerContacts").append(formattedBioMobile);
