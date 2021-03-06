window.addEventListener('load', init)

//Globals

// Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2,
}

// const easy = document.querySelector('#easy')
// const medium = document.querySelector('#medium')
// const hard = document.querySelector('#hard')

// const levels = [`${easy.value}`, `${medium}`, `${hard}`]



// easy = 5;
// medium = 3;
// hard = 2;


// Change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input')
const currentWord = document.querySelector('#current-word')
const scoreDisplay = document.querySelector('#score')
const timeDisplay = document.querySelector('#time')
const message = document.querySelector('#message')
const seconds = document.querySelector('#seconds')

const words = [
'ability',
'able',
'about',
'above',
'accept',
'according',
'account',
'across',
'act',
'action',
'activity',
'actually',
'add',
'address',
'administration',
'admit',
'adult',
'affect',
'almost',
'alone',
'along',
'already',
'also',
'although',
'always',
'American',
'among',
'amount',
'analysis',
'and',
'animal',
'another',
'answer',
'any',
'anyone',
'anything',
'appear',
'apply',
'approach',
'area',
'argue',
'arm',
'around',
'arrive',
'attention',
'attorney',
'audience',
'author',
'authority',
'available',
'avoid',
'beat',
'beautiful',
'because',
'become',
'bed',
'before',
'begin',
'behavior',
'behind',
'believe',
'benefit',
'billion',
'bit',
'brother',
'budget',
'build',
'building',
'business',
'camera',
'campaign',
'candidate',
'capital',
'car',
'central',
'century',
'certain',
'certainly',
'chair',
'challenge',
'character',
'citizen',
'city',
'civil',
'claim',
'class',
'collection',
'college',
'commercial',
'community',
'company',
'compare',
'computer',
'concern',
'condition',
'conference',
'Congress',
'consider',
'consumer',
'create',
'crime',
'cultural',
'culture',
'daughter',
'day',
'dead',
'debate',
'decade',
'decision',
'defense',
'degree',
'Democrat',
'democratic',
'describe',
'determine',
'development',
'die',
'difference',
'different',
'difficult',
'early',
'east',
'economic',
'economy',
'edge',
'education',
'election',
'employee',
'energy',
'environment',
'environmental',
'especially',
'establish',
'evidence',
'executive',
'experience',
'expert',
'explain',
'fact',
'factor',
'family',
'federal',
'feeling',
'finally',
'financial',
'force',
'foreign',
'forget',
'forward',
'free',
'friend',
'future',
'game',
'garden',
'gas',
'general',
'generation',
'girl',
'glass',
'goal',
'good',
'government',
'great',
'group',
'happen',
'happy',
'hard',
'health',
'heart',
'high',
'history',
'hospital',
'hotel',
'hour',
'house',
'however',
'human',
'hundred',
'husband',
'idea',
'identify',
'imagine',
'impact',
'important',
'improve',
'in',
'including',
'increase',
'indeed',
'indicate',
'individual',
'industry',
'information',
'inside',
'instead',
'institution',
'interest',
'interesting',
'international',
'interview',
'into',
'investment',
'involve',
'kitchen',
'know',
'knowledge',
'land',
'language',
'large',
'last',
'law',
'lawyer',
'letter',
'level',
'listen',
'little',
'love',
'machine',
'magazine',
'main',
'maintain',
'majority',
'management',
'marriage',
'material',
'matter',
'medical',
'message',
'military',
'million',
'mission',
'movement',
'movie',
'national',
'natural',
'necessary',
'occur',
'officer',
'official',
'often',
'operation',
'opportunity',
'option',
'organization',
'outside',
'painting',
'participant',
'particular',
'particularly',
'partner',
'party',
'patient',
'pattern',
'performance',
'perhaps',
'period',
'personal',
'physical',
'picture',
'point',
'police',
'policy',
'political',
'politics',
'popular',
'population',
'position',
'positive',
'possible',
'power',
'practice',
'prepare',
'present',
'president',
'pressure',
'quality',
'question',
'quickly',
'quite',
'race',
'radio',
'recently',
'region',
'relationship',
'Republican',
'research',
'responsibility',
'rule',
'science',
'scientist',
'section',
'security',
'serious',
'service',
'several',
'sexual',
'shoulder',
'significant',
'similar',
'situation',
'social',
'society',
'soldier',
'somebody',
'something',
'sometimes',
'southern',
'special',
'specific',
'standard',
'statement',
'strategy',
'structure',
'successful',
'suddenly',
'tax',
'teacher',
'team',
'technology',
'television',
'tell',
'ten',
'tend',
'term',
'test',
'than',
'thank',
'that',
'the',
'their',
'them',
'themselves',
'then',
'theory',
'there',
'these',
'they',
'thing',
'think',
'third',
'this',
'those',
'though',
'thought',
'thousand',
'threat',
'three',
'through',
'throughout',
'throw',
'thus',
'time',
'to',
'today',
'together',
'tonight',
'too',
'top',
'total',
'tough',
'toward',
'town',
'trade',
'traditional',
'training',
'travel',
'treat',
'treatment',
'tree',
'trial',
'trip',
'trouble',
'true',
'truth',
'try',
'turn',
'TV',
'two',
'type',
'under',
'understand',
'unit',
'until',
'up',
'upon',
'us',
'use',
'usually',
'value',
'various',
'very',
'victim',
'view',
'violence',
'visit',
'voice',
'vote',
'wait',
'walk',
'wall',
'want',
'war',
'watch',
'water',
'way',
'we',
'weapon',
'wear',
'week',
'weight',
'well',
'west',
'western',
'what',
'whatever',
'when',
'where',
'whether',
'which',
'while',
'white',
'who',
'whole',
'whom',
'whose',
'why',
'wide',
'wife',
'will',
'win',
'wind',
'window',
'wish',
'with',
'within',
'without',
'woman',
'wonder',
'word',
'work',
'worker',
'world',
'worry',
'would',
'write',
'writer',
'wrong',
'yard',
'yeah',
'year',
'yes',
'yet',
'you',
'young',
'your',
'yourself'
];

//Inialize Game
function init() {
  // Show number of seconds
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // Call countdown
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  }else{
    scoreDisplay.innerHTML = score;
  }
}

// Match current word to word input
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Get and show random word
function showWord(words) {
  // Generate random array index
  const randomIndex = Math.floor(Math.random() * words.length);
  // Out put random word
  currentWord.innerHTML = words[randomIndex];
}

// Countdown timer
function countdown() {
  // Make sure time does not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if(time === 0){
    // Game over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}
