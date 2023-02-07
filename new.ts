
 
let jsonDataArray: {
    image: string;
    Title: string;
    Subject: string;
    Grade: number;
    Units: number;
    Lessons: number;
    Topics: number;
    Teacher: string[];
    Students: number;
    Start: string;
    End: string;
    starimage: string;
    isExpired: boolean }[]= [{
    image : "./Assets/imageMask-1.png",
    "Title" : "Acceleration",
    "Subject" : "Physics",
    "Grade" : 7,
    "Units":4,
    "Lessons":18,
    "Topics" : 24,
    "Teacher" : ["Mr.Frank's Class B", "option 2"],
    "Students" : 50 ,
    "Start" : "21-Jan-2021",
    "End": "21-Aug-2021",
    "starimage" : "./Assets/favourite.svg",
    "isExpired": true
  },{
    "image" : "./Assets/imageMask.png",
    "Title" : "Displacement, Velocity and Speed",
    "Subject" : "Physics",
    "Grade" : 6,
    "Units":2,
    "Lessons":15,
    "Topics" : 20,
    "Teacher" : ["No Classes"],
    "Students" : 40 ,
    "Start" : "21-Feb-2021",
    "End": "21-Sep-2021" ,
    "starimage" : "./Assets/favourite.svg",
    "isExpired": true
  },{
    "image" : "./Assets/imageMask-2.png",
    "Title" : "Introduction to Biology: Micro organisms and how they affec...",
    "Subject" : "Biology",
    "Grade" : 4,
    "Units":5,
    "Lessons":16,
    "Topics" : 24,
    "Teacher" : ["All Classes"],
    "Students" : 300 ,
    "Start" : "",
    "End": "" ,
    "starimage" : "./Assets/favourite.svg",
    "isExpired": false
  },{
    "image" : "./Assets/imageMask-3.png",
    "Title" : "Introduction to High School Mathematics",
    "Subject" : "Mathematics",
    "Grade" : 8,
    "Units":4,
    "Lessons":18,
    "Topics" : 24,
    "Teacher" : ["Mr. Frank's Class A", "option 2"],
    "Students" : 44 ,
    "Start" : "14-Oct-2021",
    "End": "20-Oct-2022",
    "starimage" : "./Assets/favourite.svg",
    "isExpired": false
  }]
  export{};
  
const data_string = JSON.stringify(jsonDataArray);
const objects = JSON.parse(data_string);

    var cardContainer = document.getElementById('card_grid');
    for (let i = 0; i < objects.length; i++) {
  
        let jsonData = objects[i];
        let card = document.createElement("div");
        card.classList.add("card");
       cardContainer.appendChild(card);
      
    
        if(jsonData.isExpired === true) {
          let expire = document.createElement("span");
          expire.innerHTML = "EXPIRED";
          expire.setAttribute("style","display: block;width: fit-content;max-height: 18px;background-color: #FFE4E6;font-weight: normal;color: #D80000;font-size: 10px;padding: 4px 7px 2px 5px; margin-bottom: 6px;text-align: left;");
          card.appendChild(expire);
          card.setAttribute("style","padding: 0 0 9px 0")
         }
        
        
        let card_upper = document.createElement("div");
        card.appendChild(card_upper);
        card_upper.classList.add("card_upper");
    
        let image = document.createElement("img");
        image.src = jsonData.image;
        image.alt = jsonData.title;
        card_upper.appendChild(image);
    
        let card_upper_right = document.createElement("div");
        card_upper_right.classList.add("card_upper_right");
        card_upper.appendChild(card_upper_right);
    
        let card_heading = document.createElement("div");
        card_heading.classList.add("card_heading");
        card_upper_right.appendChild(card_heading);
    
        let title = document.createElement("h3");
        title.innerText = jsonData.Title;
        card_heading.appendChild(title);
    
        let star = document.createElement("button");
        star.setAttribute("class", "favourite");
        let originalcolor = star.style.backgroundColor;
        star.addEventListener("click", () => {
            if (star.style.backgroundColor === originalcolor) {
              star.style.backgroundColor = "#EEEEEE";
            } else {
              star.style.backgroundColor = originalcolor;
            }
          });
        card_heading.appendChild(star);
    
        let subjectGrade = document.createElement("small");
        subjectGrade.classList.add("text-muted");
        subjectGrade.innerHTML= jsonData.Subject +"&nbsp; | &nbsp; Grade " + jsonData.Grade;
        card_upper_right.appendChild(subjectGrade);
        
        let UnitsLesson = document.createElement("small");
        UnitsLesson.classList.add("text-muted");
        UnitsLesson.innerHTML= "<b>"+jsonData.Units+"</b>" +" Units &nbsp;<b>" + jsonData.Lessons + "</b> Lessons&nbsp;<b>" 
        + jsonData.Topics + "</b> Topics";
        card_upper_right.appendChild(UnitsLesson);
    
        let select = document.createElement("select");
        select.setAttribute("id","classes");
        select.setAttribute("name","classes");
        card_upper_right.appendChild(select);
       
       for(let options of jsonData.Teacher) {
        let option = document.createElement("option");
          option.value = options;
          option.text = options;
          select.appendChild(option);
       }
        
        let StudentDates = document.createElement("small");
        StudentDates.classList.add("text-muted");
        StudentDates.innerHTML= "<b>"+jsonData.Students+"</b>" +" Students &nbsp; | &nbsp;" + jsonData.Start + " - " 
        + jsonData.End ;
        card_upper_right.appendChild(StudentDates);
    
        card.appendChild(document.createElement("hr"));
    
        let card_footer = document.createElement("div");
        card_footer.classList.add("card_footer");
        card.appendChild(card_footer);
    
        let preview = document.createElement("img");
        preview.src = "./Assets/preview.svg";
        preview.alt = "Preview SVG";
        card_footer.appendChild(preview);
        
        let course = document.createElement("img");
        course.src = "./Assets/manage course.svg";
        course.alt = "manage course SVG";
        card_footer.appendChild(course);
        
        let grade = document.createElement("img");
        grade.src = "./Assets/grade submissions.svg";
        grade.alt = "grade submissions SVG";
        card_footer.appendChild(grade);
        
        let reports = document.createElement("img");
        reports.src = "./Assets/reports.svg";
        reports.alt = "reports SVG";
        card_footer.appendChild(reports);
    
    }
    
    
     


