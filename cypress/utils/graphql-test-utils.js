import { operationName } from "@apollo/client"
import fetchUser from '../fixtures/fetchUser.json'

// Utility to match GraphQL mutation based on the operation name
export const hasOperationName = (req, operationName) => {
  const { body } = req

  return body.hasOwnProperty("operationName") && body.operationName === operationName
}

// Alias query if operationName matches
export const aliasQuery = (req, operationName, fixture) => {
  if (
    req.body.hasOwnProperty("query") &&
    req.body.query.includes(operationName)
  ) {
    req.alias = operationName;
    req.reply({ statusCode: 200, fixture: fixture });
  }
};

export const aliasMutation = (req, operationName, fixture) => {
  if (
    req.body.hasOwnProperty("mutation") &&
    req.body.query.includes(operationName)
  ) {
    req.body.variables.id = 1;
    req.alias = operationName;
    req.reply({ statusCode: 200, fixture: fixture });
  }
};