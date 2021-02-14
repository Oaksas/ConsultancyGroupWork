let DB;

const unname = document.querySelectorAll('#unname');

const unacr = document.getElementById('unacr'); 
const unfounded = document.getElementById('unfounded'); 
const unweb = document.getElementById('unweb'); 
const unmotto = document.getElementById('unmotto'); 

const address = document.getElementById('address'); 
const tel = document.getElementById('tel'); 
const fax = document.getElementById('fax'); 


const financeView = document.getElementById('ufinance'); 
const libraryView = document.getElementById('ulib'); 
const sportView = document.getElementById('usport');
const houseView = document.getElementById('uhouse');


const enrollmentView = document.getElementById('unenroll'); 
const stuffView = document.getElementById('unstuff'); 
const controlView = document.getElementById('uncontrol'); 
 //Social Media Section
 const facebookView = document.getElementById('ufacebook');


 const twitterView = document.getElementById('utwitter'); 
 const linkedlnView = document.getElementById('ulinkedln'); 
 const youtubeView = document.getElementById('uyoutube'); 
 
//Courses Section

const artUnderView = document.getElementById('artUnderCheck'); 
const artPostView = document.getElementById('artPostCheck'); 

const businessUnderView = document.getElementById('businessUnderCheck'); 
const businessPostView = document.getElementById('businessPostCheck'); 

const languageUnderView = document.getElementById('languageUnderCheck'); 
const languagePostView = document.getElementById('languagePostCheck'); 

const medicineUnderView = document.getElementById('medicineUnderCheck'); 
const medicinePostView = document.getElementById('medicinePostCheck'); 

const engineeringUnderView = document.getElementById('engineeringUnderCheck'); 
const engineeringPostView = document.getElementById('engineeringPostCheck'); 

const scienceUnderView = document.getElementById('scienceUnderCheck'); 
const sciencePostView = document.getElementById('sciencePostCheck'); 


const overviewView = document.getElementById('overview'); 



const urlParams = new URLSearchParams(window.location.search);
const uName = urlParams.get('univName').trim();

document.addEventListener('DOMContentLoaded', () => {
    var path = "Assets/Images/Covers/";

    document.getElementById("cover").src = path+uName+".jpg";

    // create the database
    let univDB = indexedDB.open('univDB', 1);

    // if there's an error
    univDB.onerror = function() {
            console.log('There was an error');
        }
        // if everything is fine, assign the result to the instance
    univDB.onsuccess = function() {
        // console.log('Database Ready');

        // save the result
        DB = univDB.result;

        // display the Task 
        displayTask();
    }


   
    
    function displayTask() {
        // clear the previous task list
       

        // create the object store
        let objectStore = DB.transaction('univLists').objectStore('univLists');

        objectStore.openCursor().onsuccess = function(e) {
            // assign the current cursor
            let cursor = e.target.result;

            if (cursor) {
               if(cursor.value.univName.trim() === uName.trim()){
                
                add(cursor.value.univName,cursor.value.overview,cursor.value.acronym,cursor.value.foundedDate,cursor.value.motto,cursor.value.website,
                     cursor.value.region, cursor.value.town,cursor.value.tel, cursor.value.fax, cursor.value.enrollment, cursor.value.stuff,
                     cursor.value.publicness, cursor.value.library, cursor.value.housing, cursor.value.sportFacility, cursor.value.financialAid,
                     cursor.value.facebook, cursor.value.twitter, cursor.value.linkedln, cursor.value.youtube,cursor.value.artUnder,cursor.value.artPost,
                     cursor.value.businessUnder,cursor.value.businessPost,cursor.value.languageUnder,cursor.value.languagePost,cursor.value.medicineUnder,
                     cursor.value.medicinePost,cursor.value.engineeringUnder,cursor.value.engineeringPost,cursor.value.scienceUnder,cursor.value.sciencePost,);
               }
               else{console.log("Nan")}
                cursor.continue();
            }
        }
    }
    function add(name,overview,acronym,foundedDate,motto,website,add1,
         add2,telAdd,faxAdd, enroll,stuff,control,lib,house,sport,finance,
         facebook,twitter,linkedln,youtube,artUnder,artPost,businessUnder,businessPost,languageUnder,languagePost,
         medicineUnder,medicinePost,engineeringUnder,engineeringPost,scienceUnder,sciencePost){

        
            unname[0].innerHTML = name;
            unname[1].innerHTML = name;


overviewView.innerHTML = overview
unacr.innerHTML = acronym
unfounded.innerHTML = foundedDate
unmotto.innerHTML = motto
unweb.innerHTML =  `<a href="${website}" target="_BLANK">${website} </a>`;

address.innerHTML = add2+", "+add1+" ,Ethiopia"
tel.innerHTML = telAdd
fax.innerHTML = faxAdd
enrollmentView.innerHTML = enroll
stuffView.innerHTML = stuff
controlView.innerHTML = control

libraryView.innerHTML = lib
houseView.innerHTML = house
sportView.innerHTML = sport
financeView.innerHTML = finance


facebookView.innerHTML = `<a href="${name}" target="_BLANK">${facebook} </a>`;
twitterView.innerHTML = `<a href="${name}" target="_BLANK">${twitter} </a>`;
linkedlnView.innerHTML = `<a href="${name}" target="_BLANK">${linkedln} </a>`;
youtubeView.innerHTML =   `<a href="${name}" target="_BLANK">${youtube} </a>`;


artUnderView.innerHTML = (artUnder.trim() ==="Yes") ? `<i class="fas fa-check-square"></i>` :`<i class="fas fa-times"></i>` ;
artPostView.innerHTML =  (artPost.trim() ==="Yes") ? `<i class="fas fa-check-square"></i>` :`<i class="fas fa-times"></i>` ;


businessUnderView.innerHTML = (businessUnder.trim() ==="Yes") ? `<i class="fas fa-check-square"></i>` :`<i class="fas fa-times"></i>` ;
businessPostView.innerHTML =  (businessPost.trim() ==="Yes") ? `<i class="fas fa-check-square"></i>` :`<i class="fas fa-times"></i>` ;


languageUnderView.innerHTML = (languageUnder.trim() ==="Yes") ? `<i class="fas fa-check-square"></i>` :`<i class="fas fa-times"></i>` ;
languagePostView.innerHTML =  (languagePost.trim() ==="Yes") ? `<i class="fas fa-check-square"></i>` :`<i class="fas fa-times"></i>` ;


medicineUnderView.innerHTML = (medicineUnder.trim() ==="Yes") ? `<i class="fas fa-check-square"></i>` :`<i class="fas fa-times"></i>` ;
medicinePostView.innerHTML =  (medicinePost.trim() ==="Yes") ? `<i class="fas fa-check-square"></i>` :`<i class="fas fa-times"></i>` ;


engineeringUnderView.innerHTML = (engineeringUnder.trim() ==="Yes") ? `<i class="fas fa-check-square"></i>` :`<i class="fas fa-times"></i>` ;
engineeringPostView.innerHTML =  (engineeringPost.trim() ==="Yes") ? `<i class="fas fa-check-square"></i>` :`<i class="fas fa-times"></i>` ;


scienceUnderView.innerHTML = (scienceUnder.trim() ==="Yes") ? `<i class="fas fa-check-square"></i>` :`<i class="fas fa-times"></i>` ;
sciencePostView.innerHTML = (sciencePost.trim() ==="Yes") ? `<i class="fas fa-check-square"></i>` :`<i class="fas fa-times"></i>` ;






}



    




});