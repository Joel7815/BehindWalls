monogatari.script({
    'DebutJour2': [
        'show scene hopital',
        '<p>L\'air est frais et une fine brise souffle sur Genève ce matin. Tu franchis à nouveau la porte principale de l\'hôpital psychiatrique de Bel-Air. Aussitôt une odeur monte à tes narines, une odeur de désinfectant, de café froid et de cigarette.</p>',
        '<p>Au bureau des infirmiers, plusieurs collègues discutent à voix basse, les mêmes blagues sexistes et les discussions sur les prochaines vacances. Le bruit des machines à écrire et la fumée des cigarettes remplissent la pièce. Christine t\'accueille avec un sourire.</p>',
        'Christine: "Salut Ava, comment tu te sens aujourd\'hui ? Prête pour une nouvelle journée ?"',
        'show scene BureauInfirmiers',
        
        {
            'Choice': {
                'Dialog': '',
                'Bien': {
                    'Text': 'Bien, merci Christine. Je suis prête à affronter la journée.',
                    'Do': 'jump DiscussionAvecChristine_Bien'
                },
                'Nerveuse': {
                    'Text': 'Je suis encore un peu nerveuse après hier...',
                    'Do': 'jump DiscussionAvecChristine_Nerveuse'
                },
                'Doutes': {
                    'Text': 'Honnêtement, je me demande si je suis faite pour ce travail.',
                    'Do': 'jump DiscussionAvecChristine_Doutes'
                }
            }
        }
    ],
    
    'DiscussionAvecChristine_Bien': [
        'Christine: "C\'est super ! N\'oublie pas que je suis là si tu as besoin de quoi que ce soit."',
        'jump DiscussionAvecChristine_Suite'
    ],
    
    'DiscussionAvecChristine_Nerveuse': [
        'Christine: "C\'est normal, le premier jour est toujours difficile. Ça ira mieux avec le temps."',
        'jump DiscussionAvecChristine_Suite'
    ],
    
    'DiscussionAvecChristine_Doutes': [
        'Christine: "Ne t\'inquiète pas, tout le monde a des doutes au début. Mais je crois en toi, tu es une bonne personne."',
        'jump DiscussionAvecChristine_Suite'
    ],
    
    'DiscussionAvecChristine_Suite': [
        '<p>Après avoir consulté le planning, tu prends ton courage à deux mains et te diriges vers la chambre d\'Anna.</p>',
        'jump DeuxiemeInterractionAvecAnna'
    ],
    
    'DeuxiemeInterractionAvecAnna': [
        '<p>Tu traverses les longs couloirs étroits jusqu\'à la chambre d\'Anna. Le silence est souvent interrompu par des bruits de portes qui se ferment ou par des murmures lointains. Tu t\'approches de la chambre d\'Anna, la n°11.</p>',
        {
            'Choice': {
                'Dialog': '',
                'ToquerEtEntrer': {
                    'Text': 'Toquer et entrer',
                    'Do': 'jump ChambreAnna'
                }
            }
        }
    ],

    'ChambreAnna': [
        '<p>Anna est assise sur son lit, regardant fixement un point sur le mur. La lumière de l\'extérieur éclaire la moitié de son visage. Anna ne semble pas t\'avoir remarquée.</p>',
        {
            'Choice': {
                'Dialog': '',
                'Discuter': {
                    'Text': 'Essayer de discuter avec Anna',
                    'Do': 'jump DiscuterAvecAnna'
                },
                'RangerChambre': {
                    'Text': 'Mettre de l\'ordre dans la chambre',
                    'Do': 'jump RangerChambre'
                },
                'SAsseoirACote': {
                    'Text': 'S\'asseoir à côté d\'elle',
                    'Do': 'jump SAsseoirACote'
                }
            }
        }
    ],

    'DiscuterAvecAnna': [
        '"Bonjour Anna, c\'est Ava. Comment te sens-tu aujourd\'hui ?"',
        '<p>Anna lève les yeux, mais ne répond pas.</p>',
        '"Je suis là pour toi. Si tu as besoin de parler ou même de rester silencieuse, je suis là."',
        'jump FinInteractionAnna'
    ],

    'RangerChambre': [
        '"Je vais juste mettre un peu d\'ordre ici, ça te fera du bien d\'avoir une chambre propre."',
        '<p>Tu commences à ranger la chambre.</p>',
        '<p>Anna se recroqueville légèrement.</p>',
        'jump FinInteractionAnna'
    ],

    'SAsseoirACote': [
        '<p>Tu t\'assieds à côté d\'elle. Tu sens la froideur de la chambre à travers ta blouse et tu remarques des traces de craie sur le mur, signes de dessins effacés. Anna jette un coup d\'œil vers toi, intriguée par ton silence.</p>',
        'jump FinInteractionAnna'
    ],

    'FinInteractionAnna': [
        '<p>Tu restes encore quelques minutes, puis tu te lèves doucement pour quitter la chambre. Tu décides ensuite d\'aller prendre un petit instant de pause dans le parc près de la cafétéria.</p>',
        'jump DiscussionMarc2'
    ],
    
    'DiscussionMarc2': [
        '<p>L\'air frais caresse les parties de ton corps qui ne sont pas recouvertes. Cette fraîcheur te fait un grand bien. Tu te prends un cappuccino, t\'assieds à l\'extérieur et sorts une cigarette. La fumée et l\'odeur du café t\'apaisent. Un court instant s\'écoule, puis Marc approche et s\'assied en face de toi.</p>',
        'Marc: "Alors, comment ça se passe avec la nouvelle ?"',
        {
            'Choice': {
                'Dialog': '',
                'Bien': {
                    'Text': 'Dire que tout se passe bien et qu\'elle s\'adapte.',
                    'Do': 'jump DiscussionMarc_Bien'
                },
                'Difficultes': {
                    'Text': 'Mentionner les difficultés et demander des conseils.',
                    'Do': 'jump DiscussionMarc_Difficultes'
                },
                'Doutes': {
                    'Text': 'Exprimer tes doutes et frustrations ouvertement.',
                    'Do': 'jump DiscussionMarc_Doutes'
                }
            }
        }
    ],
    
    'DiscussionMarc_Bien': [
        '"Ça se passe bien, merci. J\'essaie de m\'adapter."',
        'Marc: "Content de l\'entendre. C\'est un travail difficile et ingrat, mais faut bien que quelqu\'un le fasse."',
        'jump ReactionMarc'
    ],
    
    'DiscussionMarc_Difficultes': [
        '"C\'est pas facile... Tu as des conseils pour mieux gérer la situation ?"',
        'Marc: "C\'est normal de trouver ça difficile au début. Et tu sais, en tant qu\'infirmier on a pas beaucoup de pouvoir. Le seul qu\'on a, c\'est celui que nous délègue les psychiatres. Essaie de pas trop prendre les choses à cœur et ça se passera bien pour toi."',
        'jump ReactionMarc'
    ],
    
    'DiscussionMarc_Doutes': [
        '"Honnêtement, je me demande si je suis faite pour ce travail. C\'est très dur."',
        'Marc: "Si tu trouves ça trop dur, tu devrais envisager un autre travail. C\'est dur pour une femme, il faut parfois une force mentale d\'homme pour supporter ce travail."',
        'jump ReactionMarc'
    ],
    
    'ReactionMarc': [
        '<p>Tu ne sais pas trop quoi penser de Marc. Il n\'a pas l\'air vraiment méchant, mais quelque chose cloche avec sa façon de penser et tu n\'arrives pas à mettre les mots dessus.</p>',
        'jump ReceptionLettreMLF'
    ],
    
    'ReceptionLettreMLF': [
        '<p>Alors que la journée touche à sa fin, tu te diriges vers ton casier. À l\'intérieur, parmi les affaires habituelles, tu trouves une enveloppe glissée discrètement. Le papier est de bonne qualité, et l\'adresse est écrite à la main. Tu ouvres la lettre et lis attentivement les mots dactylographiés :</p>',
        '<p>"Chère Ava, nous avons entendu parler de ta compassion et de ton désir d\'aider Anna. Si tu es intéressée par les droits des personnes psychiatrisées et contre le pouvoir totalitaire des psychiatres, nous serions ravis de te rencontrer. – Des femmes du MLF"</p>',
        '<p>Le cœur battant, tu te demandes ce que cela pourrait signifier pour toi et pour Anna. Avant de te diriger au bureau des infirmiers, tu décides de repasser voir Anna.</p>',
        {
            'Choice': {
                'Dialog': '',
                'ToquerEtEntrer': {
                    'Text': 'Toquer et entrer',
                    'Do': 'jump RetourChambreAnna'
                }
            }
        }
    ],
    
    'RetourChambreAnna': [
        '<p>Elle est toujours assise sur son lit, l\'air plus fatiguée que ce matin.</p>',
        {
            'Choice': {
                'Dialog': '',
                'DiscuterAnna2': {
                    'Text': 'Essayer de discuter à nouveau avec Anna',
                    'Do': 'jump DiscuterAnna2'
                },
                'ProposerLivre': {
                    'Text': 'Proposer un livre à Anna',
                    'Do': 'jump ProposerLivre'
                },
                'QuitterChambre': {
                    'Text': 'Quitter la chambre',
                    'Do': 'jump QuitterChambre'
                }
            }
        }
    ],
    
    'DiscuterAnna2': [
        '"Anna, je voulais juste te dire que je suis là pour toi. Peut-être qu\'un jour, tu te sentiras prête à parler."',
        '<p>Anna jette un regard vers toi, puis se remet à fixer le mur.</p>',
        'jump BureauDesInfirmiers2'
    ],
    
    'ProposerLivre': [
        '"Je t\'ai apporté ce livre, je l\'ai trouvé à la bibliothèque de l\'hôpital. C\'est "l\'étranger" de Camus. Peut-être que ça pourrait t\'aider à passer le temps."',
        '<p>Anna regarde le livre, mais ne réagit pas.</p>',
        'jump BureauDesInfirmiers2'
    ],
    
    'QuitterChambre': [
        '<p>Tu quittes la chambre, un mélange de frustration et de tristesse envahit ton esprit.</p>',
        'jump BureauDesInfirmiers2'
    ],
    
    'BureauDesInfirmiers2': [
        '<p>Après cette interaction avec Anna, tu te décides à aller au bureau des infirmiers pour faire l\'administratif de ta fin de journée.</p>',
        '<p>Le bureau des infirmiers est maintenant presque vide, les derniers employés terminant leurs tâches administratives. Christine est assise à son bureau, le regard pensif.</p>',
        {
            'Choice': {
                'Dialog': '',
                'ParlerLettre': {
                    'Text': 'Aller lui parler de la lettre du MLF',
                    'Do': 'jump DiscussionMLF'
                }
            }
        }
    ],
    
    'DiscussionMLF': [
        '"Christine, j\'ai reçu cette lettre du MLF. Qu\'est-ce que tu en penses ?"',
        'Christine: "Ça alors, je ne dois pas être la seule membre qui travaille ici. Au regard des risques qu\'elles ont pris pour te contacter et de l\'aide qu\'elle pourrait apporter, je te conseille d\'aller à leurs rencontres. Je pourrai certainement la faciliter."',
        {
            'Choice': {
                'Dialog': '',
                'AccepterContactMLF': {
                    'Text': 'Entrer en contact avec le MLF.',
                    'Do': 'jump AccepterContactMLF'
                },
                'HesiterContactMLF': {
                    'Text': 'Tu hésites et demandes plus de temps pour réfléchir.',
                    'Do': 'jump HesiterContactMLF'
                },
                'RefuserContactMLF': {
                    'Text': 'Décider de ne pas les contacter.',
                    'Do': 'jump RefuserContactMLF'
                }
            }
        }
    ],
    
    'AccepterContactMLF': [
        '"D\'accord, c\'est une bonne idée. Merci pour ton aide, Christine."',
        'jump FinJour2'
    ],
    
    'HesiterContactMLF': [
        '"Je vais y réfléchir encore un peu. C\'est une grande décision."',
        'jump FinJour2'
    ],
    
    'RefuserContactMLF': [
        '"Je ne suis pas sûre que c\'est pour moi. Merci quand même, Christine."',
        'jump FinJour2'
    ],
    
    'FinJour2': [
        '<p>Tu quittes l\'hôpital, le ciel commençant à s\'assombrir. Le trajet en bus te semble plus long que d\'habitude, chaque minute te ramenant à la lettre que tu as reçue et aux choix que tu devras faire. De retour chez toi, tu manges rapidement quelque chose et te couches, espérant que le sommeil te porte conseil.</p>',
        'jump DebutJour3'
    ]
}); 