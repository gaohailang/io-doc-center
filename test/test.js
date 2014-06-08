var should = require('should');
var expect = require('expect.js');
var assert = require('assert');
var request = require('supertest');

var fs = require('fs');
var path = require('path');

describe('Test Transfer Layer', function() {
    var proxyUrl = 'http://localhost:8000';
    var configSrc = '../server/public/data/apiconfig.json';
    var endpointDir = '../server/public/data';

    var configData = require(configSrc);
    var newConfig = require('./fixtures/app-conf');
    var newName = Object.keys(newConfig)[0];

    var mockEndpontData = require('./fixtures/endpoints');

    it.skip('should check json syntax', {

    });

    it('should read apiconfig.json, and add a new item, and save', function() {

        configData[newName] = newConfig;
        console.log(configData);

        fs.writeFile(configSrc, JSON.stringify(configData, null, 4), function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("JSON saved to " + configSrc);
            }
            expect(err).to.not.be.ok();
        });
    });

    it.skip('should reload the server', function() {
        // after config update, reload express server
    });

    it('should accept a resource json, put it in data directory', function() {
        // make sure resources json save to dir with name "configDataName"

        console.log(mockEndpontData);
        fs.writeFile(path.join(endpointDir, newName + '.js'), JSON.stringify(mockEndpontData, null, 4), function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("JSON saved to " + path.join(endpointDir, newName + '.js'));
            }
            expect(err).to.not.be.ok();
            // true.should.equal(true);
        });

    });
});