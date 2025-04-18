monogatari.script({
    'Bibliographie': [
        'show scene intro',
        '<div class="bibliographie">' +
        '<h2>Bibliographie</h2>' +
        '<h3>Livres</h3>' +
        '<p>Bastide Roger, <i>Sociologie et psychanalyse</i>, Paris : PUF, 1995.</p>' +
        '<p>Berger Peter Ludwig et alii, <i>Invitation à la sociologie</i>, Paris : la Découverte, 2006.</p>' +
        '<p>Bierens de Haan Barthold, <i>Dictionnaire critique de psychiatrie</i>, Lausanne : P.-M. Favre, 1986.</p>' +
        '<p>Brulhart Armand, <i>2 siècles de psychiatrie à Genève : 1800-2000</i> / [sous la direction de] Armand Brulhart, Genève : Georg, 2002.</p>' +
        '<p>Desmonts Martine, <i>Torture psychiatrique à Genève</i>, Lausanne, Suisse : Editions d\'En bas, 1982.</p>' +
        '<p>Elias Norbert et alii, <i>Au-delà de Freud: sociologie, psychologie, psychanalyse</i>, Paris : Éd. la Découverte, 2010.</p>' +
        '<p>Ferreira Cristina, <i>Homme-Bus Une histoire des controverses psychiatriques (1960-1980)</i>, S.l. : Georg Editeur, 2020.</p>' +
        '<p>Foucault Michel, <i>Histoire de la folie à l\'âge classique</i>, Gallimard, 1976, DOI: 10.14375/NP.9782070295821.</p>' +
        '<p>Foucault Michel et alii, <i>Le pouvoir psychiatrique: cours au Collège de France, 1973-1974</i>, Paris : Seuil : Gallimard, 2003, 399 p.</p>' +
        '<p>Gelderloos Peter et alii, <i>Comment la non-violence protège l\'État: essai sur l\'inefficacité des mouvements sociaux</i>, Herblay : Éditions Libre, 2018.</p>' +
        '<p>Lahire Bernard, <i>L\'interprétation sociologique des rêves</i>, Paris : La Découverte, 2018, 2 p.</p>' +
        '<p>Nizet Jean et Rigaux Natalie, <i>La sociologie de Erving Goffman</i>, Paris : la Découverte, 2014.</p>' +
        '<p>Robcis Camille et Di Mascio Patrick, <i>Désaliénation : politique de la psychiatrie. : Tosquelles, Fanon, Guattari, Foucault</i>, Paris : Éditions du Seuil, 2024.</p>' +
        '<p>Szasz Thomas, <i>Le mythe de la maladie mentale</i>, Berger Denise (trad.), Paris, 106, Boulevard Saint-Germain : Payot, 1977.</p>' +
        '<h3>Bande dessinée</h3>' +
        '<p>Mandel Lisa, <i>HP</i>, Paris : L\'Association, 2009, 2 p.</p>' +
        '<p>Mandel Lisa, <i>H.P</i>, Paris : L\'Association, 2013, 1 p.</p>' +
        '</div>',
        
        {
            'Choice': {
                'Dialog': 'Que souhaitez-vous faire ?',
                'Histoire': {
                    'Text': 'Commencer l\'histoire',
                    'Do': 'jump Jour1'
                },
                'Retour': {
                    'Text': 'Retourner à l\'introduction',
                    'Do': 'jump Start'
                }
            }
        }
    ]
}); 