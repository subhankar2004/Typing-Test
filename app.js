const typingText = document.querySelector(".typing text  p");
const inputField = document.querySelector(".wrapper .input-field");
const time= document.querySelector(".time span b");
const mistake = document.querySelector(".mistake span b");
const wpm = document.querySelector(".wpm span b");
const cpm = document.querySelector(".cpm span b");
const btn=document.querySelector("button");
const text=document.getElementById("text");

function loadParagraph(){
 const paragraphs=["The moon leaned in, its silver lips brushing against the treetops. It whispered secrets to the leaves, who shivered and rustled in delight. “Why do you glow?” they asked. The moon chuckled. “Because I’ve been stealing stardust kisses","In the forgotten corner of the antique shop, teacups held whispered memories. They’d sipped Earl Grey with spies, danced at midnight masquerades, and floated down rivers of chamomile dreams. Now, they waited for a curious soul to pick them up and sip eternity.","Umbrellas, like wayward souls, congregated in subway stations during rainstorms. They swapped stories of windy escapades and unrequited love. The yellow ones were the cheerleaders, while the black ones brooded mysteriously. But they all longed for a sunny day and a dry corner","In the library of forgotten words, “petrichor” sat next to “susurrus.” They reminisced about rainy afternoons and whispered breezes. “Remember when we danced on cobblestone streets?” asked petrichor. Susurrus nodded. “Ah, those were the days before autocorrect stole our magic","On the intergalactic starship, the cafeteria served cosmic cuisine. Nebula noodles, quasar quiche, and black hole coffee. The waitstaff had three eyes and tentacle arms. And every meal came with a side of stardust sprinkles. Yelp review: “Five stars—literally"];

 const randomIndex=Math.floor(Math.random()*paragraphs.length);
 text.innerHTML='';
 for(char of paragraphs[randomIndex]){
  console.log(char);
  text.innerHTML+=`<span>${char}</span>`;
 }
}

loadParagraph();




