package com.red_folder.phonegap.plugin.backgroundservice.services;

import android.util.Log;

import com.red_folder.phonegap.plugin.backgroundservice.BackgroundService;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * Created by xumakUX on 5/21/14.
 */
public class MyService1 extends BackgroundService {

    @Override
    protected JSONObject initialiseLatestResult() {
        JSONObject result = new JSONObject();
        return result;
    }

    @Override
    protected JSONObject doWork() {
        JSONObject result = new JSONObject();
        try {
            Log.d("MyService1", "MyService1, doWork call");
            result.put("message", "MyService1, doWork call");
        }
        catch (JSONException e) {
            Log.d("MyService1", "MyService1, JSONException on doWork");
        }
        return result;
    }

    @Override
    protected JSONObject getConfig() {
        JSONObject conf = new JSONObject();
        return  conf;
    }

    @Override
    protected void setConfig(JSONObject config){

    }
}
