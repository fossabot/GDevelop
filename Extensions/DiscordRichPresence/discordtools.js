/**
 * Thoose are tools for Discord Rich Presence
 * @fileoverview
 * @license MIT
 * @author Arthur Pacaud (arthuro555)
 */

/**
 * The namespace with Discord Rich Presence tools
 * @namespace
 * @static
 */
gdjs.evtTools.discordRP = {
    /**
     * The current Instance of the Discord RPC Client
     * @type {RPC.Client}
     */
    clientInstance: null,

    /**
     * The Game start Timestamp
     * @type {Date}
     */
    startTimestamp: new Date(),

    /**
     * Variable where to send errors
     * @type {gdjs.Variable}
     */
    errorVar: null,

    /**
     * The object sent to the Discord App with the properties of the Rich Presence
     */
    richPresenseProperties: {
        details: `Desciption`,
        state: 'State',
        startTimestamp: new Date(),
        largeImageKey: 'largeImage',
        largeImageText: 'largeImage',
        smallImageKey: 'smallImage',
        smallImageText: 'smallImage',
        instance: false,
    },

    /**
     * Creates a Discord Client connected to the Discord App
     * @param {string} clientID A string with the apps ClientID.
     * @param {gdjs.Variable} [scopes] A variable with childs for the scopes (if any)
     * @param {"ipc" || "websocket"} [transport] The transport type. Either "ipc" or "websocket". By default "ipc".
     * @param {gdjs.Variable} [errorVar] Variable where to store errors.
     */
    connectToDiscord(clientID, scopes, transport, errorVar) {
        // Register the ClientID
        RPC.register(clientID);

        // Verify transport
        transport ? transport : "ipc";
        if (transport !== "ipc" || transport !== "websocket") { transport = "ipc"};

        // Parse the childs of scopes
        scopes = Object.keys(scopes.getAllChildren());

        // Set the error Variable
        errorVar ? gdjs.evtTools.discordRP.errorVar = errorVar : null;

        // Reset the client instanciation Time
        gdjs.evtTools.discordRP.startTimestamp = new Date();

        // Create the actual client with correct parameters, set the update loop and login
        gdjs.evtTools.discordRP.clientInstance = new RPC.Client({ transport: transport });
        gdjs.evtTools.discordRP.clientInstance.on('ready', () => {
            setInterval(() => {
                gdjs.evtTools.discordRP.updateRichPresence();
            }, 15e3);
        });
        gdjs.evtTools.discordRP.clientInstance.login({ clientID }).catch(gdjs.evtTools.discordRP._errorHandler);
    },

    /**
     * Update the Rich Presence properties
     */
    updateRichPresence() {
        gdjs.evtTools.discordRP.clientInstance.setActivity(gdjs.evtTools.discordRP.richPresenseProperties);
    },

    /**
     * Sets the string of the error Variable to the error.
     * @param {object} e The Error
     * @protected
     */
    _errorHandler(e) {
        console.error(e);
        gdjs.evtTools.discordRP.errorVar.setString(e.toString())
    }
};
