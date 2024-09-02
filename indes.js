let emojitext = document.querySelector('.emojitext')
let generateBtn = document.querySelector('.generate')


async function fetchEmoji(emojiVal) {
    let API_KEY = `bd7be75e75dcf4a249a04ba5c9474c2ac4fc1bff`
    let API = `https://emoji-api.com/emojis?search=${emojiVal}&access_key=${API_KEY}`
    
    let result = (await(await fetch(API)).json())
    // console.log(result);
    
    displayEmoji(result)
}
// fetchEmoji().catch((err)=>console.log(err));



function displayEmoji(emoji) {
    if(emoji.length > 0){
        document.querySelector('.display').innerHTML = 
        ` <div class="display-emoji">${emoji[0].character}</div>`
    }
    else{
        alert('no emoji found.....')
    }
} 


generateBtn.addEventListener('click',()=>{
    let emojiVal = emojitext.value.trim()
    // console.log(emojiVal);
    if(emojiVal){
     fetchEmoji(emojiVal)
    }else{
document.querySelector('.display').innerHTML = 
        ` <div class="display-emoji">Enter emoji name and click generate</div>`
    }
    
    emojitext.value = ' '
    
})