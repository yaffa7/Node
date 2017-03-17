var questions = [
    "What is your name?",
    "What is your favorite hobby",
    "What is your preferred programming language?"
];


var answers = [];

function ask(i){
    process.stdout.write(`\n\n\n${questions[i]}`);
    process.stdout.write("  >  ");
}

process.stdin.on('data',function(data) {
    answers.push(data.toString().trim());

    if(answers.length < questions.length){
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', function() {
    process.stdout.write("\n\n\n\n")
    process.stdout.write(`Go ${answers[1]} ${answers[0]} ${answers[2]}`)
    process.stdout.write("\n\n\n\n")
});

ask(0);
