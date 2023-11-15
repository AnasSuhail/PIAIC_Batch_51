console.log("Hi Hamza, woud you like to learn AI?");
console.log("hello anas suhail,HELLO ANAS SUHAIL,Hello Anas Suhail")
console.log('Peter Drucker said once,"The best way to predict the future is to create it."')

const famous_person: string = "Peter Drucker";

const message: string = `Famous Quote 2: "The best way to predict the future is to create it." - ${famous_person}`;

console.log(message);


const nameWithWhitespace: string = "\t  Anas Suhail  \n";


console.log("Name with whitespace:");
console.log(nameWithWhitespace);


const strippedName: string = nameWithWhitespace.trim();
console.log("\nName after stripping whitespace:");
console.log(strippedName);




const additionResult = 5 + 3;
console.log(`Addition: 5 + 3 = ${additionResult}`);

const subtractionResult = 10 - 2;
console.log(`Subtraction: 10 - 2 = ${subtractionResult}`);

const multiplicationResult = 4 * 2;
console.log(`Multiplication: 4 * 2 = ${multiplicationResult}`);

const divisionResult = 16 / 2;
console.log(`Division: 16 / 2 = ${divisionResult}`);


console.log(8 + 14); 
console.log(76 - 50); 
console.log(6 * 3); 
console.log(15 / 3); 


const favoriteNumber: number = 13;


const messag: string = `My favorite number is ${favoriteNumber}.`;

console.log(message);

const names: string[] = ["Ali", "Anas", "Fatima", "Saad", "Dua"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }

  

  
const name: string[] = ["Ali", "Anas", "Fatima", "Saad", "Dua"];

for (let i = 0; i < names.length; i++) {
  const message = `Hello, ${names[i]}! Have a great day!`; // Personalized message for each person
  console.log(message);
}


const transportationList: string[] = ["car", "motorcycle", "bicycle", "train", "scooter"];

for (const mode of transportationList) {
  console.log(`I would like to bought a ${mode}.`);
}

const guestList: string[] = ["Hamza Khan", "Khizar Moiz", "Asad Baig"];

for (const guest of guestList) {
  console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us for a wonderful evening.\n\nSincerely, [Anas Suhail]`);
}



const guestlist: string[] = ["Hamza Khan", "Khizar Moiz", "Asad Baig"];


console.log("Original Guest List:");
for (const guest of guestList) {
  console.log(`- ${guest}`);
}

const replacementGuest: string = "Arsal Ahmed"; 

guestList[1] = replacementGuest;


console.log("\nUpdated Guest List:");
for (const guest of guestList) {
  console.log(`- ${guest}`);
}


// Original guest list
const guestlist: string[] = ["Hamza Khan", "Khizar Moiz", "Asad Baig"];

console.log("Original Guest List:");
for (const guest of guestList) {
  console.log(`- ${guest}`);
}


console.log("\nGreat news! We found a bigger dinner table, so we can invite more guests.");

guestList.unshift("Zubair Mehboob");

guestList.splice(2, 0, "Hanzala Sohail");

guestList.push("Taseer Raza");

console.log("\nUpdated Guest List:");
for (const guest of guestList) {
  console.log(`- ${guest}`);
}

console.log("\nNew Invitation Messages:");
for (const guest of guestList) {
  console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us for a wonderful evening.\n\nSincerely, [Anas Suhail]`);
}





const guestlist: string[] = [
    "Hamza Khan"
    "Arsal Ahmed"
    "Asad Baig"
    "Zubair Mehboob"
    "Hanzala Sohail"
    "Taseer Raza"

  ];
  
  console.log("Original Guest List:");
  for (const guest of guestList) {
    console.log(`- ${guest}`);
  }
  
  
  console.log("\nWe regret to inform you that due to unforeseen circumstances, we can only invite two people for dinner.");
  
  
  while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner this time.`);
  }
  
  
  console.log(`\nDear ${guestList[0]}, you are still invited to dinner.`);
  console.log(`Dear ${guestList[1]}, you are still invited to dinner.`);
  
  
  guestList.pop();
  guestList.pop();
  
  
  console.log("\nFinal Guest List:");
  if (guestList.length === 0) {
    console.log("The guest list is now empty.");
  } else {
    for (const guest of guestList) {
      console.log(`- ${guest}`);
    }
  }
  


  
const placesToVisit: string[] = [
    "London",
    "Maldives",
    "Istanbul",
    "Korea",
    "Morroco",
  ];
  
  
  console.log("Original Order:");
  console.log(placesToVisit);
  
  
  console.log("\nAlphabetical Order:");
  console.log([...placesToVisit].sort());
  
  
  console.log("\nOriginal Order (not modified):");
  console.log(placesToVisit);
  
  
  console.log("\nReverse Alphabetical Order:");
  console.log([...placesToVisit].sort().reverse());
  
  
  console.log("\nOriginal Order (not modified):");
  console.log(placesToVisit);
  
 
  console.log("\nReversed Order:");
  console.log(placesToVisit.reverse());
  
  
  console.log("\nOriginal Order (reversed again):");
  console.log(placesToVisit);
  

  console.log("\nSorted in Alphabetical Order:");
  console.log(placesToVisit.sort());
  
  
  console.log("\nSorted in Reverse Alphabetical Order:");
  console.log(placesToVisit.sort().reverse());
 
const guestList: string[] = [
    "Hamza Khan"
    "Arsal Ahmed"
    "Asad Baig"
    "Zubair Mehboob"
    "Hanzala Sohail"
    "Taseer Raza"
  ];
  
  console.log("Original Guest List:");
  for (const guest of guestList) {
    console.log(`- ${guest}`);
  }
  
  
  console.log(`\nYou are inviting ${guestList.length} people to dinner.`);
  
  
  guestList.unshift("Ali Arif");
  
  
  guestList.splice(2, 0, "Taha Rafi Khan");
  
  
  guestList.push("Hammad Khan");
  
  
  console.log("\nUpdated Guest List:");
  for (const guest of guestList) {
    console.log(`- ${guest}`);
  }
  


