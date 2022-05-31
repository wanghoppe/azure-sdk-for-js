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
  VirtualMachineScaleSetVMInstanceRequiredIDs,
  VirtualMachineScaleSetsDeleteInstancesOptionalParams,
  ComputeManagementClient
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Deletes virtual machines in a VM scale set.
 *
 * @summary Deletes virtual machines in a VM scale set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2022-03-01/ComputeRP/examples/virtualMachineScaleSetExamples/VirtualMachineScaleSets_DeleteInstances_MaximumSet_Gen.json
 */
async function virtualMachineScaleSetsDeleteInstancesMaximumSetGen() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "rgcompute";
  const vmScaleSetName = "aaaaaaaaaaaaaaaaaaaa";
  const forceDeletion = true;
  const vmInstanceIDs: VirtualMachineScaleSetVMInstanceRequiredIDs = {
    instanceIds: ["aaaaaaaaaaaaaaaaaaaaaaaaa"]
  };
  const options: VirtualMachineScaleSetsDeleteInstancesOptionalParams = {
    forceDeletion
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSets.beginDeleteInstancesAndWait(
    resourceGroupName,
    vmScaleSetName,
    vmInstanceIDs,
    options
  );
  console.log(result);
}

virtualMachineScaleSetsDeleteInstancesMaximumSetGen().catch(console.error);

/**
 * This sample demonstrates how to Deletes virtual machines in a VM scale set.
 *
 * @summary Deletes virtual machines in a VM scale set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2022-03-01/ComputeRP/examples/virtualMachineScaleSetExamples/VirtualMachineScaleSets_DeleteInstances_MinimumSet_Gen.json
 */
async function virtualMachineScaleSetsDeleteInstancesMinimumSetGen() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "rgcompute";
  const vmScaleSetName = "aaaaaaaaaaaaaaa";
  const vmInstanceIDs: VirtualMachineScaleSetVMInstanceRequiredIDs = {
    instanceIds: ["aaaaaaaaaaaaaaaaaaaaaaaaa"]
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSets.beginDeleteInstancesAndWait(
    resourceGroupName,
    vmScaleSetName,
    vmInstanceIDs
  );
  console.log(result);
}

virtualMachineScaleSetsDeleteInstancesMinimumSetGen().catch(console.error);
