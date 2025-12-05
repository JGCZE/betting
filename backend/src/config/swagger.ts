import { Options } from 'swagger-jsdoc';
import { getBetsNewest, postBet } from './swagger-paths';
import { Bet, BetCreate } from './swagger-components';

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
        post: { postBet }
      },
      '/api/bets/newest': {
        get: { getBetsNewest }
      }
    },
    components: {
      schemas: {
        BetCreate: { BetCreate },
        Bet: { Bet },
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
