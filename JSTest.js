/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const myNFTS = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, desc, avatar) {
   const nftObj = {
      "name": name,
      "description": desc,
      "avatar": avatar 
   };
   myNFTS.push(nftObj);
   console.log("Minted " + name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for(i=0;i<myNFTS.length;i++){
      console.log("Name: " + myNFTS[i].name + "\nDescription: " + myNFTS[i].description + "\nAvatar: " + myNFTS[i].avatar + "\n");
   }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("There are " + myNFTS.length + " minted NFT/s to the console.\n");
}

// call your functions below this line
mintNFT("Shooky", "Tiny SHOOKY loves pulling pranks, especially ones dropped on friends. The one thing SHOOKY hates most is milk.", "Cookie");
mintNFT("Mang", "Always carrying around a mysterious mask, you can only see MANG\’s cute heart smile without the mask on.", "Horse");
mintNFT("Koya", "Brilliant, multi-talented KOYA is quite the \‘sleeping cutie\’. KOYA naps with a mind heavily filled with thoughts.", "Koala");
mintNFT("Cooky", "Don\’t let COOKY\’s perky appearance fool you. Always full of heart and boundless stamina, COOKY’s that one friend you can always count on.", "Rabbit");
mintNFT("Chimmy", "CHIMMY always sports the signature yellow hoodie and is compelled to work hard on anything that catches CHIMMY\’s attention.", "Dog");
mintNFT("Tata", "TATA is a crown prince on Planet BT. Possessor of supernatural powers and a hyper-elastic body that stretches to great lengths.", "Alien");
mintNFT("RJ", "RJ loves cooking. RJ loves eating. It\'s usually in that order. The fluffy fur coat and compassionate soul make everyone feel right at home.", "Llama");
mintNFT("Van", "The sentient and all-knowing robot VAN seems to be knowledgeable. in just about everything in the galaxy. Acts as protector of BT21, 24/7.", "Robot");

listNFTs();
getTotalSupply();
