/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  BackupVaultOperationResultsGetOptionalParams,
  BackupVaultOperationResultsGetResponse,
} from "../models";

/** Interface representing a BackupVaultOperationResults. */
export interface BackupVaultOperationResults {
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param operationId
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    operationId: string,
    options?: BackupVaultOperationResultsGetOptionalParams,
  ): Promise<BackupVaultOperationResultsGetResponse>;
}
