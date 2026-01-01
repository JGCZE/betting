import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { fakerCS_CZ as faker } from '@faker-js/faker'; // Použijeme českou verzi
import { BetDocument, Bets } from 'src/bets/schemas/newBetSchema';

@Injectable()
export class SeedService {
  constructor(@InjectModel(Bets.name) private betModel: Model<BetDocument>) { }

  async seed() {
    console.log('🌱 Začínám generovat data...');

    const bets: any = [];
    const betTemplates = [
      'Kdo vypije víc piv za hodinu',
      'Zaběhnout maraton pod 4 hodiny',
      'Kdo dřív zhubne 5kg',
      'Že se neostříháš dohola',
      'Kdo vydrží déle nemluvit',
      'Výstup na Sněžku bez přestávky',
      'Kdo sní nejpálivější papričku',
      'Že nedáš 100 kliků v kuse',
      'Kdo udrží rovnováhu na jedné noze déle',
      'Kdo první najde poklad',
      'Kdo uvaří lepší večeři',
      'Kdo zvládne více dřepů',
      'Že nepodíváš na mobil celý den',
      'Kdo uhodne více hádanek',
      'Kdo první dočte knihu',
      'Kdo udělá lepší fotku přírody'
    ];

    const stakes = [
      'Litr rumu', 'Večeře v restauraci', '500 Kč', '1000 Kč', 'Basa piv', 'Umytí auta',
      'Den bez práce', 'Káva na týden', 'Domácí dort', 'Vstupenky na koncert', 'Nová kniha',
      'Fitness náramek', 'Den v lázních', 'Kurz vaření', 'Piknik v parku', 'Nové tričko'
    ];

    for (let i = 0; i < 40; i++) {
      const challengerFirstName = faker.person.firstName();
      const challengerLastName = faker.person.lastName();
      const rivalFirstName = faker.person.firstName();
      const rivalLastName = faker.person.lastName();

      const betTitle = faker.helpers.arrayElement(betTemplates) + ` (${faker.word.adjective()})`;

      const newBet = {
        challengerName: `${challengerFirstName} ${challengerLastName}`,
        challengerEmail: faker.internet.email({ firstName: challengerFirstName, lastName: challengerLastName }),

        rivalName: `${rivalFirstName} ${rivalLastName}`,
        rivalEmail: faker.internet.email({ firstName: rivalFirstName, lastName: rivalLastName }),

        betTitle: betTitle,
        stake: faker.helpers.arrayElement(stakes),

        // Unikátní URL - kombinace slugy a náhodného ID pro jistotu
        betUrl: faker.helpers.slugify(betTitle).toLowerCase() + '-' + faker.string.nanoid(6),

        description: faker.lorem.paragraph(),

        // Datum v budoucnu
        deadline: faker.date.future().toLocaleDateString('cs-CZ'),

        visibility: faker.helpers.arrayElement(['public', 'private']),
      };

      bets.push(newBet);
    }

    await this.betModel.insertMany(bets);

    console.log('✅ Hotovo! Databáze naplněna 40 sázkami.');
  }
}
