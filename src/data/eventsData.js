
const API = "https://vrsf.org.in/backend-project/api/events_list.php";

const DOMAIN = "https://vrsf.org.in";

export async function getEvents(){

const res = await fetch(API);
const data = await res.json();

return data.map(event=>{

let gallery=[];
let documents={};
let objectives=[];

try{
gallery = event.gallery ? JSON.parse(event.gallery) : [];
}catch{}

try{
documents = event.documents ? JSON.parse(event.documents) : {};
}catch{}

try{
objectives = event.objectives ? JSON.parse(event.objectives) : [];
}catch{}

return{

...event,

cover_image: event.cover_image
? DOMAIN + event.cover_image
: "",

gallery: gallery.map(img=>DOMAIN + img),

documents:{
declaration: documents.declaration
? DOMAIN + documents.declaration
: null,

activityReport: documents.activityReport
? DOMAIN + documents.activityReport
: null,

participationRecord: documents.participationRecord
? DOMAIN + documents.participationRecord
: null
},

objectives

};

});

}

