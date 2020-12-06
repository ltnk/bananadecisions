# com.decisions.banana
Banana decisions app

-> you have to delete the "android" folder before running the following process :

-> When just download the project from github you may need to run:
$ npm install --save-dev @angular-devkit/build-angular
$ brew install gradle

-> then, to see your project in the browser : 
$ ionic serve

-> to run on android studio with capacitor
$ ionic capacitor add android
if error : "Capacitor could not find the web assets directory ...", first:
$ ionic build (you will have a new folder: www)
then re re-run
$ ionic capacitor add android
-> now we have a new android folder that you can open in android studio)

-> we can change the app id in capacitor.config.json at "appId":
it is usually a reverse url.

then :
$ ionic capacitor copy android (will copy the www folder into the native app)
$ ionic capacitor run android (this command is a regroupment of ionic build and ionic capacitor copy android, it will launch automatically android studio)
=> you can now run the app on an emulator or a real device, you will have to change the icons on android studio and the splach screens that were in the previous "android" folder that you deleted.

-> to deploy your app
$ ionic build --prod (angularCLI has to be install globally on your machine)
$ ionic capacitor sync android
$ ionic capacitor sync ios (if you deploy also in ios)
$ ionic capacitor open android
-> android studio will open automatically


