/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { QumuloStorage } = require("@azure/arm-qumulo");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create a FileSystemResource
 *
 * @summary Create a FileSystemResource
 * x-ms-original-file: specification/liftrqumulo/resource-manager/Qumulo.Storage/stable/2024-06-19/examples/FileSystems_CreateOrUpdate_MaximumSet_Gen.json
 */
async function fileSystemsCreateOrUpdate() {
  const subscriptionId =
    process.env["LIFTRQUMULO_SUBSCRIPTION_ID"] || "382E8C7A-AC80-4D70-8580-EFE99537B9B7";
  const resourceGroupName = process.env["LIFTRQUMULO_RESOURCE_GROUP"] || "rgQumulo";
  const fileSystemName = "hfcmtgaes";
  const resource = {
    adminPassword: "fakeTestSecretPlaceholder",
    availabilityZone: "eqdvbdiuwmhhzqzmksmwllpddqquwt",
    clusterLoginUrl: "ykaynsjvhihdthkkvvodjrgc",
    delegatedSubnetId: "jykmxrf",
    identity: { type: "None", userAssignedIdentities: { key7679: {} } },
    location: "pnb",
    marketplaceDetails: {
      marketplaceSubscriptionId: "xaqtkloiyovmexqhn",
      marketplaceSubscriptionStatus: "PendingFulfillmentStart",
      offerId: "s",
      planId: "fwtpz",
      publisherId: "czxcfrwodazyaft",
      termUnit: "cfwwczmygsimcyvoclcw",
    },
    privateIPs: ["gzken"],
    storageSku: "yhyzby",
    tags: { key7090: "rurrdiaqp" },
    userDetails: { email: "aqsnzyroo" },
  };
  const credential = new DefaultAzureCredential();
  const client = new QumuloStorage(credential, subscriptionId);
  const result = await client.fileSystems.beginCreateOrUpdateAndWait(
    resourceGroupName,
    fileSystemName,
    resource,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create a FileSystemResource
 *
 * @summary Create a FileSystemResource
 * x-ms-original-file: specification/liftrqumulo/resource-manager/Qumulo.Storage/stable/2024-06-19/examples/FileSystems_CreateOrUpdate_MinimumSet_Gen.json
 */
async function fileSystemsCreateOrUpdateMinimumSetGen() {
  const subscriptionId = process.env["LIFTRQUMULO_SUBSCRIPTION_ID"] || "aaaaaaaaaaaaaaaaaaaaaaaa";
  const resourceGroupName = process.env["LIFTRQUMULO_RESOURCE_GROUP"] || "rgopenapi";
  const fileSystemName = "aaaaaaaa";
  const resource = {
    adminPassword: "fakeTestSecretPlaceholder",
    delegatedSubnetId: "aaaaaaaaaa",
    location: "aaaaaaaaaaaaaaaaaaaaaaaaa",
    marketplaceDetails: {
      marketplaceSubscriptionId: "aaaaaaaaaaaaa",
      marketplaceSubscriptionStatus: "PendingFulfillmentStart",
      offerId: "aaaaaaaaaaaaaaaaaaaaaaaaa",
      planId: "aaaaaa",
    },
    storageSku: "Standard",
    userDetails: { email: "viptslwulnpaupfljvnjeq" },
  };
  const credential = new DefaultAzureCredential();
  const client = new QumuloStorage(credential, subscriptionId);
  const result = await client.fileSystems.beginCreateOrUpdateAndWait(
    resourceGroupName,
    fileSystemName,
    resource,
  );
  console.log(result);
}

async function main() {
  fileSystemsCreateOrUpdate();
  fileSystemsCreateOrUpdateMinimumSetGen();
}

main().catch(console.error);
