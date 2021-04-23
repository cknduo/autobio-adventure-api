const scenes = require('./scenes')

scenes.createScene('intro',
`You are standing in the middle of a sand-filled river islet. The riverbanks, though far away, are surprisingly visible under the ghostly full moon and star splattered sky. A streak of bright golden light shoot across the sky, explodes into three closely flashing beams that touched the distant ground all at once with a shattering boom. Delighted at the prospect of finding the remnants of this meteor impact, you follow its direction. You reach the edge of the river islet. What do you do?`,
[
    {   
        description: 'You are an excellent swimmer. You decide to swim to shore.',
        optionName: 'can-swim'
    },
    { 
        description: 'You do not know how to swim. You are scared and start to cry like a little girl.',
        optionName: 'cannot-swim' }
])

scenes.createScene('can-swim',
`You get caught in a deadly current. You take your last breath as you fail to stay afloat, giving yourself to the darkness of the water below. The current carries your body for miles downstream, finally depositing you to rest on the continental shelf.`,
[
    {   
        description: 'Restart Game',
        optionName: 'intro'
    },
    { 
        description: 'Quit',
        optionName: 'portfolio-textgame' }
])

scenes.createScene('cannot-swim',
`At the sound of your distress, two writhing bodies slithered out of the water and onto the islet. You should be terrified, but you are oddly curious. The patterns on their bodies glimmer under the moonlight. The pair of Burmese pythons head pass you toward the water, gesturing as if asking you to follow them. What do you do?`,
[
    {   
        description: 'You know Burmese pythons are gentle giants. You grab onto them as they slither down into the water.',
        optionName: 'follow-pythons'
    },
    { 
        description: 'You are petrified. You retreat to the middle of the islet, hoping nothing else appears from the water.',
        optionName: 'stay-on-islet' }
])

scenes.createScene('stay-on-islet',
`You settle down on the sand under the bright full moon, waiting for the crack of dawn to make your next move. With the moon comes the tide. You fall asleep for the last time as the fickle tide rises to swallow you whole.`,
[
    {   
        description: 'Restart Game',
        optionName: 'intro'
    },
    { 
        description: 'Quit',
        optionName: 'portfolio-textgame' }
])

scenes.createScene('follow-pythons',
`You know this is your only chance to get off the islet before the tide comes for you. The pythons keep you afloat. You are relieved as they lead you to the mangrove riverbank. You climb onto the mangroves and wave goodbye to the twin pythons, now curling up under the nested roots for a nap, before continue heading toward the direction where the meteor landed. The climb out of the mangroves is quite disorienting. You make it to a small clearing with clusters of bamboo trees. What do you do?`,
[
    {   
        description: 'You decide to climb up between the bamboo trees to get a better view of the terrain and regain your sense of direction.',
        optionName: 'climb-bamboo'
    },
    { 
        description: 'You have terrible balance and could not climb the bamboo trees. Exhausted from fighting through the mangroves, you stick to the only clear path you could see.',
        optionName: 'no-climb' }
])

scenes.createScene('no-climb',
`It does not take long for you to reach the den of a sleeping giant blue gecko. You stare in horror at the beast as it opens its eyes to check out the puny intruder. You are dead meat.`,
[
    {   
        description: 'Restart Game',
        optionName: 'intro'
    },
    { 
        description: 'Quit',
        optionName: 'portfolio-textgame' }
])

scenes.createScene('climb-bamboo',
`From the top of the bamboos, you could see a sleeping giant blue gecko further down the only clear path. You are terrified of geckos. But before you could scope out a better path, you are distracted by a flash of lightning, and rumbling thunder follows. You look for the eye of the typhoon, and realize it is heading right toward you. You hold up your arm to shield your vision from flying organic debris. The wind is picking up at incredible speed. What do you do?`,
[
    {   
        description: 'You cannot waste this opportunity to look for a path. You hang on to the top of the trees for a few seconds longer.',
        optionName: 'stay-on-trees'
    },
    { 
        description: 'You cannot fight the wind any longer and begin climbing down immediately.',
        optionName: 'climb-down' }
])

scenes.createScene('stay-on-trees',
`You are no match for the raging monsoonal wind. It knocks you off your feet and you fall to the ground, sustaining an unrecoverable head injury.`,
[
    {   
        description: 'Restart Game',
        optionName: 'intro'
    },
    { 
        description: 'Quit',
        optionName: 'portfolio-textgame' }
])

scenes.createScene('climb-down',
`The bamboos are so slick it is hard to get a good footing. You slip half-way down and land on your left side. An excruciating pain shoot through your arm and you realize you can no longer lift it. What do you do?`,
[
    {   
        description: 'All you can focus on is the pain and you are no longer in the right mind to find a way out of this place.',
        optionName: 'give-up'
    },
    { 
        description: 'You block the pain from your mind and gather all your strength to look for shelter.',
        optionName: 'keep-pushing' }
])

scenes.createScene('give-up',
`You are in no ordinary typhoon. You cannot cling onto the trees with only one good arm. It takes no time at all for rainfall to outpace the run-offs. The entire clearing starts to flood and you become gecko breakfast by the time the storm dies down.`,
[
    {   
        description: 'Restart Game',
        optionName: 'intro'
    },
    { 
        description: 'Quit',
        optionName: 'portfolio-textgame' }
])

scenes.createScene('keep-pushing',
`As you turn your back against the wind, you can just make out a rigid shadow, far behind the swaying bamboo patch. Desperate for a shelter, you dash in that direction with the wind at your back, occasionally lifting your feet off the ground as they glide over the hardened ground amidst the bamboo peninsula. The shadow emerges as an abandoned shed. The walls and roofs all seem to be made of coconut leaves, yet the shed is not bothered by the wind. You take refuge inside. Safe from the raging typhoon, you doze off into a much-needed deep slumber.`,
[
    {   
        description: 'You are a deep sleeper. You are so exhausted anyway you sleep like a baby.',
        optionName: 'deep-sleep'
    },
    { 
        description: 'You are a light sleeper. The slightest disturbance wakes you up.',
        optionName: 'light-sleep' }
])

scenes.createScene('deep-sleep',
`You’re dead.`,
[
    {   
        description: 'Restart Game',
        optionName: 'intro'
    },
    { 
        description: 'Quit',
        optionName: 'portfolio-textgame' }
])

scenes.createScene('light-sleep',
`You are awoken by an odd feeling. You look around and groggily notice a vague pair of claws just below your feet. Lightning strikes and shines light on what is definitely an angry scorpion, and the claw-like shapes its pincers. You look around for a way to catch it and prevent it from killing you in your sleep.`,
[
    {   
        description: 'To be continued...',
        optionName: 'continue-1'
    },
    { 
        description: 'To be continued...',
        optionName: 'continue-2' }
])