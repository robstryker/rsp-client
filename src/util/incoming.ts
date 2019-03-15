import { Protocol } from '../protocol/protocol';
import { Messages } from '../protocol/messages';
import { MessageConnection } from 'vscode-jsonrpc';
import { NotificationType, RequestType } from 'vscode-jsonrpc';
import { EventEmitter } from 'events';

/**
 * Server incoming
 */
export class Incoming {

    private connection: MessageConnection;
    private emitter: EventEmitter;

    /**
     * Constructs a new discovery handler
     * @param connection message connection to the RSP
     * @param emitter event emitter to handle notification events
     */
    constructor(connection: MessageConnection, emitter: EventEmitter) {
        this.connection = connection;
        this.emitter = emitter;
        this.listen();
    }

    /**
     * Subscribes to notifications sent by the server
     */
    private listen() {
        const type = new RequestType<Protocol.StringPrompt, string, void, void>('client/promptString');
        this.connection.onRequest(type, req => {
            this.emitter.emit('promptString', req);
        });
        this.connection.onNotification(Messages.Client.DiscoveryPathAddedNotification.type, discoveryPath => {
            this.emitter.emit('discoveryPathAdded', discoveryPath);
        });

        this.connection.onNotification(Messages.Client.DiscoveryPathRemovedNotification.type, discoveryPath => {
            this.emitter.emit('discoveryPathRemoved', discoveryPath);
        });
        this.connection.onNotification(Messages.Client.ServerAddedNotification.type, handle => {
            this.emitter.emit('serverAdded', handle);
        });

        this.connection.onNotification(Messages.Client.ServerRemovedNotification.type, handle => {
            this.emitter.emit('serverRemoved', handle);
        });
        this.connection.onNotification(Messages.Client.ServerProcessCreatedNotification.type, process => {
            this.emitter.emit('serverProcessCreated', process);
        });

        this.connection.onNotification(Messages.Client.ServerProcessOutputAppendedNotification.type, output => {
            this.emitter.emit('serverOutputAppended', output);
        });

        this.connection.onNotification(Messages.Client.ServerProcessTerminatedNotification.type, process => {
            this.emitter.emit('serverProcessTerminated', process);
        });

        this.connection.onNotification(Messages.Client.ServerAttributesChangedNotification.type, handle => {
            this.emitter.emit('serverAttributesChanged', handle);
        });

        this.connection.onNotification(Messages.Client.ServerStateChangedNotification.type, state => {
            this.emitter.emit('serverStateChanged', state);
        });

    }

    /**
     * Attaches a listener to discovery path added event
     *
     * @param listener callback to handle the event
     */
    onDiscoveryPathAdded(listener: (arg: Protocol.DiscoveryPath) => void): void {
        this.emitter.on('discoveryPathAdded', listener);
    }

    /**
     * Attaches a listener to discovery path removed event
     *
     * @param listener callback to handle the event
     */
    onDiscoveryPathRemoved(listener: (arg: Protocol.DiscoveryPath) => void): void {
        this.emitter.on('discoveryPathRemoved', listener);
    }

    /**
     * Attaches a listener to server creation event
     *
     * @param listener callback to handle the event
     */
    onServerAdded(listener: (arg: Protocol.ServerHandle) => void): void {
        this.emitter.on('serverAdded', listener);
    }

    /**
     * Attaches a listener to server deleteion event
     *
     * @param listener callback to handle the event
     */
    onServerRemoved(listener: (arg: Protocol.ServerHandle) => void): void {
        this.emitter.on('serverRemoved', listener);
    }

    /**
     * Attaches a listener to server state change
     *
     * @param listener callback to handle the event
     */
    onServerStateChange(listener: (arg: Protocol.ServerState) => void): void {
        this.emitter.on('serverStateChanged', listener);
    }

    /**
     * Attaches a listener to the server displaying new output
     *
     * @param listener callback to handle the event
     */
    onServerOutputAppended(listener: (arg: Protocol.ServerProcessOutput) => void): void {
        this.emitter.on('serverOutputAppended', listener);
    }

    /**
     * Attaches a listener to server attribute change
     *
     * @param listener callback to handle the event
     */
    onServerAttributeChange(listener: (arg: Protocol.ServerHandle) => void): void {
        this.emitter.on('serverAttributesChanged', listener);
    }

    /**
     * Attaches a listener to the server process being created
     *
     * @param listener callback to handle the event
     */
    onServerProcessCreated(listener: (arg: Protocol.ServerProcess) => void): void {
        this.emitter.on('serverProcessCreated', listener);
    }

    /**
     * Attaches a listener to the server process being terminated
     *
     * @param listener callback to handle the event
     */
    onServerProcessTerminated(listener: (arg: Protocol.ServerProcess) => void): void {
        this.emitter.on('serverProcessTerminated', listener);
    }

    /**
     * Register a listener for the onString prompt notification
     *
     * @param listener the listener to register
     */
    onStringPrompt(listener: (arg: Protocol.StringPrompt) => Promise<string>): void {
        this.emitter.on('promptString', listener);
    }

}
