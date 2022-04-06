import UserData from '../cypress/fixtures/UserData.json'
import { operationName } from "@apollo/client"

// Utility to match GraphQL mutation based on the operation name
export const hasOperationName = (req, operationName) => {
  const { body } = req

  return body.hasOwnProperty("operationName") && body.operationName === operationName
}

// Alias query if operationName matches
export const aliasQuery = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Query`

    req.reply({ fixture: "UserData.json" })
  }
}

export const aliasMutation = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Mutation`
  }
}