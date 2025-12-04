export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Betting App API',
      version: '1.0.0',
      description: 'REST API pro aplikaci na uzavírání sázek mezi přáteli',
      contact: {
        name: 'API Support',
        email: 'support@betting.cz'
      }
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server'
      },
      {
        url: 'https://api.betting.cz',
        description: 'Production server'
      }
    ],
    components: {
      schemas: {
        Bet: {
          type: 'object',
          required: ['name_one', 'email_one', 'bet', 'stack'],
          properties: {
            _id: {
              type: 'string',
              description: 'MongoDB ID (automatické)',
              example: '507f1f77bcf86cd799439011'
            },
            slug: {
              type: 'string',
              description: 'Veřejné ID pro URL',
              example: 'abc123xyz'
            },
            name_one: {
              type: 'string',
              description: 'Jméno vyzývatele',
              example: 'Jan Novák'
            },
            email_one: {
              type: 'string',
              format: 'email',
              description: 'Email vyzývatele',
              example: 'jan@example.com'
            },
            name_two: {
              type: 'string',
              description: 'Jméno soupeře',
              example: 'Petr Svoboda'
            },
            email_two: {
              type: 'string',
              format: 'email',
              description: 'Email soupeře',
              example: 'petr@example.com'
            },
            bet: {
              type: 'string',
              description: 'Text sázky',
              example: 'Do konce roku se neožeru'
            },
            stack: {
              type: 'string',
              description: 'O co se sází',
              example: 'Láhev Moët & Chandon'
            },
            visibility: {
              type: 'string',
              enum: ['public', 'private'],
              default: 'private',
              description: 'Viditelnost sázky'
            },
            status: {
              type: 'string',
              enum: ['pending', 'accepted', 'rejected', 'completed'],
              default: 'pending',
              description: 'Stav sázky'
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Datum vytvoření'
            }
          }
        },
        Error: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false
            },
            error: {
              type: 'string',
              example: 'Chybová zpráva'
            }
          }
        }
      }
    }
  },
  // Cesty k souborům s API dokumentací
  apis: ['./routes/*.js', './server.js'], // Upravit podle struktury
};