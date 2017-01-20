console.log("///Office Exercise///");

var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];


function randomOpinions() {
    return _.sample(opinions);
 }

 function departementOpinion(){
    return _.times(10, randomOpinions);
 }

 function officeOpinion(){
    return _.times(5, departementOpinion);
}

console.log(officeOpinion());
