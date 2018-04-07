let getData, getvalue,xhr,cnvToObj,sendvalue;


const fatchdata = ()=>{
    getvalue = document.getElementById("sendData")
    
    sendvalue = getvalue.value

    if(getvalue!==null || getvalue!==undefined){

        if(window.XMLHttpRequest){
            var xhr = new XMLHttpRequest()
        }
        else{
            var xhr = new ActiveXObject("Microsoft.XMLHTTP")
        }

        xhr.open("GET", "http://openweathermap.org/data/2.5/weather?q="+sendvalue+"&appid=b6907d289e10d714a6e88b30761fae22", false)

        xhr.onreadystatechange = function(){
            if(xhr.status==200 && xhr.readyState==4){
                cnvToObj = JSON.parse(xhr.responseText)
                console.log(cnvToObj)
                senddatas(cnvToObj)
                

                
            }
        }

        xhr.send();

        

    }
}
let getCity = document.getElementById("placename");

const senddatas = (cnvToObj)=>{

    getCity.innerHTML = cnvToObj.name.toUpperCase();

    console.log(cnvToObj.name);
    document.getElementById("allContent").style.marginTop=6+"%";
    getTime();
    getweatherinfo();
    getWindinfo();
}

const getTime = ()=>{

    let getTim = new Date();
    
    document.getElementById("timexn").innerHTML = getTim.getHours() + ":" + getTim.getMinutes();
};

const getweatherinfo = ()=>{

    let getweather = "<p>" + cnvToObj.main.temp+"<sup>o</sup>C<p>"+"<div id="+"cld"+">"+cnvToObj.weather[0].description +"<p> Cloud cover " + cnvToObj.clouds.all +"%</p></div>"
    //let getdetailcld=  cnvToObj.weather[0].main +"<p> Cloud cover " + cnvToObj.clouds.all +"</p>"

    document.getElementById("tems").innerHTML=getweather;
    //alert(document.getElementById("cld"))
    //document.getElementById("cld").innerHTML= getdetailcld

    console.log(cnvToObj.weather[0].main);
}

const getWindinfo = ()=>{

    let getwinds = "<div><p> Wind </p><h1>" + cnvToObj.wind.speed + "Km/hr</h1></div><div><p> Humidity</p><h1>" + cnvToObj.main.humidity +"%</h1></div><div><p> Pressure </p><h1>" +cnvToObj.main.pressure +"Pa</h1></div>"
    document.getElementById("winds").innerHTML= getwinds
    document.getElementById("winds").style.display="block";
    document.getElementById("winds").style.opacity=0.8;
}