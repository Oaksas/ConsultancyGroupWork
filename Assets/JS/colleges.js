let DB;
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
    "University of Gondar","Adama Science and Technology University"
 ]
    var acronymList = ["AAU","JU","BDU","HWU","AMU",
    "UoG","ASTU"]
    var foundedDateList = ["1950","1983","2001","1976","1986",
    "1954","1993"]
    var mottoList = ["Seek Wisdom, Elevate Your Intellect and Serve Humanity","We are In the Community"," "," ","We grow in the esteem of future generation",
    "","We are dedicated to innovative knowledge"]
    
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

});

