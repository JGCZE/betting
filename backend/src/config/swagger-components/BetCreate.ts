const BetCreate = {
  type: 'object',
  required: ['challanger_name', 'challanger_email', 'rival_name', 'stack', 'deadline', 'visibility'],
  properties: {
    challanger_name: {
      type: 'string',
      description: 'Jméno vyzývatele',
      example: 'Jan Novák'
    },
    challanger_email: {
      type: 'string',
      format: 'email',
      description: 'Email vyzývatele',
      example: 'jan@example.com'
    },
    rival_name: {
      type: 'string',
      description: 'Jméno soupeře',
      example: 'Petr Svoboda'
    },
    rival_email: {
      type: 'string',
      format: 'email',
      description: 'Email soupeře (volitelné)',
      example: 'petr@example.com'
    },
    betTitle: {
      type: 'string',
      description: 'Název sázky',
      example: 'Novoroční předsevzetí'
    },
    stack: {
      type: 'string',
      description: 'O co se sází',
      example: 'Láhev Moët & Chandon'
    },
    deadline: {
      type: 'string',
      format: 'date',
      description: 'Termín splnění sázky',
      example: '2024-12-31'
    },
    visibility: {
      type: 'string',
      enum: ['public', 'private'],
      description: 'Viditelnost sázky'
    }
  }
}

export default BetCreate;