let DB;
const listTop = document.querySelector('.collection'); //The UL
const listPublic = document.querySelector('.collectionPublic'); //The UL
const listPrivate = document.querySelector('.collectionPrivate'); //The UL
const listAge = document.querySelector('.collectionAge'); //The UL
const listTown = document.querySelector('.collectionTown'); //The UL


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


        displayCollegeListTown();
        displayCollegeListAge();
        displayCollegeListPublic();
        displayCollegeListPrivate();
        displayCollegeListTop();
        let addUniv = {
            univName:"" ,
            acronym:"",
            foundedDate:"",
            motto:"",
            publicness:"",
            town :"",
            region:"",
            overview:"",
            website:"",
            tel :"",
            fax :"",
            enrollment:"",
            stuff :"",
            library:"",
            housing:"",
            sportFacility:"",
            financialAid:"",
            facebook:"",
            twitter:"",
            linkedln:"",
            youtube:"",


            
     
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
    " ","We are dedicated to innovative knowledge","Building the Basis for Development"," "," ","Excellence for Development","Creating Opportunity through Education"," "

]
var publicnessList = ["Public","Public","Public ","Public ","Public","Public","Public","Public"," Public","Public ","Private","Private","Private"
]
var townList = ["Addis Ababa","Jimma","Bahir Dar ","Hawassa ","Arba Minch","Gondar","Adama","Haramaya"," Ambo","Debre Birhan ","Addis Ababa","Addis Ababa","Mekelle"
]
var regionList = ["Addis Ababa","Oromia","Amhara","SNNPR ","SNNPR","Amhara","Oromia","Oromia"," Oromia","Amhara ","Addis Ababa","Addis Ababa","Tigray"
]   
var overViewList = [

"Founded in 1950, Addis Ababa University is a non-profit public higher-education institution located in the urban setting of the metropolis of Addis Ababa (population range of 1,000,000-5,000,000 inhabitants). Officially recognized by the Ministry of Education of Ethiopia, Addis Ababa University (AAU) is a very large (uniRank enrollment range: over-45,000 students) coeducational Ethiopian higher education institution. Addis Ababa University (AAU) offers courses and programs leading to officially recognized higher education degrees such as bachelor degrees, master degrees, doctorate degrees in several areas of study. See the uniRank degree levels and areas of study matrix below for further details. This 70 years old Ethiopian higher-education institution has a selective admission policy based on students' past academic record and grades. International students are welcome to apply for enrollment. AAU also provides several academic and non-academic facilities and services to students including a library, housing, sports facilities, financial aids and/or scholarships, study abroad and exchange programs, online courses and distance learning opportunities, as well as administrative services.",
"Founded in 1983, Jimma University is a non-profit public higher-education institution located in the urban setting of the small city of Jimma (population range of 50,000-249,999 inhabitants), Oromia Region. Officially recognized by the Ministry of Education of Ethiopia, Jimma University (JU) is a very large (uniRank enrollment range: 35,000-39,999 students) coeducational Ethiopian higher education institution. Jimma University (JU) offers courses and programs leading to officially recognized higher education degrees such as bachelor degrees, master degrees, doctorate degrees in several areas of study. See the uniRank degree levels and areas of study matrix below for further details. This 37 years old Ethiopian higher-education institution has a selective admission policy based on students' past academic record and grades. The admission rate range is 70-80% making this Ethiopian higher education organization a somewhat selective institution. International students are welcome to apply for enrollment. JU also provides several academic and non-academic facilities and services to students including a library, housing, sports facilities, study abroad and exchange programs, online courses and distance learning opportunities, as well as administrative services.",
"Established in 2001, Bahir Dar University is a non-profit public higher-education institution located in the small city of Bahir Dar (population range of 50,000-249,999 inhabitants), Amhara Region. Officially recognized by the Ministry of Education of Ethiopia, Bahir Dar University (BDU) is a coeducational Ethiopian higher education institution. Bahir Dar University (BDU) offers courses and programs leading to officially recognized higher education degrees such as bachelor degrees, master degrees, doctorate degrees in several areas of study. See the uniRank degree levels and areas of study matrix below for further details. BDU also provides several academic and non-academic facilities and services to students including a library, sports facilities, study abroad and exchange programs, online courses and distance learning opportunities, as well as administrative services.",
"Founded in 1976, Hawassa University is a non-profit public higher-education institution located in the urban setting of the medium city of Awasa (population range of 250,000-499,999 inhabitants), SNNPR. This institution also has branch campuses in the following locations: Wondo Genet, Yirgalem. Officially recognized by the Ministry of Education of Ethiopia, Hawassa University (HWU) is a large (uniRank enrollment range: 20,000-24,999 students) coeducational Ethiopian higher education institution. Hawassa University (HWU) offers courses and programs leading to officially recognized higher education degrees such as bachelor degrees in several areas of study. See the uniRank degree levels and areas of study matrix below for further details. This 44 years old Ethiopian higher-education institution has a selective admission policy based on students' past academic record and grades. International students are welcome to apply for enrollment. HWU also provides several academic and non-academic facilities and services to students including a library, housing, sports facilities, financial aids and/or scholarships, online courses and distance learning opportunities, as well as administrative services. ",
"Established in 1986, Arba Minch University is a non-profit public higher-education institution located in the suburban setting of the small city of Arba Minch (population range of 50,000-249,999 inhabitants), SNNPR. This institution also has a branch campus in Arba Minch Secha. Officially recognized by the Ministry of Education of Ethiopia, Arba Minch University (AMU) is a very large (uniRank enrollment range: 30,000-34,999 students) coeducational Ethiopian higher education institution. Arba Minch University (AMU) offers courses and programs leading to officially recognized higher education degrees such as bachelor degrees, master degrees, doctorate degrees in several areas of study. See the uniRank degree levels and areas of study matrix below for further details. This 34 years old Ethiopian higher-education institution has a selective admission policy based on entrance examinations and students' past academic record and grades. International applicants are eligible to apply for enrollment. AMU also provides several academic and non-academic facilities and services to students including a library, housing, sports facilities, financial aids and/or scholarships, study abroad and exchange programs, online courses and distance learning opportunities, as well as administrative services.",
"Founded in 1954, University of Gondar is a non-profit public higher-education institution located in the urban setting of the small city of Gondar (population range of 50,000-249,999 inhabitants), Amhara Region. This institution also has a branch campus in Maraki. Officially recognized by the Ministry of Education of Ethiopia, University of Gondar (UoG) is a large (uniRank enrollment range: 10,000-14,999 students) coeducational Ethiopian higher education institution. University of Gondar (UoG) offers courses and programs leading to officially recognized higher education degrees in several areas of study. See the uniRank degree levels and areas of study matrix below for further details. This 66 years old Ethiopian higher-education institution has a selective admission policy based on entrance examinations and students' past academic record and grades. The admission rate range is 10-20% making this Ethiopian higher education organization a most selective institution. International students are welcome to apply for enrollment. UoG also provides several academic and non-academic facilities and services to students including a library, sports facilities, study abroad and exchange programs, as well as administrative services.",
"Established in 1993, Adama Science and Technology University is a non-profit public higher-education institution located in the urban setting of the large city of Adama (population range of 500,000-1,000,000 inhabitants), Oromia. This institution also has a branch campus in Asella. Officially recognized by the Ministry of Education of Ethiopia, Adama Science and Technology University (ASTU) is a large (uniRank enrollment range: 20,000-24,999 students) coeducational Ethiopian higher education institution. Adama Science and Technology University (ASTU) offers courses and programs leading to officially recognized higher education degrees such as bachelor degrees, master degrees, doctorate degrees in several areas of study. See the uniRank degree levels and areas of study matrix below for further details. This 27 years old Ethiopian higher-education institution has a selective admission policy This higher education institution has an open admission policy. ASTU also provides several academic and non-academic facilities and services to students including a library, housing, sports facilities, financial aids and/or scholarships, study abroad and exchange programs, online courses and distance learning opportunities, as well as administrative services.",
"Founded in 1954, Haramaya University is a non-profit public higher-education institution located in the suburban setting of the small city of Haramaya (population range of 50,000-249,999 inhabitants), Oromia Region. Officially recognized by the Ministry of Education of Ethiopia, Haramaya University (HRU) is a very large (uniRank enrollment range: 30,000-34,999 students) coeducational Ethiopian higher education institution. Haramaya University (HRU) offers courses and programs leading to officially recognized higher education degrees such as doctorate degrees in several areas of study. See the uniRank degree levels and areas of study matrix below for further details. This 66 years old Ethiopian higher-education institution has a selective admission policy based on entrance examinations. The admission rate range is 70-80% making this Ethiopian higher education organization a somewhat selective institution. International students are welcome to apply for enrollment. HRU also provides several academic and non-academic facilities and services to students including a library, housing, sports facilities, financial aids and/or scholarships, study abroad and exchange programs, online courses and distance learning opportunities, as well as administrative services.",
" Founded in 2011, Ambo University is a non-profit public higher-education institution located in the small city of Ambo (population range of 50,000-249,999 inhabitants), Oromia Region. Officially recognized by the Ministry of Education of Ethiopia, Ambo University (AU) is a coeducational Ethiopian higher education institution. Ambo University (AU) offers courses and programs leading to officially recognized higher education degrees in several areas of study. See the uniRank degree levels and areas of study matrix below for further details. AU also provides several academic and non-academic facilities and services to students including a library, as well as administrative services.",
"Founded in 2011, Ambo University is a non-profit public higher-education institution located in the small city of Ambo (population range of 50,000-249,999 inhabitants), Oromia Region. Officially recognized by the Ministry of Education of Ethiopia, Ambo University (AU) is a coeducational Ethiopian higher education institution. Ambo University (AU) offers courses and programs leading to officially recognized higher education degrees in several areas of study. See the uniRank degree levels and areas of study matrix below for further details. AU also provides several academic and non-academic facilities and services to students including a library, as well as administrative services. ",
"Founded in 2000, Rift Valley University is a private higher-education institution located in the large metropolis of Addis Ababa (population range of over 5,000,000 inhabitants), Oromia Region. This institution also has branch campuses in the following locations: Abichu, Adama, Ambo, Asella, Bahir Dar, Bale Robe, Batu, Bishoftu, Bole, Burayu, Chafe, Chiro, Dambi Dollo, Dire Dawa, Dire Gefersa, Gelan, Gotera, Gullele, Harar, Hawasa, Hossana, Jigjiga, Jimma, Kality, Kemise, Lancha, Lebu Lafto, Lega Tafo. Officially recognized by the Ministry of Education of Ethiopia, Rift Valley University (RVU) is a very large (uniRank enrollment range: over-45,000 students) coeducational Ethiopian higher education institution. Rift Valley University (RVU) offers courses and programs leading to officially recognized higher education degrees such as pre-bachelor degrees (i.e. certificates, diplomas, associate or foundation), bachelor degrees, master degrees in several areas of study. See the uniRank degree levels and areas of study matrix below for further details. This 20 years old Ethiopian higher-education institution has a selective admission policy based on entrance examinations. RVU also provides several academic and non-academic facilities and services to students including a library, sports facilities, financial aids and/or scholarships, online courses and distance learning opportunities, as well as administrative services.",
"Established in 1991, Unity University is a for-profit private higher-education institution located in the metropolis of Addis Ababa (population range of 1,000,000-5,000,000 inhabitants). This institution also has a branch campus in Adama. Officially recognized by the Ministry of Education of Ethiopia, Unity University (UU) is a small (uniRank enrollment range: 5,000-5,999 students) coeducational Ethiopian higher education institution. Unity University (UU) offers courses and programs leading to officially recognized higher education degrees such as pre-bachelor degrees (i.e. certificates, diplomas, associate or foundation), bachelor degrees, master degrees in several areas of study. See the uniRank degree levels and areas of study matrix below for further details. This 29 years old Ethiopian higher-education institution has a selective admission policy based on entrance examinations and students' past academic record and grades. UU also provides several academic and non-academic facilities and services to students including as well as administrative services.",
"Established in 2002, Mekelle Institute of Technology is a for-profit private higher-education institution located in the small city of Mekelle (population range of 50,000-249,999 inhabitants), Tigray Region. Officially recognized by the Ministry of Education of Ethiopia, Mekelle Institute of Technology (MIT) is a coeducational Ethiopian higher education institution. Mekelle Institute of Technology (MIT) offers courses and programs leading to officially recognized higher education degrees in several areas of study. See the uniRank degree levels and areas of study matrix below for further details. MIT also provides several academic and non-academic facilities and services to students including a library, as well as administrative services."

]
var websiteList = ["http://www.aau.edu.et/","https://www.ju.edu.et/","https://www.bdu.edu.et/",
"http://hu.edu.et/","https://www.amu.edu.et/","http://www.uog.edu.et/","http://www.astu.edu.et/","https://www.haramaya.edu.et/",
"https://www.ambou.edu.et/","https://dbu.edu.et/ ","https://www.riftvalleyuniversity.org/","http://www.uu.edu.et/"," "
]  

var telList = ["+251 (11) 123 9800","+251 (471) 112 202","+251 (58) 220 0137","+251 (46) 220 9676 ","+251 (46) 881 3167","+251 (58) 111 0174","+251 (221) 100 003","+251 (25) 553 0319"," +251 (11) 888 0610","+251 (11) 681 5440 ","+251 930 470 877"," ","+251 (34) 441 0031"
]   
var faxList = ["+251 (11) 123 9729","+251 (471) 111 450","+251 (58) 220 0137","+251 (46) 220 5421 ","+251 (46) 881 4964","+251 (58) 114 1240","+251 (221) 100 032","+251 (25) 553 0325"," ","+251 (11) 681 2065 ","+251 (11) 470 9985"," ","	+251 (34) 440 9988"
]   
var enrollmentList = ["Over 45,000","35,000-39,999"," Not reported","20,000-24,999 ","30,000-34,999"," 10,000-14,999","20,000-24,999"," 30,000-34,999"," Not reported","Not reported ","over-45,000","5,000-5,999"," Not reported"
]   
var stuffList = ["2,500-2,999","1,000-1,499"," Not reported","4,000-4,499 ","2,000-2,499"," 2,000-2,499","2,000-2,499","1,500-1,999"," Not reported","Not reported "," over-5,000","Not reported"," Not reported"
]



var libraryList =       ["Yes","Yes"," Not reported","Yes ","Yes"," Yes","Yes","Yes"," Yes","Yes  ","Yes ","Not reported"," Not reported"
]

var housingList =      ["Yes","Yes"," Not reported","Yes ","Yes"," Yes","Yes","Yes"," Not reported","Not reported "," Not reported","Not reported"," Not reported"
]
var sportList =        ["Yes","Yes"," Not reported","Yes","Yes"," Yes","Yes","Yes"," Not reported","Not reported "," Yes","Not reported"," Not reported"
]
var financialAidList = ["Yes","Not reported"," Not reported","Yes","Yes"," Yes","Yes","Not reported"," Not reported","Not reported "," Yes","Not reported"," Not reported"
]

var facebookList = ["https://www.facebook.com/Addis-Ababa-University-496255483792611/","https://www.facebook.com/JimmaUniv/"," https://www.facebook.com/bduethiopia/","https://www.facebook.com/Hawassa.University/","https://www.facebook.com/ArbaMinchUniversityCCD/"," https://www.facebook.com/TheUniversityofGondar/","https://www.facebook.com/astu.edu.et/","https://www.facebook.com/HRMUNIV/"," ","https://www.facebook.com/dbu.edu.et/ "," https://www.facebook.com/riftvalleyuniversity/","https://www.facebook.com/UNITY-University-855561114497854/"," https://www.facebook.com/MITethiopia/"
]
var twitterList = ["https://twitter.com/AddisAbabaUnive","https://twitter.com/JimmaUniv"," https://twitter.com/bdueduet","https://twitter.com/HawassaUniv","https://twitter.com/ArbaMinch_Univ"," "," ","https://twitter.com/haramayauniver4"," "," "," https://twitter.com/UniversityRv"," "," "
]
var linkedlnList = ["https://www.linkedin.com/school/addis-ababa-university/","https://www.linkedin.com/school/jimma-university/","https://www.linkedin.com/school/bahir-dar-university/","https://www.linkedin.com/company/hawassa-university/","https://www.linkedin.com/company/arba-minch-university/"," https://www.linkedin.com/school/university-of-gondar/","https://www.facebook.com/astu.edu.et/","https://www.linkedin.com/school/alemaya-university/"," "," ","  ","https://www.linkedin.com/school/unity-university/"," "
]
var youtubeList = [" ","https://www.youtube.com/channel/UCtyhlHBXkxzIsS20ZPd3vow"," https://www.youtube.com/channel/UCoI9V9JZpaCuajFX5aDsiNQ","https://www.youtube.com/channel/UCK7E_YvqrX1uQxe_xoY5GOA","https://www.linkedin.com/company/arba-minch-university/","  "," ","https://www.youtube.com/channel/UCd6Bb1Xc6FyycH0_DFmkxNQ"," https://www.youtube.com/channel/UCdCJRBKLPE_GaQzPozEOaig"," "," https://www.youtube.com/channel/UCITXUDdz0-fwJOroO8pWGFA"," "," "
]


    univNameList.forEach((element,index) => {
            console.log(index);
        
        addUniv.univName = univNameList[index];
        addUniv.acronym=acronymList[index];
        addUniv.foundedDate= foundedDateList[index];
        addUniv.motto = mottoList[index];
        addUniv.publicness = publicnessList[index];
        addUniv.town = townList[index];
        addUniv.region = regionList[index];
        addUniv.overview = overViewList[index];
        addUniv.website = websiteList[index];
        addUniv.tel = telList[index];
        addUniv.fax = faxList[index];
        addUniv.enrollment = enrollmentList[index];
        addUniv.stuff = stuffList[index];
        addUniv.library = libraryList[index];
        addUniv.housing = housingList[index];
        addUniv.sportFacility = sportList[index];
        addUniv.financialAid = financialAidList[index];

       //Social Media Section
       addUniv.facebook = facebookList[index]
       addUniv.twitter = twitterList[index]
       addUniv.linkedln = linkedlnList[index]
       addUniv.youtube = youtubeList[index]
          
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
        objectStore.createIndex('region', 'region', { unique: false });






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
                
                add(cursor.value.id, cursor.value.univName,cursor.value.foundedDate,listAge);
                cursor.continue();
            }
        }
    }


    function displayCollegeListTown() {
        // clear the previous task list
       

        // create the object store
        let objectStore = DB.transaction('univLists').objectStore('univLists');

        objectStore.index('town').openCursor().onsuccess = function(e) {
            // assign the current cursor
            let cursor = e.target.result;

            if (cursor) {
                
                add(cursor.value.id, cursor.value.univName,cursor.value.town,listTown);
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
         
        <a href="./collegeInfo.html?univName=${univName}">${univName} </a>

        `;
        divIdCol3.innerHTML = arg;
    
        divIdRow.appendChild(divIdCol1);
        divIdRow.appendChild(divIdCol2);
        divIdRow.appendChild(divIdCol3);

        list.appendChild(divIdRow);


      
        
    }


});

