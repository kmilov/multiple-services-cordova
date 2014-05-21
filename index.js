/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {

    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

        var myService1, myService2;

        // Services
        var serviceName1 = 'com.red_folder.phonegap.plugin.backgroundservice.services.MyService1';
        var serviceName2 = 'com.red_folder.phonegap.plugin.backgroundservice.services.MyService2';
        var factory = cordova.require('com.red_folder.phonegap.plugin.backgroundservice.BackgroundService');


        myService1 = factory.create(serviceName1);
        myService2 = factory.create(serviceName2);

        startService1();
        startService2();

        // My service 1 logic ---------
        function startService1(){
            alert('Try start myService1');
            myService1.getStatus(function(data){
                // Start Service
                if (data.ServiceRunning) {

                    enableTimer1(data);
                } else {
                    myService1.startService(function(r){
                        enableTimer1(r)
                    }, function(e){
                        alert('Eror starting myService1 service');
                    });
                }
            }, function() {
                alert('Error getting myService1 status');
            });
        }

        function enableTimer1(data) {
            if (data.TimerEnabled) {
                registerForUpdates1(data);
            } else {
                myService1.enableTimer(5000, function(r){
                    registerForUpdates1(r)
                }, function(e){
                    alert('Error enabling timer on service myService1');
                });
            }
        }

        function registerForUpdates1(data) {
            if (!data.RegisteredForUpdates) {
                myService1.registerForUpdates(function(r){
                    if (r.LatestResult != null) {
                    try {
                            console.log(JSON.stringify(r.LatestResult));
                        } 
                        catch (err) {
                        }
                    }
                }, function(e){
                    alert('ERror registering for updates on myService1');
                });
            }
        }

        // My service 2 logic ---------
        function startService2() {
            alert('Try start myService2');
            // Try to initialize the MyService2
            myService2.getStatus(function(data){
                // Start Service
                if (data.ServiceRunning) {
                    enableTimer2(data);
                } else {
                    myService2.startService(function(r){
                        enableTimer2(r)
                    }, function(e){
                        alert('Eror starting myService2 service');
                    });
                }
            },function(){
                alert('Error getting status for MyService2');
            })
        }

        function enableTimer2(data) {
            if (data.TimerEnabled) {
                registerForUpdates2(data);
            } else {
                myService2.enableTimer(5000, function(r){
                    registerForUpdates2(r)
                }, function(e){
                    alert('Error enabling timer on service myService2');
                });
            }
        }

        function registerForUpdates2(data) {
            if (!data.RegisteredForUpdates) {
                myService2.registerForUpdates(function(r){
                    if (r.LatestResult != null) {
                    try {
                            console.log(JSON.stringify(r.LatestResult));
                        } 
                        catch (err) {
                        }
                    }
                }, function(e){
                    alert('ERror registering for updates on myService2');
                });
            }
        }
    }
};
