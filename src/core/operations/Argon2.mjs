/**
 * @author mshwed [m@ttshwed.com]
 * @copyright Crown Copyright 2019
 * @license Apache-2.0
 */

import Operation from "../Operation.mjs";
import OperationError from "../errors/OperationError.mjs";
import {isWorkerEnvironment} from "../Utils.mjs";
import forge from "node-forge/dist/forge.min.js";
// import argon2 from "argon2-browser";
/**
 * Argon2 operation
 */
class Argon2 extends Operation {

    /**
     * Argon2 constructor
     */
    constructor() {
        super();

        this.name = "Argon2";
        this.module = "Crypto";
        this.description = "Argon2 is a key derivation function that was selected as the winner of the Password Hashing Competition in July 2015. It was designed by Alex Biryukov, Daniel Dinu, and Dmitry Khovratovich from the University of Luxembourg.";
        this.infoURL = "https://wikipedia.org/wiki/Argon2";
        this.inputType = "string";
        this.outputType = "string";
        this.args = [
            {
                "name": "Passphrase",
                "type": "toggleString",
                "value": "",
                "toggleValues": ["UTF8", "Latin1", "Hex", "Base64"]
            },
            {
                "name": "Key size",
                "type": "number",
                "value": 128
            },
            {
                "name": "Iterations",
                "type": "number",
                "value": 1
            },
            {
                "name": "Salt",
                "type": "toggleString",
                "value": "",
                "toggleValues": ["Hex", "UTF8", "Latin1", "Base64"]
            }
        ];
    }

    /**
     * @param {ArrayBuffer} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        // console.log(argon2);
        if (isWorkerEnvironment()) self.sendStatusMessage("Loading Argon2...");
        return new Promise((resolve, reject) => {
            import("argon2-browser").then(argon2 => {
                if (isWorkerEnvironment()) self.sendStatusMessage("Argon Establishing...");
                console.log(argon2);
            })
        });
        
        // // console.log();
        //     // argon2().then(m => console.log(m.instance.exports))
        //     // console.log(argon2);
        //     const passphrase = Utils.convertToByteString(args[0].string, args[0].option);
        //     const keySize = args[1];
        //     const iterations = args[2];
        //     const hasher = args[3];
        //     const salt = Utils.convertToByteString(args[4].string, args[4].option);
    
        //     // import('argon2-browser/dist/argon2.wasm').then(({default: _}) => {
        //     //     console.log(_);
        //     //     // ({pass: 'swag', salt: 'swag' })
        //     // }).then((result) => {
        //     //     return forge.util.bytesToHex(result.hash);
        //     // })
        //     // .catch(err => {
        //     //     throw new OperationError("Test");
        //     // });
    
       
       
    }

}

export default Argon2;
