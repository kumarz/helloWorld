

function showHomePage(){
    hideMaintenanceMsg();
    hideResumePage();
    resetActiveTab();
    showInfo();
    $('#homeTab').addClass('active');
};

function showBlogsPage(){
    resetActiveTab();
    hideResumePage();
    showMaintenanceMsg();
    $('#blogsTab').addClass('active');
};

function showProjectsPage(){
    resetActiveTab();
    showMaintenanceMsg();
    hideResumePage();
    $('#projectsTab').addClass('active');
};

function showResumePage(){
    resetActiveTab();
    hideInfo();
    hideMaintenanceMsg();
    $('#resumeTab').addClass('active');
    $('.resume').show();
};

function resetActiveTab(){
    $('#homeTab').removeClass('active');
    $('#projectsTab').removeClass('active');
    $('#blogsTab').removeClass('active');
    $('#resumeTab').removeClass('active');
}

function hideResumePage(){
    var resumeElem = $('.resume');
    if(resumeElem){
        resumeElem.hide();
    }
};

function hideInfo(){
    var infoElem = $('#info'); 
    if(infoElem){
        infoElem.hide();
    }
};

function showInfo(){
    var infoElem = $('#info'); 
    if(infoElem){
        infoElem.show();
    }
};

function showMaintenanceMsg(){
    var maintenanceElem = $('#maintenance'); 
    if(maintenanceElem){
        maintenanceElem.show();
    }
    hideInfo();
    hideResumePage();
};

function hideMaintenanceMsg(){
    var maintenanceElem = $('#maintenance'); 
    if(maintenanceElem){
        maintenanceElem.hide();
    } 
};


function disableRightclick(evt){
    console.log('came inside right click');
  if(evt && evt.button==2){
     alert('Restricted !!!');
     return false;    
   }
};

$('.resume-pdf').mousedown(function() {
    console.log('came inside pdf click');
    if(evt && evt.button==2){
        alert('Restricted !!!');
        return false;    
    }
});