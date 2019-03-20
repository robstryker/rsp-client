import { Protocol } from './protocol';
import { Messages } from './messages';
import { Common } from '../../util/common';
import { MessageConnection } from 'vscode-jsonrpc';
import { EventEmitter } from 'events';

/**
 * Server Outgoing
 */
export class Outgoing {

    private connection: MessageConnection;

     /**
     * Constructs a new discovery handler
     * @param connection message connection to the RSP
     * @param emitter event emitter to handle notification events
     */
    constructor(connection: MessageConnection, emitter: EventEmitter) {
        this.connection = connection;
    }
    registerClientCapabilitiesAsync(param: Protocol.ClientCapabilitiesRequest, timeout: number = 2000): Promise<Protocol.ServerCapabilitiesResponse> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.RegisterClientCapabilitiesRequest.type,
            param, timeout, ErrorMessages.REGISTERCLIENTCAPABILITIES_TIMEOUT);
    }
    shutdownAsync(timeout: number = 2000): void {
        return Common.sendSimpleNotification(this.connection, Messages.Server.ShutdownNotification.type, null);
    }
    getDiscoveryPathsAsync(timeout: number = 2000): Promise<Array<Protocol.DiscoveryPath>> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.GetDiscoveryPathsRequest.type,
            null, timeout, ErrorMessages.GETDISCOVERYPATHS_TIMEOUT);
    }
    findServerBeansAsync(param: Protocol.DiscoveryPath, timeout: number = 2000): Promise<Array<Protocol.ServerBean>> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.FindServerBeansRequest.type,
            param, timeout, ErrorMessages.FINDSERVERBEANS_TIMEOUT);
    }
    addDiscoveryPathAsync(param: Protocol.DiscoveryPath, timeout: number = 2000): Promise<Protocol.Status> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.AddDiscoveryPathRequest.type,
            param, timeout, ErrorMessages.ADDDISCOVERYPATH_TIMEOUT);
    }
    removeDiscoveryPathAsync(param: Protocol.DiscoveryPath, timeout: number = 2000): Promise<Protocol.Status> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.RemoveDiscoveryPathRequest.type,
            param, timeout, ErrorMessages.REMOVEDISCOVERYPATH_TIMEOUT);
    }
    getServerHandlesAsync(timeout: number = 2000): Promise<Array<Protocol.ServerHandle>> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.GetServerHandlesRequest.type,
            null, timeout, ErrorMessages.GETSERVERHANDLES_TIMEOUT);
    }
    getServerTypesAsync(timeout: number = 2000): Promise<Array<Protocol.ServerType>> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.GetServerTypesRequest.type,
            null, timeout, ErrorMessages.GETSERVERTYPES_TIMEOUT);
    }
    deleteServerAsync(param: Protocol.ServerHandle, timeout: number = 2000): Promise<Protocol.Status> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.DeleteServerRequest.type,
            param, timeout, ErrorMessages.DELETESERVER_TIMEOUT);
    }
    getRequiredAttributesAsync(param: Protocol.ServerType, timeout: number = 2000): Promise<Protocol.Attributes> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.GetRequiredAttributesRequest.type,
            param, timeout, ErrorMessages.GETREQUIREDATTRIBUTES_TIMEOUT);
    }
    getOptionalAttributesAsync(param: Protocol.ServerType, timeout: number = 2000): Promise<Protocol.Attributes> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.GetOptionalAttributesRequest.type,
            param, timeout, ErrorMessages.GETOPTIONALATTRIBUTES_TIMEOUT);
    }
    createServerAsync(param: Protocol.ServerAttributes, timeout: number = 2000): Promise<Protocol.CreateServerResponse> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.CreateServerRequest.type,
            param, timeout, ErrorMessages.CREATESERVER_TIMEOUT);
    }
    getLaunchModesAsync(param: Protocol.ServerType, timeout: number = 2000): Promise<Array<Protocol.ServerLaunchMode>> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.GetLaunchModesRequest.type,
            param, timeout, ErrorMessages.GETLAUNCHMODES_TIMEOUT);
    }
    getRequiredLaunchAttributesAsync(param: Protocol.LaunchAttributesRequest, timeout: number = 2000): Promise<Protocol.Attributes> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.GetRequiredLaunchAttributesRequest.type,
            param, timeout, ErrorMessages.GETREQUIREDLAUNCHATTRIBUTES_TIMEOUT);
    }
    getOptionalLaunchAttributesAsync(param: Protocol.LaunchAttributesRequest, timeout: number = 2000): Promise<Protocol.Attributes> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.GetOptionalLaunchAttributesRequest.type,
            param, timeout, ErrorMessages.GETOPTIONALLAUNCHATTRIBUTES_TIMEOUT);
    }
    getLaunchCommandAsync(param: Protocol.LaunchParameters, timeout: number = 2000): Promise<Protocol.CommandLineDetails> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.GetLaunchCommandRequest.type,
            param, timeout, ErrorMessages.GETLAUNCHCOMMAND_TIMEOUT);
    }
    serverStartingByClientAsync(param: Protocol.ServerStartingAttributes, timeout: number = 2000): Promise<Protocol.Status> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.ServerStartingByClientRequest.type,
            param, timeout, ErrorMessages.SERVERSTARTINGBYCLIENT_TIMEOUT);
    }
    serverStartedByClientAsync(param: Protocol.LaunchParameters, timeout: number = 2000): Promise<Protocol.Status> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.ServerStartedByClientRequest.type,
            param, timeout, ErrorMessages.SERVERSTARTEDBYCLIENT_TIMEOUT);
    }
    getServerStateAsync(param: Protocol.ServerHandle, timeout: number = 2000): Promise<Protocol.ServerState> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.GetServerStateRequest.type,
            param, timeout, ErrorMessages.GETSERVERSTATE_TIMEOUT);
    }
    startServerAsyncAsync(param: Protocol.LaunchParameters, timeout: number = 2000): Promise<Protocol.StartServerResponse> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.StartServerAsyncRequest.type,
            param, timeout, ErrorMessages.STARTSERVERASYNC_TIMEOUT);
    }
    stopServerAsyncAsync(param: Protocol.StopServerAttributes, timeout: number = 2000): Promise<Protocol.Status> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.StopServerAsyncRequest.type,
            param, timeout, ErrorMessages.STOPSERVERASYNC_TIMEOUT);
    }
    getDeployablesAsync(param: Protocol.ServerHandle, timeout: number = 2000): Promise<Array<Protocol.DeployableState>> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.GetDeployablesRequest.type,
            param, timeout, ErrorMessages.GETDEPLOYABLES_TIMEOUT);
    }
    addDeployableAsync(param: Protocol.ModifyDeployableRequest, timeout: number = 2000): Promise<Protocol.Status> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.AddDeployableRequest.type,
            param, timeout, ErrorMessages.ADDDEPLOYABLE_TIMEOUT);
    }
    removeDeployableAsync(param: Protocol.ModifyDeployableRequest, timeout: number = 2000): Promise<Protocol.Status> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.RemoveDeployableRequest.type,
            param, timeout, ErrorMessages.REMOVEDEPLOYABLE_TIMEOUT);
    }
    publishAsync(param: Protocol.PublishServerRequest, timeout: number = 2000): Promise<Protocol.Status> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.PublishRequest.type,
            param, timeout, ErrorMessages.PUBLISH_TIMEOUT);
    }
    listDownloadableRuntimesAsync(timeout: number = 2000): Promise<Protocol.ListDownloadRuntimeResponse> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.ListDownloadableRuntimesRequest.type,
            null, timeout, ErrorMessages.LISTDOWNLOADABLERUNTIMES_TIMEOUT);
    }
    downloadRuntimeAsync(param: Protocol.DownloadSingleRuntimeRequest, timeout: number = 2000): Promise<Protocol.WorkflowResponse> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.DownloadRuntimeRequest.type,
            param, timeout, ErrorMessages.DOWNLOADRUNTIME_TIMEOUT);
    }
    getJobsAsync(timeout: number = 2000): Promise<Array<Protocol.JobProgress>> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.GetJobsRequest.type,
            null, timeout, ErrorMessages.GETJOBS_TIMEOUT);
    }
    cancelJobAsync(param: Protocol.JobHandle, timeout: number = 2000): Promise<Protocol.Status> {
        return Common.sendSimpleRequest(this.connection, Messages.Server.CancelJobRequest.type,
            param, timeout, ErrorMessages.CANCELJOB_TIMEOUT);
    }
}
/**
 * Error messages
 */
export namespace ErrorMessages {
    export const REGISTERCLIENTCAPABILITIES_TIMEOUT = 'Failed to register client capabilities in time';
    export const SHUTDOWN_TIMEOUT = 'Failed to shutdown in time';
    export const GETDISCOVERYPATHS_TIMEOUT = 'Failed to get discovery paths in time';
    export const FINDSERVERBEANS_TIMEOUT = 'Failed to find server beans in time';
    export const ADDDISCOVERYPATH_TIMEOUT = 'Failed to add discovery path in time';
    export const REMOVEDISCOVERYPATH_TIMEOUT = 'Failed to remove discovery path in time';
    export const GETSERVERHANDLES_TIMEOUT = 'Failed to get server handles in time';
    export const GETSERVERTYPES_TIMEOUT = 'Failed to get server types in time';
    export const DELETESERVER_TIMEOUT = 'Failed to delete server in time';
    export const GETREQUIREDATTRIBUTES_TIMEOUT = 'Failed to get required attributes in time';
    export const GETOPTIONALATTRIBUTES_TIMEOUT = 'Failed to get optional attributes in time';
    export const CREATESERVER_TIMEOUT = 'Failed to create server in time';
    export const GETLAUNCHMODES_TIMEOUT = 'Failed to get launch modes in time';
    export const GETREQUIREDLAUNCHATTRIBUTES_TIMEOUT = 'Failed to get required launch attributes in time';
    export const GETOPTIONALLAUNCHATTRIBUTES_TIMEOUT = 'Failed to get optional launch attributes in time';
    export const GETLAUNCHCOMMAND_TIMEOUT = 'Failed to get launch command in time';
    export const SERVERSTARTINGBYCLIENT_TIMEOUT = 'Failed to server starting by client in time';
    export const SERVERSTARTEDBYCLIENT_TIMEOUT = 'Failed to server started by client in time';
    export const GETSERVERSTATE_TIMEOUT = 'Failed to get server state in time';
    export const STARTSERVERASYNC_TIMEOUT = 'Failed to start server async in time';
    export const STOPSERVERASYNC_TIMEOUT = 'Failed to stop server async in time';
    export const GETDEPLOYABLES_TIMEOUT = 'Failed to get deployables in time';
    export const ADDDEPLOYABLE_TIMEOUT = 'Failed to add deployable in time';
    export const REMOVEDEPLOYABLE_TIMEOUT = 'Failed to remove deployable in time';
    export const PUBLISH_TIMEOUT = 'Failed to publish in time';
    export const LISTDOWNLOADABLERUNTIMES_TIMEOUT = 'Failed to list downloadable runtimes in time';
    export const DOWNLOADRUNTIME_TIMEOUT = 'Failed to download runtime in time';
    export const GETJOBS_TIMEOUT = 'Failed to get jobs in time';
    export const CANCELJOB_TIMEOUT = 'Failed to cancel job in time';
}
