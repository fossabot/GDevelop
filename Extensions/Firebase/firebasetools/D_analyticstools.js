/**
 * Firebase Analytics Tools
 * @namespace
 */
gdjs.evtTools.firebase.analytics = {};

/**
 * Logs an Event/Conversion for that user on the Analytics.
 * @param {gdjs.RuntimeScene} [runtimeScene] The current {@link gdjs.RuntimeScene} instance.
 * @param {string} eventName The Event being triggered.
 * @param {string} [eventData] Additional Data for the event.
 */
gdjs.evtTools.firebase.analytics.log = function(runtimeScene, eventName, eventData) {
    let analytics = gdjs.evtTools.firebase.analytics._analyticsInstance;
    let eventProperties;
    try {
        eventProperties = JSON.parse(eventData);
    } catch {
        eventProperties = {eventData: eventData};
    }
    analytics.logEvent(eventName, eventProperties);
}

/**
 * Sets the User ID (The name under wich the user will appear on the analytics). 
 * Should be Unique if possible.
 * @param {gdjs.RuntimeScene} [runtimeScene] The current {@link gdjs.RuntimeScene} instance.
 * @param {string | number} newUID The new UserID.
 */
gdjs.evtTools.firebase.analytics.setUserID = function(runtimeScene, newUID) {
    let analytics = gdjs.evtTools.firebase.analytics._analyticsInstance;
    analytics.setUserId(newUID);
}

/**
 * Set an user's property.
 * @param {gdjs.RuntimeScene} [runtimeScene] The current {@link gdjs.RuntimeScene} instance.
 * @param {string} propertyName The property's name.
 * @param {string} [propertyData] The data associated to the property.
 */
gdjs.evtTools.firebase.analytics.setProperty = function(runtimeScene, propertyName, propertyData) {
    let analytics = gdjs.evtTools.firebase.analytics._analyticsInstance;
    let properties = {};
    try {
        properties[propertyName] = JSON.parse(propertyData);
    } catch {
        properties[propertyName] = propertyData;
    }
    console.log(properties);
    analytics.setUserProperties(properties);
}

/** Initialize Analytics SDK */
gdjs.registerFirstRuntimeSceneLoadedCallback(function() {
    gdjs.evtTools.firebase.analytics._analyticsInstance = firebase.analytics();
});

/** Callback For Setting the analytics current View to the current Scene */
gdjs.registerRuntimeSceneLoadedCallback(function(runtimeScene) {
    if(runtimeScene.getGame()._analyticsInstance) runtimeScene.getGame()._analyticsInstance.setCurrentScreen(runtimeScene.getName());
});