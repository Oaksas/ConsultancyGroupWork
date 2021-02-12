let DB;
const univList = document.querySelector('.collection'); //The UL

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
        let addUniv = {
            univName:"" ,
            acronym:"",
            foundedDate:"",
            motto:""
     
        }

        // var  Name;
        // var acronym;
        // var foundedDate;
        // var motto 
   
 
function addToDb(){
      
    var univNameList = ["Addis Ababa University","Jimma University","Bahir Dar University","Hawassa University","Arba Minch University",
    "University of Gondar","Adama Science and Technology University","Haramaya University","Ambo University","Debre Berhan University"
 ]
    var acronymList = ["AAU","JU","BDU","HWU","AMU",
    "UoG","ASTU","HRU","AU","DBU"]



    var foundedDateList = ["1950","1983","2001","1976","1986",
    "1954","1993","1954","2011","2007"]


    var mottoList = ["Seek Wisdom, Elevate Your Intellect and Serve Humanity","We are In the Community"," "," ","We grow in the esteem of future generation",
    "","We are dedicated to innovative knowledge","Building the Basis for Development"," "," ",
]
    
    univNameList.forEach((element,index) => {
            console.log(index);
        
        addUniv.univName = univNameList[index];
        addUniv.acronym=acronymList[index];
        addUniv.foundedDate= foundedDateList[index];
        addUniv.motto = mottoList[index];
    
          
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





        console.log('Database ready and fields created!');
    }

function displayTaskList() {
        // clear the previous task list
        while (univList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }

        // create the object store
        let objectStore = DB.transaction('univLists').objectStore('univLists');

        objectStore.openCursor().onsuccess = function(e) {
            // assign the current cursor
            let cursor = e.target.result;

            if (cursor) {

                add(cursor.value.id, cursor.value.univName);
                cursor.continue();
            }
        }
    }


    function add(id,univName){

        // Create an li element when the user adds a task 
        const li = document.createElement('li');
        //add Attribute for delete 
        li.setAttribute('data-task-id',id);
        // Adding a class
        li.className = 'collection-item';
        // Create text node and append it 
        li.appendChild(document.createTextNode(univName));
      

        // Create new element for the link 
        const link = document.createElement('a');
        // Add class and the x marker for a 
        link.className = 'delete-item secondary-content';
        link.innerHTML = `
         <i class="fa fa-remove"></i>
        &nbsp;
        <a href="./edit.html?id=${id}"><i class="fa fa-edit"></i> </a>
        `;
        // Append link to li
        li.appendChild(link);
        // Append to UL 
        univList.appendChild(li);
        
    }


});

