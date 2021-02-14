let DB;
const listList = document.querySelector('.collection'); //The UL



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


        displayCollegeList();
     
        let addUniv = {
            univName:"" ,
            acronym:"",
            rank:"",
          





            
     
        }
   
    
}



    function displayCollegeList() {
        // clear the previous task list
       

        // create the object store
        let objectStore = DB.transaction('personalList').objectStore('personalList');

        objectStore.openCursor().onsuccess = function(e) {
            // assign the current cursor
            let cursor = e.target.result;

            if (cursor) {
                add(cursor.value.id, cursor.value.univName,cursor.value.acronym,cursor.value.rank);

                cursor.continue();
            }
        }
    }




    function add(id,univName,arg,rank){

        const divIdRow = document.createElement('div');
        const divIdCol1 = document.createElement('div');
        const divIdCol2 = document.createElement('div');
        const divIdCol3 = document.createElement('div');
        const divIdCol4 = document.createElement('div');
        


        // Add class and the x marker for a 
        divIdRow.className = 'row';
        divIdCol1.className = 'col-1';
        divIdCol2.className = 'col-8';
        divIdCol3.className = 'col-1';
        divIdCol4.className = 'col-2';

    
        divIdRow.setAttribute('data-task-id',id);

        

        divIdCol1.innerHTML = id;
        divIdCol2.innerHTML = `
         
        <a href="./collegeInfo.html?univName=${univName}">${univName} </a>

        `;
        divIdCol3.innerHTML = arg;
        divIdCol4.innerHTML = rank;

    
        divIdRow.appendChild(divIdCol1);
        divIdRow.appendChild(divIdCol2);
        divIdRow.appendChild(divIdCol3);
        divIdRow.appendChild(divIdCol4);

        listList.appendChild(divIdRow);


      
        
    }


});

