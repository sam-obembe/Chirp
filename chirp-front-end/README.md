
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.



* **Run** `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

* **Build**:  Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

* **Running unit tests**: Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

* **Running end-to-end tests**: Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

* **Further help:** To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

***
# ChirpFrontEnd
**About**: This is the front end for a twitter clone, built using Angular, Angular Material and Firebase.

## Pre-requisite:
This application uses firebase for authentication. There needs to be a file called *firebaseConfig.js* in `src/app/Services/firebase`. This file will contain the configuration details for firebase that will allow this app to connect to it. <br>
The configuration settings can be obtained from the firebase developer console and placed in the file as shown below: 
```
const firebaseConfig={
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
}

export default firebaseConfig;
```
***

## Types
* Location: *src/app/Models*
### AuthenticatedUserDetails

**Fields:**
* chirps, type:[]
* followers, type : string[]
* following, type :string[],
* likedChirps, type :[],
* profilePicture, type :string,
* userId, type :string,
* userName, type :string


### Chirp
**Fields:**
* userId, type :string,
* chirp, type :string,
* imgUrls, type :string[],
* replying, type :string,


### LoginDetails
* email, type :string,
* password, type :string,


### SearchResults
* users, type :[],
* chirps, type :[]
***
## Services

### 1.  **Authentication Service**
Provides functionality for signing up, login in ,checking authentication and getting the logged in user's details. <br>
**Other Services Injected** : FirebaseConfigService, HttpClient<br>
**Fields**:
* firebase
* userData, type: AuthenticatedUserDetails
* isAuthenticated, type: boolean

**Methods**:
* singup(email,password)
* setUserData()
* login(email,password)
* getUserData()
* checkLoggedIn()
* getIsAuthenticated():boolean
* logout()

### 2. **FirebaseConfigService**
Initializes firebase using the configuration in firebaseConfig.js .
**Fields**:
* firebase
* firebaseConfig

**Methods**
* getConfig()
* getFirebase()


### 3 .**Interactions Service**
**Other Services Injected**: AuthenticationService, MyHttpService
**Fields**
* searchResults ; initialised as a Subject
* chirpFeed ; initalised as a Subject
* searchResultsObservable: exposes searchResults as an observable
* chirpFeedObservable: exposes chirpFeed as an observable

**Methods**
* `getSearchResults():Observable` ; returns `searchResultsObservable`
* `setSearchResults(results:{users,chirps}):void` : sets the search results to be data passed in in the argument which is a hashmap/dictionary with properties *users* and *chirps*.
* `postChirp(chirp:string):void` : uses the postChrip method from MyHttpService to post a chirp
* `getFeed():Observable`: Returns `chirpFeedObservable`
* `setFeed()`
* `checkIfFollowing(userId:string)`: Uses the userId of another user, passes in as an argument to check if that user is following the currently logged in user. 
* `checkIfFollower(userId:string)`: same as above but checks if the currently logged in user is a follower of the user passed in as an argument.


### 4  .  My Http Service
**Other Services Injected**: HttpClient

**Methods**
* `registerUserInDB(userId:string,userName:string)`
* `loginUser(userId)`
* `search(searchString)`
* `postChirp`
* `getChirpsForFeed()`
* `getChirpsByUser()`

***

## Components
### 1 . **Chirp box**

**Services Injected**: InteractionsService
**Fields**
* chirpBox : A formControl which accepts user input

**Methods**
* `postChirp()`: passes the user input to `InteractionsService.postChipr(chirp)` and resets the input field. 


### 2. **Chirp feed**
**Inputs**
* chirps : accepts an array of chirps as an input and passes that to the chirpFeed field. 


### 3. **Chirp tile**
**Inputs**
* chirpData: accepts chirp data and stores it in the "chirp" field. 

### 4. **Login form**
**Outputs**
* loginCredentials: 

**Fields**
* loginForm: a formGroup
### Profile Header
### Searchbox
### Side Nav
### User tile

***

## Pages
### Home Page
### Landing Page
### Profile Page
### Search Page
### Signup page