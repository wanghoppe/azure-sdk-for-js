/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const url: OperationURLParameter = {
  parameterPath: "url",
  mapper: {
    serializedName: "url",
    required: true,
    xmlName: "url",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const resource: OperationQueryParameter = {
  parameterPath: "resource",
  mapper: {
    defaultValue: "account",
    isConstant: true,
    serializedName: "resource",
    type: {
      name: "String"
    }
  }
};

export const prefix: OperationQueryParameter = {
  parameterPath: ["options", "prefix"],
  mapper: {
    serializedName: "prefix",
    xmlName: "prefix",
    type: {
      name: "String"
    }
  }
};

export const continuation: OperationQueryParameter = {
  parameterPath: ["options", "continuation"],
  mapper: {
    serializedName: "continuation",
    xmlName: "continuation",
    type: {
      name: "String"
    }
  }
};

export const maxResults: OperationQueryParameter = {
  parameterPath: ["options", "maxResults"],
  mapper: {
    constraints: {
      InclusiveMinimum: 1
    },
    serializedName: "maxResults",
    xmlName: "maxResults",
    type: {
      name: "Number"
    }
  }
};

export const requestId: OperationParameter = {
  parameterPath: ["options", "requestId"],
  mapper: {
    serializedName: "x-ms-client-request-id",
    xmlName: "x-ms-client-request-id",
    type: {
      name: "String"
    }
  }
};

export const timeout: OperationQueryParameter = {
  parameterPath: ["options", "timeout"],
  mapper: {
    constraints: {
      InclusiveMinimum: 0
    },
    serializedName: "timeout",
    xmlName: "timeout",
    type: {
      name: "Number"
    }
  }
};

export const version: OperationParameter = {
  parameterPath: "version",
  mapper: {
    defaultValue: "2024-11-04",
    isConstant: true,
    serializedName: "x-ms-version",
    type: {
      name: "String"
    }
  }
};

export const resource1: OperationQueryParameter = {
  parameterPath: "resource",
  mapper: {
    defaultValue: "filesystem",
    isConstant: true,
    serializedName: "resource",
    type: {
      name: "String"
    }
  }
};

export const properties: OperationParameter = {
  parameterPath: ["options", "properties"],
  mapper: {
    serializedName: "x-ms-properties",
    xmlName: "x-ms-properties",
    type: {
      name: "String"
    }
  }
};

export const ifModifiedSince: OperationParameter = {
  parameterPath: ["options", "modifiedAccessConditions", "ifModifiedSince"],
  mapper: {
    serializedName: "If-Modified-Since",
    xmlName: "If-Modified-Since",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};

export const ifUnmodifiedSince: OperationParameter = {
  parameterPath: ["options", "modifiedAccessConditions", "ifUnmodifiedSince"],
  mapper: {
    serializedName: "If-Unmodified-Since",
    xmlName: "If-Unmodified-Since",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};

export const path: OperationQueryParameter = {
  parameterPath: ["options", "path"],
  mapper: {
    serializedName: "directory",
    xmlName: "directory",
    type: {
      name: "String"
    }
  }
};

export const recursive: OperationQueryParameter = {
  parameterPath: "recursive",
  mapper: {
    serializedName: "recursive",
    required: true,
    xmlName: "recursive",
    type: {
      name: "Boolean"
    }
  }
};

export const upn: OperationQueryParameter = {
  parameterPath: ["options", "upn"],
  mapper: {
    serializedName: "upn",
    xmlName: "upn",
    type: {
      name: "Boolean"
    }
  }
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/xml",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const restype: OperationQueryParameter = {
  parameterPath: "restype",
  mapper: {
    defaultValue: "container",
    isConstant: true,
    serializedName: "restype",
    type: {
      name: "String"
    }
  }
};

export const comp: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "list",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const delimiter: OperationQueryParameter = {
  parameterPath: ["options", "delimiter"],
  mapper: {
    serializedName: "delimiter",
    xmlName: "delimiter",
    type: {
      name: "String"
    }
  }
};

export const marker: OperationQueryParameter = {
  parameterPath: ["options", "marker"],
  mapper: {
    serializedName: "marker",
    xmlName: "marker",
    type: {
      name: "String"
    }
  }
};

export const include: OperationQueryParameter = {
  parameterPath: ["options", "include"],
  mapper: {
    serializedName: "include",
    xmlName: "include",
    xmlElementName: "ListBlobsIncludeItem",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Enum",
          allowedValues: [
            "copy",
            "deleted",
            "metadata",
            "snapshots",
            "uncommittedblobs",
            "versions",
            "tags"
          ]
        }
      }
    }
  },
  collectionFormat: "CSV"
};

export const showonly: OperationQueryParameter = {
  parameterPath: ["options", "showonly"],
  mapper: {
    defaultValue: "deleted",
    isConstant: true,
    serializedName: "showonly",
    type: {
      name: "String"
    }
  }
};

export const resource2: OperationQueryParameter = {
  parameterPath: ["options", "resource"],
  mapper: {
    serializedName: "resource",
    xmlName: "resource",
    type: {
      name: "Enum",
      allowedValues: ["directory", "file"]
    }
  }
};

export const mode: OperationQueryParameter = {
  parameterPath: ["options", "mode"],
  mapper: {
    serializedName: "mode",
    xmlName: "mode",
    type: {
      name: "Enum",
      allowedValues: ["legacy", "posix"]
    }
  }
};

export const cacheControl: OperationParameter = {
  parameterPath: ["options", "pathHttpHeaders", "cacheControl"],
  mapper: {
    serializedName: "x-ms-cache-control",
    xmlName: "x-ms-cache-control",
    type: {
      name: "String"
    }
  }
};

export const contentEncoding: OperationParameter = {
  parameterPath: ["options", "pathHttpHeaders", "contentEncoding"],
  mapper: {
    serializedName: "x-ms-content-encoding",
    xmlName: "x-ms-content-encoding",
    type: {
      name: "String"
    }
  }
};

export const contentLanguage: OperationParameter = {
  parameterPath: ["options", "pathHttpHeaders", "contentLanguage"],
  mapper: {
    serializedName: "x-ms-content-language",
    xmlName: "x-ms-content-language",
    type: {
      name: "String"
    }
  }
};

export const contentDisposition: OperationParameter = {
  parameterPath: ["options", "pathHttpHeaders", "contentDisposition"],
  mapper: {
    serializedName: "x-ms-content-disposition",
    xmlName: "x-ms-content-disposition",
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "pathHttpHeaders", "contentType"],
  mapper: {
    serializedName: "x-ms-content-type",
    xmlName: "x-ms-content-type",
    type: {
      name: "String"
    }
  }
};

export const renameSource: OperationParameter = {
  parameterPath: ["options", "renameSource"],
  mapper: {
    serializedName: "x-ms-rename-source",
    xmlName: "x-ms-rename-source",
    type: {
      name: "String"
    }
  }
};

export const leaseId: OperationParameter = {
  parameterPath: ["options", "leaseAccessConditions", "leaseId"],
  mapper: {
    serializedName: "x-ms-lease-id",
    xmlName: "x-ms-lease-id",
    type: {
      name: "String"
    }
  }
};

export const sourceLeaseId: OperationParameter = {
  parameterPath: ["options", "sourceLeaseId"],
  mapper: {
    serializedName: "x-ms-source-lease-id",
    xmlName: "x-ms-source-lease-id",
    type: {
      name: "String"
    }
  }
};

export const permissions: OperationParameter = {
  parameterPath: ["options", "permissions"],
  mapper: {
    serializedName: "x-ms-permissions",
    xmlName: "x-ms-permissions",
    type: {
      name: "String"
    }
  }
};

export const umask: OperationParameter = {
  parameterPath: ["options", "umask"],
  mapper: {
    serializedName: "x-ms-umask",
    xmlName: "x-ms-umask",
    type: {
      name: "String"
    }
  }
};

export const ifMatch: OperationParameter = {
  parameterPath: ["options", "modifiedAccessConditions", "ifMatch"],
  mapper: {
    serializedName: "If-Match",
    xmlName: "If-Match",
    type: {
      name: "String"
    }
  }
};

export const ifNoneMatch: OperationParameter = {
  parameterPath: ["options", "modifiedAccessConditions", "ifNoneMatch"],
  mapper: {
    serializedName: "If-None-Match",
    xmlName: "If-None-Match",
    type: {
      name: "String"
    }
  }
};

export const sourceIfMatch: OperationParameter = {
  parameterPath: ["options", "sourceModifiedAccessConditions", "sourceIfMatch"],
  mapper: {
    serializedName: "x-ms-source-if-match",
    xmlName: "x-ms-source-if-match",
    type: {
      name: "String"
    }
  }
};

export const sourceIfNoneMatch: OperationParameter = {
  parameterPath: [
    "options",
    "sourceModifiedAccessConditions",
    "sourceIfNoneMatch"
  ],
  mapper: {
    serializedName: "x-ms-source-if-none-match",
    xmlName: "x-ms-source-if-none-match",
    type: {
      name: "String"
    }
  }
};

export const sourceIfModifiedSince: OperationParameter = {
  parameterPath: [
    "options",
    "sourceModifiedAccessConditions",
    "sourceIfModifiedSince"
  ],
  mapper: {
    serializedName: "x-ms-source-if-modified-since",
    xmlName: "x-ms-source-if-modified-since",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};

export const sourceIfUnmodifiedSince: OperationParameter = {
  parameterPath: [
    "options",
    "sourceModifiedAccessConditions",
    "sourceIfUnmodifiedSince"
  ],
  mapper: {
    serializedName: "x-ms-source-if-unmodified-since",
    xmlName: "x-ms-source-if-unmodified-since",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};

export const encryptionKey: OperationParameter = {
  parameterPath: ["options", "cpkInfo", "encryptionKey"],
  mapper: {
    serializedName: "x-ms-encryption-key",
    xmlName: "x-ms-encryption-key",
    type: {
      name: "String"
    }
  }
};

export const encryptionKeySha256: OperationParameter = {
  parameterPath: ["options", "cpkInfo", "encryptionKeySha256"],
  mapper: {
    serializedName: "x-ms-encryption-key-sha256",
    xmlName: "x-ms-encryption-key-sha256",
    type: {
      name: "String"
    }
  }
};

export const encryptionAlgorithm: OperationParameter = {
  parameterPath: ["options", "cpkInfo", "encryptionAlgorithm"],
  mapper: {
    serializedName: "x-ms-encryption-algorithm",
    xmlName: "x-ms-encryption-algorithm",
    type: {
      name: "String"
    }
  }
};

export const owner: OperationParameter = {
  parameterPath: ["options", "owner"],
  mapper: {
    serializedName: "x-ms-owner",
    xmlName: "x-ms-owner",
    type: {
      name: "String"
    }
  }
};

export const group: OperationParameter = {
  parameterPath: ["options", "group"],
  mapper: {
    serializedName: "x-ms-group",
    xmlName: "x-ms-group",
    type: {
      name: "String"
    }
  }
};

export const acl: OperationParameter = {
  parameterPath: ["options", "acl"],
  mapper: {
    serializedName: "x-ms-acl",
    xmlName: "x-ms-acl",
    type: {
      name: "String"
    }
  }
};

export const proposedLeaseId: OperationParameter = {
  parameterPath: ["options", "proposedLeaseId"],
  mapper: {
    serializedName: "x-ms-proposed-lease-id",
    xmlName: "x-ms-proposed-lease-id",
    type: {
      name: "String"
    }
  }
};

export const leaseDuration: OperationParameter = {
  parameterPath: ["options", "leaseDuration"],
  mapper: {
    serializedName: "x-ms-lease-duration",
    xmlName: "x-ms-lease-duration",
    type: {
      name: "Number"
    }
  }
};

export const expiryOptions: OperationParameter = {
  parameterPath: ["options", "expiryOptions"],
  mapper: {
    serializedName: "x-ms-expiry-option",
    xmlName: "x-ms-expiry-option",
    type: {
      name: "Enum",
      allowedValues: [
        "NeverExpire",
        "RelativeToCreation",
        "RelativeToNow",
        "Absolute"
      ]
    }
  }
};

export const expiresOn: OperationParameter = {
  parameterPath: ["options", "expiresOn"],
  mapper: {
    serializedName: "x-ms-expiry-time",
    xmlName: "x-ms-expiry-time",
    type: {
      name: "String"
    }
  }
};

export const encryptionContext: OperationParameter = {
  parameterPath: ["options", "encryptionContext"],
  mapper: {
    serializedName: "x-ms-encryption-context",
    xmlName: "x-ms-encryption-context",
    type: {
      name: "String"
    }
  }
};

export const contentType1: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/octet-stream",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: {
    serializedName: "body",
    required: true,
    xmlName: "body",
    type: {
      name: "Stream"
    }
  }
};

export const accept2: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const action: OperationQueryParameter = {
  parameterPath: "action",
  mapper: {
    serializedName: "action",
    required: true,
    xmlName: "action",
    type: {
      name: "Enum",
      allowedValues: [
        "append",
        "flush",
        "setProperties",
        "setAccessControl",
        "setAccessControlRecursive"
      ]
    }
  }
};

export const maxRecords: OperationQueryParameter = {
  parameterPath: ["options", "maxRecords"],
  mapper: {
    constraints: {
      InclusiveMinimum: 1
    },
    serializedName: "maxRecords",
    xmlName: "maxRecords",
    type: {
      name: "Number"
    }
  }
};

export const mode1: OperationQueryParameter = {
  parameterPath: "mode",
  mapper: {
    serializedName: "mode",
    required: true,
    xmlName: "mode",
    type: {
      name: "Enum",
      allowedValues: ["set", "modify", "remove"]
    }
  }
};

export const forceFlag: OperationQueryParameter = {
  parameterPath: ["options", "forceFlag"],
  mapper: {
    serializedName: "forceFlag",
    xmlName: "forceFlag",
    type: {
      name: "Boolean"
    }
  }
};

export const position: OperationQueryParameter = {
  parameterPath: ["options", "position"],
  mapper: {
    serializedName: "position",
    xmlName: "position",
    type: {
      name: "Number"
    }
  }
};

export const retainUncommittedData: OperationQueryParameter = {
  parameterPath: ["options", "retainUncommittedData"],
  mapper: {
    serializedName: "retainUncommittedData",
    xmlName: "retainUncommittedData",
    type: {
      name: "Boolean"
    }
  }
};

export const close: OperationQueryParameter = {
  parameterPath: ["options", "close"],
  mapper: {
    serializedName: "close",
    xmlName: "close",
    type: {
      name: "Boolean"
    }
  }
};

export const contentLength: OperationParameter = {
  parameterPath: ["options", "contentLength"],
  mapper: {
    constraints: {
      InclusiveMinimum: 0
    },
    serializedName: "Content-Length",
    xmlName: "Content-Length",
    type: {
      name: "Number"
    }
  }
};

export const contentMD5: OperationParameter = {
  parameterPath: ["options", "pathHttpHeaders", "contentMD5"],
  mapper: {
    serializedName: "x-ms-content-md5",
    xmlName: "x-ms-content-md5",
    type: {
      name: "ByteArray"
    }
  }
};

export const xMsLeaseAction: OperationParameter = {
  parameterPath: "xMsLeaseAction",
  mapper: {
    serializedName: "x-ms-lease-action",
    required: true,
    xmlName: "x-ms-lease-action",
    type: {
      name: "Enum",
      allowedValues: ["acquire", "break", "change", "renew", "release"]
    }
  }
};

export const xMsLeaseDuration: OperationParameter = {
  parameterPath: "xMsLeaseDuration",
  mapper: {
    serializedName: "x-ms-lease-duration",
    xmlName: "x-ms-lease-duration",
    type: {
      name: "Number"
    }
  }
};

export const xMsLeaseBreakPeriod: OperationParameter = {
  parameterPath: ["options", "xMsLeaseBreakPeriod"],
  mapper: {
    serializedName: "x-ms-lease-break-period",
    xmlName: "x-ms-lease-break-period",
    type: {
      name: "Number"
    }
  }
};

export const range: OperationParameter = {
  parameterPath: ["options", "range"],
  mapper: {
    serializedName: "Range",
    xmlName: "Range",
    type: {
      name: "String"
    }
  }
};

export const xMsRangeGetContentMd5: OperationParameter = {
  parameterPath: ["options", "xMsRangeGetContentMd5"],
  mapper: {
    serializedName: "x-ms-range-get-content-md5",
    xmlName: "x-ms-range-get-content-md5",
    type: {
      name: "Boolean"
    }
  }
};

export const action1: OperationQueryParameter = {
  parameterPath: ["options", "action"],
  mapper: {
    serializedName: "action",
    xmlName: "action",
    type: {
      name: "Enum",
      allowedValues: ["getAccessControl", "getStatus"]
    }
  }
};

export const recursive1: OperationQueryParameter = {
  parameterPath: ["options", "recursive"],
  mapper: {
    serializedName: "recursive",
    xmlName: "recursive",
    type: {
      name: "Boolean"
    }
  }
};

export const paginated: OperationQueryParameter = {
  parameterPath: ["options", "paginated"],
  mapper: {
    serializedName: "paginated",
    xmlName: "paginated",
    type: {
      name: "Boolean"
    }
  }
};

export const action2: OperationQueryParameter = {
  parameterPath: "action",
  mapper: {
    defaultValue: "setAccessControl",
    isConstant: true,
    serializedName: "action",
    type: {
      name: "String"
    }
  }
};

export const action3: OperationQueryParameter = {
  parameterPath: "action",
  mapper: {
    defaultValue: "setAccessControlRecursive",
    isConstant: true,
    serializedName: "action",
    type: {
      name: "String"
    }
  }
};

export const action4: OperationQueryParameter = {
  parameterPath: "action",
  mapper: {
    defaultValue: "flush",
    isConstant: true,
    serializedName: "action",
    type: {
      name: "String"
    }
  }
};

export const leaseAction: OperationParameter = {
  parameterPath: ["options", "leaseAction"],
  mapper: {
    serializedName: "x-ms-lease-action",
    xmlName: "x-ms-lease-action",
    type: {
      name: "Enum",
      allowedValues: ["acquire", "auto-renew", "release", "acquire-release"]
    }
  }
};

export const contentType2: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const action5: OperationQueryParameter = {
  parameterPath: "action",
  mapper: {
    defaultValue: "append",
    isConstant: true,
    serializedName: "action",
    type: {
      name: "String"
    }
  }
};

export const transactionalContentHash: OperationParameter = {
  parameterPath: ["options", "pathHttpHeaders", "transactionalContentHash"],
  mapper: {
    serializedName: "Content-MD5",
    xmlName: "Content-MD5",
    type: {
      name: "ByteArray"
    }
  }
};

export const transactionalContentCrc64: OperationParameter = {
  parameterPath: ["options", "transactionalContentCrc64"],
  mapper: {
    serializedName: "x-ms-content-crc64",
    xmlName: "x-ms-content-crc64",
    type: {
      name: "ByteArray"
    }
  }
};

export const flush: OperationQueryParameter = {
  parameterPath: ["options", "flush"],
  mapper: {
    serializedName: "flush",
    xmlName: "flush",
    type: {
      name: "Boolean"
    }
  }
};

export const comp1: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "expiry",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const expiryOptions1: OperationParameter = {
  parameterPath: "expiryOptions",
  mapper: {
    serializedName: "x-ms-expiry-option",
    required: true,
    xmlName: "x-ms-expiry-option",
    type: {
      name: "Enum",
      allowedValues: [
        "NeverExpire",
        "RelativeToCreation",
        "RelativeToNow",
        "Absolute"
      ]
    }
  }
};

export const comp2: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "undelete",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const undeleteSource: OperationParameter = {
  parameterPath: ["options", "undeleteSource"],
  mapper: {
    serializedName: "x-ms-undelete-source",
    xmlName: "x-ms-undelete-source",
    type: {
      name: "String"
    }
  }
};
