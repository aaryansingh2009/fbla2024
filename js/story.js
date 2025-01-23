// Enchanted Forest Story 
function makeChoice(choice) {
    const storyText = document.getElementById('story-text');
    const choices = document.getElementById('choices');
    const headingblue = document.getElementById('headingblue');

    // BEGIN THE ENCHANTED STORY SCENE
    if (choice === 'begin') {
        storyText.textContent = 'Enchanted Forest Adventure: You find yourself at the edge of an enchanted forest. The tall, ancient trees are adorned with luminescent flowers, their petals glowing in shades of blue and purple. A gentle breeze carries the scent of jasmine and a faint humming sound, like a distant melody. You feel a mixture of fear and excitement coursing through your veins.';
        headingblue.textContent = 'Discover the magic, mystery, and friendship within the enchanted woods.';
        choices.innerHTML = `<button onclick="makeChoice('enter')">Enter the forest</button>
                            <button onclick="makeChoice('turnbackhome')">Turn back and go Home</button>
                            <button onclick="resetStory()">STOP</button>`; // entering the forest  and  turn back and go home
    // ENTERING THE FOREST
    } else if (choice === 'enter') {
        storyText.textContent = 'As you step into the forest, the sound grows louder-a harmonious tune mixed with the rustling leaves. Sunlight filters through the canopy, creating a kaleidoscope of light on the forest floor. You spot a peculiar tree with a door carved into its trunk.';
        choices.innerHTML = `<button onclick="makeChoice('investigate')">Investigate the sound</button>
                            <button onclick="makeChoice('explore')">Explore the tree</button>
                            <button onclick="resetStory()">STOP</button>`; //A1  A2
    // A1 Options Return
    } else if (choice === 'investigate') {
        storyText.textContent = 'You follow the enchanting melody to a clearing where a small, shimmering creature is trapped in a web of sparkling vines. It resembles a tiny fairy with iridescent wings, and it gazes at you with wide, pleading eyes.';
        choices.innerHTML = `<button onclick="makeChoice('help')">Help the creature</button>
                            <button onclick="makeChoice('run')">Run away</button>
                            <button onclick="resetStory()">STOP</button>`; // A1a  A1b

    // A2 Options Return                   
    } else if (choice === 'explore') {
        storyText.textContent = 'You push open the small door, and it creaks as it reveals a cozy room filled with strange potions, scrolls, and a glowing crystal ball. A wise old owl, perched on a shelf, looks at you curiously.';
        choices.innerHTML = `<button onclick="makeChoice('talkowl')">Talk to the Owl</button>
                            <button onclick="makeChoice('examinepotions')">Examine the potions</button>
                            <button onclick="resetStory()">STOP</button>`; // A2a  A2b
    // A1a Options Return                        
    } else if (choice === 'help') {
        storyText.textContent = 'The fairy, now free, flutters around you in delight. "Thank you, brave traveler! I am Lirael, guardian of this forest. As a reward, I will grant you a wish!"';
        choices.innerHTML = `<button onclick="makeChoice('wishsecrets')">Wish for knowledge of the forests secrets</button>
                            <button onclick="makeChoice('wishanimals')">Wish for the ability to communicate with animals</button>
                            <button onclick="resetStory()">STOP</button>`; // A1a1  A1a2

    // A1b Options Return                        
    } else if (choice === 'run') {
        storyText.textContent = 'You dash through the trees, your heart pounding. The sounds of the forest turn into a chaotic symphony. You stumble and fall, and when you look up, you see the fairy looking down at you, disappointment in her eyes.';
        choices.innerHTML = `<button onclick="makeChoice('apologize')">Apologize and explain your fear</button>
                            <button onclick="makeChoice('keeprunning')">Keep running</button>
                            <button onclick="resetStory()">STOP</button>`; // A1b1  A1b2

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
    

    // TURN BACK AND GO HOME

    } else if (choice === 'turnbackhome') {
        storyText.textContent = 'As you walk away from the forest, you feel a sense of relief. However, you cant shake the feeling that you might have missed something wonderful. You get home and pour yourself a cup of tea, gazing out the window towards the woods.';
        choices.innerHTML = `<button onclick="makeChoice('returntmmr')">Decide to return tomorrow</button>
                            <button onclick="makeChoice('diffpathnear')">Take a different path nearby</button>
                            <button onclick="resetStory()">STOP</button>`; // B1  B2
    
    // B1 Return Options                        
    } else if (choice === 'returntmmr') {
        storyText.textContent = 'You wake up early, filled with determination. You gather supplies-a journal, some food, and a small map. Today, you will discover the forests secrets.';
        choices.innerHTML = `<button onclick="makeChoice('samepath')">Take the same path as before</button>
                            <button onclick="makeChoice('diffpath')">Try a different path</button>
                            <button onclick="resetStory()">STOP</button>`; // B1a  B1b

    // B2 Return Options                        
    } else if (choice === 'diffpathnear') {
        storyText.textContent = 'You wander down a different trail, lined with wildflowers and buzzing bees. Suddenly, you hear laughter and follow it, leading you to a small gathering of forest sprites dancing in a sunbeam.';
        choices.innerHTML = `<button onclick="makeChoice('joindance')">Join the dance</button>
                            <button onclick="makeChoice('watchedge')">Watch quietly from the edge</button>
                            <button onclick="resetStory()">STOP</button>`; // B2a  B2b
    
    // B1 END
    }  else if (choice === 'samepath' || choice === 'diffpath') {
        storyText.textContent = 'As you flee, the forest envelops you in a maze of illusions. You eventually find your way back, but you carry the lesson of bravery in your heart. The experience ignites your curiosity, leading you to return and face your fears with newfound courage.';
        choices.innerHTML = `<button onclick="resetStory()">Restart</button>`;

    // B2 END
    }  else if (choice === 'joindance' || choice === 'watchedge') {
        storyText.textContent = 'Following the new path leads you to a charming village where you form lasting friendships. The villagers share their own tales of the forest, inspiring you to become a storyteller. You spend your days weaving enchanting tales, keeping the spirit of adventure alive in the hearts of others.';
        choices.innerHTML = `<button onclick="resetStory()">Restart</button>`;
    } 
}
function resetStory() {
    const storyText = document.getElementById('story-text');
    const choices = document.getElementById('choices');
    const headingblue = document.getElementById('headingblue');

    storyText.innerHTML = '• You will be given a scenerio and read thoroughly <br> • There will be 2 choices each taking you to a different path <br> • Choose one of the choices <br> • Feel free to stop by clicking the "STOP" button';
    headingblue.textContent = 'Instructions for the Interactive Story';
    choices.innerHTML = `
                        <button onclick="makeChoice('begin')">Click to Get Started</button>`;
}
