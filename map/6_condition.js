const scores = [60, 20, 90, 47, 444];

const result = scores.map( (score) => {
        if(score >= 55)
            return "pass";
        else 
            return "fail";

});

console.log(result);

