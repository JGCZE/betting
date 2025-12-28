const getBetsNewest = {
  tags: ['Bets'],
  summary: 'Získání 15 nejnovějších veřejných sázek',
  responses: {
    '200': {
      description: 'Úspěšné získání sázek',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/NewestBetsResponse'
          }
        }
      }
    },
    '404': { description: 'Sázky nenalezeny' }
  }
}

export default getBetsNewest;