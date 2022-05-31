alert("Hello group 1")
var Google="erth";
var number=12
console.log(12);
var  boolean= true;
var  boolean=false;
console.log(true);
var x;
var y;
x ="vaiua x";
var x={1:"AR" ,2:"EN" ,3:"FR"}
console.log(x[2]);
var x=5;
var y=10;
console.log(x*y);//ضرب مقسم
console.log(10+9);// الجمع
console.log(10-9);// الطرح
console.log(10*9);// الضرب 
console.log(10/2);//القسمة 
var x=10;
var y=15;
x+=y;
x-=y;
x*=y;
x/=y;
require(["esri/Map","esri/views/MapView","esri/views/SceneView"], 
     function(Map,MapView,SceneView) 
    {
        const map = new Map({
           basemap: "satellite"
        })
        // var view = new MapView({
         //   //Id of DOMelement containing the view
        //    container: "viewDiv",
         //       map: map,
         //       center: [31,30],
         //      zoom: 7
         
   })
   

//})
  let view = new SceneView({
    // ID of DOM element containing the view
    container: "viewDiv",
    // Map/WebScene object
    map:  Map()
  });

