let questions = [];

class Question {

    constructor() {

        const me = this; // important for event listeners

        this.div = document.createElement("div");
        this.div.classList.add("questionDiv");
        // div.id set via `set number()`

        this.leftDiv = document.createElement('div');
        this.leftDiv.classList.add("left");
        this.rightDiv = document.createElement('div');
        this.rightDiv.classList.add("right");


        this.label = document.createElement("label");
        // label set via `set number()`

        this.deleteButton = document.createElement("i");
        this.deleteButton.classList.add("fa-solid");
        this.deleteButton.classList.add("fa-xmark");
        this.deleteButton.addEventListener("click", function () {
            me.div.remove();
            questions.splice(me.number, 1); // remove from list
            fillQuestions();
        });
        this.rightDiv.appendChild(this.deleteButton);


        this.text = document.createElement('input');
        this.text.type = "text";

        this.answerOptions = [new AnswerOption()];
        this.select = document.createElement("select");
        this.offerQuestionType('text', 'Text');
        this.offerQuestionType('singlepick', 'Single Pick');
        this.offerQuestionType('multipick', 'Multi Pick');
        this.type = this.select.value;
        this.newOptionButton = document.createElement('button');
        this.newOptionButton.classList.add("secondaryButton");
        this.newOptionButton.innerHTML = "New Option";
        this.select.addEventListener("change", function (e) {
            me.type = e.currentTarget.value;
            me.fillOptions();
        });
        this.newOptionButton.addEventListener("click", function () {
            me.answerOptions.push(new AnswerOption());
            me.fillOptions();
        })

        this.leftDiv.appendChild(this.label);
        this.leftDiv.appendChild(document.createElement('br'));
        this.leftDiv.appendChild(this.text);

        this.rightDiv.appendChild(this.deleteButton);
        this.rightDiv.appendChild(document.createElement('br'));
        this.rightDiv.appendChild(this.select);

        this.div.appendChild(document.createElement('br'));
        this.div.appendChild(this.leftDiv);
        this.div.appendChild(this.rightDiv);
        this.div.appendChild(document.createElement('br'));
    }

    offerQuestionType(value, text) {
        let option = document.createElement('option');
        option.value = value;
        option.innerHTML = text;
        this.select.appendChild(option);
    }

    fillOptions() {
        for (let i = 0; i < this.answerOptions.length; i++) {
            this.answerOptions[i].div.remove();
            this.newOptionButton.remove();
        }
        if (this.type == 'text') {
            return;
        }
        for (let i = 0; i < this.answerOptions.length; i++) {
            this.answerOptions[i].type = this.type == 'singlepick' ? 'radio' : 'checkbox';
            this.leftDiv.appendChild(this.answerOptions[i].div);
        }
        this.leftDiv.appendChild(this.newOptionButton);
    }

    set number(num) {
        this.div.id = "question" + num;
        this.label.innerHTML = "Custom Question #" + (num + 1);
    }

    get number() {
        return this.div.id.substring(8);
    }
}

class AnswerOption {

    constructor(type = 'radio') {
        this.div = document.createElement('div');
        this.div.classList.add('optionDiv');

        this.clickable = document.createElement('input');
        this.clickable.type = type;

        this.description = document.createElement('input');
        this.description.type = 'text';

        this.div.appendChild(this.clickable);
        this.div.appendChild(this.description);
    }

    set type(type) {
        this.clickable.type = type;
    }

    set text(text) {
        this.description.value = text;
    }

}

let customQuestionsDiv;
let newQuestionButton;
let saveButton;
let backButton;

window.addEventListener("load", function () {
    customQuestionsDiv = document.getElementById("customQuestionsDiv");
    newQuestionButton = document.getElementById("newQuestionButton");
    saveButton = document.getElementById("saveButton");
    backButton = document.getElementById("backButton");

    newQuestionButton.addEventListener("click", function () {
        let question = new Question(questions.length);
        questions.push(question);
        fillQuestions();
    });
});

function fillQuestions() {
    for (let i = 0; i < questions.length; i++) {
        questions[i].number = i;
        customQuestionsDiv.appendChild(questions[i].div);
    }
}