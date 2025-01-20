function makeChoice(choice) {
    const storyText = document.getElementById('story-text');
    const choices = document.getElementById('choices');

    // ENTERING THE FOREST

    if (choice === 'enter') {
        storyText.textContent = 'As you step into the forest, the sound grows louder-a harmonious tune mixed with the rustling leaves. Sunlight filters through the canopy, creating a kaleidoscope of light on the forest floor. You spot a peculiar tree with a door carved into its trunk.';
        choices.innerHTML = `<button onclick="makeChoice('investigate')">Investigate the sound</button>
                            <button onclick="makeChoice("explore")">Explore the tree</button>`; //A1  A2
    // A1 Options Return
    } else if (choice === 'investigate') {
        storyText.textContent = 'You follow the enchanting melody to a clearing where a small, shimmering creature is trapped in a web of sparkling vines. It resembles a tiny fairy with iridescent wings, and it gazes at you with wide, pleading eyes.';
        choices.innerHTML = `<button onclick="makeChoice('help')">Help the creature</button>
                            <button onclick="makeChoice('run')">Run away</button>`; // A1a  A1b

    // A2 Options Return                   
    } else if (choice === 'explore') {
        storyText.textContent = 'You push open the small door, and it creaks as it reveals a cozy room filled with strange potions, scrolls, and a glowing crystal ball. A wise old owl, perched on a shelf, looks at you curiously.';
        choices.innerHTML = `<button onclick="makeChoice('talkowl')">Talk to the Owl</button>
                            <button onclick="makeChoice('examinepotions')">Examine the potions</button>`; // A2a  A2b
    // A1a Options Return                        
    } else if (choice === 'help') {
        storyText.textContent = 'The fairy, now free, flutters around you in delight. "Thank you, brave traveler! I am Lirael, guardian of this forest. As a reward, I will grant you a wish!"';
        choices.innerHTML = `<button onclick="makeChoice('wishsecrets')">Wish for knowledge of the forests secrets</button>
                            <button onclick="makeChoice('wishanimals')">Wish for the ability to communicate with animals</button>`; // A1a1  A1a2

    // A1b Options Return                        
    } else if (choice === 'run') {
        storyText.textContent = 'You dash through the trees, your heart pounding. The sounds of the forest turn into a chaotic symphony. You stumble and fall, and when you look up, you see the fairy looking down at you, disappointment in her eyes.';
        choices.innerHTML = `<button onclick="makeChoice('apologize')">Apologize and explain your fear</button>
                            <button onclick="makeChoice('keeprunning')">Keep running</button>`; // A1b1  A1b2

    // A2a Options Return END
    } else if (choice === 'talkowl') {
        storyText.textContent = 'You feel a connection with this creature of wisdom.';
        choices.innerHTML = `<button onclick="resetStory()">Restart</button>`;

    //A2b Options Return END                  
    } else if (choice === 'examinepotions') {
        storyText.textContent = 'One of them catches your eye-it sparkles like starlight.';
        choices.innerHTML = `<button onclick="resetStory()">Restart</button>`;

    // A1a1 END
    } else if (choice === 'wishsecrets') {
        storyText.textContent = 'With the wisdom granted by Lirael, you become a revered guardian of the forest. You explore hidden groves and discover ancient ruins, sharing your knowledge with others who seek the wonders of nature. The forest flourishes under your care, and you build a bridge between humans and magical beings.';
        choices.innerHTML = `<button onclick="resetStory()">Restart</button>`;

    // A1a2 END
    } else if (choice === 'apologize') {
    storyText.textContent = 'Lirael guides you through the forest, sharing its secrets and magic. You develop a deep bond with her and become a protector of the enchanted realm. Your experience helps you grow, and you find the courage to explore other magical lands in the future.';
    choices.innerHTML = `<button onclick="resetStory()">Restart</button>`;

    // A1b1 END
    } else if (choice === 'wishanimals') {
        storyText.textContent = 'The animals become your closest friends and allies. You learn their ways and help them protect the forest from threats. Together, you establish a peaceful coexistence between the forest creatures and nearby villagers, fostering a sense of harmony that lasts for generations.';
        choices.innerHTML = `<button onclick="resetStory()">Restart</button>`;

    // A1b2 END
    } else if (choice === 'keeprunning') {
        storyText.textContent = 'As you flee, the forest envelops you in a maze of illusions. You eventually find your way back, but you carry the lesson of bravery in your heart. The experience ignites your curiosity, leading you to return and face your fears with newfound courage.';
        choices.innerHTML = `<button onclick="resetStory()">Restart</button>`;
    } 



}

function resetStory() {
    const storyText = document.getElementById('story-text');
    const choices = document.getElementById('choices');
    storyText.textContent = 'Enchanted Forest Adventure is a whimsical tale about a group of friends who embark on a magical journey through a mystical forest. Along the way, they encounter enchanting creatures, solve ancient riddles, and uncover hidden secrets. With each step, they learn the value of friendship, bravery, and the power of believing in the impossible. A heartwarming story invites readers to explore a world where wonder and adventure await around every corner.';
    choices.innerHTML = `
        <button onclick="makeChoice('enter')">Enter the forest</button>
        <button onclick="makeChoice('leave')">Leave the forest</button>
    `;
}
