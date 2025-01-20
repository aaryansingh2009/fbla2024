function makeChoice(choice) {
    const storyText = document.getElementById('story-text');
    const choices = document.getElementById('choices');

    if (choice === 'enter') {
        storyText.textContent = 'As you step into the forest, the sound grows louder-a harmonious tune mixed with the rustling leaves. Sunlight filters through the canopy, creating a kaleidoscope of light on the forest floor. You spot a peculiar tree with a door carved into its trunk.';
        choices.innerHTML = `
            <button onclick="makeChoice('investigate')">Investigate the sound</button>
            <button onclick="makeChoice('explore')">Explore the tree</button>
        `;
    } else if (choice === 'investigate') {
        storyText.textContent = 'You follow the enchanting melody to a clearing where a small, shimmering creature is trapped in a web of sparkling vines. It resembles a tiny fairy with iridescent wings, and it gazes at you with wide, pleading eyes.';
        choices.innerHTML = '<button onclick="makeChoice("help")">Help the creature</button>'
                            '<button onclick="makeChoice("run")">Run away</button>';

    } else if (choice === 'explore') {
        storyText.textContent = 'You push open the small door, and it creaks as it reveals a cozy room filled with strange potions, scrolls, and a glowing crystal ball. A wise old owl, perched on a shelf, looks at you curiously.';
        choices.innerHTML = '<button onclick="makeChoice("Talkowl")">Talk to the Owl</button>'
                            '<button onclick="makeChoice("examinepotions")">Examine the potions</button>';
                            
    } else if (choice === 'right') {
        storyText.textContent = 'You follow the right path and encounter a wise old owl who offers you a magical riddle.';
        choices.innerHTML = '<button onclick="resetStory()">Restart</button>';
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
