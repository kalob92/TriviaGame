// all the questions
var qArray = [
    {
        q: 'Which of these is botanically a "true" berry?',
        choices: {
            a: 'raspberry',
            b: 'eggplant',
            c: 'strawberry',
            d: 'blackberry'
        },
        rightAnswer: 'b',
    },
    {
        q: 'What plant has the largest seed?',
        choices: {
            a: 'palm tree',
            b: 'avocado',
            c: 'orchid',
            d: 'redwood tree'
        },
        rightAnswer: 'a',
    },
    {
        q: 'What is the Colorado State Tree?',
        choices: {
            a: 'white fir',
            b: 'Norway spruce',
            c: 'blue spruce',
            d: 'Norfolk pine'
        },
        rightAnswer: 'c',
    },
    {
        q: 'What is vanilla harvested from?',
        choices: {
            a: 'a cactus',
            b: 'a rose',
            c: 'a bean bush',
            d: 'an orchid'
        },
        rightAnswer: 'd',
    },
    {
        q: 'What do you call a plant that drops its leaves in cold seasons and droughts?',
        choices: {
            a: 'evergreen',
            b: 'deciduous',
            c: 'wimpy',
            d: 'perennial'
        },
        rightAnswer: 'b',
    },
    {
        q: 'What is an epiphyte?',
        choices: {
            a: 'a plant that grows off another plant',
            b: 'a pest that eats the bark of a tree',
            c: 'plants that perform photosynthesis more often',
            d: 'a plant that only flowers in winter'
        },
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
        $(".instructions").hide();
        $("#submitBtn").show();
        $('.questionContainer').show();
        $("#seconds-remaining").text(game.counter);
        
        for (var i = 0; i < qArray.length; i++) {
            $(".questions").append("<h3>" + qArray[i].q + "</h3>");
            for (var j = 0; j < qArray[i].choices.length; j++) {
                $(".questions").append("<br>" + " <input type='radio' name='question-" + i + "' value='" + qArray[i].choices[j] + "'' > " + qArray[i].choices[j])
            }
        }
        $(".questions").show();
        $("#correctAnswerSummary").hide();
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
            if ($(this).val() === questions[0].rightAnswer) {
                game.correctAnswers++;
            } else { game.wrongAnswers++; }
        });
        $.each($("input[name=question-1]:checked"), function () {
            if ($(this).val() === questions[1].correctAnswer) {
                game.correctAnswers++;
            } else { game.wrongAnswers++; }
        });
        $.each($("input[name=question-2]:checked"), function () {
            if ($(this).val() === questions[2].correctAnswer) {
                game.correctAnswers++;
            } else { game.wrongAnswers++; }
        });
        $.each($("input[name=question-3]:checked"), function () {
            if ($(this).val() === questions[3].correctAnswer) {
                game.correctAnswers++;
            } else { game.wrongAnswers++; }
        });
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