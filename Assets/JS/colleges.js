let DB;
const listTop = document.querySelector('.collection'); //The UL
const listPublic = document.querySelector('.collectionPublic'); //The UL
const listPrivate = document.querySelector('.collectionPrivate'); //The UL
const listAge = document.querySelector('.collectionAge'); //The UL


document.addEventListener('DOMContentLoaded', () => {

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


        displayCollegeListPublic();
        displayCollegeListPrivate();
        displayCollegeListTop();
        let addUniv = {
            univName:"" ,
            acronym:"",
            foundedDate:"",
            motto:"",
            publicness:"",
            town :""
     
        }

     
function addToDb(){
      
    var univNameList = ["Addis Ababa University","Jimma University","Bahir Dar University","Hawassa University","Arba Minch University",
    "University of Gondar","Adama Science and Technology University","Haramaya University","Ambo University","Debre Berhan University","Rift Valley University",
    "Unity University","Mekelle Institute of Technology",
 ]
    var acronymList = ["AAU","JU","BDU","HWU","AMU",
    "UoG","ASTU","HRU","AU","DBU","	RVU","UU","MIT"]



    var foundedDateList = ["1950","1983","2001","1976","1986",
    "1954","1993","1954","2011","2007","2000","1991","2002"]


    var mottoList = ["Seek Wisdom, Elevate Your Intellect and Serve Humanity","We are In the Community"," "," ","We grow in the esteem of future generation",
    " ","We are dedicated to innovative knowledge","Building the Basis for Development"," "," ","Excellence for Development","Creating Opportunity through Education",

]
var publicnessList = ["Public","Public","Public ","Public ","Public","Public","Public","Public"," Public","Public ","Private","Private","Private"
]
var townList = ["Addis Ababa","Jimma","Bahir Dat ","Hawassa ","Arba Minch","Gondar","Adama","Haramaya"," Ambo","Debre Birhan ","Addis Ababa","Addis Ababa","Mekelle"
]
    
    univNameList.forEach((element,index) => {
            console.log(index);
        
        addUniv.univName = univNameList[index];
        addUniv.acronym=acronymList[index];
        addUniv.foundedDate= foundedDateList[index];
        addUniv.motto = mottoList[index];
        addUniv.publicness = publicnessList[index];
        addUniv.town = townList[index];
    
          
            let request = objectStore.add(addUniv);
            request.onsuccess = () => {
                console.log('New University added');
    
            }
    
    
            
    
    });
    
    
}


        // Insert the object into the database 
        let transaction = DB.transaction(['univLists'], 'readwrite');
        let objectStore = transaction.objectStore('univLists');
objectStore.openCursor().onsuccess = function(e) {
    if(e.target.result === null){
        addToDb();
    } 
    else{}

} 


   
      


       


        // on success
       
        transaction.oncomplete = () => {
            console.log('New appointment added');
         


            
        }
        transaction.onerror = () => {
            console.log('There was an error, try again!');
        }


        // display the Task List 
    }
    univDB.onupgradeneeded = function(e) {
        // the event will be the database
        let db = e.target.result;

        // create an object store, 
        // keypath is going to be the Indexes
        let objectStore = db.createObjectStore('univLists', { keyPath: 'id', autoIncrement: true });

        // createindex: 1) field name 2) keypath 3) options
        objectStore.createIndex('univName', 'univName', { unique: false });
        objectStore.createIndex('acronym', 'acronym', { unique: false });
        objectStore.createIndex('foundedDate', 'foundedDate', { unique: false });
        objectStore.createIndex('motto', 'motto', { unique: false });
        objectStore.createIndex('publicness', 'publicness', { unique: false });
        objectStore.createIndex('town', 'town', { unique: false });






        console.log('Database ready and fields created!');
    }

function displayCollegeListTop() {
        // clear the previous task list
       

        // create the object store
        let objectStore = DB.transaction('univLists').objectStore('univLists');

        objectStore.openCursor().onsuccess = function(e) {
            // assign the current cursor
            let cursor = e.target.result;

            if (cursor) {

                add(cursor.value.id, cursor.value.univName,cursor.value.acronym,listTop);
                cursor.continue();
            }
        }
    }

    function displayCollegeListAge() {
        // clear the previous task list
       

        // create the object store
        let objectStore = DB.transaction('univLists').objectStore('univLists');

        objectStore.index('foundedDate').openCursor().onsuccess = function(e) {
            // assign the current cursor
            let cursor = e.target.result;

            if (cursor) {
                
                add(cursor.value.id, cursor.value.univName,cursor.value.acronym,listAge);
                cursor.continue();
            }
        }
    }



    function displayCollegeListPublic() {
        // clear the previous task list
       

        // create the object store
        let objectStore = DB.transaction('univLists').objectStore('univLists');

        objectStore.openCursor().onsuccess = function(e) {
            // assign the current cursor
            let cursor = e.target.result;

            if (cursor) {
               if(cursor.value.publicness.trim() === "Public"){
                add(cursor.value.id, cursor.value.univName,cursor.value.acronym,listPublic);
               }
                cursor.continue();
            }
        }
    }


    function displayCollegeListPrivate() {
        // clear the previous task list
       

        // create the object store
        let objectStore = DB.transaction('univLists').objectStore('univLists');

        objectStore.openCursor().onsuccess = function(e) {
            // assign the current cursor
            let cursor = e.target.result;

            if (cursor) {
               if(cursor.value.publicness.trim() === "Private"){
                add(cursor.value.id, cursor.value.univName,cursor.value.acronym,listPrivate);
               }
                cursor.continue();
            }
        }
    }




    function add(id,univName,arg,list){

        const divIdRow = document.createElement('div');
        const divIdCol1 = document.createElement('div');
        const divIdCol2 = document.createElement('div');
        const divIdCol3 = document.createElement('div');
        


        // Add class and the x marker for a 
        divIdRow.className = 'row';
        divIdCol1.className = 'col-2';
        divIdCol2.className = 'col-8';
        divIdCol3.className = 'col-2';

    
        divIdRow.setAttribute('data-task-id',id);

        

        divIdCol1.innerHTML = id;
        divIdCol2.innerHTML = `
         
        <a href="./edit.html?id=${univName}">${univName} </a>

        `;
        divIdCol3.innerHTML = arg;
    
        divIdRow.appendChild(divIdCol1);
        divIdRow.appendChild(divIdCol2);
        divIdRow.appendChild(divIdCol3);

        list.appendChild(divIdRow);


      
        
    }


});

