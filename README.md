Pre-Requisite Skills for Angular
---------------------------------------------------------

    HTML 5              Text based eleemtns, form elements, list, tables, from validations,
                        html 5 api - WebStorage, Web Workers, GeoLocation ..etc.    
    CSAS 3              Selectors and Box Modeling and other CSS Properties
    Javascript (ES 6)
        Standard Javascript Objects
        Function, closures, Call Back, Arrow Function
        this keyword
        OOP Class, Object, Inheretence, Prototype
        Arrays and Array Prototype functions
        Asynchronous Programming like async and await, Promise, setInterval, setTimeout
        ES Modules

Angular
---------------------------------------------------------

    is a typescript based SPA framework.

    SPA - Single Page Application.

    Server                              <-----------------------REQ -- Client
        app-bundle          
        (index.html + *.js + *.css)     ----aoo-bundle (RESP---------->  index.html is loaded along with
                                                                    the assosiated JS.

                                                                    Any links, Form Submitions or Events are handled
                                                                    on the client only.

                                                                    The events handling, form submition or links will
                                                                    invoke one or more javascript functions and
                                                                    those will generate new html content and it replaces
                                                                    the older content on the index.html

                                                                    as a result no page unload or reload is needed.

        rest-api        <-----------json/xml------------------>     sharing data from/to the client


    Lab Setup
    ---------------------------------------------------------
        VSCode          IDE
        NodeJS          dev-env                                         https://nodejs.org                      node --version
        Angular CLI     project strucutre management / Build Env        npm -g install @angular/cli@13.3.3      ng version
        Chrome          executing

    Angular CLI
    ---------------------------------------------------------
        Angular CLI - Commanbd Line Interface is a frotier of many tools,
        using which we can create and manage the angular application structure and
        also trigger operations like building, executing, testing and so on .


        ng new project-name

        project-name\> ng serve                     compiles, and builds a bundle and launches a dev-server on 4300 port.
        project-name\> ng serve --port 9999 -o      compiles, and builds a bundle and launches a dev-server on 9999 port.
        project-name\> ng build                     compiles, and builds a bundle and is stroed in 'dist' folder.
        project-name\> ng test                      compile, build and execute the test cases.


    Angular Archetecture
    -----------------------------------------------------------

        An angular application is made up of a variety of resources.
        Each angular resource is a typescript class.
        Each class is marked witha decorator to identify its role.
        Each decorator is given a json object. And that is called meta-data which offers the resource config.

        Modules
                @NgMNodule({
                    declarations:[],
                    exports:[],
                    imports:[],
                    providers:[],
                    bootstrap:[]
                })
                class SalesModule{}

        Component Directives
                @Component({
                    selector:'',
                    templateUrl:'',
                    styleUrls:[]
                })
                class DashboardComponent {}

        Directives
                @Directive({
                    selector:''
                })
                class FastMovingStock {}

        Services
                @Injectable({
                    providedIn:'root'
                })
                class SalesService {}

        Pipes
                @Pipe({
                    name:''
                })
                class ToWordsPipe {}

        Guards  
                @Injectable()
                class AdminUsersGuard {}

        Interceptors
                @Injectable()
                class JwtTokenInterceptor {}
         ...etc.,



                                         

    