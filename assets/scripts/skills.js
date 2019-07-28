var json = {
    "PHP 5": {
        "value": 100,
        "type": "web"
    },
    "PHP 7": {
        "value": 100,
        "type": "web"
    },
    "MYSQL": {
        "value": 65,
        "type": "database"
    },
    "HTML5": {
        "value": 100,
        "type": "web"
    },
    "SCRUM": {
        "value": 75,
        "type": "others"
    },
    "Jquery": {
        "value": 100,
        "type": "frameworks"
    },
    "C#": {
        "value": 30,
        "type": "desktop"
    },
    "SQL": {
        "value": 35,
        "type": "database"
    },
    "Codeigniter": {
        "value": 80,
        "type": "frameworks"
    },
    "Laravel": {
        "value": 65,
        "type": "frameworks"
    },
    "Git": {
        "value": 75,
        "type": "others"
    },
    "Jenkins": {
        "value": 50,
        "type": "others"
    },
    "NodeJs": {
        "value": 30,
        "type": "web"
    },
    "ElectronJS": {
        "value": 60,
        "type": "desktop"
    },
    "Unity 3D": {
        "value": 20,
        "type": "desktop"
    },
    "Javascript": {
        "value": 100,
        "type": "web"
    },
}

$.each(json, function (i, item) {
    console.log(i);

    if(item.type == "web"){
        var tecnologia = "dark"
        var porcentaje = "warning"
    }

    if(item.type == "database"){
        var tecnologia = "primary"
        var porcentaje = "dark"
    }

    if(item.type == "others"){
        var tecnologia = "warning"
        var porcentaje = "dark"
    }

    if(item.type == "frameworks"){
        var tecnologia = "error"
        var porcentaje = "success"
    }

    if(item.type == "desktop"){
        var tecnologia = "success"
        var porcentaje = "primary"
    }

    $("#skills").append('<div class="col-12 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 skill-margin">\n\
            <a href="#" class="nes-badge is-icon">\n\
                <span class="is-'+porcentaje+' porcentaje">'+item.value+'%</span>\n\
                <span class= "is-'+tecnologia+' tecnologia">'+i+'</span>\n\
            </a>\n\
    </div>');
});