// Secrets of Sunlit Shores
function makeChoice(choice) {
    const storyText = document.getElementById('story-text');
    const choices = document.getElementById('choices');

    // THE HIDDEN TIDE POOLS
    if (choice === 'hiddenpools') {
        storyText.textContent = 'You make your way to the rocky outcrop, where the tide pools are filled with vibrant starfish, sea anemones, and tiny fish darting about. As you lean in closer, you notice a glimmering object at the bottom of one pool. \n Suddenly, a friendly sea turtle swims by and pops its head above the water. "Hello there! If you help me find my lost shell, I can show you something special!" it says.';
        choices.innerHTML = `
            <button onclick="makeChoice('agree')">Agree to help the turtle find its shell</button>
            <button onclick="makeChoice('ignore')">Ignore the turtle and investigate the glimmering object</button>
            <button onclick="resetStory()">STOP</button>`; // A1   A2
   
    // A1 Return Options
    } else if (choice === 'agree') {
        storyText.textContent = 'The turtle leads you to a series of pools, each more vibrant than the last. "I lost my shell near the colorful coral," it explains. As you search, you come across various underwater wonders, but the shell remains elusive.';
        choices.innerHTML = `<button onclick="makeChoice('divedeeper')">Dive deeper into the pool to search for the shell</button>
                            <button onclick="makeChoice('askturtle')">Ask the turtle if it remembers any specific clues about where it might be</button>
                            <button onclick="resetStory()">STOP</button>`; // A1a  A2a

    // A2 Return Options                 
    } else if (choice === 'ignore') {
        storyText.textContent = 'You reach down into the tide pool and retrieve a beautiful, ornate seashell. As you hold it up to the light, it begins to shimmer with a magical glow. You feel a surge of energy, and suddenly you hear whispers of the oceans secrets.';
        choices.innerHTML = `<button onclick="makeChoice('keep')">Keep the seashell and explore its powers</button>
                            <button onclick="makeChoice('return')">Return the seashell to the turtle and ask for guidances</button>
                            <button onclick="resetStory()">STOP</button>`; // A2a  A2b
                
    // A1a END
    } else if (choice === 'divedeeper') {
        storyText.textContent = 'You dive deep and finally find the turtles shell, earning the turtles gratitude and a glimpse into the magical world of the ocean, where you learn to communicate with sea creatures';
        choices.innerHTML = '<button onclick="resetStory()">Restart</button>';

    // A1b END    
    } else if (choice === 'askturtle') {
        storyText.textContent = 'You bond with the turtle, and it teaches you about the importance of teamwork and natures treasures.';
        choices.innerHTML = '<button onclick="resetStory()">Restart</button>';

    // A2a END    
    }  else if (choice === 'keep') {
        storyText.textContent = 'The seashell grants you the ability to hear the ocean whispers, leading you on new adventures as a protector of marine life.';
        choices.innerHTML = '<button onclick="resetStory()">Restart</button>';

    // A2b END    
    }  else if (choice === 'return') {
        storyText.textContent = 'The turtle rewards you with a magical map leading to an underwater treasure, and you embark on an exciting quest together.';
        choices.innerHTML = '<button onclick="resetStory()">Restart</button>';

    // ABANDONED SHIPWRECK    

    }  else if (choice === 'abandoned') {
        storyText.textContent = 'You make your way to the shipwreck, its tattered sails fluttering in the wind. The sight is both eerie and exhilarating. As you climb aboard, the smell of salt and old wood fills the air. \n Inside, you find remnants of treasure maps and dusty chests. Suddenly, a parrot flies down and lands on your shoulder. "Ahoy, matey! The treasure be here, but ye must prove yer worth first!" it squawks.';
        choices.innerHTML = `<button onclick="makeChoice('askparrot')">Ask the parrot how to prove your worth</button>
                            <button onclick="makeChoice('searchship')">Search the ship for treasure without the parrot's help</button>
                            <button onclick="resetStory()">STOP</button>`; // B1  B2

    // B1 Return Options                        
    } else if (choice === 'askparrot') {
        storyText.textContent = 'The parrot fluffs its feathers. "To find the treasure, ye must solve me riddle! Here it is: I can fly without wings. I can cry without eyes. Whenever I go, darkness flies. What am I?"';
        choices.innerHTML = `<button onclick="makeChoice('cloud')">A Cloud</button>
                            <button onclick="makeChoice('shadow')">A Shadow</button>
                            <button onclick="resetStory()">STOP</button>`; // B1a  B1b

    // B2 Return Options                        
    } else if (choice === 'searchship') {
    storyText.textContent = 'You rummage through the ships hold, finding dusty maps and some old gold coins. But just as you think you are alone, you hear the creaking of wood. You turn to find a ghostly figure-a pirate captain!';
    choices.innerHTML = `<button onclick="makeChoice('demandcaptain')">Demand the captain tell you about the treasure</button>
                        <button onclick="makeChoice('askcaptain')">Ask the captain about the ship's history</button>
                        <button onclick="resetStory()">STOP</button>`; // B2a  B2b

    // B1a End
    } else if (choice === 'cloud') {
    storyText.textContent = 'The parrot is impressed, and the ship reveals its hidden treasure, making you a local legend for uncovering pirate gold';
    choices.innerHTML = '<button onclick="resetStory()">Restart</button>';

    // B1b END    
    } else if (choice === 'shadow') {
        storyText.textContent = 'The parrot is not pleased with your answer, but it offers you another chance to prove your worth through another riddle, leading to more challenges';
        choices.innerHTML = '<button onclick="resetStory()">Restart</button>';

    // B2a END    
    }  else if (choice === 'demandcaptain') {
        storyText.textContent = 'You learn the importance of courage and leadership, and you inherit the captains spirit as you become a new guardian of the shipwreck.';
        choices.innerHTML = '<button onclick="resetStory()">Restart</button>';

    // B2b END    
    }  else if (choice === 'askcaptain') {
        storyText.textContent = 'You document the captains stories, becoming a renowned historian and storyteller of the seas.';
        choices.innerHTML = '<button onclick="resetStory()">Restart</button>';
    }

}

function resetStory() {
    const storyText = document.getElementById('story-text');
    const choices = document.getElementById('choices');
    storyText.textContent = 'The Secrets of the Sunlit Shores; You find yourself on the sun-kissed sands of Sunlit Shores, a picturesque beach known for its crystal-clear waters and vibrant marine life. Palm trees sway gently in the breeze, and the salty air fills your lungs with invigorating energy. Locals whisper of hidden treasures and mystical sea creatures lurking beneath the waves. \n As you gaze out at the horizon, two intriguing options catch your eye:';
    choices.innerHTML = `
        <button onclick="makeChoice('hiddenpools')">The Hidden Tide Pools</button>
        <button onclick="makeChoice('abandoned')">The Abandoned Shipwreck</button>
    `;
}
