/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {

});


// Define the Characters
monogatari.characters ({
	'y': {
		name: 'Yui',
		color: '#5bcaff'
	}
});

monogatari.storage({
    leftChoices: 0 // Variable pour suivre le nombre de fois qu'on va à gauche
});

// Définition du script principal
monogatari.script({
    'Start': [
        'Bienvenue dans cette histoire.',
        'Vous allez devoir faire un choix...',
        'jump Choix'
    ],

    'Choix': [
        {
            'Conditional': {
                'Condition': function() {
                    return this.storage().player.choixB < 3;
                },
                'True': {
                    'Choice': {
                        'Dialog': 'Que souhaitez-vous faire ?',
                        'OptionA': {
                            'Text': 'Option A',
                            'Do': 'jump SuiteHistoire'
                        },
                        'OptionB': {
                            'Text': 'Option B',
                            'Do': 'jump ChoixB'
                        }
                    }
                },
                'False': {
                    'Choice': {
                        'Dialog': 'Que souhaitez-vous faire ?',
                        'OptionA': {
                            'Text': 'Option A',
                            'Do': 'jump SuiteHistoire'
                        }
                    }
                }
            }
        }
    ],

    'ChoixB': [
        {
            'Conditional': {
                'Condition': function() {
                    const choixB = this.storage().player.choixB;
                    if (choixB === 0) {
                        return true;
                    }
                    return false;
                },
                'True': 'Premier essai avec l\'option B... Retournons au choix.',
                'False': {
                    'Conditional': {
                        'Condition': function() {
                            const choixB = this.storage().player.choixB;
                            if (choixB === 1) {
                                return true;
                            }
                            return false;
                        },
                        'True': 'Deuxième essai avec l\'option B... Retournons au choix.',
                        'False': 'Troisième essai avec l\'option B... C\'était la dernière fois.'
                    }
                }
            }
        },
        {
            'Function': {
                'Apply': function() {
                    this.storage().player.choixB += 1;
                    return true;
                },
                'Reverse': function() {
                    this.storage().player.choixB -= 1;
                    return true;
                }
            }
        },
        'jump Choix'
    ],

    'SuiteHistoire': [
        'Vous avez choisi l\'option A !',
        'L\'histoire continue...',
        'Fin de la démonstration.',
        'end'
    ]
});







