let DB;

const unname = document.querySelectorAll('#unname');

const unacr = document.getElementById('unacr'); 
const unfounded = document.getElementById('unfounded'); 
const unweb = document.getElementById('unweb'); 
const unmotto = document.getElementById('unmotto'); 

const address = document.getElementById('address'); 
const tel = document.getElementById('tel'); 
const fax = document.getElementById('fax'); 

 
const overviewView = document.getElementById('overview'); 



const urlParams = new URLSearchParams(window.location.search);
const uName = urlParams.get('univName').trim();

document.addEventListener('DOMContentLoaded', () => {
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
                
                add(cursor.value.univName,cursor.value.overview,cursor.value.acronym,cursor.value.foundedDate,cursor.value.motto,cursor.value.website, cursor.value.region, cursor.value.town,cursor.value.tel, cursor.value.fax);
               }
               else{console.log("Nan")}
                cursor.continue();
            }
        }
    }
    function add(name,overview,acronym,foundedDate,motto,website,add1, add2,telAdd,faxAdd){

        
            unname[0].innerHTML = name;
            unname[1].innerHTML = name;


overviewView.innerHTML = overview
unacr.innerHTML = acronym
unfounded.innerHTML = foundedDate
unmotto.innerHTML = motto
unweb.innerHTML = website
address.innerHTML = add2+", "+add1+" ,Ethiopia"
tel.innerHTML = telAdd
fax.innerHTML = faxAdd



}



    




});