monogatari.script({
    'Jour1': [
        'show scene hopital',
        '<p>Bienvenue dans l\'hôpital psychiatrique de Bel-Air dans la Genève des années 1970. Tu es Ava, une jeune infirmière prête à débuter ton stage dans cette institution. Ta mission : apporter du réconfort et du soutien aux patientes et patients, tout en naviguant dans un environnement nouveau pour toi.</p>' +
        '<p>C\'est ton premier jour et le ciel est dégagé. C\'est le début de l\'été. Il fait beau. Tu franchis la porte principale de l\'hôpital avec une légère appréhension. Tu inspires profondément, puis te diriges vers le bureau du Docteur Tileau, le psychiatre en charge du secteur, avec qui tu as rendez-vous.</p>',
        
        {
            'Choice': {
                'Dialog': '',
                'Frapper': {
                    'Text': 'Toquer à la porte et entrer',
                    'Do': 'jump Jour1_Bureau'
                }
            }
        }
    ],

    'Jour1_Bureau': [
        'show scene tileau',
        '<p>Le bureau du Dr Tileau est froid, avec des étagères remplies de dossiers médicaux et de livres de psychiatrie. Tout est recouvert d\'une fine couche de poussière. Le Dr Tileau, un homme dans la quarantaine, aux cheveux grisonnants et aux lunettes épaisses, lève les yeux de son bureau lorsque tu rentres.</p>',
        
        'Dr Tileau : "Ah, vous devez être Ava. Bienvenue à Bel-Air. Asseyez-vous, je vous en prie."',
        
        '<p>Tu t\'assois, essayant de masquer ton appréhension.</p>',
        
        'Dr Tileau : "Vous commencez aujourd\'hui, n\'est-ce pas ? Ici, nous avons une approche scientifique, basée sur les dernières avancées de la biologie et de la neuropsychiatrie, tout cela pour le bien des malades. Vous serez assignée à plusieurs patients lors de ce stage, mais pour votre première semaine, je veux que vous vous concentriez sur une patiente uniquement, Anna B. ça vous permettra de ne pas trop vous éparpiller pour ce premier stage."',
        
        {
            'Choice': {
                'Dialog': '',
                'Question': {
                    'Text': 'Anna B. ? Que pouvez-vous me dire au sujet de cette patiente ?',
                    'Do': 'jump Jour1_AnnaB'
                }
            }
        }
    ],

    'Jour1_AnnaB': [
        'show scene tileau',
        'Dr Tileau : "Anna est une jeune femme qui a été admise il y a peu. Elle fait partie de cette génération qui pense pouvoir sauver le monde, mais qui a déjà de la peine à se sauver elle-même si vous voyez ce que je veux dire... Elle refuse de parler et de s\'alimenter depuis plusieurs jours, j\'ai décidé de la placer en isolement. Si son état ne s\'améliore pas, j\'envisage de recommander pour elle de nouvelles séances d\'électrochocs."',
        
        '<p>Quand tu entends ça, tu ne peux t\'empêcher d\'imaginer la scène de Vol au-dessus d\'un nid de coucou que tu as vu au cinéma du Grütli la semaine passée. Un frisson parcourt ta colonne vertébrale.</p>',
        
        {
            'Choice': {
                'Dialog': '',
                'Question': {
                    'Text': 'Des électrochocs ? Est-ce vraiment nécessaire ?',
                    'Do': 'jump Jour1_Electrochocs'
                }
            }
        }
    ],

    'Jour1_Electrochocs': [
        'show scene tileau',
        'Dr Tileau : "Bien sûr que c\'est nécessaire ! Les électrochocs sont utilisés pour traiter des dépressions sévères et des troubles de l\'humeur réfractaires, l\'anorexie mentale et bien d\'autres maladies mentales. C\'est souvent le dernière outil que nous avons à disposition pour traiter les malades lorsque les autres traitements sont sans effet. Vous devez comprendre que nous faisons tout ce qui est en notre pouvoir pour traiter nos malades mentaux à Bel-air. Je vous conseille de ne pas trop remettre en question les méthodes que nous employons, vous êtes ici pour apprendre."',
        
        {
            'Choice': {
                'Dialog': '',
                'Acquiescer': {
                    'Text': 'Acquiescer d\'un signe de tête et quitter le bureau',
                    'Do': 'jump Jour1_Sortie'
                }
            }
        }
    ],

    'Jour1_Sortie': [
        'show scene tileau',
        'Dr Tileau : "Bonne chance, Ava. N\'hésitez pas à venir me voir si vous avez des questions. Vous pouvez vous rendre au bureau des infirmiers pour prendre connaissance du dossier d\'Anna B. Vous verrez, il y a une bonne équipe dans ce pavillon."',
        
        '<p>En sortant du bureau, tu croises les yeux bienveillants d\'une autre infirmière.</p>',
        
        {
            'Choice': {
                'Dialog': '',
                'Parler': {
                    'Text': 'Aller lui parler',
                    'Do': 'jump DiscussionAvecChristine'
                },
                'Bureau': {
                    'Text': 'Se diriger vers le bureau des soignants',
                    'Do': 'jump BureauDesInfirmiers'
                }
            }
        }
    ],

    'DiscussionAvecChristine': [
        'show scene couloir',
        '<p>En t\'approchant de l\'infirmière, tu te prépares à te présenter.</p>',
        
        {
            'Choice': {
                'Dialog': '',
                'Presentation': {
                    'Text': 'Bonjour, je suis Ava, c\'est mon premier jour ici.',
                    'Do': 'jump DiscussionAvecChristine_Suite'
                }
            }
        }
    ],

    'DiscussionAvecChristine_Suite': [
        'show scene couloir',
        '"Salut Ava, moi c\'est Christine. Bienvenue dans notre petit enfer sur terre. Alors, comment se passe ce premier jour ?"',
        
        {
            'Choice': {
                'Dialog': '',
                'AnnaBQuestion': {
                    'Text': 'Est-ce que tu as entendu parler d\'Anna B. ? Tu sais quoi sur elle ?',
                    'Do': 'jump DiscussionAvecChristine_AnnaB'
                },
                'Electrochocs': {
                    'Text': 'Je ne savais pas qu\'on pratiquait les électrochocs à Bel-Air...',
                    'Do': 'jump DiscussionAvecChristine_Electrochocs'
                },
                'ConseilsAnna': {
                    'Text': 'Je vais devoir m\'occuper d\'Anna B. Est-ce que tu as des conseils à me donner ?',
                    'Do': 'jump DiscussionAvecChristine_Conseils'
                }
            }
        }
    ],

    'DiscussionAvecChristine_Presentation': [
        // Cette section peut être supprimée, mais je la laisse pour ne pas casser d'autres références
        'jump DiscussionAvecChristine_Suite'
    ],

    'DiscussionAvecChristine_AnnaB': [
        'show scene couloir',
        '"Oui, j\'étais là à son admission. Tu vas t\'occuper d\'elle ? C\'est une militante antinucléaire qui s\'est fait interner suite à son refus de communiquer et de se nourrir."',
        
        {
            'Choice': {
                'Dialog': '',
                'Comment': {
                    'Text': 'Comment tu sais ça ?',
                    'Do': 'jump DiscussionAvecChristine_AnnaB_Comment'
                }
            }
        }
    ],

    'DiscussionAvecChristine_AnnaB_Comment': [
        'show scene couloir',
        '"Cela ne figure pas dans son dossier patient, mais plusieurs articles ont paru dans les journaux... Son cas a déclenché une polémique. Tu sais, les patients ici ont souvent des histoires bien plus complexes que ce que laisse transparaître leurs dossiers patients."',
        
        {
            'Choice': {
                'Dialog': '',
                'Bureau': {
                    'Text': 'Se diriger vers le bureau des soignants',
                    'Do': 'jump BureauDesInfirmiers'
                }
            }
        }
    ],

    'DiscussionAvecChristine_Electrochocs': [
        'show scene couloir',
        'Christine : "Avec la question des droits des patients, c\'est un peu le sujet de la polémique qui secoue Genève ces derniers jours. Mais ici, c\'est le Dr Tileau qui décide. Nous devons suivre ses ordres, même si cela va à l\'encontre de nos convictions."',
        
        {
            'Choice': {
                'Dialog': '',
                'Convictions': {
                    'Text': 'À l\'encontre de tes convictions ?',
                    'Do': 'jump DiscussionAvecChristine_Electrochocs_Convictions'
                },
                'Obligation': {
                    'Text': 'Est-ce que nous sommes obligées d\'y participer ?',
                    'Do': 'jump DiscussionAvecChristine_Electrochocs_Obligation'
                }
            }
        }
    ],

    'DiscussionAvecChristine_Electrochocs_Convictions': [
        'show scene couloir',
        'Christine : "Je ne vais pas trop m\'étendre sur le sujet, mais oui. On aura l\'occasion d\'en reparler. Tu sais, je suis membre du mouvement de libération des femmes, le MLF. Il y a des groupes de paroles tous les jeudis. Ce sont des espaces de paroles importants qui nous permettent de discuter de nos vies de femmes."',
        
        {
            'Choice': {
                'Dialog': '',
                'Bureau': {
                    'Text': 'Se diriger vers le bureau des soignants',
                    'Do': 'jump BureauDesInfirmiers'
                }
            }
        }
    ],

    'DiscussionAvecChristine_Electrochocs_Obligation': [
        'show scene couloir',
        'Christine : "Officiellement non, mais si tu ne le fais pas à plusieurs reprises, tu commenceras à être regardée de travers par la hiérarchie. Aussi triste que ça puisse paraître, c\'est dans notre cahier des charges..."',
        
        {
            'Choice': {
                'Dialog': '',
                'Bureau': {
                    'Text': 'Se diriger vers le bureau des soignants',
                    'Do': 'jump BureauDesInfirmiers'
                }
            }
        }
    ],

    'DiscussionAvecChristine_Conseils': [
        'show scene couloir',
        'Christine : "Sois patiente et essaie de créer du lien avec elle. Peut-être qu\'elle finira par s\'ouvrir à toi."',
        
        {
            'Choice': {
                'Dialog': '',
                'NoOpen': {
                    'Text': 'Et si elle ne s\'ouvre pas à moi ?',
                    'Do': 'jump DiscussionAvecChristine_Conseils_NoOpen'
                },
                'Trust': {
                    'Text': 'Comment créer un lien de confiance ?',
                    'Do': 'jump DiscussionAvecChristine_Conseils_Trust'
                }
            }
        }
    ],

    'DiscussionAvecChristine_Conseils_NoOpen': [
        'show scene couloir',
        '"Tu peux juste être patiente. Ça ne sert à rien de la forcer. Parfois, le simple fait d\'être présente sans jugement peut faire une grande différence."',
        
        {
            'Choice': {
                'Dialog': '',
                'Bureau': {
                    'Text': 'Se diriger vers le bureau des soignants',
                    'Do': 'jump BureauDesInfirmiers'
                }
            }
        }
    ],

    'DiscussionAvecChristine_Conseils_Trust': [
        'show scene couloir',
        '"Sois patiente et évite d\'être dans le jugement. Avec la pratique ça deviendra plus facile, ne te fais pas trop de soucis pour ça. Et n\'hésite pas à lui parler, même si elle ne semble pas t\'écouter. Parfois, un sourire ou un geste de réconfort peut en dire plus que des mots."',
        
        {
            'Choice': {
                'Dialog': '',
                'Bureau': {
                    'Text': 'Se diriger vers le bureau des soignants',
                    'Do': 'jump BureauDesInfirmiers'
                }
            }
        }
    ],

    'BureauDesInfirmiers': [
        'show scene bureau_infirmiers',
        '<p>Le bureau ressemble à un aquarium au milieu de l\'hôpital. C\'est comme si tous les sons venant de l\'extérieur du bureau n\'atteignait pas le bureau. Lorsque tu entres, tu entends plusieurs infirmiers faire des blagues sexistes et parler de leurs projets pour le prochain congé. Une jeune femme se dirige vers toi.</p>',
        
        'Amina : "Bonjour, moi c\'est Amina, je ne t\'avais jamais vu ici. C\'est ton premier jour ?"',
        
        {
            'Choice': {
                'Dialog': '',
                'Introduction': {
                    'Text': 'Bonjour Amina, moi c\'est Ava. Oui c\'est mon premier jour, je viens d\'arriver pour commencer mon stage. Est-ce que tu peux me montrer où se trouvent le planning et les dossiers patients ?',
                    'Do': 'jump BureauDesInfirmiers_Suite'
                }
            }
        }
    ],
    
    'BureauDesInfirmiers_Suite': [
        'show scene bureau_infirmiers',
        'Amina : "Les plannings sont contre le mur juste ici. Pour ce qui est des dossiers patients, ils sont classés dans ce tiroir. Mmmh, je vois que tu vas devoir t\'occuper d\'Anna B. Tu te sens comment ?"',
        
        {
            'Choice': {
                'Dialog': '',
                'Inquiete': {
                    'Text': 'Un peu inquiète...',
                    'Do': 'jump BureauDesInfirmiers_Inquiete'
                },
                'Bien': {
                    'Text': 'Bien, je me réjouis de pouvoir rencontrer ma patiente.',
                    'Do': 'jump BureauDesInfirmiers_Bien'
                }
            }
        }
    ],
    
    'BureauDesInfirmiers_Inquiete': [
        'show scene bureau_infirmiers',
        '"C\'est mon premier jour, j\'ai peur de faire une bêtise ou de ne pas savoir quoi faire."',
        
        'Amina : "Tout va bien se passer, si jamais n\'hésite pas à me faire signe, je te donnerai un coup de main avec plaisir."',
        
        {
            'Choice': {
                'Dialog': '',
                'Continuer': {
                    'Text': 'Sourire et se diriger vers la chambre d\'Anna',
                    'Do': 'jump PremiereRencontreAnnaB'
                }
            }
        }
    ],
    
    'BureauDesInfirmiers_Bien': [
        'show scene bureau_infirmiers',
        '"Je n\'en ai qu\'une, ça devrait bien se passer."',
        
        'Amina: "C\'est sûr et n\'oublie pas que je suis là au besoin."',
        
        {
            'Choice': {
                'Dialog': '',
                'Continuer': {
                    'Text': 'Sourire et se diriger vers la chambre d\'Anna',
                    'Do': 'jump PremiereRencontreAnnaB'
                }
            }
        }
    ],
    
    'PremiereRencontreAnnaB': [
        'show scene chambre',
        '<p>Tu souris à Amina en sortant et te diriges maintenant vers la chambre n°11, celle d\'Anna B.</p>',
        
        '<p>Tu traverses les longs couloirs de l\'hôpital. Tu croises le regard de plusieurs patients et patientes. Certaines ont le regard vide et on l\'air fatiguées, d\'autres te regardent discrètement. Tu te contentes de leur sourire et de faire un petit signe de la main.</p>',
        '<p>Tu arrives enfin devant la chambre n°11.</p>',
        
        {
            'Choice': {
                'Dialog': '',
                'Entrer': {
                    'Text': 'Toquer et entrer',
                    'Do': 'jump PremiereRencontreAnnaB_Suite'
                }
            }
        }
    ],
    
    'PremiereRencontreAnnaB_Suite': [
        'show scene chambre',
        '<p>Anna est assise sur son lit et regarde fixement la fenêtre. Tu l\'observes quelques instants, mais ta présence ne semble provoquer aucune réaction de sa part.</p>',
        
        {
            'Choice': {
                'Dialog': '',
                'Observer': {
                    'Text': 'L\'observer un instant',
                    'Do': 'jump PremiereRencontreAnnaB_Observer'
                },
                'Verbal': {
                    'Text': 'Tenter un contact verbal',
                    'Do': 'jump PremiereRencontreAnnaB_Verbal'
                },
                'Programme': {
                    'Text': 'Lui présenter son programme de soin pour la journée',
                    'Do': 'jump PremiereRencontreAnnaB_Programme'
                }
            }
        }
    ],
    
    'PremiereRencontreAnnaB_Observer': [
        'show scene chambre',
        '<p>Elle semble tellement perdue. Tu te demandes ce qui se passe dans sa tête. Tu regardes dans son dossier et tu prends note de l\'état dans lequel tu la vois.</p>',
        
        'jump PremiereRencontreAnnaB_Infirmier'
    ],
    
    'PremiereRencontreAnnaB_Verbal': [
        'show scene chambre',
        '"Bonjour, Anna. Je m\'appelle Ava. Je suis une nouvelle infirmière ici. Comment te sens-tu aujourd\'hui ?"',
        
        '<p>Anna ne répond pas, ses yeux restent fixés dans le vide. Tu prends une voix douce et murmure presque :</p>',
        
        '"Je sais que c\'est difficile, mais je suis là pour t\'aider. Tu n\'es pas seule."',
        
        '<p>Anna pose son regard sur toi l\'espace d\'un instant, mais ne dit rien.</p>',
        
        'jump PremiereRencontreAnnaB_Infirmier'
    ],
    
    'PremiereRencontreAnnaB_Programme': [
        'show scene chambre',
        '"Bonjour, Anna. Je suis Ava, l\'infirmière. Aujourd\'hui, je vais t\'aider à prendre tes médicaments et une douche. C\'est important de se mettre en mouvement quand ça va pas."',
        
        '<p>Anna ne réagit pas immédiatement.</p>',
        
        '"Je vais t\'aider à te préparer pour la journée. Cela te fera du bien de sortir de la chambre."',
        
        '<p>Anna se recroqueville légèrement.</p>',
        
        'jump PremiereRencontreAnnaB_Infirmier'
    ],
    
    'PremiereRencontreAnnaB_Infirmier': [
        'show scene chambre',
        '<p>Un infirmier avec une moustache nietzschéenne entre alors dans la chambre sans frapper et te regarde avec un sourire en coin.</p>',
        
        '"Si elle ne réagit pas, c\'est qu\'elle n\'a pas envie d\'être aidée. Faut pas trop s\'en faire pour ces cas-là."',
        
        '<p>Puis il repart aussi vite qu\'il est entré. Qui est cet infirmier ? Tu te diriges vers le Bureau des infirmiers pour la fin de ta journée. Tu en parleras à une de tes collègues, c\'est pas normal de parler comme ça.</p>',
        
        {
            'Choice': {
                'Dialog': '',
                'Fin': {
                    'Text': 'Se rendre au bureau des infirmiers',
                    'Do': 'jump DialogueFinJourneeUne'
                }
            }
        }
    ],
    
    'DialogueFinJourneeUne': [
        'show scene bureau_infirmiers',
        '<p>Tu retournes au bureau des infirmiers, troublée par ta rencontre avec Anna et par le comportement de l\'infirmier.</p>',
        
        '<p>La lumière du soleil de fin de journée passait à travers les stores du bureau des infirmiers. Les faisceaux de lumière éclairaient la fumée de cigarette. Le bureau, habituellement animé par les allées et venues des soignants, était maintenant calme. Seuls quelques infirmiers et infirmières terminaient leurs tâches administratives journalières.</p>',
        
        '<p>Christine, assise à son bureau, écrivait dans les dossiers machinalement. Puis d\'un coup, elle leva les yeux et sourit en te voyant entrer.</p>',
        
        'Christine : "Salut Ava, tu as l\'air exténuée. Viens, assieds-toi un moment."',
        
        '<p>Tu t\'assieds à côté d\'elle.</p>',
        
        'Christine : "Comment s\'est passé ta première journée ?"',
        
        {
            'Choice': {
                'Dialog': '',
                'MoustacheComments': {
                    'Text': 'Parler des commentaires de l\'infirmier à la moustache',
                    'Do': 'jump DialogueFinJourneeUne_MoustacheComments'
                },
                'AnnaWorries': {
                    'Text': 'Partager tes inquiétudes pour Anna',
                    'Do': 'jump DialogueFinJourneeUne_AnnaWorries'
                },
                'SelfDoubts': {
                    'Text': 'Exprimer des doutes sur tes compétences',
                    'Do': 'jump DialogueFinJourneeUne_SelfDoubts'
                }
            }
        }
    ],
    
    'DialogueFinJourneeUne_MoustacheComments': [
        'show scene bureau_infirmiers',
        '"C\'était difficile. J\'ai essayé de parler avec elle et de l\'encourager, mais elle reste complètement fermée. Et puis, il y a un infirmier avec une énorme moustache qui est rentré sans toquer. Il m\'a dit que je perdais mon temps avec Anna, que les patients comme elle ne méritaient pas autant d\'attention."',
        
        'Christine : "Ça doit être Marc, il a cette manière de parler qui semble dénuée d\'empathie pour les patients."',
        
        {
            'Choice': {
                'Dialog': '',
                'WhyLikeThat': {
                    'Text': 'Pourquoi il est comme ça ?',
                    'Do': 'jump DialogueFinJourneeUne_WhyLikeThat'
                }
            }
        }
    ],
    
    'DialogueFinJourneeUne_WhyLikeThat': [
        'show scene bureau_infirmiers',
        'Christine : "Il a vu beaucoup de cas difficiles, ça fait bien dix ans qu\'il travaille ici. Mais au lieu de développer de la compassion, il a pris une distance avec ses émotions et celles des patients. Sur le court terme ça aide de ne pas s\'impliquer. Mais la conséquence sur le long terme, c\'est que ça crée un fossé avec les patientes et les patients. C\'est triste, mais ça arrive."',
        
        'jump DialogueFinJourneeUne_Ending'
    ],
    
    'DialogueFinJourneeUne_AnnaWorries': [
        'show scene bureau_infirmiers',
        '"Je m\'inquiète vraiment pour Anna. Elle est déjà tellement fragile et aujourd\'hui, un infirmier avec une énorme moustache a fait irruption dans sa chambre quand j\'y étais et a fait une remarque déplacée devant elle."',
        
        'Christine : "Ça doit être Marc, c\'est un ancien. Il est froid avec les patients. C\'est sa manière de se protéger. Mais ne laisse pas son attitude te décourager. Nous pouvons faire une différence."',
        
        'jump DialogueFinJourneeUne_Ending'
    ],
    
    'DialogueFinJourneeUne_SelfDoubts': [
        'show scene bureau_infirmiers',
        '"Je me demande si je suis vraiment faite pour ce travail. J\'ai l\'impression de ne pas être à la hauteur, surtout avec des patients comme Anna."',
        
        'Christine : "Ne te décourage pas, Ava. Personne n\'est parfait dès le premier jour. Il faut du temps pour s\'adapter et pour apprendre à connaître les patients. Anna a besoin de quelqu\'un comme toi, quelqu\'un de patient et de compréhensif. N\'oublie pas que tu peux toujours demander de l\'aide."',
        
        'jump DialogueFinJourneeUne_Ending'
    ],
    
    'DialogueFinJourneeUne_Ending': [
        'show scene bureau_infirmiers',
        '<p>Toutes ces discussions et ces interactions t\'ont épuisées. C\'est l\'heure de rentrer. Tu fais tes adieux à Christine et aux autres infirmières et infirmiers. Tu ressens un soulagement en laissant les portes de l\'hôpital se refermer derrière toi. Tu prends le bus en direction de ton petit studio. Une fois arrivée, tu ingurgites des pâtes au pesto qu\'il te restait de la veille. Tu es tellement fatiguée que tu t\'endors sur ton canapé.</p>',
        
        {
            'Choice': {
                'Dialog': '',
                'NextDay': {
                    'Text': 'Commencer la deuxième journée',
                    'Do': 'jump DebutJour2'
                }
            }
        }
    ],
}); 