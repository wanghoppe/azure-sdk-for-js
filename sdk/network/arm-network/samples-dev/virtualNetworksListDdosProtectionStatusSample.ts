/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  VirtualNetworksListDdosProtectionStatusOptionalParams,
  NetworkManagementClient,
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the Ddos Protection Status of all IP Addresses under the Virtual Network
 *
 * @summary Gets the Ddos Protection Status of all IP Addresses under the Virtual Network
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-01-01/examples/VirtualNetworkGetDdosProtectionStatus.json
 */
async function getDdosProtectionStatusOfAVirtualNetwork() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const virtualNetworkName = "test-vnet";
  const top = 75;
  const options: VirtualNetworksListDdosProtectionStatusOptionalParams = {
    top,
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.virtualNetworks.beginListDdosProtectionStatusAndWait(
    resourceGroupName,
    virtualNetworkName,
    options,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getDdosProtectionStatusOfAVirtualNetwork();
}

main().catch(console.error);
