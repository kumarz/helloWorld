function showMaintenanceMsg(){
    var infoElem = $('#info'); 
    var maintenanceElem = $('#maintenance'); 
    infoElem.hide();
    maintenanceElem.show();
};

function showHomePage(){
    var infoElem = $('#info'); 
    var maintenanceElem = $('#maintenance'); 
    infoElem.show();
    maintenanceElem.hide();
    resetActiveTab();
    $('#homeTab').addClass('active');
};

function showBlogsPage(){
    resetActiveTab();
    showMaintenanceMsg();
    $('#blogsTab').addClass('active');
};

function showProjectsPage(){
    resetActiveTab();
    showMaintenanceMsg();
    $('#projectsTab').addClass('active');
};

function showResumePage(){
    resetActiveTab();
    showMaintenanceMsg();
    $('#resumeTab').addClass('active');
};


function resetActiveTab(){
    $('#homeTab').removeClass('active');
    $('#projectsTab').removeClass('active');
    $('#blogsTab').removeClass('active');
    $('#resumeTab').removeClass('active');
}