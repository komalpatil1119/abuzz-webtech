var app = angular.module("myApp", ["ngRoute"]);
var Ver = 1;

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("", { templateUrl: "home.html?v=" + Ver, controller: "uiCtrl" })
        .when("/", { templateUrl: "home.html?v=" + Ver, controller: "uiCtrl" })
        .when("/membership", { templateUrl: "membership.html?v=" + Ver, controller: "uiCtrl" })
        .when("/education", { templateUrl: "school.html?v=" + Ver, controller: "uiCtrl" })
        .when("/contactus", { templateUrl: "contactUs.html?v=" + Ver, controller: "uiCtrl" })
       // .when("/school-erp", { templateUrl: "school-erp.html?v=" + Ver, controller: "uiCtrl" })
        .when("/school-management-system", { templateUrl: "school-erp.html?v=" + Ver, controller: "uiCtrl" })
        //.when("/college-cms", { templateUrl: "college-cms.html?v=" + Ver, controller: "uiCtrl" })
        .when("/college-erp-system-software", { templateUrl: "college-cms.html?v=" + Ver, controller: "uiCtrl" })
       // .when("/autonomous-cms", { templateUrl: "autonomous-cms.html?v=" + Ver, controller: "uiCtrl" })
        .when("/autonomous-college-management-system", { templateUrl: "autonomous-cms.html?v=" + Ver, controller: "uiCtrl" })
        //.when("/university-ums", { templateUrl: "university-ums.html?v=" + Ver, controller: "uiCtrl" })
        .when("/university-management-system", { templateUrl: "university-ums.html?v=" + Ver, controller: "uiCtrl" })
       // .when("/learning-lms", { templateUrl: "learning-lms.html?v=" + Ver, controller: "uiCtrl" })
        .when("/learning-management-software", { templateUrl: "learning-lms.html?v=" + Ver, controller: "uiCtrl" })
        .when("/online-examination", { templateUrl: "online-examination.html?v=" + Ver, controller: "uiCtrl" })
        .when("/onscreen-osm", { templateUrl: "onscreen-osm.html?v=" + Ver, controller: "uiCtrl" })
       // .when("/SPAS-Salons", { templateUrl: "SPAS-Salons.html?v=" + Ver, controller: "uiCtrl" })
        .when("/spa-sallon-management-system", { templateUrl: "SPAS-Salons.html?v=" + Ver, controller: "uiCtrl" })
       // .when("/HealthCare-HMS", { templateUrl: "HealthCare-HMS.html?v=" + Ver, controller: "uiCtrl" })
        .when("/hospital-management-system", { templateUrl: "HealthCare-HMS.html?v=" + Ver, controller: "uiCtrl" })
        //.when("/practice-pms", { templateUrl: "practice-pms.html?v=" + Ver, controller: "uiCtrl" })
        .when("/clinic-management-system", { templateUrl: "practice-pms.html?v=" + Ver, controller: "uiCtrl" })
        //.when("/insurance-TPAservice", { templateUrl: "insurance-TPAservice.html?v=" + Ver, controller: "uiCtrl" })
        .when("/pre-insurance-tele-mer-video-graphy-services", { templateUrl: "insurance-TPAservice.html?v=" + Ver, controller: "uiCtrl" })
       // .when("/BGC-EmpBagroundChecks", { templateUrl: "BGC-EmpBagroundChecks.html?v=" + Ver, controller: "uiCtrl" })
        .when("/background-verification-services", { templateUrl: "BGC-EmpBagroundChecks.html?v=" + Ver, controller: "uiCtrl" })
        //.when("/HumanResourse-HRMS", { templateUrl: "HumanResourse-HRMS.html?v=" + Ver, controller: "uiCtrl" })
        .when("/human-resource-management-system", { templateUrl: "HumanResourse-HRMS.html?v=" + Ver, controller: "uiCtrl" })
       // .when("/payroll", { templateUrl: "payroll .html?v=" + Ver, controller: "uiCtrl" })
        .when("/payroll-management-system", { templateUrl: "payroll .html?v=" + Ver, controller: "uiCtrl" })
        .when("/Inventory-StockManagements", { templateUrl: "Inventory-StockManagements.html?v=" + Ver, controller: "uiCtrl" })
       // .when("/Tasksheet-Management", { templateUrl: "Tasksheet-Managment.html?v=" + Ver, controller: "uiCtrl" })
        .when("/task-management-system", { templateUrl: "Tasksheet-Managment.html?v=" + Ver, controller: "uiCtrl" })
       // .when("/documentationprocess", { templateUrl: "documentationprocess.html?v=" + Ver, controller: "uiCtrl" })
        .when("/documentation-management-system", { templateUrl: "documentationprocess.html?v=" + Ver, controller: "uiCtrl" })
        .when("/InventoryStock", { templateUrl: "inventorystock.html?v=" + Ver, controller: "uiCtrl" })
        .when("/Library", { templateUrl: "Library.html?v=" + Ver, controller: "uiCtrl" })
        .when("/eventmanagements", { templateUrl: "eventmanagements.html?v=" + Ver, controller: "uiCtrl" })
        .when("/matrimony", { templateUrl: "matrimony.html?v=" + Ver, controller: "uiCtrl" })
        .when("/OTTPlatform", { templateUrl: "OTTplatform.html?v=" + Ver, controller: "uiCtrl" })
        .when("/websitebuilder", { templateUrl: "websitebuilder.html?v=" + Ver, controller: "uiCtrl" })
        .when("/partner", { templateUrl: "partner.html?v=" + Ver, controller: "uiCtrl" })
        .when("/blogs", { templateUrl: "blogs.html?v=" + Ver, controller: "uiCtrl" })
        .when("/our-team", { templateUrl: "our-team.html?v=" + Ver, controller: "uiCtrl" })
        .when("/about-us", { templateUrl: "about-us.html?v=" + Ver, controller: "uiCtrl" })
        .when("/terms_conditions", { templateUrl: "policies/termsandconditions.html?v=" + Ver, controller: "uiCtrl" })
        .when("/privacy_policy", { templateUrl: "policies/privacypolicies.html?v=" + Ver, controller: "uiCtrl" })
        .when("/refund_canncellation", { templateUrl: "policies/refundandcancellation.html?v=" + Ver, controller: "uiCtrl" })
        .when("/app_privacy_policy", { templateUrl: "policies/app_privacy_policy.html?v=" + Ver, controller: "uiCtrl" })
        .when("/our_clients", { templateUrl: "our_clients.html?v=" + Ver, controller: "uiCtrl" })
        .when("/naac_nba_accredation", { templateUrl: "naac_nba_accredation.html?v=" + Ver, controller: "uiCtrl" })
        .when("/abc_portal_integration", { templateUrl: "abc_portal_integration.html?v=" + Ver, controller: "uiCtrl" })
        .when("/mdm_student_absorption", { templateUrl: "mdm_student_absorption.html?v=" + Ver, controller: "uiCtrl" })
        .when("/on_screen_marketing", { templateUrl: "on_screen_marketing.html?v=" + Ver, controller: "uiCtrl" })
        .when("/outcome_education", { templateUrl: "outcome_education.html?v=" + Ver, controller: "uiCtrl" })
        .when("/robot", { templateUrl: "robot.txt?v=" + Ver, controller: "uiCtrl" })
        .when("/robot", { templateUrl: "robot.txt?v=" + Ver, controller: "uiCtrl" })
        .when("/sitemap", { templateUrl: "sitemap.xml?v=" + Ver, controller: "uiCtrl" })

        .otherwise({ redirectTo: "/" });
    $locationProvider.html5Mode(true);
});

app.controller('uiCtrl', function ($scope, $location, $rootScope) {
    topFunction();

    $("link[rel='canonical']").attr('href', document.location.href);

    changemeta();

});

app.controller('MainCtrl', function ($scope, $location, $rootScope) {
    // get current URL
    var currentUrl = document.location.href;

    // find <link rel="canonical"> in <head>
    var link = $("link[rel='canonical']")[0];

    if (!link) {
        // if not present, create one
        link = document[0].createElement('link');
        link.setAttribute('rel', 'canonical');
        document[0].head.appendChild(link);
    }

    // set canonical URL
    link.setAttribute('href', currentUrl);

    // print it on page
    $scope.canonicalUrl = link.href;
});


function changemeta() {
    if (document.location.pathname == '/school-management-system') {
        $("head").append('<script type="application/ld+json">{"@context":"https://schema.org/","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://abuzzwebtech.com/"},{"@type":"ListItem","position":2,"name":"school management system","item":"https://abuzzwebtech.com/school-management-system"}]}</script>');
        $("meta[name='keywords']").attr('content', objmeta.schoolmanagementsystem.keywords);
        $("meta[name='description']").attr('content', objmeta.schoolmanagementsystem.desc);
        $("meta[name='title']").attr('content', objmeta.schoolmanagementsystem.title);
        $("title").html(objmeta.schoolmanagementsystem.title);
    } else if (document.location.pathname == '/college-erp-system-software') {
        $("head").append('<script type="application/ld+json">{"@context":"https://schema.org/","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://abuzzwebtech.com/"},{"@type":"ListItem","position":2,"name":"College ERP System Software","item":"https://abuzzwebtech.com/college-erp-system-software"}]}</script>');
        $("meta[name='keywords']").attr('content', objmeta.collegemanagement.keywords);
        $("meta[name='description']").attr('content', objmeta.collegemanagement.desc);
        $("meta[name='title']").attr('content', objmeta.collegemanagement.title);
        $("title").html(objmeta.collegemanagement.title);
    } else if (document.location.pathname == '/autonomous-college-management-system') {
        $("head").append('<script type="application/ld+json">{"@context":"https://schema.org/","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://abuzzwebtech.com/"},{"@type":"ListItem","position":2,"name":"Autonomous college Management System Software","item":"https://abuzzwebtech.com/autonomous-college-management-system"}]}</script>');
        $("meta[name='keywords']").attr('content', objmeta.autonomouscollege.keywords);
        $("meta[name='description']").attr('content', objmeta.autonomouscollege.desc);
        $("meta[name='title']").attr('content', objmeta.autonomouscollege.title);
        $("title").html(objmeta.autonomouscollege.title);
    } else if (document.location.pathname == '/university-management-system') {
        $("head").append('<script type="application/ld+json">{"@context":"https://schema.org/","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://abuzzwebtech.com/"},{"@type":"ListItem","position":2,"name":"University Management System","item":"https://abuzzwebtech.com/university-management-system"}]}</script>');
        $("meta[name='keywords']").attr('content', objmeta.universitiesmanagement.keywords);
        $("meta[name='description']").attr('content', objmeta.universitiesmanagement.desc);
        $("meta[name='title']").attr('content', objmeta.universitiesmanagement.title);
        $("title").html(objmeta.universitiesmanagement.title);
    } else if (document.location.pathname == '/learning-management-software') {
        $("head").append('<script type="application/ld+json">{"@context":"https://schema.org/","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://abuzzwebtech.com/"},{"@type":"ListItem","position":2,"name":"Learning Management Software","item":"https://abuzzwebtech.com/learning-management-software"}]}</script>');
        $("meta[name='keywords']").attr('content', objmeta.learningmanagement.keywords);
        $("meta[name='description']").attr('content', objmeta.learningmanagement.desc);
        $("meta[name='title']").attr('content', objmeta.learningmanagement.title);
        $("title").html(objmeta.learningmanagement.title);
    } else if (document.location.pathname == '/hospital-management-system') {
      
        $("meta[name='keywords']").attr('content', objmeta.hospitalmanagementsystem.keywords);
        $("meta[name='description']").attr('content', objmeta.hospitalmanagementsystem.desc);
        $("meta[name='title']").attr('content', objmeta.hospitalmanagementsystem.title);
        $("title").html(objmeta.hospitalmanagementsystem.title);
    } else if (document.location.pathname == '/clinic-management-system') {
        
        $("meta[name='keywords']").attr('content', objmeta.practicemanagementsystem.keywords);
        $("meta[name='description']").attr('content', objmeta.practicemanagementsystem.desc);
        $("meta[name='title']").attr('content', objmeta.practicemanagementsystem.title);
        $("title").html(objmeta.practicemanagementsystem.title);
    } else if (document.location.pathname == '/spa-sallon-management-system') {
        
        $("meta[name='keywords']").attr('content', objmeta.spasandsalons.keywords);
        $("meta[name='description']").attr('content', objmeta.spasandsalons.desc);
        $("meta[name='title']").attr('content', objmeta.spasandsalons.title);
        $("title").html(objmeta.spasandsalons.title);
    } else if (document.location.pathname == '/pre-insurance-tele-mer-video-graphy-services') {
        
        $("meta[name='keywords']").attr('content', objmeta.insurancetpaservice.keywords);
        $("meta[name='description']").attr('content', objmeta.insurancetpaservice.desc);
        $("meta[name='title']").attr('content', objmeta.insurancetpaservice.title);
        $("title").html(objmeta.insurancetpaservice.title);
    } else if (document.location.pathname == '/human-resource-management-system') {
        $("head").append('<script type="application/ld+json">{"@context":"https://schema.org/","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://abuzzwebtech.com/"},{"@type":"ListItem","position":2,"name":"Human Resource Management System","item":"https://abuzzwebtech.com/human-resource-management-system"}]}</script>');
        $("meta[name='keywords']").attr('content', objmeta.humanresourcemanagement.keywords);
        $("meta[name='description']").attr('content', objmeta.humanresourcemanagement.desc);
        $("meta[name='title']").attr('content', objmeta.humanresourcemanagement.title);
        $("title").html(objmeta.humanresourcemanagement.title);
    } else if (document.location.pathname == '/payroll-management-system') {
        $("head").append('<script type="application/ld+json">{"@context":"https://schema.org/","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://abuzzwebtech.com/"},{"@type":"ListItem","position":2,"name":"Payroll Management System","item":"https://abuzzwebtech.com/payroll-management-system"}]}</script>');
        $("meta[name='keywords']").attr('content', objmeta.payrollmanagement.keywords);
        $("meta[name='description']").attr('content', objmeta.payrollmanagement.desc);
        $("meta[name='title']").attr('content', objmeta.payrollmanagement.title);
        $("title").html(objmeta.payrollmanagement.title);
    } else if (document.location.pathname == '/background-verification-services') {
        $("head").append('<script type="application/ld+json">{"@context":"https://schema.org/","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://abuzzwebtech.com/"},{"@type":"ListItem","position":2,"name":"Background Verification Services","item":"https://abuzzwebtech.com/background-verification-services"}]}</script>');
        $("meta[name='keywords']").attr('content', objmeta.bgc.keywords);
        $("meta[name='description']").attr('content', objmeta.bgc.desc);
        $("meta[name='title']").attr('content', objmeta.bgc.title);
        $("title").html(objmeta.bgc.title);
    } else if (document.location.pathname == '/task-management-system') {
        $("head").append('<script type="application/ld+json">{"@context":"https://schema.org/","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://abuzzwebtech.com/"},{"@type":"ListItem","position":2,"name":"Task Management System","item":"https://abuzzwebtech.com/task-management-system"}]}</script>');
        $("meta[name='keywords']").attr('content', objmeta.taskmanagement.keywords);
        $("meta[name='description']").attr('content', objmeta.taskmanagement.desc);
        $("meta[name='title']").attr('content', objmeta.taskmanagement.title);
        $("title").html(objmeta.taskmanagement.title);
    } else if (document.location.pathname == '/documentation-management-system') {
        $("head").append('<script type="application/ld+json">{"@context":"https://schema.org/","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://abuzzwebtech.com/"},{"@type":"ListItem","position":2,"name":"Documentation Management System","item":"https://abuzzwebtech.com/documentation-management-system"}]}</script>');
        $("meta[name='keywords']").attr('content', objmeta.documentationprocess.keywords);
        $("meta[name='description']").attr('content', objmeta.documentationprocess.desc);
        $("meta[name='title']").attr('content', objmeta.documentationprocess.title);
        $("title").html(objmeta.documentationprocess.title);
    } else if (document.location.pathname == '/InventoryStock') {
        
        $("meta[name='keywords']").attr('content', objmeta.inventoryandstock.keywords);
        $("meta[name='description']").attr('content', objmeta.inventoryandstock.desc);
        $("meta[name='title']").attr('content', objmeta.inventoryandstock.title);
        $("title").html(objmeta.inventoryandstock.title);
    } else if (document.location.pathname == '/Library') {
        
        $("meta[name='keywords']").attr('content', objmeta.library.keywords);
        $("meta[name='description']").attr('content', objmeta.library.desc);
        $("meta[name='title']").attr('content', objmeta.library.title);
        $("title").html(objmeta.library.title);
    } else if (document.location.pathname == '/eventmanagements') {
        
        $("meta[name='keywords']").attr('content', objmeta.eventmanagement.keywords);
        $("meta[name='description']").attr('content', objmeta.eventmanagement.desc);
        $("meta[name='title']").attr('content', objmeta.eventmanagement.title);
        $("title").html(objmeta.eventmanagement.title);
    } else if (document.location.pathname == '/matrimony') {
        
        $("meta[name='keywords']").attr('content', objmeta.matrimony.keywords);
        $("meta[name='description']").attr('content', objmeta.matrimony.desc);
        $("meta[name='title']").attr('content', objmeta.matrimony.title);
        $("title").html(objmeta.matrimony.title);
    } else if (document.location.pathname == '/OTTPlatform') {
        
        $("meta[name='keywords']").attr('content', objmeta.ottplatform.keywords);
        $("meta[name='description']").attr('content', objmeta.ottplatform.desc);
        $("meta[name='title']").attr('content', objmeta.ottplatform.title);
        $("title").html(objmeta.ottplatform.title);
    } else if (document.location.pathname == '/websitebuilder') {
        
        $("meta[name='keywords']").attr('content', objmeta.websitebuilder.keywords);
        $("meta[name='description']").attr('content', objmeta.websitebuilder.desc);
        $("meta[name='title']").attr('content', objmeta.websitebuilder.title);
        $("title").html(objmeta.websitebuilder.title);
    }else {
        $("head").append('<script type="application/ld+json">{"@context":"https://schema.org","@type":"Organization","name":"Abuzz Webtech","alternateName":"awthub","url":"https://abuzzwebtech.com/","logo":"https://abuzzwebtech.com/assets/images/websitelogo.png","contactPoint":{"@type":"ContactPoint","telephone":"+91-8850135661","contactType":"technical support","areaServed":"IN","availableLanguage":["English","Hindi"]},"sameAs":["https://www.facebook.com/abuzzwebtechpvtltd/","https://www.linkedin.com/company/www-abuzzwebtech-com/","https://www.instagram.com/abuzz_webtech_pvtltd/"]}</script>');
        $("meta[name='keywords']").attr('content', objmeta.home.keywords);
        $("meta[name='description']").attr('content', objmeta.home.desc);
        $("meta[name='title']").attr('content', objmeta.home.title);
        $("title").html(objmeta.home.title);
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

app.factory('ngDBService', ngDBService);
ngDBService.$inject = [];

function ngDBService() {
    function ng_GetDataFromDatabase($id, $context, $param, $conScope, $ParamPath) {
        ngGetDataFromDatabase($id, $context, $param, $conScope, $ParamPath);
    }

    function ng_UpdateDataToDatabase($id, $context, $param, $conScope, $ParamPath) {
        ngUpdateDataToDatabase($id, $context, $param, $conScope, $ParamPath);
    }

    return {
        ngGetDataFromDatabase: ng_GetDataFromDatabase,
        ngUpdateDataToDatabase: ng_UpdateDataToDatabase
    };
}

app.controller('CtrlPgLoader', function ($scope, $rootScope, ngDBService) {
    if (typeof ngPgLoader != 'undefined') { ngPgLoader(app, $scope, $rootScope, ngDBService); }
});

app.filter('safeHtml', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml((val || "").replace(/`/gi, '').replace(/&amp;/gi, '&').replace(/amp;/gi, '').replace(/&gt;/gi, '>').replace(/&lt;/gi, '<'));
    };
});
