monogatari.script({
    'Start': [
        'show scene intro',
        'play music hopital',
        '<i>Cette fiction interactive est le prototype d\'un jeu qui sera développé dans le cadre de mon mémoire de Master à l\'Université de Lausanne. L\'objectif est de traiter de la question de la santé mentale dans une dimension historique. Pour ce faire, la personne qui joue va incarner une infirmière dans un hôpital psychiatrique dans les années 1970 en Suisse. Les discussions avec les patients sont inspirées de plusieurs sources. Une chose importante à préciser est que ce travail, bien que souhaitant être le plus objectif possible, reste subjectif. Néanmoins, j\'ai l\'intention de transmettre une impression du vécu, bien réel, d\'usagers et d\'usagères de la psychiatrie dans cette période.Les années 1970 sont marquées par l\'évolution des pratiques et de la conception de la "maladie mentale". Cette évolution ne s\'est pas fait de manière uniforme. Plutôt que de me concentrer sur les établissements d\'avant-garde, pour la majeure partie influencés par les idées de la psychothérapie institutionnelle, de l\'antipsychiatrie et du mouvement désaliéniste, je vais me concentrer sur les témoignages liés aux "vieux services" ou influencés fortement par les idées de ces derniers. L\'évolution de la psychiatrie genevoise ne s\'est pas faite uniformément et des secteurs différents ont cohabité au sein du même hôpital. Les vieux services sont marqués par la hiérarchie verticale et la conception biologique et individuelle de la folie. Le ou la patiente se trouve tout en bas de la hiérarchie du pouvoir, à l\'opposé se trouve les médecins psychiatres et le directeur ou la directrice de l\'hôpital.</i>',
        'stop music hopital with fade 2',
        'jump MenuChoix'
    ],
    
    'MenuChoix': [
        {
            'Choice': {
                'Dialog': 'Que souhaitez-vous faire ?',
                'Commencer': {
                    'Text': 'Commencer l\'histoire',
                    'Do': 'jump Jour1'
                },
                'Jour2': {
                    'Text': 'Aller au jour 2',
                    'Do': 'jump DebutJour2'
                },
                'Jour3': {
                    'Text': 'Aller au jour 3',
                    'Do': 'jump DebutJour3'
                },
                'Biblio': {
                    'Text': 'Voir la bibliographie',
                    'Do': 'jump Bibliographie'
                },
                'Affiche': {
                    'Text': 'Voir une affiche militante',
                    'Do': 'jump AfficheMilitante'
                },
                'Archive': {
                    'Text': 'Écouter une archive audio',
                    'Do': 'jump ArchiveAudio'
                }
            }
        }
    ],
    
    'AfficheMilitante': [
        'show image afficheMilitant center with fadeIn',
        {
            'Choice': {
                'Dialog': '',
                'Class': 'top-left-button',
                'RetourMenu': {
                    'Text': 'Retourner au menu',
                    'Do': 'jump MenuChoix'
                }
            }
        }
    ],
    
    'ArchiveAudio': [
        'play music archive',
        {
            'Choice': {
                'Dialog': 'Archive audio de témoignage psychiatrique (1972)',
                'Class': 'top-left-button',
                'RetourMenu': {
                    'Text': 'Retourner au menu',
                    'Do': 'jump StopArchiveAudio'
                }
            }
        }
    ],
    
    'StopArchiveAudio': [
        'stop music archive with fade 2',
        'jump MenuChoix'
    ]
}); 