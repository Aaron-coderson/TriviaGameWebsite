// define global variabalesss
 var Geography_Trivia = {
    'q1':{
        'q': "The highest mountain on Earth, Mount Everest, is located in which mountain range?",
        'options': ['Rocky Mountains', 'Alps','Himalayas','Andes'],
        'ans': 'Himalayas',
        'pic':'images/g1.jpg'},
    'q2':{
        'q': "Busan is the second most populous city in what country?",
        'options': ['Russia', 'Algeria','South Korea','India'],
        'ans': 'South Korea',
        'pic':'images/g2.jpg'},
    'q3':{
        'q': "The deepest trench in the world, the Mariana Trench, is located in which ocean?",
        'options': ['Pacific Ocean', 'Atlantic Ocean','Indian Ocean','Arctic Ocean'],
        'ans': 'Pacific Ocean',
        'pic':'images/g3.jpg'},
    'q4':{
        'q': "“Oro y Plata” (Spanish for gold and silver) is the motto of which U.S. state?",
        'options': ['California', 'Nevada','Montana','New Mexico'],
        'ans': 'Montana',
        'pic':'images/g4.jpg'},
    'q5':{
        'q': "What country is home to the longest canal in the world?",
        'options': ['Panama', 'China','Egypt','Nigeria'],
        'ans': 'China',
        'pic':'images/g5.jpg'},
    'q6':{
        'q': "What is the largest contenent?",
        'options': ['Asia', 'Antarctica','Europe','South America'],
        'ans': 'Asia',
        'pic':'images/g6.jpg'}
};


var History_Trivia = {
    'q1':{
        'q': "On Jan. 27, 1967, a flash fire swept through the command module of which Apollo mission?",
        'options': ['5', '3','1','4'],
        'ans': '1',
        'pic':'images/h1.jpg'},
    'q2':{
        'q': "The signing of the Paris Peace Accords officially ended direct U.S. involvement in which War?",
        'options': ['World War 1', 'Vietnam War','World War 2','Revolutionary War'],
        'ans': 'South Korea',
        'pic':'images/h2.jpg'},
    'q3':{
        'q': "Which Apollo 11 crew member did not walk on the moon?",
        'options': ['Micheal Collins', 'Neil Armstrong','Buzz Aldrin', 'none of them'],
        'ans': 'Buzz Aldrin',
        'pic':'images/h3.jpg'},
    'q4':{
        'q': "“The Treaty of Ghent was the peace treaty that ended which war?",
        'options': ['World War 1', 'The war of 1812','World War 2','Sino-Japanese War'],
        'ans': 'The war of 1812',
        'pic':'images/h4.jpg'},
    'q5':{
        'q': "The Ford Mustang was introduced the public at at the New York World’s Fair in what year?",
        'options': ['1964', '1974','1982','1954'],
        'ans': '1964',
        'pic':'images/h5.jpg'},
    'q6':{
        'q': "Who was the only bachelor to serve as president of the United States?",
        'options': ['James Buchanan', 'Donald Trump','Chester A. Arthur','Ulysses S. Grant'],
        'ans': 'James Buchanan',
        'pic':'images/h6.jpg'
    }
};




function init (){
    // initialiszation of page
    hist_button = document.getElementById('Hist'); 
    geo_button = document.getElementById('Geo');
    // activate button
    hist_button.disabled = false;
    geo_button.disabled = false;
};
function checkButton(topic){
    // check wich button clicked
    var hist_button = document.getElementById('Hist');
    var geo_button = document.getElementById('Geo');

    hist_button.disabled= true;
    geo_button.disabled = true;

    if(topic == 'hist'){
        renderQuestion(History_Trivia)
    }
    else{
        renderQuestion(Geography_Trivia)
    }
    
}
function renderQuestion(questions){
    var quiz1 = document.getElementById('question1');    
    var quiz2 = document.getElementById('question2');    
    var quiz3 = document.getElementById('question3');    
    var quiz4 = document.getElementById('question4');    
    var quiz5 = document.getElementById('question5');    
    var quiz6 = document.getElementById('question6');  

    var image1 = document.getElementById('img1');
    var image2 = document.getElementById('img2');
    var image3 = document.getElementById('img3');
    var image4 = document.getElementById('img4');
    var image5 = document.getElementById('img5');
    var image6 = document.getElementById('img6');

    quiz1.innerHTML = questions['q1']['q'];
    quiz2.innerHTML = questions['q2']['q'];
    quiz3.innerHTML = questions['q3']['q'];
    quiz4.innerHTML = questions['q4']['q'];
    quiz5.innerHTML = questions['q5']['q'];
    quiz6.innerHTML = questions['q6']['q'];
    
    image1.src = questions['q1']['pic'];
    image2.src = questions['q2']['pic'];
    image3.src = questions['q3']['pic'];
    image4.src = questions['q4']['pic'];
    image5.src = questions['q5']['pic'];
    image6.src = questions['q6']['pic'];
}