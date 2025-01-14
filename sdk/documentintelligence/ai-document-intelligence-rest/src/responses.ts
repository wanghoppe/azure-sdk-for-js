// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  PagedOperationDetailsOutput,
  ErrorResponseOutput,
  DocumentModelBuildOperationDetailsOutput,
  DocumentModelComposeOperationDetailsOutput,
  DocumentModelCopyToOperationDetailsOutput,
  DocumentClassifierBuildOperationDetailsOutput,
  OperationDetailsOutput,
  ResourceDetailsOutput,
  AnalyzeResultOperationOutput,
  DocumentModelDetailsOutput,
  CopyAuthorizationOutput,
  PagedDocumentModelDetailsOutput,
  PagedDocumentClassifierDetailsOutput,
  DocumentClassifierDetailsOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface ListOperations200Response extends HttpResponse {
  status: "200";
  body: PagedOperationDetailsOutput;
}

export interface ListOperationsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetDocumentModelBuildOperation200Response extends HttpResponse {
  status: "200";
  body: DocumentModelBuildOperationDetailsOutput;
}

export interface GetDocumentModelBuildOperationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetDocumentModelComposeOperation200Response extends HttpResponse {
  status: "200";
  body: DocumentModelComposeOperationDetailsOutput;
}

export interface GetDocumentModelComposeOperationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetDocumentModelCopyToOperation200Response extends HttpResponse {
  status: "200";
  body: DocumentModelCopyToOperationDetailsOutput;
}

export interface GetDocumentModelCopyToOperationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetDocumentClassifierBuildOperation200Response extends HttpResponse {
  status: "200";
  body: DocumentClassifierBuildOperationDetailsOutput;
}

export interface GetDocumentClassifierBuildOperationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetOperation200Response extends HttpResponse {
  status: "200";
  body: OperationDetailsOutput;
}

export interface GetOperationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetResourceInfo200Response extends HttpResponse {
  status: "200";
  body: ResourceDetailsOutput;
}

export interface GetResourceInfoDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetAnalyzeResult200Response extends HttpResponse {
  status: "200";
  body: AnalyzeResultOperationOutput;
}

export interface GetAnalyzeResultDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface AnalyzeDocumentFromStream202Headers {
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface AnalyzeDocumentFromStream202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & AnalyzeDocumentFromStream202Headers;
}

export interface AnalyzeDocumentFromStreamDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running analyzeDocumentFromStream operation */
export interface AnalyzeDocumentFromStreamLogicalResponse extends HttpResponse {
  status: "200";
}

export interface AnalyzeDocument202Headers {
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface AnalyzeDocument202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & AnalyzeDocument202Headers;
}

export interface AnalyzeDocumentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running analyzeDocument operation */
export interface AnalyzeDocumentLogicalResponse extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface GetModel200Response extends HttpResponse {
  status: "200";
  body: DocumentModelDetailsOutput;
}

export interface GetModelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface BuildModel202Headers {
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface BuildModel202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & BuildModel202Headers;
}

export interface BuildModelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running buildModel operation */
export interface BuildModelLogicalResponse extends HttpResponse {
  status: "200";
}

export interface ComposeModel202Headers {
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface ComposeModel202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & ComposeModel202Headers;
}

export interface ComposeModelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running composeModel operation */
export interface ComposeModelLogicalResponse extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface AuthorizeModelCopy200Response extends HttpResponse {
  status: "200";
  body: CopyAuthorizationOutput;
}

export interface AuthorizeModelCopyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface CopyModelTo202Headers {
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface CopyModelTo202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & CopyModelTo202Headers;
}

export interface CopyModelToDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running copyModelTo operation */
export interface CopyModelToLogicalResponse extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface ListModels200Response extends HttpResponse {
  status: "200";
  body: PagedDocumentModelDetailsOutput;
}

export interface ListModelsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteModel204Response extends HttpResponse {
  status: "204";
}

export interface DeleteModelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface BuildClassifier202Headers {
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface BuildClassifier202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & BuildClassifier202Headers;
}

export interface BuildClassifierDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running buildClassifier operation */
export interface BuildClassifierLogicalResponse extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface ListClassifiers200Response extends HttpResponse {
  status: "200";
  body: PagedDocumentClassifierDetailsOutput;
}

export interface ListClassifiersDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetClassifier200Response extends HttpResponse {
  status: "200";
  body: DocumentClassifierDetailsOutput;
}

export interface GetClassifierDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteClassifier204Response extends HttpResponse {
  status: "204";
}

export interface DeleteClassifierDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface ClassifyDocumentFromStream202Headers {
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface ClassifyDocumentFromStream202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & ClassifyDocumentFromStream202Headers;
}

export interface ClassifyDocumentFromStreamDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running classifyDocumentFromStream operation */
export interface ClassifyDocumentFromStreamLogicalResponse extends HttpResponse {
  status: "200";
}

export interface ClassifyDocument202Headers {
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface ClassifyDocument202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & ClassifyDocument202Headers;
}

export interface ClassifyDocumentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running classifyDocument operation */
export interface ClassifyDocumentLogicalResponse extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface GetClassifyResult200Response extends HttpResponse {
  status: "200";
  body: AnalyzeResultOperationOutput;
}

export interface GetClassifyResultDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
