package be.bytescape.windowsoftinputmode;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "WindowSoftInputModeManager")
public class WindowSoftInputModeManagerPlugin extends Plugin {

@PluginMethod
    public void setMode(PluginCall call) {
        String mode = call.getString("mode");

        Activity activity = getActivity();
        if (mode == null || activity == null) {
            call.reject("Invalid mode or activity");
            return;
        }

        int flag;
        switch (mode) {
            case "adjustResize":
                flag = WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE;
                break;
            case "adjustPan":
                flag = WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN;
                break;
            case "adjustNothing":
                flag = WindowManager.LayoutParams.SOFT_INPUT_ADJUST_NOTHING;
                break;
            default:
                call.reject("Unknown mode: " + mode);
                return;
        }

        activity.runOnUiThread(() -> {
            activity.getWindow().setSoftInputMode(flag);
            call.resolve();
        });
    }
}
