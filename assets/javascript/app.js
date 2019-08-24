// all the questions
var qArray = [
    {
        q: 'Which of these is botanically a "true" berry?',
        choices: ['raspberry', 'eggplant', 'strawberry', 'blackberry'],
        rightAnswer: 'b',
    },
    {
        q: 'What plant has the largest seed?',
        choices: ['palm tree', 'avocado', 'orchid', 'redwood tree'],
        rightAnswer: 'a',
    },
    {
        q: 'What is the Colorado State Tree?',
        choices: ['white fir', 'Norway spruce', 'blue spruce', 'Norfolk pine'],
        rightAnswer: 'c',
    },
    {
        q: 'What is vanilla harvested from?',
        choices: ['a cactus', 'a rose', 'a bean bush', 'an orchid'],
        rightAnswer: 'd',
    },
    {
        q: 'What do you call a plant that drops its leaves in cold seasons and droughts?',
        choices: ['evergreen', 'deciduous', 'wimpy', 'perennial'],
        rightAnswer: 'b',
    },
    {
        q: 'What is an epiphyte?',
        choices: ['a plant that grows off another plant', 'a pest that eats the bark of a tree', 'plants that perform photosynthesis more often', 'a plant that only flowers in winter'],
        rightAnswer: 'a',
    }
];
var intervalID;
var clockRunning = false;
// must click start button ("#starbtn") to begin game which displays questions, starts timer
$("#tryAgainBtn").hide();
$("#submitBtn").hide();
$(".questionContainer").hide();

var game = {
    rightAnswers: 0,
    wrongAnswers: 0,

    startGame: function() {
        $("#tryAgainBtn").hide();
        $(".instructions").hide();
        $("#submitBtn").show();
        $('.questionContainer').show();
        $("#seconds-remaining").text(game.counter);
        
        for (var i = 0; i < qArray.length; i++) {
            $(".questions").append("<h3 class='question-title mt-3 pt-2 mb-1'>&bullet;" + qArray[i].q + "</h3>");
            for (var j = 0; j < qArray[i].choices.length; j++) {
                $(".questions").append("<br>" + " <input type='radio' name='question-" + i + "' value='" + qArray[i].choices[j] + "'' > " + qArray[i].choices[j])
            }
        }
        $(".questions").show();
        $("#rightAnswerSummary").hide();
        $("#wrongAnswerSummary").hide();
        intervalID = setInterval(game.count, 1000);
        clockRunning = true;
    },
    reset: function () {
        clearInterval(intervalID);
        clockRunning = false;
        game.counter = 15;
        game.rightAnswers = 0;
        game.wrongAnswers = 0;
        $(".questions").empty();
    },
    count: function () {
        game.counter--;
        $("#seconds-remaining").html(game.counter);
        if (game.counter === 0) {
            alert("Time is up!");
            game.checkAnswer();
            game.reset();
        }
    },
    checkAnswer: function () {
        $.each($("input[name=question-0]:checked"), function () {
            if ($(this).val() === qArray[0].rightAnswer) {
                game.rightAnswers++;
            } else { game.wrongAnswers++; }
        });
        $.each($("input[name=question-1]:checked"), function () {
            if ($(this).val() === qArray[1].rightAnswer) {
                game.rightAnswers++;
            } else { game.wrongAnswers++; }
        });
        $.each($("input[name=question-2]:checked"), function () {
            if ($(this).val() === qArray[2].rightAnswer) {
                game.rightAnswers++;
            } else { game.wrongAnswers++; }
        });
        $.each($("input[name=question-3]:checked"), function () {
            if ($(this).val() === qArray[3].rightAnswer) {
                game.rightAnswers++;
            } else { game.wrongAnswers++; }
        });
        $("#rightAnswerSummary").show();
        $("#wrongAnswerSummary").show();
        $("#rightAnswerSummary").text("Correct Answers: " + game.rightAnswers);
        $("#wrongAnswerSummary").text("Incorrect Answers: " + game.wrongAnswers);
        $("#tryAgainBtn").show();
        $("#seconds-remaining").text("Time's up!");
        $(".questions").hide();
        $("#submitBtn").hide();
    },
    submit: function () {
        clearInterval(intervalID);
        clockRunning = false;
        $(".questions").hide()
        $("#timeRemaining").text("Your Summary");
        $("#rightAnswerSummary").text("Correct Answers: " + rightAnswers);
        $("#wrongAnswerSummary").text("Incorrect Answers: " + wrongAnswers);
        $("#rightAnswerSummary").show();
        $("#wrongAnswerSummary").show();
        $("#tryAgainBtn").show();
        $("#submitBtn").hide();
}
};


$("#startBtn").on("click", function () {
    $("#seconds-remaining").show();
    game.startGame();
});

$("#submitBtn").on("click", function () {
    game.checkAnswer();
    game.reset();
});

$("#tryAgainBtn").on("click", function () {
    $("#seconds-remaining").show();
    game.reset();
    game.startGame();
});