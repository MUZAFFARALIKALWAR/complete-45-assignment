// 3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName:string = "muzaffar";
console.log("Uppercase: ", personName.toLocaleUpperCase())
console.log("Lowercase: ", personName.toLowerCase());
console.log("Titlecase: ", personName.charAt(0).toUpperCase()+personName.slice(1).toLocaleLowerCase());
