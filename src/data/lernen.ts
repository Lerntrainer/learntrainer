export interface Lernen {
  titel: string;
  id: number;
  fragen: Frage[];
}

export interface Frage{
  frage: string;
  antwort: string;
}

const lernen: Lernen[] = [
  {
    titel: 'Englisch',
    id: 0,
    fragen: [
      {
        frage: 'Familie',
        antwort: 'family'
      },
      {
        frage: 'Baby',
        antwort: 'baby'
      },
      {
        frage: 'besuchen',
        antwort: 'to visit'
      },
      {
        frage: 'bleiben',
        antwort: 'to stay'
      },
      {
        frage: 'Bruder',
        antwort: 'brother'
      },
      {
        frage: 'Cousin',
        antwort: 'cousin'
      },
      {
        frage: 'Kind',
        antwort: 'child'
      },
      {
        frage: 'kinderlos',
        antwort: 'childless'
      },
      {
        frage: 'Eltern',
        antwort: 'parents'
      },
      {
        frage: 'Erwachsener',
        antwort: 'adult'
      },
      {
        frage: 'erwachsen',
        antwort: 'grown-up'
      },
      {
        frage: 'Opa',
        antwort: 'grandpa/granddad'
      },
      {
        frage: 'Nachname',
        antwort: 'surname'
      },
      {
        frage: 'Freund/in',
        antwort: 'friend'
      },
      {
        frage: 'Freundschaft',
        antwort: 'friendship'
      },
      {
        frage: 'Gast',
        antwort: 'guest'
      },
      {
        frage: 'Gastfreundschaft',
        antwort: 'hospitality'
      },
      {
        frage: 'geboren',
        antwort: 'born'
      },
      {
        frage: 'Geburt',
        antwort: 'birth'
      },
      {
        frage: 'Geburtstag',
        antwort: 'birthday'
      },
      {
        frage: 'Onkel',
        antwort: 'uncle'
      },
      {
        frage: 'aufrichtig',
        antwort: 'sincerely'
      },
      {
        frage: 'geschieden von',
        antwort: 'divorced from'
      },
      {
        frage: 'brüderlich',
        antwort: 'brotherly'
      },
      {
        frage: 'Bruderschaft',
        antwort: 'brotherhood'
      },
      {
        frage: 'schwesterlich',
        antwort: 'sisterly'
      },
      {
        frage: 'Schwester',
        antwort: 'sister'
      },
      {
        frage: 'getrennt',
        antwort: 'separated'
      },
      {
        frage: 'Großeltern',
        antwort: 'grandparents'
      },
      {
        frage: 'Großmutter',
        antwort: 'grandmother'
      },
      {
        frage: 'Großvater',
        antwort: 'grandfather'
      },
      {
        frage: 'Hausnummer',
        antwort: 'house number'
      },
      {
        frage: 'das',
        antwort: 'pet'
      },
      {
        frage: 'aufrichtig',
        antwort: 'sincere'
      },
      {
        frage: 'Junge',
        antwort: 'boy'
      },
      {
        frage: 'Mädchen',
        antwort: 'girl'
      },
      {
        frage: 'ledig',
        antwort: 'single'
      },
      {
        frage: 'Mann',
        antwort: 'man'
      },
      {
        frage: 'Mutter',
        antwort: 'mother'
      },
      {
        frage: 'Mutti',
        antwort: 'mum'
      },
      {
        frage: 'Name',
        antwort: 'name'
      },
      {
        frage: 'Oma',
        antwort: 'granny'
      },
      {
        frage: 'Tochter',
        antwort: 'daughter'
      },
      {
        frage: 'Schwager',
        antwort: 'brother-in-law'
      },
      {
        frage: 'Schwägerin',
        antwort: 'sister-in-law'
      },
      {
        frage: 'Schwiegermutter',
        antwort: 'mother-in-law'
      },
      {
        frage: 'Schwiegervater',
        antwort: 'father-in-law'
      },
      {
        frage: 'Sohn',
        antwort: 'son'
      },
      {
        frage: 'Stiefvater',
        antwort: 'stepfather'
      },
      {
        frage: 'Stiefmutter',
        antwort: 'stepmother'
      },
      {
        frage: 'sich streiten',
        antwort: 'to argue'
      },
      {
        frage: 'Tante',
        antwort: 'aunt'
      },
      {
        frage: 'Wohnort',
        antwort: 'place of residence'
      },
      {
        frage: 'Vater (unser)',
        antwort: 'Father'
      },
      {
        frage: 'Papa/ Vati',
        antwort: 'dad'
      },
      {
        frage: 'verheiratet mit jmdm.',
        antwort: 'married to sb.'
      },
      {
        frage: 'Vorname',
        antwort: 'first name'
      },
      {
        frage: 'jmdn. Vorstellen',
        antwort: 'to introduce to sb.'
      },
      {
        frage: 'willkommen heißen',
        antwort: 'to welcome'
      },
      {
        frage: 'wohnen',
        antwort: 'to live'
      },
      {
        frage: 'Zwilling',
        antwort: 'twin'
      }
    ]
  },
  {
    titel: 'Spanisch',
    id: 1,
    fragen: [
      {
        frage: 'Frage_0',
        antwort: 'Antwort_0'
      },
      {
        frage: 'Frage_1',
        antwort: 'Antwort_1'
      },
      {
        frage: 'Frage_2',
        antwort: 'Antwort_2'
      },
      {
        frage: 'Frage_3',
        antwort: 'Antwort_3'
      },
      {
        frage: 'Frage_4',
        antwort: 'Antwort_4'
      },
      {
        frage: 'Frage_5',
        antwort: 'Antwort_5'
      },
      {
        frage: 'Frage_6',
        antwort: 'Antwort_6'
      },
      {
        frage: 'Frage_7',
        antwort: 'Antwort_7'
      },
      {
        frage: 'Frage_8',
        antwort: 'Antwort_8'
      }
    ]
  },
  {
    titel: 'Geographie',
    id: 2,
    fragen: [
      {
        frage: 'Frage_0',
        antwort: 'Antwort_0'
      },
      {
        frage: 'Frage_1',
        antwort: 'Antwort_1'
      },
      {
        frage: 'Frage_2',
        antwort: 'Antwort_2'
      },
      {
        frage: 'Frage_3',
        antwort: 'Antwort_3'
      },
      {
        frage: 'Frage_4',
        antwort: 'Antwort_4'
      },
      {
        frage: 'Frage_5',
        antwort: 'Antwort_5'
      },
      {
        frage: 'Frage_6',
        antwort: 'Antwort_6'
      },
      {
        frage: 'Frage_7',
        antwort: 'Antwort_7'
      },
      {
        frage: 'Frage_8',
        antwort: 'Antwort_8'
      }
    ]

  },
  {
    titel: 'Biologie',
    id: 3,
    fragen: [
      {
        frage: 'Frage_0',
        antwort: 'Antwort_0'
      },
      {
        frage: 'Frage_1',
        antwort: 'Antwort_1'
      },
      {
        frage: 'Frage_2',
        antwort: 'Antwort_2'
      },
      {
        frage: 'Frage_3',
        antwort: 'Antwort_3'
      },
      {
        frage: 'Frage_4',
        antwort: 'Antwort_4'
      },
      {
        frage: 'Frage_5',
        antwort: 'Antwort_5'
      },
      {
        frage: 'Frage_6',
        antwort: 'Antwort_6'
      },
      {
        frage: 'Frage_7',
        antwort: 'Antwort_7'
      },
      {
        frage: 'Frage_8',
        antwort: 'Antwort_8'
      }
    ]
  }
];

export const getMessages = () => lernen;

export const getMessage = (id: number) => lernen.find(m => m.id === id);
