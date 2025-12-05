import { Options } from 'swagger-jsdoc';

export const options: Options = {
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
    tags: [
      {
        name: 'Bets',
        description: 'Operace týkající se sázek'
      }
    ],
    servers: [
      {
        url: 'http://localhost:5001',
        description: 'Development server'
      },
      {
        url: 'https://api.betting.cz',
        description: 'Production server'
      }
    ],
    paths: {
      '/api/bet': {
        post: {
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
      },
      '/api/bets/newest': {
        get: {
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
      }
    },
    components: {
      schemas: {
        BetCreate: {
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
        },
        Bet: {
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
        },
        NewestBetItem: {
          type: 'object',
          properties: {
            createdAt: {
              type: 'string',
              format: 'date-time'
            },
            rival_name: {
              type: 'string'
            },
            stack: {
              type: 'string'
            }
          }
        },
        NewestBetsResponse: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: true
            },
            data: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/NewestBetItem'
              }
            }
          }
        },
      }
    }
  },
  apis: ['./src/routes/*.ts', './src/server.ts']
};
