/**
 * Those are the functions that creates and manages neuronal networks using neataptic.
 *
 * @memberof gdjs.evtTools
 * @class aiExtension
 * @static
 * @private
 */

let neataptic = require('./neataptic');
import {gdjs} from 'gdjs';

// those imports are just for my ide to know what I use to enable auto-completiton
// (the gdjs import is just a npm package with the GDJS/Runtime files).

let Neat = neataptic.Neat;
let Network = neataptic.Network;

/**
 * @class
 * @type {{}}
 */
gdjs.evtTools.aiExtension = {};
gdjs.evtTools.aiExtension.AIList = {};

/**
 * Create a Neuronal Network
 * @function
 * @memberOf gdjs.evtTools.aiExtension
 * @param {string} name Name of the Neuronal Network
 * @param {number} inputs Number of inputs
 * @param {number} outputs Number of outputs
 * @return {number}
 */
gdjs.evtTools.aiExtension.createNEAT = function(name, inputs, outputs, options) {
    options = JSON.parse(options);
    if(options.popsize === undefined){options.popsize = 1}
    if(options.elitism === undefined){options.elitism = 0.2}
    if(options.mutationRate === undefined){options.mutationRate = 0.5}
    if(options.mutationAmount === undefined){options.mutationAmount = 3}
    let neat = new Neat(inputs, outputs, null, options);
    gdjs.evtTools.aiExtension.AIList[name] = neat;
    return 1;
};

/**
 * Create a Neuronal Network
 * @function
 * @memberOf gdjs.evtTools.aiExtension
 * @param {string} name Name of the Neuronal Network
 * @param {number} inputs Number of inputs
 * @param {number} outputs Number of outputs
 * @return {number}
 */
gdjs.evtTools.aiExtension.createNeuronalNetwork = function(name, inputs, outputs) {
    let network = new Network(inputs, outputs);
    gdjs.evtTools.aiExtension.AIList[name] = network;
    return 1;
};

/**
 * Trains A Neuronal network with NEAT algorythms.
 * @function
 * @memberOf gdjs.evtTools.aiExtension
 * @param {string} name Name of the Neuronal Network
 * @param {string} inputs Inputs in form of JSON
 * @param {string} options options to pass to neataptic in form of JSON
 * @return {number}
 */
gdjs.evtTools.aiExtension.TrainNN = function(name, inputs, options) {
    let network = gdjs.evtTools.aiExtension.AIList[name];
    if (network === undefined){return 0}
    inputs = JSON.parse(inputs);
    options = JSON.parse(options);
    if(options.mutation === undefined){options.mutation = methods.mutation.ALL}
    if(options.elitism === undefined){options.elitism = 10}
    if(options.error === undefined){options.error = 0.05}
    if(options.iterations === undefined){options.iterations = 1000}
    if(options.mutationRate === undefined){options.mutationRate = 0.5}
    network.evolve(inputs,options);
    return 1;
};

console.log("AI Ready");
