Test Multiple service with the Cordova Plugin Background Services

Install.

1. Create a new Cordova Project for android

2. Add the Background service plugin to the project with
	cordova plugin add https://github.com/Red-Folder/bgs-core.git

3. Place the MyService Java Classes under the package name package com.red_folder.phonegap.plugin.backgroundservice.services;

4. Activate services on AndroidManifest.xml inside the <application> </applicatoin> tag
	 <service android:name="com.red_folder.phonegap.plugin.backgroundservice.services.MyService1">
        <intent-filter>
            <action android:name="com.red_folder.phonegap.plugin.backgroundservice.services.MyService1" />
        </intent-filter>
    </service>
    <service android:name="com.red_folder.phonegap.plugin.backgroundservice.services.MyService2">
        <intent-filter>
            <action android:name="com.red_folder.phonegap.plugin.backgroundservice.services.MyService2" />
        </intent-filter>
    </service>
5. Place the javascript logic inside the www/index.js file (This file exists for the sample HelloWorld app from Cordova)

6. Check LogCat and search for the tag MyService, you  should see the logs for the MyService1 and MyService2