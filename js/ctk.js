function _ctk(){
  $.post("core/ct.php",function(data){
    if (data.response[0].Permiso==1 ) {
            $(".Wsent").html(data.response[1].Widgets[0].Total);
            $(".WConfir").html(data.response[1].Widgets[0].Confirmado);
            $(".WNotC").html(data.response[1].Widgets[0].NoConfirmado);
            var chart = AmCharts.makeChart("chartdiv", {
        "theme": "light",
        "type": "serial",
        "startDuration": 2,
        "dataProvider": [{
            "country": data.response[2].Grafica[0].Intrevalo,
            "visits": parseInt(data.response[2].Grafica[0].Confirmados),
            "color": "#04D215"
        }, {
            "country": data.response[2].Grafica[1].Intrevalo,
            "visits": parseInt(data.response[2].Grafica[1].Confirmados),
            "color": "#04D215"
        }, {
            "country": data.response[2].Grafica[2].Intrevalo,
            "visits": parseInt(data.response[2].Grafica[2].Confirmados),
            "color": "#04D215"
        }, {
            "country": data.response[2].Grafica[3].Intrevalo,
            "visits": parseInt(data.response[2].Grafica[3].Confirmados),
            "color": "#04D215"
        }, {
            "country": data.response[2].Grafica[4].Intrevalo,
            "visits": parseInt(data.response[2].Grafica[4].Confirmados),
            "color": "#04D215"
        }, {
            "country": data.response[2].Grafica[5].Intrevalo,
            "visits": parseInt(data.response[2].Grafica[5].Confirmados),
            "color": "#04D215"
        }, {
            "country": data.response[2].Grafica[6].Intrevalo,
            "visits": parseInt(data.response[2].Grafica[6].Confirmados),
            "color": "#04D215"
        }, {
            "country": data.response[2].Grafica[7].Intrevalo,
            "visits": parseInt(data.response[2].Grafica[7].Confirmados),
            "color": "#04D215"
        }, {
            "country": data.response[2].Grafica[8].Intrevalo,
            "visits": parseInt(data.response[2].Grafica[8].Confirmados),
            "color": "#04D215"
        }, {
            "country": data.response[2].Grafica[9].Intrevalo,
            "visits": parseInt(data.response[2].Grafica[9].Confirmados),
            "color": "#04D215"
        }, {
            "country": data.response[2].Grafica[10].Intrevalo,
            "visits": parseInt(data.response[2].Grafica[10].Confirmados),
            "color": "#04D215"
        }, {
            "country": data.response[2].Grafica[11].Intrevalo,
            "visits": parseInt(data.response[2].Grafica[11].Confirmados),
            "color": "#04D215"
        }],
        "valueAxes": [{
            "position": "left",
            "axisAlpha":0,
            "gridAlpha":0
        }],
        "graphs": [{
            "balloonText": "[[category]]: <b>[[value]]</b>",
            "colorField": "color",
            "fillAlphas": 0.85,
            "lineAlpha": 0.1,
            "type": "column",
            "topRadius":1,
            "valueField": "visits"
        }],
        "depth3D": 40,
        "angle": 30,
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": "country",
        "categoryAxis": {
            "gridPosition": "start",
            "axisAlpha":0,
            "gridAlpha":0

        },
        "export": {
          "enabled": true
         }

        }, 0);
        sessionStorage.setItem("Total",data.response[1].Widgets[0].Total);
        sessionStorage.setItem("Confirmado",data.response[1].Widgets[0].Confirmado);
        sessionStorage.setItem("NoConfirmado",data.response[1].Widgets[0].NoConfirmado);
}else{
  $(location).attr("href","core/out.php");
}
  },"json");
}


function _data(){
  $.post("core/ct.php",function(data){
    if (data.response[0].Permiso!=1 ) {
      $(location).attr("href","core/out.php");
    }else{
      if(sessionStorage.getItem("Total")!=data.response[1].Widgets[0].Total||sessionStorage.getItem("Confirmado")!=data.response[1].Widgets[0].Confirmado||sessionStorage.getItem("NoConfirmado")!=data.response[1].Widgets[0].NoConfirmado){
            $(".Wsent").html(data.response[1].Widgets[0].Total);
            $(".WConfir").html(data.response[1].Widgets[0].Confirmado);
            $(".WNotC").html(data.response[1].Widgets[0].NoConfirmado);
            var chart = AmCharts.makeChart("chartdiv", {
        "theme": "light",
        "type": "serial",
        "startDuration": 2,
        "dataProvider": [{
            "country": data.response[2].Grafica[0].Intrevalo,
            "visits": parseInt(data.response[2].Grafica[0].Confirmados),
            "color": "#04D215"
        }, {
            "country": data.response[2].Grafica[1].Intrevalo,
            "visits": parseInt(data.response[2].Grafica[1].Confirmados),
            "color": "#04D215"
        }, {
            "country": data.response[2].Grafica[2].Intrevalo,
            "visits": parseInt(data.response[2].Grafica[2].Confirmados),
            "color": "#04D215"
        }, {
            "country": data.response[2].Grafica[3].Intrevalo,
            "visits": parseInt(data.response[2].Grafica[3].Confirmados),
            "color": "#04D215"
        }, {
            "country": data.response[2].Grafica[4].Intrevalo,
            "visits": parseInt(data.response[2].Grafica[4].Confirmados),
            "color": "#04D215"
        }, {
            "country": data.response[2].Grafica[5].Intrevalo,
            "visits": parseInt(data.response[2].Grafica[5].Confirmados),
            "color": "#04D215"
        }, {
            "country": data.response[2].Grafica[6].Intrevalo,
            "visits": parseInt(data.response[2].Grafica[6].Confirmados),
            "color": "#04D215"
        }, {
            "country": data.response[2].Grafica[7].Intrevalo,
            "visits": parseInt(data.response[2].Grafica[7].Confirmados),
            "color": "#04D215"
        }, {
            "country": data.response[2].Grafica[8].Intrevalo,
            "visits": parseInt(data.response[2].Grafica[8].Confirmados),
            "color": "#04D215"
        }, {
            "country": data.response[2].Grafica[9].Intrevalo,
            "visits": parseInt(data.response[2].Grafica[9].Confirmados),
            "color": "#04D215"
        }, {
            "country": data.response[2].Grafica[10].Intrevalo,
            "visits": parseInt(data.response[2].Grafica[10].Confirmados),
            "color": "#04D215"
        }, {
            "country": data.response[2].Grafica[11].Intrevalo,
            "visits": parseInt(data.response[2].Grafica[11].Confirmados),
            "color": "#04D215"
        }],
        "valueAxes": [{
            "position": "left",
            "axisAlpha":0,
            "gridAlpha":0
        }],
        "graphs": [{
            "balloonText": "[[category]]: <b>[[value]]</b>",
            "colorField": "color",
            "fillAlphas": 0.85,
            "lineAlpha": 0.1,
            "type": "column",
            "topRadius":1,
            "valueField": "visits"
        }],
        "depth3D": 40,
        "angle": 30,
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": "country",
        "categoryAxis": {
            "gridPosition": "start",
            "axisAlpha":0,
            "gridAlpha":0

        },
        "export": {
          "enabled": true
         }

        }, 0);
        sessionStorage.setItem("Total",data.response[1].Widgets[0].Total);
        sessionStorage.setItem("Confirmado",data.response[1].Widgets[0].Confirmado);
        sessionStorage.setItem("NoConfirmado",data.response[1].Widgets[0].NoConfirmado);
      }
}
  },"json");
}
