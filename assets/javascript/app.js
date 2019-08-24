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
$("#questionContainer").hide();

var game = {
    rightAnswers: 0,
    wrongAnswers: 0,

    startGame: function() {
        $(".instructions").hide();
        $("#submitBtn").show();
        $('#questionContainer').show();
        $("#seconds-remaining").text(game.counter);
        var output = [];
        var choices;
        for (var i = 0; i < qArray.length; i++) {
            choices = [];

            for(letter in qArray[i].choices){
                choices.push(
                    '<label>'
                        + '<input type="radio" class="custom-control-input" name="choose'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + qArray[i].choices[letter]
                    + '</label>'
                );
            }
            
            output.push(
                '<div class="question"' + qArray[i].q + '</div>'
                + '<div class="answers">' + choices.join('') + '</div>'
            );
        }
        $("#correctAnswerSummary").hide();
        $("#wrongAnswerSummary").hide();
        intervalID = setInterval(game.count, 1000);
        clockRunning = true;
        $("#questionContainer").innerHTML = output.join('');
    }
};


$("#startBtn").on("click", function() {   
    game.startGame();

    window.setTimeout(timeBegin, 0);
    function timeBegin (){
        console.log ('You have 120 seconds to complete this quiz!');
    };

    window.setTimeout(halftime, 1000 * 60);
    function halftime (){
        console.log ('You have 60 seconds left!');
    };

    window.setTimeout(timeout, 1000 * 120);
    function timeout (){
        alert ("Time's up, check the results below!");
        console.log ("time's up");
        score();
    };

    $('#submitBtn').on("click", score());

});