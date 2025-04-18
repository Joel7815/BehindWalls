monogatari.script({
    'DebutJour3': [
        {
            'Choice': {
                'Dialog': '',
                'CommencerJour3': {
                    'Text': 'Commencer le jour 3',
                    'Do': 'jump Jour3_Introduction'
                }
            }
        }
    ],
    
    'Jour3_Introduction': [
        'show scene hopital',
        '<p>Ce matin-là, Genève est enveloppée d\'une brume épaisse qui rend les bâtiments flous et presque irréels. En franchissant les portes de l\'hôpital psychiatrique de Bel-Air, tu reconnais cette odeur si particulière de désinfectant, de café froid et de cigarette. C\'est un parfum qui commence à devenir familier pour toi.</p>',
        '<p>Comme à ton habitude, tu te diriges vers le bureau des infirmiers pour consulter le planning. Christine t\'accueille avec un sourire.</p>',
        'Christine: "Salut Ava, bien dormi ? Comment ça va aujourd\'hui?"',
        'show scene BureauInfirmiers',
        {
            'Choice': {
                'Dialog': '',
                'BienDormi': {
                    'Text': 'Oui, je me sens prête pour cette nouvelle journée.',
                    'Do': 'jump ReactionChristine_Bien'
                },
                'MalDormi': {
                    'Text': 'J\'ai eu du mal à dormir, j\'ai beaucoup pensé à Anna et à la lettre.',
                    'Do': 'jump ReactionChristine_Mal'
                },
                'Epuisee': {
                    'Text': 'Non, je suis épuisée. Ce travail me pèse.',
                    'Do': 'jump ReactionChristine_Epuisee'
                }
            }
        }
    ],
    
    'ReactionChristine_Bien': [
        'Christine: "C\'est super ! N\'oublie pas que tu n\'es pas seule, je suis toujours là."',
        'jump VersChambreAnna'
    ],
    
    'ReactionChristine_Mal': [
        'Christine: "C\'est compréhensible. Anna est une patiente particulière, mais tu fais du bon travail. Pour ce qui est de la lettre, on aura l\'occasion d\'en reparler, ne te fais pas de soucis."',
        'jump VersChambreAnna'
    ],
    
    'ReactionChristine_Epuisee': [
        'Christine: "Je comprends, mais il ne faut pas te laisser abattre. On a besoin de gens comme toi ici."',
        'jump VersChambreAnna'
    ],
    
    'VersChambreAnna': [
        '<p>Tu sors du bureau des infirmiers et commences ce qui devient maintenant une habitude. Les longs couloirs défilent sans que tu y fasses attention. Tu es déjà devant la chambre n°11.</p>',
        'jump InteractionAvecAnnaJour3'
    ],
    
    'InteractionAvecAnnaJour3': [
        {
            'Choice': {
                'Dialog': '',
                'ToquerEtEntrer': {
                    'Text': 'Toquer et entrer',
                    'Do': 'jump AnnaChambretJour3'
                }
            }
        }
    ],
    
    'AnnaChambretJour3': [
        'show scene chambreAnna',
        '<p>Anna est assise sur son lit, fixant la fenêtre. Le silence dans la chambre est lourd, seulement interrompu par le bruit lointain des pas dans le couloir et quelques claquements de portes.</p>',
        {
            'Choice': {
                'Dialog': '',
                'DiscuterAvecAnna': {
                    'Text': 'Essayer de discuter avec Anna',
                    'Do': 'jump DiscussionAvecAnna'
                },
                'RangerChambre': {
                    'Text': 'Mettre de l\'ordre dans la chambre',
                    'Do': 'jump RangerChambreAnna'
                },
                'SAsseoirACote': {
                    'Text': 'S\'asseoir à côté d\'elle',
                    'Do': 'jump SAsseoirACoteAnna'
                }
            }
        }
    ],
    
    'DiscussionAvecAnna': [
        '"Anna, je voulais juste te dire que je suis là pour toi. Peut-être qu\'un jour tu te sentiras prête à parler."',
        '<p>Anna lève les yeux, hésitante, puis murmure :</p>',
        'Anna: "Je luttais pour un monde meilleur, contre le nucléaire... Ils m\'ont enfermée ici, je suis triste."',
        {
            'Choice': {
                'Dialog': '',
                'ComprendreAnna': {
                    'Text': 'Je comprends que tu sois triste. Tu veux en parler un peu avec moi ?',
                    'Do': 'jump AnnaFatiguee'
                }
            }
        }
    ],
    
    'AnnaFatiguee': [
        'Anna: "Je veux plus parler, je suis fatiguée."',
        '"D\'accord Anna, merci pour ce petit moment de partage"',
        '<p>Anna esquisse un léger sourire puis s\'allonge à nouveau dans son lit.</p>',
        'jump DiscussionPauseMidi'
    ],
    
    'RangerChambreAnna': [
        '"Je vais juste mettre un peu d\'ordre ici, ça te fera du bien d\'avoir une chambre propre."',
        '<p>Tu commences à ranger la chambre.</p>',
        '<p>Anna se recroqueville légèrement.</p>',
        'jump DiscussionPauseMidi'
    ],
    
    'SAsseoirACoteAnna': [
        '<p>Tu t\'assieds à côté d\'elle. Tu sens à nouveau la froideur de la chambre à travers ta blouse. Anna jette un coup d\'œil vers toi, intriguée par ton silence.</p>',
        'jump DiscussionPauseMidi'
    ],
    
    'DiscussionPauseMidi': [
        '<p>C\'est tellement difficile d\'interagir avec Anna. Tu ne sais jamais si tu fais le bon choix. Tu fais de ton mieux et tu espères que ça sera suffisant.</p>',
        'show scene parc',
        '<p>C\'est la pause de midi, ton estomac gargouille et tu es bien contente d\'aller chercher ton repas à la cafétéria. Tu croises Christine sur le chemin.</p>',
        'Christine: "Hey Ava ! Rejoins-moi dans le parc quand tu auras fini de manger, j\'ai besoin de te parler."',
        '<p>Tu acquiesces et sitôt ton repas terminé, tu te mets en route pour le parc. Christine est posée dans un coin tranquille. Tu reconnais Amina de loin.</p>',
        '<p>À ton approche, elles sourient les deux.</p>',
        'Amina: "Coucou Ava, c\'est chouette de te revoir ! Il paraît que tu as reçu une lettre des femmes du MLF. Est-ce que tu as pu y réfléchir ? Ton aide nous serait précieuse."',
        {
            'Choice': {
                'Dialog': '',
                'AccepterAider': {
                    'Text': 'Oui, j\'y ai beaucoup pensé cette nuit, je suis prête à aider Anna.',
                    'Do': 'jump ReactionAmina_Accepte'
                },
                'Hesiter': {
                    'Text': 'J\'y ai pensé, mais je ne sais pas. Je suis nouvelle ici et je n\'aimerai pas que ça me cause des problèmes pour mon stage.',
                    'Do': 'jump ReactionAmina_Hesite'
                },
                'Refuser': {
                    'Text': 'Désolé, mais je ne crois pas que je vais pouvoir vous aider. Je ne veux pas prendre de risque.',
                    'Do': 'jump ReactionAmina_Refuse'
                }
            }
        }
    ],
    
    'ReactionAmina_Accepte': [
        'Amina: "Super, c\'est exactement ce que j\'espérais entendre. Nous avons une réunion ce soir, je veux que tu viennes."',
        'jump ReflexionPourAider'
    ],
    
    'ReactionAmina_Hesite': [
        'Amina: "Je comprends. Prends le temps d\'y réfléchir. Nous avons une réunion ce soir, si tu changes d\'avis."',
        'jump ReflexionPourAider'
    ],
    
    'ReactionAmina_Refuse': [
        'Amina: "Je comprends, c\'est un choix difficile. Mais sache que l\'offre reste ouverte si tu changes d\'avis."',
        'jump ReflexionPourAider'
    ],
    
    'ReflexionPourAider': [
        '<p>Qu\'est-ce que tu vas devoir faire pour l\'aider ? Cette question tourne en boucle dans ta tête. Tu espères que tu en seras capable le moment venu.</p>',
        'jump DeuxiemeInterractionAvecAnnaJour3'
    ],
    
    'DeuxiemeInterractionAvecAnnaJour3': [
        '<p>La journée arrive bientôt à sa fin. Tu te dis qu\'aller voir Anna avant de repartir serait une bonne idée. Ces longs couloirs qui étaient pour toi un labyrinthe te semblent déjà si familiers aujourd\'hui. Tu marches sans réfléchir et tu te retrouves devant la chambre n°11.</p>',
        {
            'Choice': {
                'Dialog': '',
                'ToquerEtEntrerFin': {
                    'Text': 'Toquer et entrer',
                    'Do': 'jump AnnaDeuxiemeRencontre'
                }
            }
        }
    ],
    
    'AnnaDeuxiemeRencontre': [
        'show scene chambreAnna',
        '<p>Comme à son habitude, Anna regarde le mur fixement. Cependant, lorsqu\'elle te voit elle esquisse un micro sourire. C\'est la première fois, ça te fait chaud au cœur.</p>',
        {
            'Choice': {
                'Dialog': '',
                'DiscuterAvecAnnaFin': {
                    'Text': 'Essayer de discuter avec Anna',
                    'Do': 'jump DiscussionFinaleAvecAnna'
                },
                'RangerChambreFin': {
                    'Text': 'Mettre de l\'ordre dans la chambre',
                    'Do': 'jump RangerChambreFin'
                },
                'SAsseoirACoteFin': {
                    'Text': 'S\'asseoir à côté d\'elle',
                    'Do': 'jump SAsseoirACoteFin'
                }
            }
        }
    ],
    
    'DiscussionFinaleAvecAnna': [
        '"Anna, je voulais juste te dire que je suis là pour toi. Si tu as envie de parler, je suis là pour t\'écouter."',
        '<p>Anna lève les yeux, hésitante, puis murmure :</p>',
        'Anna: "Je me sens seule et triste. Je comprends pas pourquoi je suis enfermée ici. J\'ai envie de partir..."',
        {
            'Choice': {
                'Dialog': '',
                'EvoquerDepart': {
                    'Text': 'Tu as envie de partir ? Peut-être que ton souhait va pouvoir se réaliser. Je reviendrai t\'en parler demain.',
                    'Do': 'jump AnnaFinJournee'
                }
            }
        }
    ],
    
    'AnnaFinJournee': [
        '<p>Anna esquisse un autre sourire, te remercie, puis s\'allonge dans son lit.</p>',
        'jump FinJournee'
    ],
    
    'RangerChambreFin': [
        '"Je vais juste mettre un peu d\'ordre ici, ça te fera du bien d\'avoir une chambre propre."',
        '<p>Tu commences à ranger la chambre.</p>',
        '<p>Anna se recroqueville légèrement.</p>',
        'jump FinJournee'
    ],
    
    'SAsseoirACoteFin': [
        '<p>Tu t\'assieds à côté d\'elle. Tu sens la froideur de la chambre à travers ta blouse. Tu ne sais pas quoi dire pour l\'aider. Anna jette un coup d\'œil furtif vers toi, puis se remet à fixer le mur en silence.</p>',
        'jump FinJournee'
    ],
    
    'FinJournee': [
        '<p>Tu ressors de la chambre d\'Anna. C\'est la fin de la journée. Tu passes en vitesse faire ton admin aux bureaux des infirmiers, puis te diriges vers le lieu de rendez-vous.</p>',
        'jump RendezVousMLF'
    ],
    
    'RendezVousMLF': [
        'show scene cafe',
        '<p>Le lieu de rendez-vous est le café Papillon dans le quartier des Grottes. Tu marches avec Christine à tes côtés.</p>',
        'Christine: "C\'est un lieu que nous occupons depuis peu. Nous y faisons souvent des réunions. Tu verras les femmes qui viennent à nos réunions sont bienveillantes."',
        {
            'Choice': {
                'Dialog': '',
                'EntrerCafe': {
                    'Text': 'Entrer dans le café',
                    'Do': 'jump EntrerCafe'
                }
            }
        }
    ],
    
    'EntrerCafe': [
        '<p>Quand tu entres, tu vois une épaisse fumée de cigarette. Beaucoup de discussions résonnent dans ce petit café. Tu remarques que les discussions cessent légèrement lorsque les femmes te voient entrer. Une grande femme avec des lunettes et des cheveux courts demandent le silence en disant que la réunion au sujet de l\'affaire Anna va commencer.</p>',
        '"Bonjour à toutes, aujourd\'hui c\'est une affaire du groupe antipsychiatrie qui est à l\'ordre du jour. Pour rappel, il s\'agit du cas Anna B. que vous avez toutes pu voir dans les journaux. Nous avons fait des manifestations, nous avons utilisé un avocat, mais rien ne change. Anna est toujours prisonnière. Comme convenu lors de notre dernière AG, nous allons employer des moyens de luttes plus radicaux. L\'idée est de libérer Anna. Grâce à des femmes qui travaillent dans l\'hôpital, nous avons les moyens de lui faire parvenir une clé. Une fois échappée, nous avons un groupe de femmes prêtes à l\'accueillir dans un lieu de vie communautaire dans la campagne genevoise."',
        '<p>Si tôt sa phrase terminée, un tonnerre d\'applaudissement s\'abat dans le petit café. Les conversations reprennent alors de plus belle dans un brouhaha général. C\'est là que tu vois la grande femme à lunettes et cheveux courts se diriger vers toi.</p>',
        '"Bonjour Ava, je suis heureuse de te rencontrer. Amina et Christine m\'ont beaucoup parlé de toi. Je sais que ce n\'est pas facile de s\'engager dans un processus de lutte et de résistance, mais nous avons besoin de toi. Es-tu prête à nous aider ?"',
        {
            'Choice': {
                'Dialog': '',
                'AiderAnna': {
                    'Text': 'Oui, je veux aider Anna.',
                    'Do': 'jump AiderAnna'
                },
                'ReflexionAide': {
                    'Text': 'Je dois encore y réfléchir.',
                    'Do': 'jump ReflexionAide'
                },
                'RefuserAide': {
                    'Text': 'Je ne crois pas que je peux vous aider. J\'ai trop peur d\'avoir des ennuis ou de perdre ma place de stage...',
                    'Do': 'jump RefuserAide'
                }
            }
        }
    ],
    
    'AiderAnna': [
        '"Parfait, je suis contente de pouvoir compter sur toi. Demain, Christine te fera le topo de ce que nous allons faire pour la libérer."',
        'jump FinReunion'
    ],
    
    'ReflexionAide': [
        '"Prends ton temps. Nous comprenons que c\'est une décision difficile. Mais souviens-toi, Anna a besoin de nous."',
        'jump FinReunion'
    ],
    
    'RefuserAide': [
        '"C\'est dommage, mais nous respectons ton choix. Si tu changes d\'avis, tu sais où nous trouver."',
        'jump FinReunion'
    ],
    
    'FinReunion': [
        '<p>La réunion touche à sa fin, mais tu restes encore un temps à discuter, boire des bières et fumer avec les femmes du MLF. C\'est un sentiment étrange d\'être seulement entre femmes. Ça te fait du bien. À un instant, tu remarques à travers une fenêtre que la lune commence à éclairer la ville. Il est l\'heure de rentrer. Tu prends le bus en direction de ton petit studio. Tes yeux se ferment aussi tôt que tu t\'es allongée dans le lit. Lorsque ton réveil sonne, tu as l\'impression que 15 minutes seulement se sont écoulées. Tu prends un café puis te diriges vers Bel-Air.</p>',
        'jump DebutJour4'
    ]
}); 