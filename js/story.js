function makeChoice(choice) {
    const storyText = document.getElementById('story-text');
    const choices = document.getElementById('choices');

    if (choice === 'enter') {
        storyText.textContent = 'You step into the forest, and the trees seem to whisper secrets. A path diverges ahead. Do you follow the left path or the right path?';
        choices.innerHTML = `
            <button onclick="makeChoice('left')">Take the left path</button>
            <button onclick="makeChoice('right')">Take the right path</button>
        `;
    } else if (choice === 'leave') {
        storyText.textContent = 'You decide not to enter the forest and head back home. Perhaps another adventure awaits another day.';
        choices.innerHTML = '<button onclick="resetStory()">Restart</button>';
    } else if (choice === 'left') {
        storyText.textContent = 'You follow the left path and find a peaceful clearing with a shimmering pond. You feel a sense of tranquility.';
        choices.innerHTML = '<button onclick="resetStory()">Restart</button>';
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
