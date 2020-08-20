import Foundation
import Capacitor
import PushNotifications

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(PusherBeams)
public class PusherBeams: CAPPlugin {

    let beamUrl = "test.com"
    let beamsClient = PushNotifications.shared
    
    @objc func addDeviceInterest(_ call: CAPPluginCall) {
        let interest = call.getString("interest") ?? ""
        
        try? self.beamsClient.addDeviceInterest(interest: interest)
        call.success([
            "interest": interest
        ])
    }
    
    @objc func removeDeviceInterest(_ call: CAPPluginCall) {
        let interest = call.getString("interest") ?? ""
        try? self.beamsClient.removeDeviceInterest(interest: interest)
        call.success()
    }
    
    @objc func getDeviceInterests(_ call: CAPPluginCall) {
        let interests: [String] = self.beamsClient.getDeviceInterests() ?? []
        call.success([
            "interests": interests
        ])
    }
    
    @objc func setDeviceInterests(_ call: CAPPluginCall) {
        guard let interests = call.options["interests"] as? [String] else {
            call.reject("Interests must be provided in array type")
            return
        }
        
        try? self.beamsClient.setDeviceInterests(interests: interests)
        call.success([
            "interests": interests
        ])
    }
    
    @objc func clearDeviceInterests(_ call: CAPPluginCall) {
        try? self.beamsClient.clearDeviceInterests()
        print("Cleared device interests!")
        call.success()
    }
    
    @objc func setUserID(_ call: CAPPluginCall) {
        let userId = call.getString("userId") ?? ""
        let tokenProvider = BeamsTokenProvider(authURL: self.beamUrl) { () -> AuthData in
          let sessionToken = "SESSION-TOKEN"
          let headers = ["Authorization": "Bearer \(sessionToken)"] // Headers your auth endpoint needs
          let queryParams: [String: String] = [:] // URL query params your auth endpoint needs
          return AuthData(headers: headers, queryParams: queryParams)
        }

        self.beamsClient.setUserId(userId, tokenProvider: tokenProvider, completion: { error in
          guard error == nil else {
              print(error.debugDescription)
              return
          }

          print("Successfully authenticated with Pusher Beams")
          call.success([
            "associatedUser": userId
          ])
        })
    }
    
    @objc func clearAllState(_ call: CAPPluginCall) {
        self.beamsClient.clearAllState {
          print("state cleared")
        }
        call.success()
    }

    @objc func stop() {
        self.beamclient.stop()
        call.success()
    }
    
    @objc func goToAppSetting(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        
        let alertController = UIAlertController (
        	title: "Push Notification", 
        	message: "Allow push notification permission on settings?", 
        	preferredStyle: .alert
        )

        let settingsAction = UIAlertAction(title: "Settings", style: .default) { (_) -> Void in

            guard let settingsUrl = URL(string: UIApplication.openSettingsURLString) else {
                return
            }

            if UIApplication.shared.canOpenURL(settingsUrl) {
                UIApplication.shared.open(settingsUrl, completionHandler: { (success) in
                    print("Settings opened: \(success)") // Prints true
                })
            }
        }
        alertController.addAction(settingsAction)
        let cancelAction = UIAlertAction(title: "Cancel", style: .default, handler: nil)
        alertController.addAction(cancelAction)

        DispatchQueue.main.async {
          self.bridge.viewController.present(alertController, animated: true, completion: nil)
        }
        
        call.success([
            "value": value
        ])
    }
}
