const scenes = require('./scenes')

scenes.createScene('intro',
`You are standing in the middle of a sand-filled river islet. The riverbanks, though far away, are surprisingly visible under the ghostly full moon and star splattered sky. A streak of bright golden light shoot across the sky, exploded into three closely flashing beams that touched the distant ground all at once with a shattering boom. Delighted at the prospect of finding the remnants of this meteor impact, you follow its direction. You reach the edge of the river islet. What do you do?`,
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
        optionName: 'portfolio-home' }
])

scenes.createScene('cannot-swim',
`At the sound of your distress, two writhing bodies slithered out of the water and onto the islet. You should be terrified, but you are oddly curious. The patterns on their bodies glimmer under the moonlight. The pair of Burmese pythons head pass you toward the water, gesturing with their heads as if asking you to follow them. You get down on your knees, and slowly run your hands on their scaly backs. They steadily slither into the water. You tighten your grip. This is your only chance to get off the islet before the tides swallow you whole. The pythons keep you afloat. You are relieved as they take you closer to the riverbank.`,
[
    {   
        description: 'Next Move 1',
        optionName: 'next move 1'
    },
    { 
        description: 'Next Move 2',
        optionName: 'next move 2' }
])