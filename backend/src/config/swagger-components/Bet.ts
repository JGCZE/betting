const Bet = {
  type: 'object',
  properties: {
    _id: {
      type: 'string',
      description: 'MongoDB ID',
      example: '507f1f77bcf86cd799439011'
    },
    challanger_name: {
      type: 'string',
      example: 'Jan Novák'
    },
    challanger_email: {
      type: 'string',
      format: 'email',
      example: 'jan@example.com'
    },
    rival_name: {
      type: 'string',
      example: 'Petr Svoboda'
    },
    rival_email: {
      type: 'string',
      format: 'email',
      example: 'petr@example.com'
    },
    betTitle: {
      type: 'string',
      example: 'Novoroční předsevzetí'
    },
    betUrl: {
      type: 'string',
      description: 'Unikátní URL identifikátor',
      example: 'abc123xyz'
    },
    stack: {
      type: 'string',
      example: 'Láhev Moët & Chandon'
    },
    deadline: {
      type: 'string',
      format: 'date',
      example: '2024-12-31'
    },
    visibility: {
      type: 'string',
      enum: ['public', 'private']
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
      description: 'Datum vytvoření'
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
      description: 'Datum poslední aktualizace'
    }
  }
}

export default Bet;