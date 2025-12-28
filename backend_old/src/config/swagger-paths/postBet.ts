const postBet = {
  tags: ['Bets'],
  summary: 'Vytvoření nové sázky',
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/BetCreate'
        }
      }
    }
  },
  responses: {
    '201': {
      description: 'Sázka úspěšně vytvořena',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Bet'
          }
        }
      }
    },
    '400': { description: 'Neplatný vstup' }
  }
}
export default postBet;