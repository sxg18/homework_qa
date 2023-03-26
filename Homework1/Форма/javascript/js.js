//Функция блокирования выбора пункта прочие курсы
function BlockSeletizerValue(event) {
	let selectizerToBlock = document.querySelector('select[name="course-selectze"]');

	let selectedValue = event.currentTarget.value;
	
	//let selectedItem = childs.filter((value, index) => { value.innerHTML == selectedValue});

	let itemToBlock;
	for (i = 0; i < selectizerToBlock.length; i++) {
		  if (selectizerToBlock.options[i].text == selectedValue) {
			itemToBlock = selectizerToBlock.options[i];
			break;
		} 
	}
	if (itemToBlock) {
		itemToBlock.setAttribute("disabled", "disabled");
	}
}

//Функция блокирования текстового поля если нет своего мнения
   function Activeform(f) {
    // Если поставлен флажок, снимаем блокирование окна
    if (f.otheropinion.checked) f.opinion.disabled = 0 
    // В противном случае вновь блокируем окно
    else f.opinion.disabled = 1
   }


//Функция какой пол выбран
function Know() {
    var inp = document.getElementsByName('Who_know');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "checkbox" && inp[i].checked) {
			alert ("selected:" + inp[i].checked)
        }
}
}

//Функция как вы о нас узнали


	
	
function Submit() {
	Second_name  = document.getElementById('Second_name').value;
	First_name  = document.getElementById('First_name').value;
	Middle_name  = document.getElementById('Middle_name').value;
	Age  = document.getElementById('Age').value;
	Secret_phrase  = document.getElementById('Secret_phrase').value;
	course  = document.getElementById('course').value;
	teacher  = document.getElementById('teacher').value;
	Estimate_course  = document.getElementById('Estimate_course').value;
	othercourse = document.getElementById('othercourse').value;
	if(Second_name == ""){
		alert("Фамилия не может быть пустой");
	}   
	else if(First_name == ""){
		alert("Имя не может быть пустым");
	}   
	else if(Secret_phrase == ""){
		alert("Секретная фраза не может быть пустой");
		}
	else if(course == ""){
		alert("Выберите Курс, который Вы проходили");
		}
	else if(teacher == ""){
		alert("Укажите преподавателя, который вел курс");
		}
	else if(Estimate_course == ""){
		alert("Укажите, как Вы оценили курс");
		}
	    else {
				Secondname = Second_name;
				document.getElementById('Secondname').innerHTML = " " + Secondname;
				Firstname = First_name;
				document.getElementById('Firstname').innerHTML = " " + Firstname;
				Middlename = Middle_name;
				document.getElementById('Middlename').innerHTML = " " + Middlename;
				Age1 = Age;
				document.getElementById('Age1').innerHTML = " " + Age1;
				Secretphrase = Secret_phrase;
				document.getElementById('Secretphrase').innerHTML = "" + Secretphrase;
				course1 = course;
				document.getElementById('course1').innerHTML = "" + course1;
				teacher1 = teacher;
				document.getElementById('teacher1').innerHTML = "" + teacher1;
				Estimate = Estimate_course;
				document.getElementById('Estimate').innerHTML = "" + Estimate;
				othercourse1 = othercourse;
				document.getElementById('othercourse1').innerHTML = "" + othercourse1;
			}	
		}
		
		
		