import UserData from '../cypress/fixtures/UserData.json'
// Utility to match GraphQL mutation based on the operation name
// export const hasOperationName = (req, operationName) => {
//   const { body } = req;
//   return (
//     body.hasOwnProperty("operationName") && body.operationName === operationName
//   );
// };

// // Alias query if operationName matches
// export const aliasQuery = (req, operationName, fixture) => {

//   if (
//     req.body.hasOwnProperty("query") &&
//     req.body.query.includes(operationName)
//   ) {
//     req.alias = operationName;
//     req.reply({ statusCode: 200, fixture: fixture });
//   }
// };

// // Alias mutation if operationName matches
// export const aliasMutation = (req, operationName) => {
//   if (
//     req.body.hasOwnProperty("mutation") &&
//     req.body.query.includes(operationName)
//   ) {
//     req.body.variables.id = 1;
//     req.alias = operationName;
//     req.reply({ statusCode: 200, fixture: fixture });
//   }
// };



   
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