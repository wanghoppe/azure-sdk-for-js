/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  KubernetesVersionProfile,
  KubernetesVersionsListOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a KubernetesVersions. */
export interface KubernetesVersions {
  /**
   * Lists the supported kubernetes versions from the underlying custom location
   * @param customLocationResourceUri The fully qualified Azure Resource manager identifier of the custom
   *                                  location resource.
   * @param options The options parameters.
   */
  list(
    customLocationResourceUri: string,
    options?: KubernetesVersionsListOptionalParams
  ): PagedAsyncIterableIterator<KubernetesVersionProfile>;
}
