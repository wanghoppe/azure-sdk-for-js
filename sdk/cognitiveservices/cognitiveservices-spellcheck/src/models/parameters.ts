/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "acceptLanguage"
  ],
  mapper: {
    serializedName: "Accept-Language",
    type: {
      name: "String"
    }
  }
};
export const actionType: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "actionType"
  ],
  mapper: {
    serializedName: "ActionType",
    type: {
      name: "String"
    }
  }
};
export const appName: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "appName"
  ],
  mapper: {
    serializedName: "AppName",
    type: {
      name: "String"
    }
  }
};
export const clientId: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "clientId"
  ],
  mapper: {
    serializedName: "X-MSEdge-ClientID",
    type: {
      name: "String"
    }
  }
};
export const clientIp: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "clientIp"
  ],
  mapper: {
    serializedName: "X-MSEdge-ClientIP",
    type: {
      name: "String"
    }
  }
};
export const clientMachineName: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "clientMachineName"
  ],
  mapper: {
    serializedName: "ClientMachineName",
    type: {
      name: "String"
    }
  }
};
export const countryCode: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "countryCode"
  ],
  mapper: {
    serializedName: "cc",
    type: {
      name: "String"
    }
  }
};
export const docId: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "docId"
  ],
  mapper: {
    serializedName: "DocId",
    type: {
      name: "String"
    }
  }
};
export const endpoint: msRest.OperationURLParameter = {
  parameterPath: "endpoint",
  mapper: {
    required: true,
    serializedName: "Endpoint",
    defaultValue: 'https://api.cognitive.microsoft.com',
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const location: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "location"
  ],
  mapper: {
    serializedName: "X-Search-Location",
    type: {
      name: "String"
    }
  }
};
export const market: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "market"
  ],
  mapper: {
    serializedName: "mkt",
    type: {
      name: "String"
    }
  }
};
export const mode: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "mode"
  ],
  mapper: {
    serializedName: "Mode",
    type: {
      name: "String"
    }
  }
};
export const postContextText: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "postContextText"
  ],
  mapper: {
    serializedName: "PostContextText",
    type: {
      name: "String"
    }
  }
};
export const pragma: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "pragma"
  ],
  mapper: {
    serializedName: "Pragma",
    type: {
      name: "String"
    }
  }
};
export const preContextText: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "preContextText"
  ],
  mapper: {
    serializedName: "PreContextText",
    type: {
      name: "String"
    }
  }
};
export const sessionId: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "sessionId"
  ],
  mapper: {
    serializedName: "SessionId",
    type: {
      name: "String"
    }
  }
};
export const setLang: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "setLang"
  ],
  mapper: {
    serializedName: "SetLang",
    type: {
      name: "String"
    }
  }
};
export const text: msRest.OperationQueryParameter = {
  parameterPath: "text",
  mapper: {
    required: true,
    serializedName: "Text",
    type: {
      name: "String"
    }
  }
};
export const userAgent: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "userAgent"
  ],
  mapper: {
    serializedName: "User-Agent",
    type: {
      name: "String"
    }
  }
};
export const userId: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "userId"
  ],
  mapper: {
    serializedName: "UserId",
    type: {
      name: "String"
    }
  }
};
export const xBingApisSDK: msRest.OperationParameter = {
  parameterPath: "xBingApisSDK",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "X-BingApis-SDK",
    defaultValue: 'true',
    type: {
      name: "String"
    }
  }
};
