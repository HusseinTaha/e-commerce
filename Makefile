run: web
	
web:
	(cd www; cors-proxy-cli elmst localhost 80)

android: platformAndroid arun
	
arun: 
	cordova run android

platformAndroid:
	cordova platform add android

ios: platformiOS
	cordova run ios

platformiOS:
	cordova platform add ios
