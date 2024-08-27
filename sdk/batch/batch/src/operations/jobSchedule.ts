/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/jobScheduleMappers";
import * as Parameters from "../models/parameters";
import { BatchServiceClientContext } from "../batchServiceClientContext";

/** Class representing a JobSchedule. */
export class JobSchedule {
  private readonly client: BatchServiceClientContext;

  /**
   * Create a JobSchedule.
   * @param {BatchServiceClientContext} client Reference to the service client.
   */
  constructor(client: BatchServiceClientContext) {
    this.client = client;
  }

  /**
   * @summary Checks the specified Job Schedule exists.
   * @param jobScheduleId The ID of the Job Schedule which you want to check.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobScheduleExistsResponse>
   */
  exists(jobScheduleId: string, options?: Models.JobScheduleExistsOptionalParams): Promise<Models.JobScheduleExistsResponse>;
  /**
   * @param jobScheduleId The ID of the Job Schedule which you want to check.
   * @param callback The callback
   */
  exists(jobScheduleId: string, callback: msRest.ServiceCallback<boolean>): void;
  /**
   * @param jobScheduleId The ID of the Job Schedule which you want to check.
   * @param options The optional parameters
   * @param callback The callback
   */
  exists(jobScheduleId: string, options: Models.JobScheduleExistsOptionalParams, callback: msRest.ServiceCallback<boolean>): void;
  exists(jobScheduleId: string, options?: Models.JobScheduleExistsOptionalParams | msRest.ServiceCallback<boolean>, callback?: msRest.ServiceCallback<boolean>): Promise<Models.JobScheduleExistsResponse> {
    return this.client.sendOperationRequest(
      {
        jobScheduleId,
        options
      },
      existsOperationSpec,
      callback) as Promise<Models.JobScheduleExistsResponse>;
  }

  /**
   * When you delete a Job Schedule, this also deletes all Jobs and Tasks under that schedule. When
   * Tasks are deleted, all the files in their working directories on the Compute Nodes are also
   * deleted (the retention period is ignored). The Job Schedule statistics are no longer accessible
   * once the Job Schedule is deleted, though they are still counted towards Account lifetime
   * statistics.
   * @summary Deletes a Job Schedule from the specified Account.
   * @param jobScheduleId The ID of the Job Schedule to delete.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobScheduleDeleteResponse>
   */
  deleteMethod(jobScheduleId: string, options?: Models.JobScheduleDeleteMethodOptionalParams): Promise<Models.JobScheduleDeleteResponse>;
  /**
   * @param jobScheduleId The ID of the Job Schedule to delete.
   * @param callback The callback
   */
  deleteMethod(jobScheduleId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param jobScheduleId The ID of the Job Schedule to delete.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(jobScheduleId: string, options: Models.JobScheduleDeleteMethodOptionalParams, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(jobScheduleId: string, options?: Models.JobScheduleDeleteMethodOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.JobScheduleDeleteResponse> {
    return this.client.sendOperationRequest(
      {
        jobScheduleId,
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.JobScheduleDeleteResponse>;
  }

  /**
   * Gets information about the specified Job Schedule.
   * @param jobScheduleId The ID of the Job Schedule to get.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobScheduleGetResponse>
   */
  get(jobScheduleId: string, options?: Models.JobScheduleGetOptionalParams): Promise<Models.JobScheduleGetResponse>;
  /**
   * @param jobScheduleId The ID of the Job Schedule to get.
   * @param callback The callback
   */
  get(jobScheduleId: string, callback: msRest.ServiceCallback<Models.CloudJobSchedule>): void;
  /**
   * @param jobScheduleId The ID of the Job Schedule to get.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(jobScheduleId: string, options: Models.JobScheduleGetOptionalParams, callback: msRest.ServiceCallback<Models.CloudJobSchedule>): void;
  get(jobScheduleId: string, options?: Models.JobScheduleGetOptionalParams | msRest.ServiceCallback<Models.CloudJobSchedule>, callback?: msRest.ServiceCallback<Models.CloudJobSchedule>): Promise<Models.JobScheduleGetResponse> {
    return this.client.sendOperationRequest(
      {
        jobScheduleId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.JobScheduleGetResponse>;
  }

  /**
   * This replaces only the Job Schedule properties specified in the request. For example, if the
   * schedule property is not specified with this request, then the Batch service will keep the
   * existing schedule. Changes to a Job Schedule only impact Jobs created by the schedule after the
   * update has taken place; currently running Jobs are unaffected.
   * @summary Updates the properties of the specified Job Schedule.
   * @param jobScheduleId The ID of the Job Schedule to update.
   * @param jobSchedulePatchParameter The parameters for the request.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobSchedulePatchResponse>
   */
  patch(jobScheduleId: string, jobSchedulePatchParameter: Models.JobSchedulePatchParameter, options?: Models.JobSchedulePatchOptionalParams): Promise<Models.JobSchedulePatchResponse>;
  /**
   * @param jobScheduleId The ID of the Job Schedule to update.
   * @param jobSchedulePatchParameter The parameters for the request.
   * @param callback The callback
   */
  patch(jobScheduleId: string, jobSchedulePatchParameter: Models.JobSchedulePatchParameter, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param jobScheduleId The ID of the Job Schedule to update.
   * @param jobSchedulePatchParameter The parameters for the request.
   * @param options The optional parameters
   * @param callback The callback
   */
  patch(jobScheduleId: string, jobSchedulePatchParameter: Models.JobSchedulePatchParameter, options: Models.JobSchedulePatchOptionalParams, callback: msRest.ServiceCallback<void>): void;
  patch(jobScheduleId: string, jobSchedulePatchParameter: Models.JobSchedulePatchParameter, options?: Models.JobSchedulePatchOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.JobSchedulePatchResponse> {
    return this.client.sendOperationRequest(
      {
        jobScheduleId,
        jobSchedulePatchParameter,
        options
      },
      patchOperationSpec,
      callback) as Promise<Models.JobSchedulePatchResponse>;
  }

  /**
   * This fully replaces all the updatable properties of the Job Schedule. For example, if the
   * schedule property is not specified with this request, then the Batch service will remove the
   * existing schedule. Changes to a Job Schedule only impact Jobs created by the schedule after the
   * update has taken place; currently running Jobs are unaffected.
   * @summary Updates the properties of the specified Job Schedule.
   * @param jobScheduleId The ID of the Job Schedule to update.
   * @param jobScheduleUpdateParameter The parameters for the request.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobScheduleUpdateResponse>
   */
  update(jobScheduleId: string, jobScheduleUpdateParameter: Models.JobScheduleUpdateParameter, options?: Models.JobScheduleUpdateOptionalParams): Promise<Models.JobScheduleUpdateResponse>;
  /**
   * @param jobScheduleId The ID of the Job Schedule to update.
   * @param jobScheduleUpdateParameter The parameters for the request.
   * @param callback The callback
   */
  update(jobScheduleId: string, jobScheduleUpdateParameter: Models.JobScheduleUpdateParameter, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param jobScheduleId The ID of the Job Schedule to update.
   * @param jobScheduleUpdateParameter The parameters for the request.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(jobScheduleId: string, jobScheduleUpdateParameter: Models.JobScheduleUpdateParameter, options: Models.JobScheduleUpdateOptionalParams, callback: msRest.ServiceCallback<void>): void;
  update(jobScheduleId: string, jobScheduleUpdateParameter: Models.JobScheduleUpdateParameter, options?: Models.JobScheduleUpdateOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.JobScheduleUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        jobScheduleId,
        jobScheduleUpdateParameter,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.JobScheduleUpdateResponse>;
  }

  /**
   * No new Jobs will be created until the Job Schedule is enabled again.
   * @summary Disables a Job Schedule.
   * @param jobScheduleId The ID of the Job Schedule to disable.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobScheduleDisableResponse>
   */
  disable(jobScheduleId: string, options?: Models.JobScheduleDisableOptionalParams): Promise<Models.JobScheduleDisableResponse>;
  /**
   * @param jobScheduleId The ID of the Job Schedule to disable.
   * @param callback The callback
   */
  disable(jobScheduleId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param jobScheduleId The ID of the Job Schedule to disable.
   * @param options The optional parameters
   * @param callback The callback
   */
  disable(jobScheduleId: string, options: Models.JobScheduleDisableOptionalParams, callback: msRest.ServiceCallback<void>): void;
  disable(jobScheduleId: string, options?: Models.JobScheduleDisableOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.JobScheduleDisableResponse> {
    return this.client.sendOperationRequest(
      {
        jobScheduleId,
        options
      },
      disableOperationSpec,
      callback) as Promise<Models.JobScheduleDisableResponse>;
  }

  /**
   * @summary Enables a Job Schedule.
   * @param jobScheduleId The ID of the Job Schedule to enable.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobScheduleEnableResponse>
   */
  enable(jobScheduleId: string, options?: Models.JobScheduleEnableOptionalParams): Promise<Models.JobScheduleEnableResponse>;
  /**
   * @param jobScheduleId The ID of the Job Schedule to enable.
   * @param callback The callback
   */
  enable(jobScheduleId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param jobScheduleId The ID of the Job Schedule to enable.
   * @param options The optional parameters
   * @param callback The callback
   */
  enable(jobScheduleId: string, options: Models.JobScheduleEnableOptionalParams, callback: msRest.ServiceCallback<void>): void;
  enable(jobScheduleId: string, options?: Models.JobScheduleEnableOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.JobScheduleEnableResponse> {
    return this.client.sendOperationRequest(
      {
        jobScheduleId,
        options
      },
      enableOperationSpec,
      callback) as Promise<Models.JobScheduleEnableResponse>;
  }

  /**
   * @summary Terminates a Job Schedule.
   * @param jobScheduleId The ID of the Job Schedule to terminates.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobScheduleTerminateResponse>
   */
  terminate(jobScheduleId: string, options?: Models.JobScheduleTerminateOptionalParams): Promise<Models.JobScheduleTerminateResponse>;
  /**
   * @param jobScheduleId The ID of the Job Schedule to terminates.
   * @param callback The callback
   */
  terminate(jobScheduleId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param jobScheduleId The ID of the Job Schedule to terminates.
   * @param options The optional parameters
   * @param callback The callback
   */
  terminate(jobScheduleId: string, options: Models.JobScheduleTerminateOptionalParams, callback: msRest.ServiceCallback<void>): void;
  terminate(jobScheduleId: string, options?: Models.JobScheduleTerminateOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.JobScheduleTerminateResponse> {
    return this.client.sendOperationRequest(
      {
        jobScheduleId,
        options
      },
      terminateOperationSpec,
      callback) as Promise<Models.JobScheduleTerminateResponse>;
  }

  /**
   * @summary Adds a Job Schedule to the specified Account.
   * @param cloudJobSchedule The Job Schedule to be added.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobScheduleAddResponse>
   */
  add(cloudJobSchedule: Models.JobScheduleAddParameter, options?: Models.JobScheduleAddOptionalParams): Promise<Models.JobScheduleAddResponse>;
  /**
   * @param cloudJobSchedule The Job Schedule to be added.
   * @param callback The callback
   */
  add(cloudJobSchedule: Models.JobScheduleAddParameter, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param cloudJobSchedule The Job Schedule to be added.
   * @param options The optional parameters
   * @param callback The callback
   */
  add(cloudJobSchedule: Models.JobScheduleAddParameter, options: Models.JobScheduleAddOptionalParams, callback: msRest.ServiceCallback<void>): void;
  add(cloudJobSchedule: Models.JobScheduleAddParameter, options?: Models.JobScheduleAddOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.JobScheduleAddResponse> {
    return this.client.sendOperationRequest(
      {
        cloudJobSchedule,
        options
      },
      addOperationSpec,
      callback) as Promise<Models.JobScheduleAddResponse>;
  }

  /**
   * @summary Lists all of the Job Schedules in the specified Account.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobScheduleListResponse>
   */
  list(options?: Models.JobScheduleListOptionalParams): Promise<Models.JobScheduleListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.CloudJobScheduleListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.JobScheduleListOptionalParams, callback: msRest.ServiceCallback<Models.CloudJobScheduleListResult>): void;
  list(options?: Models.JobScheduleListOptionalParams | msRest.ServiceCallback<Models.CloudJobScheduleListResult>, callback?: msRest.ServiceCallback<Models.CloudJobScheduleListResult>): Promise<Models.JobScheduleListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.JobScheduleListResponse>;
  }

  /**
   * @summary Lists all of the Job Schedules in the specified Account.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobScheduleListResponse>
   */
  listNext(nextPageLink: string, options?: Models.JobScheduleListNextOptionalParams): Promise<Models.JobScheduleListResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CloudJobScheduleListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.JobScheduleListNextOptionalParams, callback: msRest.ServiceCallback<Models.CloudJobScheduleListResult>): void;
  listNext(nextPageLink: string, options?: Models.JobScheduleListNextOptionalParams | msRest.ServiceCallback<Models.CloudJobScheduleListResult>, callback?: msRest.ServiceCallback<Models.CloudJobScheduleListResult>): Promise<Models.JobScheduleListResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.JobScheduleListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const existsOperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "jobschedules/{jobScheduleId}",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobScheduleId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout31
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId39,
    Parameters.returnClientRequestId39,
    Parameters.ocpDate39,
    Parameters.ifMatch8,
    Parameters.ifNoneMatch8,
    Parameters.ifModifiedSince12,
    Parameters.ifUnmodifiedSince12
  ],
  responses: {
    200: {
      headersMapper: Mappers.JobScheduleExistsHeaders
    },
    404: {
      headersMapper: Mappers.JobScheduleExistsHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobScheduleExistsHeaders
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "jobschedules/{jobScheduleId}",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobScheduleId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout32,
    Parameters.force0
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId40,
    Parameters.returnClientRequestId40,
    Parameters.ocpDate40,
    Parameters.ifMatch9,
    Parameters.ifNoneMatch9,
    Parameters.ifModifiedSince13,
    Parameters.ifUnmodifiedSince13
  ],
  responses: {
    202: {
      headersMapper: Mappers.JobScheduleDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobScheduleDeleteHeaders
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "jobschedules/{jobScheduleId}",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobScheduleId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.select4,
    Parameters.expand2,
    Parameters.timeout33
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId41,
    Parameters.returnClientRequestId41,
    Parameters.ocpDate41,
    Parameters.ifMatch10,
    Parameters.ifNoneMatch10,
    Parameters.ifModifiedSince14,
    Parameters.ifUnmodifiedSince14
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CloudJobSchedule,
      headersMapper: Mappers.JobScheduleGetHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobScheduleGetHeaders
    }
  },
  serializer
};

const patchOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "jobschedules/{jobScheduleId}",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobScheduleId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout34
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId42,
    Parameters.returnClientRequestId42,
    Parameters.ocpDate42,
    Parameters.ifMatch11,
    Parameters.ifNoneMatch11,
    Parameters.ifModifiedSince15,
    Parameters.ifUnmodifiedSince15
  ],
  requestBody: {
    parameterPath: "jobSchedulePatchParameter",
    mapper: {
      ...Mappers.JobSchedulePatchParameter,
      required: true
    }
  },
  contentType: "application/json; odata=minimalmetadata; charset=utf-8",
  responses: {
    200: {
      headersMapper: Mappers.JobSchedulePatchHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobSchedulePatchHeaders
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "jobschedules/{jobScheduleId}",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobScheduleId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout35
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId43,
    Parameters.returnClientRequestId43,
    Parameters.ocpDate43,
    Parameters.ifMatch12,
    Parameters.ifNoneMatch12,
    Parameters.ifModifiedSince16,
    Parameters.ifUnmodifiedSince16
  ],
  requestBody: {
    parameterPath: "jobScheduleUpdateParameter",
    mapper: {
      ...Mappers.JobScheduleUpdateParameter,
      required: true
    }
  },
  contentType: "application/json; odata=minimalmetadata; charset=utf-8",
  responses: {
    200: {
      headersMapper: Mappers.JobScheduleUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobScheduleUpdateHeaders
    }
  },
  serializer
};

const disableOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "jobschedules/{jobScheduleId}/disable",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobScheduleId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout36
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId44,
    Parameters.returnClientRequestId44,
    Parameters.ocpDate44,
    Parameters.ifMatch13,
    Parameters.ifNoneMatch13,
    Parameters.ifModifiedSince17,
    Parameters.ifUnmodifiedSince17
  ],
  responses: {
    204: {
      headersMapper: Mappers.JobScheduleDisableHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobScheduleDisableHeaders
    }
  },
  serializer
};

const enableOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "jobschedules/{jobScheduleId}/enable",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobScheduleId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout37
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId45,
    Parameters.returnClientRequestId45,
    Parameters.ocpDate45,
    Parameters.ifMatch14,
    Parameters.ifNoneMatch14,
    Parameters.ifModifiedSince18,
    Parameters.ifUnmodifiedSince18
  ],
  responses: {
    204: {
      headersMapper: Mappers.JobScheduleEnableHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobScheduleEnableHeaders
    }
  },
  serializer
};

const terminateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "jobschedules/{jobScheduleId}/terminate",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobScheduleId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout38,
    Parameters.force1
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId46,
    Parameters.returnClientRequestId46,
    Parameters.ocpDate46,
    Parameters.ifMatch15,
    Parameters.ifNoneMatch15,
    Parameters.ifModifiedSince19,
    Parameters.ifUnmodifiedSince19
  ],
  responses: {
    202: {
      headersMapper: Mappers.JobScheduleTerminateHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobScheduleTerminateHeaders
    }
  },
  serializer
};

const addOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "jobschedules",
  urlParameters: [
    Parameters.batchUrl
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout39
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId47,
    Parameters.returnClientRequestId47,
    Parameters.ocpDate47
  ],
  requestBody: {
    parameterPath: "cloudJobSchedule",
    mapper: {
      ...Mappers.JobScheduleAddParameter,
      required: true
    }
  },
  contentType: "application/json; odata=minimalmetadata; charset=utf-8",
  responses: {
    201: {
      headersMapper: Mappers.JobScheduleAddHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobScheduleAddHeaders
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "jobschedules",
  urlParameters: [
    Parameters.batchUrl
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter7,
    Parameters.select5,
    Parameters.expand3,
    Parameters.maxResults8,
    Parameters.timeout40
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId48,
    Parameters.returnClientRequestId48,
    Parameters.ocpDate48
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CloudJobScheduleListResult,
      headersMapper: Mappers.JobScheduleListHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobScheduleListHeaders
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "{batchUrl}",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId49,
    Parameters.returnClientRequestId49,
    Parameters.ocpDate49
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CloudJobScheduleListResult,
      headersMapper: Mappers.JobScheduleListHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobScheduleListHeaders
    }
  },
  serializer
};
