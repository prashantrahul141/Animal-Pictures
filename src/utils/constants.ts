export const dogBreedsRaw = {
  affenpinscher: [],
  african: [],
  airedale: [],
  akita: [],
  appenzeller: [],
  australian: ['shepherd'],
  basenji: [],
  beagle: [],
  bluetick: [],
  borzoi: [],
  bouvier: [],
  boxer: [],
  brabancon: [],
  briard: [],
  buhund: ['norwegian'],
  bulldog: ['boston', 'english', 'french'],
  bullterrier: ['staffordshire'],
  cattledog: ['australian'],
  chihuahua: [],
  chow: [],
  clumber: [],
  cockapoo: [],
  collie: ['border'],
  coonhound: [],
  corgi: ['cardigan'],
  cotondetulear: [],
  dachshund: [],
  dalmatian: [],
  dane: ['great'],
  deerhound: ['scottish'],
  dhole: [],
  dingo: [],
  doberman: [],
  elkhound: ['norwegian'],
  entlebucher: [],
  eskimo: [],
  finnish: ['lapphund'],
  frise: ['bichon'],
  germanshepherd: [],
  greyhound: ['italian'],
  groenendael: [],
  havanese: [],
  hound: ['afghan', 'basset', 'blood', 'english', 'ibizan', 'plott', 'walker'],
  husky: [],
  keeshond: [],
  kelpie: [],
  komondor: [],
  kuvasz: [],
  labradoodle: [],
  labrador: [],
  leonberg: [],
  lhasa: [],
  malamute: [],
  malinois: [],
  maltese: [],
  mastiff: ['bull', 'english', 'tibetan'],
  mexicanhairless: [],
  mix: [],
  mountain: ['bernese', 'swiss'],
  newfoundland: [],
  otterhound: [],
  ovcharka: ['caucasian'],
  papillon: [],
  pekinese: [],
  pembroke: [],
  pinscher: ['miniature'],
  pitbull: [],
  pointer: ['german', 'germanlonghair'],
  pomeranian: [],
  poodle: ['medium', 'miniature', 'standard', 'toy'],
  pug: [],
  puggle: [],
  pyrenees: [],
  redbone: [],
  retriever: ['chesapeake', 'curly', 'flatcoated', 'golden'],
  ridgeback: ['rhodesian'],
  rottweiler: [],
  saluki: [],
  samoyed: [],
  schipperke: [],
  schnauzer: ['giant', 'miniature'],
  segugio: ['italian'],
  setter: ['english', 'gordon', 'irish'],
  sharpei: [],
  sheepdog: ['english', 'shetland'],
  shiba: [],
  shihtzu: [],
  spaniel: [
    'blenheim',
    'brittany',
    'cocker',
    'irish',
    'japanese',
    'sussex',
    'welsh',
  ],
  spitz: ['japanese'],
  springer: ['english'],
  stbernard: [],
  terrier: [
    'american',
    'australian',
    'bedlington',
    'border',
    'cairn',
    'dandie',
    'fox',
    'irish',
    'kerryblue',
    'lakeland',
    'norfolk',
    'norwich',
    'patterdale',
    'russell',
    'scottish',
    'sealyham',
    'silky',
    'tibetan',
    'toy',
    'welsh',
    'westhighland',
    'wheaten',
    'yorkshire',
  ],
  tervuren: [],
  vizsla: [],
  waterdog: ['spanish'],
  weimaraner: [],
  whippet: [],
  wolfhound: ['irish'],
};

export const dogBreedsData: Array<{ id: string; name: string; url: string }> = [
  { id: '0', name: 'Random', url: 'https://dog.ceo/api/breeds/image/random' },
];

Object.entries(dogBreedsRaw).map((item, index) => {
  const exactBreedName = item[0];
  if (item[1].length === 0) {
    dogBreedsData.push({
      id: `${index + 1}`,
      name: exactBreedName,
      url: `https://dog.ceo/api/breed/${exactBreedName}/images/random`,
    });
  } else {
    item[1].forEach((commonName, index_2) => {
      dogBreedsData.push({
        id: `${index + 1}.${index_2}`,
        name: `${commonName} ${exactBreedName} `,
        url: `https://dog.ceo/api/breed/${exactBreedName}/${commonName}/images/random`,
      });
    });
  }
});
