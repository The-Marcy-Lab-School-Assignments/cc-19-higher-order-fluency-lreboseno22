const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:22}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:21}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:21},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:21}];

const averageAge = function(alumi){
    const sum = alumi.reduce((a, b) => { a + b.age, 0});
    return Math.floor(sum / alumi.length);
};
console.log(averageAge(alumni));

const bananaBread = function(alumi){
    return alumi.map((alum) => {
        return {...alum, bananaBread : `${alum.name} got banana bread at ${alum.job}`};
    });
};
console.log(bananaBread(alumni));

const ninetiesBabies = function(alumi){
    return alumi
};

const addSchool = function(alumi){
    
};

const allUseJavascript = function(alumi){
    
};

const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin'];

const noVowel = function(alumi){
    return alumi.map(word => word.replace(/[aeiou]/gi, 'x'));
};
console.log(noVowel(animals));

const onlyVowelA = function(alumi){
  return alumi.filter(word => word.includes('a'));  
};
console.log(onlyVowelA(animals));

const longeraThanSeven = function(alumi){
    return alumi.some(word => word.length > 7);  
};
console.log(longeraThanSeven(animals));

const allFour = function(alumi){
    return alumi.every(word => word.length === 4);
};
console.log(allFour(animals));

const concatStrings = function(alumi){
    
};

