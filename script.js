function eval_letter(entered_letter){
    if (randomWord.includes(entered_letter)){
        randomWord.forEach((letter, index) => {
            if (letter == entered_letter) {
                word_display[index] = letter;
            }
    word_display_html.innerText = word_display.join(' ');

        })
    } else {
        alert("this letter is not part of the word");
        incorrect_counter ++;
        incorrect_counter_on_html.textContent = incorrect_counter;
    }
};


const randomWords = [
    "abandon", "ability", "absence", "absolute", "abstract",
    "academic", "accelerate", "acceptance", "accessible", "accident",
    "accompany", "accomplish", "accountant", "accumulate", "accurate",
    "accuse", "achieve", "acknowledge", "acoustic", "activate",
    "adaptation", "addiction", "adequate", "adjustment", "admiration",
    "adventure", "aerodynamics", "affection", "aggregate", "aggressive",
    "agile", "airplane", "alcohol", "algebra", "alien",
    "alleviate", "allocate", "alphabet", "ambassador", "ambiguous",
    "ambition", "amplify", "analog", "analysis", "ancestor",
    "anchor", "animated", "anniversary", "annotate", "announcement",
    "anonymous", "anticipate", "anxiety", "apartment", "apologize",
    "apparatus", "appetite", "appraisal", "appreciate", "architect",
    "arctic", "argument", "aristocrat", "armchair", "aromatic",
    "artificial", "ascend", "aspiration", "assassinate", "assemble",
    "assertive", "assignment", "associate", "assumption", "athlete",
    "atmosphere", "atomic", "attachment", "auction", "audience",
    "authenticate", "automatic", "avalanche", "awkward", "bachelor",
    "backpack", "bake", "balance", "ballot", "bamboo",
    "bankrupt", "barbecue", "bargain", "barrier", "battery",
    "bedroom", "behavior", "believe", "beneficial", "benevolent",
    "beverage", "bicycle", "binary", "biology", "bishop",
    "blanket", "blessing", "blizzard", "boast", "bodyguard",
    "bold", "boundary", "bracelet", "breakfast", "breath",
    "brochure", "buffet", "burden", "butterfly", "calculate",
    "calendar", "campaign", "candle", "capability", "capacity",
    "capital", "capture", "caravan", "carbohydrate", "cargo",
    "carousel", "cascade", "caterpillar", "celebrate", "ceremony",
    "challenge", "champion", "changeable", "character", "charity",
    "charming", "cheerful", "chemistry", "chess", "chief",
    "childhood", "chocolate", "cinnamon", "circulate", "citizen",
    "clarity", "classic", "cliff", "climate", "clockwork",
    "clothes", "cluster", "coastal", "coffin", "collaborate",
    "collective", "collision", "combination", "comfort", "command",
    "commence", "commerce", "commitment", "communicate", "compassionate",
    "compete", "compliment", "compose", "comprehensive", "compromise",
    "conceal", "concentrate", "concept", "conclude", "condemn",
    "conference", "confidence", "conflict", "confront", "confusion",
    "congratulate", "connect", "consciousness", "consecutive", "conservative",
    "consider", "consistent", "conspire", "construct", "consult",
    "consume", "contemplate", "context", "contingency", "contradict",
    "contribute", "convince", "coordinate", "corporate", "corridor",
    "cosmic", "courage", "courteous", "cover", "creative",
    "credibility", "crimson", "criterion", "critical", "crucial",
    "cuddle", "culminate", "cumbersome", "curiosity", "curriculum",
    "cylinder", "dandelion", "daring", "dart", "database",
    "deadline", "debrief", "deceive", "decision", "decorate",
    "defend", "definite", "degenerate", "delegate", "deliberate",
    "delicate", "delight", "democracy", "demonstrate", "dense",
    "departure", "dependable", "deploy", "derivative", "descend",
    "describe", "desert", "design", "desire", "dessert",
    "destination", "detect", "deteriorate", "determine", "deviate",
    "device", "devotion", "diagnose", "diagram", "diamond",
    "dictionary", "differentiate", "digest", "dignity", "diligent",
    "dimension", "dinner", "diploma", "directory", "disappear",
    "discipline", "discreet", "discuss", "disguise", "disintegrate",
    "dismiss", "display", "distract", "divergent", "divine",
    "document", "dominant", "dormitory", "doubt", "dramatic",
    "dreary", "durable", "dynamics", "earnest", "earthquake",
    "eccentric", "eclipse", "economical", "educate", "efficiency",
    "elaborate", "elastic", "elegant", "elevate", "eligible",
    "eliminate", "embrace", "emergency", "emission", "emphasize",
    "empower", "enchant", "encourage", "end"
  ];
  
  const input = document.getElementById('input');
  const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)].split('');
  const incorrect_counter_on_html = document.getElementById('incorrect_counter');
  const word_display_html = document.getElementById('word_display');
  const letters_enetered = [];
  const letters_entered_html = document.getElementById('letters_entered');
  let word_display = [];
  let incorrect_counter = 0;
  
  for (let i=0;i<randomWord.length;i++){
    word_display.push('_');
}
word_display_html.innerText = word_display.join(' ');
  
  console.log(randomWord);
  
  window.addEventListener('keydown', Event => {
    const letter = Event.key;
    console.log(letter);
    if (letter.length > 1 || letter == ' '){
        return
    }
    if (!letters_enetered.includes(letter)){
        letters_enetered.push(letter);
    }
    letters_entered_html.innerText = letters_enetered;
    eval_letter(letter);
  })