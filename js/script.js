let project = document.getElementsByClassName('project');
let sideIndex =1;

showProject(sideIndex);

function showProject(num){
    // go to first project after clicking forward from last button
    if(num> project.length){
        sideIndex = 1;
    } 
    // go to last project after clicking backward from first button
    if(num<1){
        sideIndex = project.length;
    }
    //for loop to hide the all projects
    for(let i=0; i<project.length;i++){
        project[i].style.display = "none";
    }
    console.log("sideInded",sideIndex)
    project[sideIndex-1].style.display = "flex";
}

function navigateProject(num){
    //change the sideIndex based on backward or forward arrow
    showProject((sideIndex += num));
}